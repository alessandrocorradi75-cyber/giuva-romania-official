from datetime import datetime
from typing import Any
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field

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
from app.schemas.common import Timestamped


class InternalDocumentBase(BaseModel):
    organization_id: UUID
    project_id: UUID | None = None
    owner_user_id: UUID
    title: str = Field(min_length=2, max_length=180)
    description: str | None = None
    document_type: DocumentType
    status: FoundationStatus = FoundationStatus.DRAFT
    visibility: Visibility = Visibility.PRIVATE
    storage_path: str = Field(min_length=1, max_length=500)
    version: str = Field(default="1.0", min_length=1, max_length=40)


class InternalDocumentCreate(InternalDocumentBase):
    pass


class InternalDocumentUpdate(BaseModel):
    organization_id: UUID | None = None
    project_id: UUID | None = None
    owner_user_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    description: str | None = None
    document_type: DocumentType | None = None
    status: FoundationStatus | None = None
    visibility: Visibility | None = None
    storage_path: str | None = Field(default=None, min_length=1, max_length=500)
    version: str | None = Field(default=None, min_length=1, max_length=40)


class InternalDocumentRead(Timestamped, InternalDocumentBase):
    pass


class MediaAssetBase(BaseModel):
    organization_id: UUID
    owner_user_id: UUID
    title: str = Field(min_length=2, max_length=180)
    description: str | None = None
    media_type: MediaType
    status: FoundationStatus = FoundationStatus.DRAFT
    visibility: Visibility = Visibility.PRIVATE
    storage_path: str = Field(min_length=1, max_length=500)
    alt_text: str | None = Field(default=None, max_length=255)
    copyright_notes: str | None = None


class MediaAssetCreate(MediaAssetBase):
    pass


class MediaAssetUpdate(BaseModel):
    organization_id: UUID | None = None
    owner_user_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    description: str | None = None
    media_type: MediaType | None = None
    status: FoundationStatus | None = None
    visibility: Visibility | None = None
    storage_path: str | None = Field(default=None, min_length=1, max_length=500)
    alt_text: str | None = Field(default=None, max_length=255)
    copyright_notes: str | None = None


class MediaAssetRead(Timestamped, MediaAssetBase):
    pass


class CommunicationCampaignBase(BaseModel):
    organization_id: UUID
    created_by_user_id: UUID
    title: str = Field(min_length=2, max_length=180)
    channel: CommunicationChannel
    audience: str = Field(min_length=2, max_length=180)
    status: FoundationStatus = FoundationStatus.DRAFT
    message_body: str = Field(min_length=1)
    scheduled_at: datetime | None = None
    sent_at: datetime | None = None


class CommunicationCampaignCreate(CommunicationCampaignBase):
    pass


class CommunicationCampaignUpdate(BaseModel):
    organization_id: UUID | None = None
    created_by_user_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    channel: CommunicationChannel | None = None
    audience: str | None = Field(default=None, min_length=2, max_length=180)
    status: FoundationStatus | None = None
    message_body: str | None = Field(default=None, min_length=1)
    scheduled_at: datetime | None = None
    sent_at: datetime | None = None


class CommunicationCampaignRead(Timestamped, CommunicationCampaignBase):
    pass


class InternalNotificationBase(BaseModel):
    recipient_user_id: UUID
    organization_id: UUID | None = None
    title: str = Field(min_length=2, max_length=180)
    message: str = Field(min_length=1)
    notification_type: NotificationType
    status: NotificationStatus = NotificationStatus.QUEUED
    read_at: datetime | None = None


class InternalNotificationCreate(InternalNotificationBase):
    pass


class InternalNotificationUpdate(BaseModel):
    recipient_user_id: UUID | None = None
    organization_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    message: str | None = Field(default=None, min_length=1)
    notification_type: NotificationType | None = None
    status: NotificationStatus | None = None
    read_at: datetime | None = None


class InternalNotificationRead(Timestamped, InternalNotificationBase):
    pass


class AnalyticsEventBase(BaseModel):
    organization_id: UUID | None = None
    user_id: UUID | None = None
    event_name: str = Field(min_length=2, max_length=180)
    event_category: AnalyticsCategory
    metadata_json: dict[str, Any] | None = None
    occurred_at: datetime


class AnalyticsEventCreate(AnalyticsEventBase):
    pass


class AnalyticsEventUpdate(BaseModel):
    organization_id: UUID | None = None
    user_id: UUID | None = None
    event_name: str | None = Field(default=None, min_length=2, max_length=180)
    event_category: AnalyticsCategory | None = None
    metadata_json: dict[str, Any] | None = None
    occurred_at: datetime | None = None


class AnalyticsEventRead(Timestamped, AnalyticsEventBase):
    pass


class ReportRecordBase(BaseModel):
    organization_id: UUID
    generated_by_user_id: UUID | None = None
    title: str = Field(min_length=2, max_length=180)
    report_type: ReportType
    status: FoundationStatus = FoundationStatus.DRAFT
    period_start: datetime
    period_end: datetime
    storage_path: str = Field(min_length=1, max_length=500)


class ReportRecordCreate(ReportRecordBase):
    pass


class ReportRecordUpdate(BaseModel):
    organization_id: UUID | None = None
    generated_by_user_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    report_type: ReportType | None = None
    status: FoundationStatus | None = None
    period_start: datetime | None = None
    period_end: datetime | None = None
    storage_path: str | None = Field(default=None, min_length=1, max_length=500)


class ReportRecordRead(Timestamped, ReportRecordBase):
    pass


class AuditLogEntryBase(BaseModel):
    actor_user_id: UUID | None = None
    organization_id: UUID | None = None
    action: str = Field(min_length=2, max_length=120)
    entity_type: str = Field(min_length=2, max_length=120)
    entity_id: str | None = Field(default=None, max_length=120)
    before_json: dict[str, Any] | None = None
    after_json: dict[str, Any] | None = None
    ip_address: str | None = Field(default=None, max_length=80)
    user_agent: str | None = Field(default=None, max_length=500)
    occurred_at: datetime


class AuditLogEntryCreate(AuditLogEntryBase):
    pass


class AuditLogEntryUpdate(BaseModel):
    actor_user_id: UUID | None = None
    organization_id: UUID | None = None
    action: str | None = Field(default=None, min_length=2, max_length=120)
    entity_type: str | None = Field(default=None, min_length=2, max_length=120)
    entity_id: str | None = Field(default=None, max_length=120)
    before_json: dict[str, Any] | None = None
    after_json: dict[str, Any] | None = None
    ip_address: str | None = Field(default=None, max_length=80)
    user_agent: str | None = Field(default=None, max_length=500)
    occurred_at: datetime | None = None


class AuditLogEntryRead(Timestamped, AuditLogEntryBase):
    pass


class GDPRRequestRecordBase(BaseModel):
    organization_id: UUID | None = None
    handled_by_user_id: UUID | None = None
    data_subject_email: EmailStr
    request_type: GDPRRequestType
    status: GDPRRequestStatus = GDPRRequestStatus.RECEIVED
    requested_at: datetime
    completed_at: datetime | None = None
    notes: str | None = None


class GDPRRequestRecordCreate(GDPRRequestRecordBase):
    pass


class GDPRRequestRecordUpdate(BaseModel):
    organization_id: UUID | None = None
    handled_by_user_id: UUID | None = None
    data_subject_email: EmailStr | None = None
    request_type: GDPRRequestType | None = None
    status: GDPRRequestStatus | None = None
    requested_at: datetime | None = None
    completed_at: datetime | None = None
    notes: str | None = None


class GDPRRequestRecordRead(Timestamped, GDPRRequestRecordBase):
    pass
