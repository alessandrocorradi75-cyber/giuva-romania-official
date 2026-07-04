from typing import TypeVar
from uuid import UUID

from sqlalchemy import select
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

ModelT = TypeVar("ModelT")
PayloadT = TypeVar("PayloadT")


def _apply_updates(instance: ModelT, payload: PayloadT) -> ModelT:
    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(instance, key, value)
    return instance


async def _list(session: AsyncSession, model: type[ModelT], order_field: object) -> list[ModelT]:
    result = await session.execute(select(model).order_by(order_field))
    return list(result.scalars().all())


async def _create(session: AsyncSession, model: type[ModelT], payload: PayloadT) -> ModelT:
    instance = model(**payload.model_dump())
    session.add(instance)
    await session.commit()
    await session.refresh(instance)
    return instance


async def _update(session: AsyncSession, instance: ModelT, payload: PayloadT) -> ModelT:
    _apply_updates(instance, payload)
    await session.commit()
    await session.refresh(instance)
    return instance


async def _delete(session: AsyncSession, instance: object) -> None:
    await session.delete(instance)
    await session.commit()


async def list_documents(session: AsyncSession) -> list[InternalDocument]:
    return await _list(session, InternalDocument, InternalDocument.title)


async def get_document(session: AsyncSession, item_id: UUID) -> InternalDocument | None:
    return await session.get(InternalDocument, item_id)


async def create_document(session: AsyncSession, payload: InternalDocumentCreate) -> InternalDocument:
    return await _create(session, InternalDocument, payload)


async def update_document(session: AsyncSession, item: InternalDocument, payload: InternalDocumentUpdate) -> InternalDocument:
    return await _update(session, item, payload)


async def delete_document(session: AsyncSession, item: InternalDocument) -> None:
    await _delete(session, item)


async def list_media_assets(session: AsyncSession) -> list[MediaAsset]:
    return await _list(session, MediaAsset, MediaAsset.title)


async def get_media_asset(session: AsyncSession, item_id: UUID) -> MediaAsset | None:
    return await session.get(MediaAsset, item_id)


async def create_media_asset(session: AsyncSession, payload: MediaAssetCreate) -> MediaAsset:
    return await _create(session, MediaAsset, payload)


async def update_media_asset(session: AsyncSession, item: MediaAsset, payload: MediaAssetUpdate) -> MediaAsset:
    return await _update(session, item, payload)


async def delete_media_asset(session: AsyncSession, item: MediaAsset) -> None:
    await _delete(session, item)


async def list_communication_campaigns(session: AsyncSession) -> list[CommunicationCampaign]:
    return await _list(session, CommunicationCampaign, CommunicationCampaign.created_at.desc())


async def get_communication_campaign(session: AsyncSession, item_id: UUID) -> CommunicationCampaign | None:
    return await session.get(CommunicationCampaign, item_id)


async def create_communication_campaign(session: AsyncSession, payload: CommunicationCampaignCreate) -> CommunicationCampaign:
    return await _create(session, CommunicationCampaign, payload)


async def update_communication_campaign(
    session: AsyncSession,
    item: CommunicationCampaign,
    payload: CommunicationCampaignUpdate,
) -> CommunicationCampaign:
    return await _update(session, item, payload)


async def delete_communication_campaign(session: AsyncSession, item: CommunicationCampaign) -> None:
    await _delete(session, item)


async def list_notifications(session: AsyncSession) -> list[InternalNotification]:
    return await _list(session, InternalNotification, InternalNotification.created_at.desc())


async def list_notifications_for_user(session: AsyncSession, user_id: UUID) -> list[InternalNotification]:
    result = await session.execute(
        select(InternalNotification)
        .where(InternalNotification.recipient_user_id == user_id)
        .order_by(InternalNotification.created_at.desc())
    )
    return list(result.scalars().all())


async def get_notification(session: AsyncSession, item_id: UUID) -> InternalNotification | None:
    return await session.get(InternalNotification, item_id)


async def create_notification(session: AsyncSession, payload: InternalNotificationCreate) -> InternalNotification:
    return await _create(session, InternalNotification, payload)


async def update_notification(
    session: AsyncSession,
    item: InternalNotification,
    payload: InternalNotificationUpdate,
) -> InternalNotification:
    return await _update(session, item, payload)


async def delete_notification(session: AsyncSession, item: InternalNotification) -> None:
    await _delete(session, item)


async def list_analytics_events(session: AsyncSession) -> list[AnalyticsEvent]:
    return await _list(session, AnalyticsEvent, AnalyticsEvent.occurred_at.desc())


async def get_analytics_event(session: AsyncSession, item_id: UUID) -> AnalyticsEvent | None:
    return await session.get(AnalyticsEvent, item_id)


async def create_analytics_event(session: AsyncSession, payload: AnalyticsEventCreate) -> AnalyticsEvent:
    return await _create(session, AnalyticsEvent, payload)


async def update_analytics_event(session: AsyncSession, item: AnalyticsEvent, payload: AnalyticsEventUpdate) -> AnalyticsEvent:
    return await _update(session, item, payload)


async def delete_analytics_event(session: AsyncSession, item: AnalyticsEvent) -> None:
    await _delete(session, item)


async def list_reports(session: AsyncSession) -> list[ReportRecord]:
    return await _list(session, ReportRecord, ReportRecord.created_at.desc())


async def get_report(session: AsyncSession, item_id: UUID) -> ReportRecord | None:
    return await session.get(ReportRecord, item_id)


async def create_report(session: AsyncSession, payload: ReportRecordCreate) -> ReportRecord:
    return await _create(session, ReportRecord, payload)


async def update_report(session: AsyncSession, item: ReportRecord, payload: ReportRecordUpdate) -> ReportRecord:
    return await _update(session, item, payload)


async def delete_report(session: AsyncSession, item: ReportRecord) -> None:
    await _delete(session, item)


async def list_audit_logs(session: AsyncSession) -> list[AuditLogEntry]:
    return await _list(session, AuditLogEntry, AuditLogEntry.occurred_at.desc())


async def get_audit_log(session: AsyncSession, item_id: UUID) -> AuditLogEntry | None:
    return await session.get(AuditLogEntry, item_id)


async def create_audit_log(session: AsyncSession, payload: AuditLogEntryCreate) -> AuditLogEntry:
    return await _create(session, AuditLogEntry, payload)


async def update_audit_log(session: AsyncSession, item: AuditLogEntry, payload: AuditLogEntryUpdate) -> AuditLogEntry:
    return await _update(session, item, payload)


async def delete_audit_log(session: AsyncSession, item: AuditLogEntry) -> None:
    await _delete(session, item)


async def list_gdpr_requests(session: AsyncSession) -> list[GDPRRequestRecord]:
    return await _list(session, GDPRRequestRecord, GDPRRequestRecord.requested_at.desc())


async def get_gdpr_request(session: AsyncSession, item_id: UUID) -> GDPRRequestRecord | None:
    return await session.get(GDPRRequestRecord, item_id)


async def create_gdpr_request(session: AsyncSession, payload: GDPRRequestRecordCreate) -> GDPRRequestRecord:
    return await _create(session, GDPRRequestRecord, payload)


async def update_gdpr_request(session: AsyncSession, item: GDPRRequestRecord, payload: GDPRRequestRecordUpdate) -> GDPRRequestRecord:
    return await _update(session, item, payload)


async def delete_gdpr_request(session: AsyncSession, item: GDPRRequestRecord) -> None:
    await _delete(session, item)
