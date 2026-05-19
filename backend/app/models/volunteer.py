from datetime import date, datetime

from sqlalchemy import Date, DateTime, Enum, ForeignKey, Integer, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin
from app.models.enums import VolunteerStatus


class Volunteer(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "volunteers"

    user_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    name: Mapped[str] = mapped_column(String(180), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    phone: Mapped[str | None] = mapped_column(String(40), nullable=True)
    city: Mapped[str | None] = mapped_column(String(120), nullable=True)
    status: Mapped[VolunteerStatus] = mapped_column(
        Enum(VolunteerStatus),
        default=VolunteerStatus.APPLIED,
        nullable=False,
    )
    training_level: Mapped[str | None] = mapped_column(String(120), nullable=True)
    qr_code: Mapped[str | None] = mapped_column(String(255), unique=True, nullable=True)
    joined_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)


class Training(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "trainings"

    title: Mapped[str] = mapped_column(String(180), nullable=False)
    provider: Mapped[str | None] = mapped_column(String(180), nullable=True)
    date: Mapped[date | None] = mapped_column(Date, nullable=True)
    certificate: Mapped[str | None] = mapped_column(String(255), nullable=True)
    expiration: Mapped[date | None] = mapped_column(Date, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)


class Event(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "events"

    title: Mapped[str] = mapped_column(String(180), nullable=False)
    location: Mapped[str | None] = mapped_column(String(180), nullable=True)
    date: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    participants: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
