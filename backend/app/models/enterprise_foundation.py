from __future__ import annotations

from datetime import date, datetime
from decimal import Decimal

from sqlalchemy import Date, DateTime, Enum, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin
from app.models.enums import (
    CertificationStatus,
    DeliveryMode,
    DonationStatus,
    EventType,
    FoundationStatus,
    MembershipStatus,
    MembershipType,
    TrainingLevel,
    Visibility,
)


class ManagedEvent(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "managed_events"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    program_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("programs.id"), nullable=True)
    project_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("projects.id"), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    event_type: Mapped[EventType] = mapped_column(Enum(EventType), nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.PLANNED, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)
    starts_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    ends_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    country_code: Mapped[str | None] = mapped_column(String(2), nullable=True)
    city: Mapped[str | None] = mapped_column(String(120), nullable=True)
    location: Mapped[str | None] = mapped_column(String(255), nullable=True)
    max_participants: Mapped[int | None] = mapped_column(Integer, nullable=True)


class TrainingModule(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "training_modules"

    owner_organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    program_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("programs.id"), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    category: Mapped[str | None] = mapped_column(String(120), nullable=True)
    level: Mapped[TrainingLevel] = mapped_column(Enum(TrainingLevel), default=TrainingLevel.BASIC, nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    duration_minutes: Mapped[int | None] = mapped_column(Integer, nullable=True)
    delivery_mode: Mapped[DeliveryMode] = mapped_column(Enum(DeliveryMode), default=DeliveryMode.IN_PERSON, nullable=False)


class VolunteerCertification(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "volunteer_certifications"

    volunteer_identity_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("volunteer_identities.id"), nullable=False)
    training_module_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("training_modules.id"), nullable=True)
    issuer_organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    issued_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    expires_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    status: Mapped[CertificationStatus] = mapped_column(
        Enum(CertificationStatus),
        default=CertificationStatus.PENDING,
        nullable=False,
    )


class ManagedPartner(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "managed_partners"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    name: Mapped[str] = mapped_column(String(180), nullable=False)
    partner_type: Mapped[str | None] = mapped_column(String(120), nullable=True)
    country_code: Mapped[str | None] = mapped_column(String(2), nullable=True)
    city: Mapped[str | None] = mapped_column(String(120), nullable=True)
    website: Mapped[str | None] = mapped_column(String(255), nullable=True)
    contact_email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)


class ManagedSponsor(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "managed_sponsors"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    name: Mapped[str] = mapped_column(String(180), nullable=False)
    sponsor_type: Mapped[str | None] = mapped_column(String(120), nullable=True)
    country_code: Mapped[str | None] = mapped_column(String(2), nullable=True)
    city: Mapped[str | None] = mapped_column(String(120), nullable=True)
    website: Mapped[str | None] = mapped_column(String(255), nullable=True)
    contact_email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)


class DonationRecord(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "donation_records"

    organization_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=False)
    project_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("projects.id"), nullable=True)
    donor_name: Mapped[str | None] = mapped_column(String(180), nullable=True)
    donor_email: Mapped[str | None] = mapped_column(String(255), nullable=True)
    amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
    currency: Mapped[str] = mapped_column(String(3), default="EUR", nullable=False)
    status: Mapped[DonationStatus] = mapped_column(Enum(DonationStatus), default=DonationStatus.PLEDGED, nullable=False)
    purpose: Mapped[str | None] = mapped_column(String(255), nullable=True)


class MembershipRecord(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "membership_records"

    user_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    organization_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=False)
    membership_type: Mapped[MembershipType] = mapped_column(Enum(MembershipType), nullable=False)
    status: Mapped[MembershipStatus] = mapped_column(Enum(MembershipStatus), default=MembershipStatus.ACTIVE, nullable=False)
    starts_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    ends_at: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
