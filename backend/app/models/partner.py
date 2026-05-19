from sqlalchemy import Enum, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin
from app.models.enums import PartnerCategory, Visibility


class Partner(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "partners"

    name: Mapped[str] = mapped_column(String(180), nullable=False)
    category: Mapped[PartnerCategory] = mapped_column(Enum(PartnerCategory), nullable=False)
    website: Mapped[str | None] = mapped_column(String(255), nullable=True)
    status: Mapped[str] = mapped_column(String(80), default="prospect", nullable=False)
    logo: Mapped[str | None] = mapped_column(String(255), nullable=True)
    visibility: Mapped[Visibility] = mapped_column(
        Enum(Visibility),
        default=Visibility.PRIVATE,
        nullable=False,
    )
