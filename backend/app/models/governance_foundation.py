from datetime import datetime
from typing import Any

from sqlalchemy import DateTime, Enum, ForeignKey, JSON, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin
from app.models.enums import (
    AnalyticsCategory,
    CommunicationChannel,
    DocumentType,
    FoundationStatus,
    GDPRRequestStatus,
    GDPRRequestType,
    MediaType,
    NotificationStatus,
    NotificationType,
    ReportType,
    Visibility,
)


class InternalDocument(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "internal_documents"

    organization_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=False)
    project_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("projects.id"), nullable=True)
    owner_user_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    document_type: Mapped[DocumentType] = mapped_column(Enum(DocumentType), nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)
    storage_path: Mapped[str] = mapped_column(String(500), nullable=False)
    version: Mapped[str] = mapped_column(String(40), default="1.0", nullable=False)


class MediaAsset(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "media_assets"

    organization_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=False)
    owner_user_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    media_type: Mapped[MediaType] = mapped_column(Enum(MediaType), nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)
    storage_path: Mapped[str] = mapped_column(String(500), nullable=False)
    alt_text: Mapped[str | None] = mapped_column(String(255), nullable=True)
    copyright_notes: Mapped[str | None] = mapped_column(Text, nullable=True)


class CommunicationCampaign(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "communication_campaigns"

    organization_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=False)
    created_by_user_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    channel: Mapped[CommunicationChannel] = mapped_column(Enum(CommunicationChannel), nullable=False)
    audience: Mapped[str] = mapped_column(String(180), nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    message_body: Mapped[str] = mapped_column(Text, nullable=False)
    scheduled_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    sent_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)


class InternalNotification(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "internal_notifications"

    recipient_user_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    notification_type: Mapped[NotificationType] = mapped_column(Enum(NotificationType), nullable=False)
    status: Mapped[NotificationStatus] = mapped_column(Enum(NotificationStatus), default=NotificationStatus.QUEUED, nullable=False)
    read_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)


class AnalyticsEvent(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "analytics_events"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    user_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    event_name: Mapped[str] = mapped_column(String(180), nullable=False)
    event_category: Mapped[AnalyticsCategory] = mapped_column(Enum(AnalyticsCategory), nullable=False)
    metadata_json: Mapped[dict[str, Any] | None] = mapped_column("metadata", JSON, nullable=True)
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)


class ReportRecord(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "report_records"

    organization_id: Mapped[UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=False)
    generated_by_user_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    report_type: Mapped[ReportType] = mapped_column(Enum(ReportType), nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    period_start: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    period_end: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    storage_path: Mapped[str] = mapped_column(String(500), nullable=False)


class AuditLogEntry(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "audit_log_entries"

    actor_user_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    action: Mapped[str] = mapped_column(String(120), nullable=False)
    entity_type: Mapped[str] = mapped_column(String(120), nullable=False)
    entity_id: Mapped[str | None] = mapped_column(String(120), nullable=True)
    before_json: Mapped[dict[str, Any] | None] = mapped_column("before", JSON, nullable=True)
    after_json: Mapped[dict[str, Any] | None] = mapped_column("after", JSON, nullable=True)
    ip_address: Mapped[str | None] = mapped_column(String(80), nullable=True)
    user_agent: Mapped[str | None] = mapped_column(String(500), nullable=True)
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)


class GDPRRequestRecord(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "gdpr_request_records"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    handled_by_user_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    data_subject_email: Mapped[str] = mapped_column(String(255), nullable=False)
    request_type: Mapped[GDPRRequestType] = mapped_column(Enum(GDPRRequestType), nullable=False)
    status: Mapped[GDPRRequestStatus] = mapped_column(Enum(GDPRRequestStatus), default=GDPRRequestStatus.RECEIVED, nullable=False)
    requested_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
