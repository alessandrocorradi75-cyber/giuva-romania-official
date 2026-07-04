from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.governance_foundation import (
    AnalyticsEvent,
    AuditLogEntry,
    CommunicationCampaign,
    GDPRRequestRecord,
    InternalDocument,
    InternalNotification,
    MediaAsset,
    ReportRecord,
)
from app.models.organization import Organization
from app.models.program import Project
from app.models.user import User
from app.repositories import governance_foundation as repo
from app.schemas.governance_foundation import (
    AnalyticsEventCreate,
    AnalyticsEventUpdate,
    AuditLogEntryCreate,
    AuditLogEntryUpdate,
    CommunicationCampaignCreate,
    CommunicationCampaignUpdate,
    GDPRRequestRecordCreate,
    GDPRRequestRecordUpdate,
    InternalDocumentCreate,
    InternalDocumentUpdate,
    InternalNotificationCreate,
    InternalNotificationUpdate,
    MediaAssetCreate,
    MediaAssetUpdate,
    ReportRecordCreate,
    ReportRecordUpdate,
)


async def _exists(session: AsyncSession, model: type[object], item_id: UUID | None) -> bool:
    if item_id is None:
        return True
    return await session.get(model, item_id) is not None


async def _document_refs_valid(session: AsyncSession, payload: InternalDocumentCreate | InternalDocumentUpdate) -> bool:
    return (
        await _exists(session, Organization, payload.organization_id)
        and await _exists(session, Project, payload.project_id)
        and await _exists(session, User, payload.owner_user_id)
    )


async def list_document_records(session: AsyncSession) -> list[InternalDocument]:
    return await repo.list_documents(session)


async def get_document_record(session: AsyncSession, item_id: UUID) -> InternalDocument | None:
    return await repo.get_document(session, item_id)


async def create_document_record(session: AsyncSession, payload: InternalDocumentCreate) -> InternalDocument | None:
    if not await _document_refs_valid(session, payload):
        return None
    return await repo.create_document(session, payload)


async def update_document_record(session: AsyncSession, item: InternalDocument, payload: InternalDocumentUpdate) -> InternalDocument | None:
    if not await _document_refs_valid(session, payload):
        return None
    return await repo.update_document(session, item, payload)


async def delete_document_record(session: AsyncSession, item: InternalDocument) -> None:
    await repo.delete_document(session, item)


async def _media_refs_valid(session: AsyncSession, payload: MediaAssetCreate | MediaAssetUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _exists(session, User, payload.owner_user_id)


async def list_media_records(session: AsyncSession) -> list[MediaAsset]:
    return await repo.list_media_assets(session)


async def get_media_record(session: AsyncSession, item_id: UUID) -> MediaAsset | None:
    return await repo.get_media_asset(session, item_id)


async def create_media_record(session: AsyncSession, payload: MediaAssetCreate) -> MediaAsset | None:
    if not await _media_refs_valid(session, payload):
        return None
    return await repo.create_media_asset(session, payload)


async def update_media_record(session: AsyncSession, item: MediaAsset, payload: MediaAssetUpdate) -> MediaAsset | None:
    if not await _media_refs_valid(session, payload):
        return None
    return await repo.update_media_asset(session, item, payload)


async def delete_media_record(session: AsyncSession, item: MediaAsset) -> None:
    await repo.delete_media_asset(session, item)


async def _communication_refs_valid(
    session: AsyncSession,
    payload: CommunicationCampaignCreate | CommunicationCampaignUpdate,
) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _exists(session, User, payload.created_by_user_id)


async def list_communication_records(session: AsyncSession) -> list[CommunicationCampaign]:
    return await repo.list_communication_campaigns(session)


async def get_communication_record(session: AsyncSession, item_id: UUID) -> CommunicationCampaign | None:
    return await repo.get_communication_campaign(session, item_id)


async def create_communication_record(session: AsyncSession, payload: CommunicationCampaignCreate) -> CommunicationCampaign | None:
    if not await _communication_refs_valid(session, payload):
        return None
    return await repo.create_communication_campaign(session, payload)


async def update_communication_record(
    session: AsyncSession,
    item: CommunicationCampaign,
    payload: CommunicationCampaignUpdate,
) -> CommunicationCampaign | None:
    if not await _communication_refs_valid(session, payload):
        return None
    return await repo.update_communication_campaign(session, item, payload)


async def delete_communication_record(session: AsyncSession, item: CommunicationCampaign) -> None:
    await repo.delete_communication_campaign(session, item)


async def _notification_refs_valid(session: AsyncSession, payload: InternalNotificationCreate | InternalNotificationUpdate) -> bool:
    return await _exists(session, User, payload.recipient_user_id) and await _exists(session, Organization, payload.organization_id)


async def list_notification_records(session: AsyncSession) -> list[InternalNotification]:
    return await repo.list_notifications(session)


async def list_my_notification_records(session: AsyncSession, user_id: UUID) -> list[InternalNotification]:
    return await repo.list_notifications_for_user(session, user_id)


async def get_notification_record(session: AsyncSession, item_id: UUID) -> InternalNotification | None:
    return await repo.get_notification(session, item_id)


async def create_notification_record(session: AsyncSession, payload: InternalNotificationCreate) -> InternalNotification | None:
    if not await _notification_refs_valid(session, payload):
        return None
    return await repo.create_notification(session, payload)


async def update_notification_record(
    session: AsyncSession,
    item: InternalNotification,
    payload: InternalNotificationUpdate,
) -> InternalNotification | None:
    if not await _notification_refs_valid(session, payload):
        return None
    return await repo.update_notification(session, item, payload)


async def delete_notification_record(session: AsyncSession, item: InternalNotification) -> None:
    await repo.delete_notification(session, item)


async def _analytics_refs_valid(session: AsyncSession, payload: AnalyticsEventCreate | AnalyticsEventUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _exists(session, User, payload.user_id)


async def list_analytics_records(session: AsyncSession) -> list[AnalyticsEvent]:
    return await repo.list_analytics_events(session)


async def get_analytics_record(session: AsyncSession, item_id: UUID) -> AnalyticsEvent | None:
    return await repo.get_analytics_event(session, item_id)


async def create_analytics_record(session: AsyncSession, payload: AnalyticsEventCreate) -> AnalyticsEvent | None:
    if not await _analytics_refs_valid(session, payload):
        return None
    return await repo.create_analytics_event(session, payload)


async def update_analytics_record(session: AsyncSession, item: AnalyticsEvent, payload: AnalyticsEventUpdate) -> AnalyticsEvent | None:
    if not await _analytics_refs_valid(session, payload):
        return None
    return await repo.update_analytics_event(session, item, payload)


async def delete_analytics_record(session: AsyncSession, item: AnalyticsEvent) -> None:
    await repo.delete_analytics_event(session, item)


async def _report_refs_valid(session: AsyncSession, payload: ReportRecordCreate | ReportRecordUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _exists(session, User, payload.generated_by_user_id)


async def list_report_records(session: AsyncSession) -> list[ReportRecord]:
    return await repo.list_reports(session)


async def get_report_record(session: AsyncSession, item_id: UUID) -> ReportRecord | None:
    return await repo.get_report(session, item_id)


async def create_report_record(session: AsyncSession, payload: ReportRecordCreate) -> ReportRecord | None:
    if not await _report_refs_valid(session, payload):
        return None
    return await repo.create_report(session, payload)


async def update_report_record(session: AsyncSession, item: ReportRecord, payload: ReportRecordUpdate) -> ReportRecord | None:
    if not await _report_refs_valid(session, payload):
        return None
    return await repo.update_report(session, item, payload)


async def delete_report_record(session: AsyncSession, item: ReportRecord) -> None:
    await repo.delete_report(session, item)


async def _audit_refs_valid(session: AsyncSession, payload: AuditLogEntryCreate | AuditLogEntryUpdate) -> bool:
    return await _exists(session, User, payload.actor_user_id) and await _exists(session, Organization, payload.organization_id)


async def list_audit_records(session: AsyncSession) -> list[AuditLogEntry]:
    return await repo.list_audit_logs(session)


async def get_audit_record(session: AsyncSession, item_id: UUID) -> AuditLogEntry | None:
    return await repo.get_audit_log(session, item_id)


async def create_audit_record(session: AsyncSession, payload: AuditLogEntryCreate) -> AuditLogEntry | None:
    if not await _audit_refs_valid(session, payload):
        return None
    return await repo.create_audit_log(session, payload)


async def update_audit_record(session: AsyncSession, item: AuditLogEntry, payload: AuditLogEntryUpdate) -> AuditLogEntry | None:
    if not await _audit_refs_valid(session, payload):
        return None
    return await repo.update_audit_log(session, item, payload)


async def delete_audit_record(session: AsyncSession, item: AuditLogEntry) -> None:
    await repo.delete_audit_log(session, item)


async def _gdpr_refs_valid(session: AsyncSession, payload: GDPRRequestRecordCreate | GDPRRequestRecordUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _exists(session, User, payload.handled_by_user_id)


async def list_gdpr_records(session: AsyncSession) -> list[GDPRRequestRecord]:
    return await repo.list_gdpr_requests(session)


async def get_gdpr_record(session: AsyncSession, item_id: UUID) -> GDPRRequestRecord | None:
    return await repo.get_gdpr_request(session, item_id)


async def create_gdpr_record(session: AsyncSession, payload: GDPRRequestRecordCreate) -> GDPRRequestRecord | None:
    if not await _gdpr_refs_valid(session, payload):
        return None
    return await repo.create_gdpr_request(session, payload)


async def update_gdpr_record(session: AsyncSession, item: GDPRRequestRecord, payload: GDPRRequestRecordUpdate) -> GDPRRequestRecord | None:
    if not await _gdpr_refs_valid(session, payload):
        return None
    return await repo.update_gdpr_request(session, item, payload)


async def delete_gdpr_record(session: AsyncSession, item: GDPRRequestRecord) -> None:
    await repo.delete_gdpr_request(session, item)
