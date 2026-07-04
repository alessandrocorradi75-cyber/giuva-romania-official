from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enums import UserRole
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
from app.models.user import User
from app.schemas.governance_foundation import (
    AnalyticsEventCreate,
    AnalyticsEventRead,
    AnalyticsEventUpdate,
    AuditLogEntryCreate,
    AuditLogEntryRead,
    AuditLogEntryUpdate,
    CommunicationCampaignCreate,
    CommunicationCampaignRead,
    CommunicationCampaignUpdate,
    GDPRRequestRecordCreate,
    GDPRRequestRecordRead,
    GDPRRequestRecordUpdate,
    InternalDocumentCreate,
    InternalDocumentRead,
    InternalDocumentUpdate,
    InternalNotificationCreate,
    InternalNotificationRead,
    InternalNotificationUpdate,
    MediaAssetCreate,
    MediaAssetRead,
    MediaAssetUpdate,
    ReportRecordCreate,
    ReportRecordRead,
    ReportRecordUpdate,
)
from app.security.dependencies import get_current_active_user
from app.security.rbac import require_minimum_role
from app.services import governance_foundation as service

documents_router = APIRouter()
media_router = APIRouter()
communications_router = APIRouter()
notifications_router = APIRouter()
analytics_router = APIRouter()
reports_router = APIRouter()
audit_router = APIRouter()
gdpr_router = APIRouter()


@documents_router.get("/", response_model=list[InternalDocumentRead])
async def read_documents(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[InternalDocument]:
    return await service.list_document_records(session)


@documents_router.post("/", response_model=InternalDocumentRead, status_code=status.HTTP_201_CREATED)
async def create_document(
    payload: InternalDocumentCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> InternalDocument:
    item = await service.create_document_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid document reference")
    return item


@documents_router.get("/{item_id}", response_model=InternalDocumentRead)
async def read_document(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> InternalDocument:
    item = await service.get_document_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Document not found")
    return item


@documents_router.patch("/{item_id}", response_model=InternalDocumentRead)
async def update_document(
    item_id: UUID,
    payload: InternalDocumentUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> InternalDocument:
    item = await service.get_document_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Document not found")
    updated = await service.update_document_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid document reference")
    return updated


@documents_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_document(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_document_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Document not found")
    await service.delete_document_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@media_router.get("/", response_model=list[MediaAssetRead])
async def read_media_assets(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[MediaAsset]:
    return await service.list_media_records(session)


@media_router.post("/", response_model=MediaAssetRead, status_code=status.HTTP_201_CREATED)
async def create_media_asset(
    payload: MediaAssetCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> MediaAsset:
    item = await service.create_media_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid media reference")
    return item


@media_router.get("/{item_id}", response_model=MediaAssetRead)
async def read_media_asset(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> MediaAsset:
    item = await service.get_media_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Media asset not found")
    return item


@media_router.patch("/{item_id}", response_model=MediaAssetRead)
async def update_media_asset(
    item_id: UUID,
    payload: MediaAssetUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> MediaAsset:
    item = await service.get_media_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Media asset not found")
    updated = await service.update_media_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid media reference")
    return updated


@media_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_media_asset(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_media_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Media asset not found")
    await service.delete_media_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@communications_router.get("/", response_model=list[CommunicationCampaignRead])
async def read_communications(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[CommunicationCampaign]:
    return await service.list_communication_records(session)


@communications_router.post("/", response_model=CommunicationCampaignRead, status_code=status.HTTP_201_CREATED)
async def create_communication(
    payload: CommunicationCampaignCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> CommunicationCampaign:
    item = await service.create_communication_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid communication reference")
    return item


@communications_router.get("/{item_id}", response_model=CommunicationCampaignRead)
async def read_communication(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> CommunicationCampaign:
    item = await service.get_communication_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Communication not found")
    return item


@communications_router.patch("/{item_id}", response_model=CommunicationCampaignRead)
async def update_communication(
    item_id: UUID,
    payload: CommunicationCampaignUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> CommunicationCampaign:
    item = await service.get_communication_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Communication not found")
    updated = await service.update_communication_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid communication reference")
    return updated


@communications_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_communication(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_communication_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Communication not found")
    await service.delete_communication_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)

@notifications_router.get("/", response_model=list[InternalNotificationRead])
async def read_notifications(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[InternalNotification]:
    return await service.list_notification_records(session)


@notifications_router.get("/me", response_model=list[InternalNotificationRead])
async def read_my_notifications(
    current_user: User = Depends(get_current_active_user),
    session: AsyncSession = Depends(get_session),
) -> list[InternalNotification]:
    return await service.list_my_notification_records(session, current_user.id)


@notifications_router.post("/", response_model=InternalNotificationRead, status_code=status.HTTP_201_CREATED)
async def create_notification(
    payload: InternalNotificationCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> InternalNotification:
    item = await service.create_notification_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid notification reference")
    return item


@notifications_router.get("/{item_id}", response_model=InternalNotificationRead)
async def read_notification(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> InternalNotification:
    item = await service.get_notification_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Notification not found")
    return item


@notifications_router.patch("/{item_id}", response_model=InternalNotificationRead)
async def update_notification(
    item_id: UUID,
    payload: InternalNotificationUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> InternalNotification:
    item = await service.get_notification_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Notification not found")
    updated = await service.update_notification_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid notification reference")
    return updated


@notifications_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_notification(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_notification_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Notification not found")
    await service.delete_notification_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@analytics_router.get("/", response_model=list[AnalyticsEventRead])
async def read_analytics_events(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[AnalyticsEvent]:
    return await service.list_analytics_records(session)


@analytics_router.post("/", response_model=AnalyticsEventRead, status_code=status.HTTP_201_CREATED)
async def create_analytics_event(
    payload: AnalyticsEventCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> AnalyticsEvent:
    item = await service.create_analytics_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid analytics reference")
    return item


@analytics_router.get("/{item_id}", response_model=AnalyticsEventRead)
async def read_analytics_event(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> AnalyticsEvent:
    item = await service.get_analytics_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Analytics event not found")
    return item


@analytics_router.patch("/{item_id}", response_model=AnalyticsEventRead)
async def update_analytics_event(
    item_id: UUID,
    payload: AnalyticsEventUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> AnalyticsEvent:
    item = await service.get_analytics_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Analytics event not found")
    updated = await service.update_analytics_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid analytics reference")
    return updated


@analytics_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_analytics_event(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_analytics_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Analytics event not found")
    await service.delete_analytics_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@reports_router.get("/", response_model=list[ReportRecordRead])
async def read_reports(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[ReportRecord]:
    return await service.list_report_records(session)


@reports_router.post("/", response_model=ReportRecordRead, status_code=status.HTTP_201_CREATED)
async def create_report(
    payload: ReportRecordCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ReportRecord:
    item = await service.create_report_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid report reference")
    return item


@reports_router.get("/{item_id}", response_model=ReportRecordRead)
async def read_report(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> ReportRecord:
    item = await service.get_report_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Report not found")
    return item


@reports_router.patch("/{item_id}", response_model=ReportRecordRead)
async def update_report(
    item_id: UUID,
    payload: ReportRecordUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ReportRecord:
    item = await service.get_report_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Report not found")
    updated = await service.update_report_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid report reference")
    return updated


@reports_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_report(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_report_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Report not found")
    await service.delete_report_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)

@audit_router.get("/", response_model=list[AuditLogEntryRead])
async def read_audit_logs(
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> list[AuditLogEntry]:
    return await service.list_audit_records(session)


@audit_router.post("/", response_model=AuditLogEntryRead, status_code=status.HTTP_201_CREATED)
async def create_audit_log(
    payload: AuditLogEntryCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> AuditLogEntry:
    item = await service.create_audit_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid audit reference")
    return item


@audit_router.get("/{item_id}", response_model=AuditLogEntryRead)
async def read_audit_log(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> AuditLogEntry:
    item = await service.get_audit_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Audit log not found")
    return item


@audit_router.patch("/{item_id}", response_model=AuditLogEntryRead)
async def update_audit_log(
    item_id: UUID,
    payload: AuditLogEntryUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> AuditLogEntry:
    item = await service.get_audit_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Audit log not found")
    updated = await service.update_audit_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid audit reference")
    return updated


@audit_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_audit_log(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_audit_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Audit log not found")
    await service.delete_audit_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@gdpr_router.get("/", response_model=list[GDPRRequestRecordRead])
async def read_gdpr_requests(
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> list[GDPRRequestRecord]:
    return await service.list_gdpr_records(session)


@gdpr_router.post("/", response_model=GDPRRequestRecordRead, status_code=status.HTTP_201_CREATED)
async def create_gdpr_request(
    payload: GDPRRequestRecordCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> GDPRRequestRecord:
    item = await service.create_gdpr_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid GDPR reference")
    return item


@gdpr_router.get("/{item_id}", response_model=GDPRRequestRecordRead)
async def read_gdpr_request(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> GDPRRequestRecord:
    item = await service.get_gdpr_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="GDPR request not found")
    return item


@gdpr_router.patch("/{item_id}", response_model=GDPRRequestRecordRead)
async def update_gdpr_request(
    item_id: UUID,
    payload: GDPRRequestRecordUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> GDPRRequestRecord:
    item = await service.get_gdpr_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="GDPR request not found")
    updated = await service.update_gdpr_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid GDPR reference")
    return updated


@gdpr_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_gdpr_request(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_gdpr_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="GDPR request not found")
    await service.delete_gdpr_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
