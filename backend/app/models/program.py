from __future__ import annotations

from datetime import date
from decimal import Decimal

from sqlalchemy import Date, Enum, ForeignKey, Numeric, String, Text, UniqueConstraint
from sqlalchemy.dialects.postgresql import ARRAY, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin
from app.models.enums import ParticipationStatus, ProgramStatus, ProjectStatus, Visibility


class Program(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "programs"

    owner_organization_id: Mapped[UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("organizations.id"),
        nullable=True,
    )
    code: Mapped[str] = mapped_column(String(80), unique=True, index=True, nullable=False)
    name: Mapped[str] = mapped_column(String(180), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[ProgramStatus] = mapped_column(Enum(ProgramStatus), default=ProgramStatus.DRAFT, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)
    country_availability: Mapped[list[str]] = mapped_column(ARRAY(String(2)), default=list, nullable=False)

    disciplines: Mapped[list[Discipline]] = relationship("Discipline", back_populates="program")
    projects: Mapped[list[Project]] = relationship("Project", back_populates="program")


class Discipline(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "disciplines"
    __table_args__ = (UniqueConstraint("program_id", "code", name="uq_disciplines_program_code"),)

    program_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("programs.id"), nullable=False)
    owner_organization_id: Mapped[UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("organizations.id"),
        nullable=True,
    )
    code: Mapped[str] = mapped_column(String(80), nullable=False)
    name: Mapped[str] = mapped_column(String(180), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[ProgramStatus] = mapped_column(Enum(ProgramStatus), default=ProgramStatus.DRAFT, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)
    country_availability: Mapped[list[str]] = mapped_column(ARRAY(String(2)), default=list, nullable=False)

    program: Mapped[Program] = relationship("Program", back_populates="disciplines")


class Project(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "projects"

    program_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("programs.id"), nullable=False)
    organization_id: Mapped[UUID | None] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("organizations.id"),
        nullable=True,
    )
    code: Mapped[str] = mapped_column(String(80), unique=True, index=True, nullable=False)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[ProjectStatus] = mapped_column(Enum(ProjectStatus), default=ProjectStatus.DRAFT, nullable=False)
    starts_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    ends_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    budget: Mapped[Decimal | None] = mapped_column(Numeric(12, 2), nullable=True)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)
    country_code: Mapped[str | None] = mapped_column(String(2), nullable=True)
    city: Mapped[str | None] = mapped_column(String(120), nullable=True)

    program: Mapped[Program] = relationship("Program", back_populates="projects")
    participants: Mapped[list[ProjectParticipation]] = relationship("ProjectParticipation", back_populates="project")


class ProjectParticipation(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "project_participations"
    __table_args__ = (
        UniqueConstraint("project_id", "volunteer_identity_id", name="uq_project_participations_project_volunteer"),
    )

    project_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("projects.id"), nullable=False)
    volunteer_identity_id: Mapped[UUID] = mapped_column(
        UUID(as_uuid=True),
        ForeignKey("volunteer_identities.id"),
        nullable=False,
    )
    role: Mapped[str] = mapped_column(String(120), nullable=False)
    starts_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    ends_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    status: Mapped[ParticipationStatus] = mapped_column(
        Enum(ParticipationStatus),
        default=ParticipationStatus.ACTIVE,
        nullable=False,
    )

    project: Mapped[Project] = relationship("Project", back_populates="participants")
