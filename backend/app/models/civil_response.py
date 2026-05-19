from datetime import datetime

from sqlalchemy import DateTime, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class PreparednessResource(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "preparedness_resources"

    title: Mapped[str] = mapped_column(String(180), nullable=False)
    category: Mapped[str] = mapped_column(String(120), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    published_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)


class TrainingCalendarItem(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "training_calendar_items"

    title: Mapped[str] = mapped_column(String(180), nullable=False)
    provider: Mapped[str | None] = mapped_column(String(180), nullable=True)
    audience: Mapped[str | None] = mapped_column(String(120), nullable=True)
    starts_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    location: Mapped[str | None] = mapped_column(String(180), nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
