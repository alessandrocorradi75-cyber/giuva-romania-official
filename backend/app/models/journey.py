from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, String, Text
from sqlalchemy.dialects.postgresql import ARRAY, UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin


class Story(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "stories"

    title: Mapped[str] = mapped_column(String(180), nullable=False)
    slug: Mapped[str] = mapped_column(String(220), unique=True, index=True, nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    cover_image: Mapped[str | None] = mapped_column(String(255), nullable=True)
    location: Mapped[str | None] = mapped_column(String(180), nullable=True)
    author: Mapped[str | None] = mapped_column(String(180), nullable=True)
    published_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)


class Gallery(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "galleries"

    event: Mapped[str] = mapped_column(String(180), nullable=False)
    story_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("stories.id"), nullable=True)
    images: Mapped[list[str]] = mapped_column(ARRAY(String), default=list, nullable=False)
    captions: Mapped[list[str]] = mapped_column(ARRAY(String), default=list, nullable=False)
