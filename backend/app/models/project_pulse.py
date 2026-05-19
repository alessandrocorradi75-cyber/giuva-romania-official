from decimal import Decimal

from sqlalchemy import Enum, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin
from app.models.enums import CampaignStatus, Visibility


class Campaign(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "campaigns"

    title: Mapped[str] = mapped_column(String(180), nullable=False)
    goal: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    raised: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    status: Mapped[CampaignStatus] = mapped_column(
        Enum(CampaignStatus),
        default=CampaignStatus.DRAFT,
        nullable=False,
    )
    summary: Mapped[str | None] = mapped_column(Text, nullable=True)


class Sponsor(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "sponsors"

    name: Mapped[str] = mapped_column(String(180), nullable=False)
    type: Mapped[str | None] = mapped_column(String(120), nullable=True)
    contribution: Mapped[Decimal] = mapped_column(Numeric(12, 2), default=0, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(
        Enum(Visibility),
        default=Visibility.PRIVATE,
        nullable=False,
    )
    website: Mapped[str | None] = mapped_column(String(255), nullable=True)
