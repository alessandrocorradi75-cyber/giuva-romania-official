from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.ai_gkms_foundation import AIAssistantContext, KnowledgeDocument, SOPReference, SearchMetadataRecord
from app.models.enums import UserRole
from app.schemas.ai_gkms_foundation import (
    AIAssistantContextCreate,
    AIAssistantContextRead,
    AIAssistantContextUpdate,
    KnowledgeDocumentCreate,
    KnowledgeDocumentRead,
    KnowledgeDocumentUpdate,
    SOPReferenceCreate,
    SOPReferenceRead,
    SOPReferenceUpdate,
    SearchMetadataRecordCreate,
    SearchMetadataRecordRead,
    SearchMetadataRecordUpdate,
)
from app.security.rbac import require_minimum_role
from app.services import ai_gkms_foundation as service

knowledge_router = APIRouter()
sop_router = APIRouter()
ai_context_router = APIRouter()
search_router = APIRouter()


@knowledge_router.get("/", response_model=list[KnowledgeDocumentRead])
async def read_knowledge_documents(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[KnowledgeDocument]:
    return await service.list_knowledge_document_records(session)


@knowledge_router.post("/", response_model=KnowledgeDocumentRead, status_code=status.HTTP_201_CREATED)
async def create_knowledge_document(
    payload: KnowledgeDocumentCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> KnowledgeDocument:
    item = await service.create_knowledge_document_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid knowledge document reference")
    return item


@knowledge_router.get("/{item_id}", response_model=KnowledgeDocumentRead)
async def read_knowledge_document(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> KnowledgeDocument:
    item = await service.get_knowledge_document_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Knowledge document not found")
    return item


@knowledge_router.patch("/{item_id}", response_model=KnowledgeDocumentRead)
async def update_knowledge_document(
    item_id: UUID,
    payload: KnowledgeDocumentUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> KnowledgeDocument:
    item = await service.get_knowledge_document_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Knowledge document not found")
    updated = await service.update_knowledge_document_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid knowledge document reference")
    return updated


@knowledge_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_knowledge_document(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_knowledge_document_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Knowledge document not found")
    await service.delete_knowledge_document_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@sop_router.get("/", response_model=list[SOPReferenceRead])
async def read_sop_references(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[SOPReference]:
    return await service.list_sop_reference_records(session)


@sop_router.post("/", response_model=SOPReferenceRead, status_code=status.HTTP_201_CREATED)
async def create_sop_reference(
    payload: SOPReferenceCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> SOPReference:
    item = await service.create_sop_reference_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid SOP reference")
    return item


@sop_router.get("/{item_id}", response_model=SOPReferenceRead)
async def read_sop_reference(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> SOPReference:
    item = await service.get_sop_reference_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="SOP reference not found")
    return item


@sop_router.patch("/{item_id}", response_model=SOPReferenceRead)
async def update_sop_reference(
    item_id: UUID,
    payload: SOPReferenceUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> SOPReference:
    item = await service.get_sop_reference_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="SOP reference not found")
    updated = await service.update_sop_reference_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid SOP reference")
    return updated


@sop_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_sop_reference(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_sop_reference_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="SOP reference not found")
    await service.delete_sop_reference_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@ai_context_router.get("/", response_model=list[AIAssistantContextRead])
async def read_ai_contexts(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[AIAssistantContext]:
    return await service.list_ai_context_records(session)


@ai_context_router.post("/", response_model=AIAssistantContextRead, status_code=status.HTTP_201_CREATED)
async def create_ai_context(
    payload: AIAssistantContextCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> AIAssistantContext:
    item = await service.create_ai_context_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid AI context reference")
    return item


@ai_context_router.get("/{item_id}", response_model=AIAssistantContextRead)
async def read_ai_context(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> AIAssistantContext:
    item = await service.get_ai_context_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="AI context not found")
    return item


@ai_context_router.patch("/{item_id}", response_model=AIAssistantContextRead)
async def update_ai_context(
    item_id: UUID,
    payload: AIAssistantContextUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> AIAssistantContext:
    item = await service.get_ai_context_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="AI context not found")
    updated = await service.update_ai_context_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid AI context reference")
    return updated


@ai_context_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_ai_context(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_ai_context_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="AI context not found")
    await service.delete_ai_context_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@search_router.get("/", response_model=list[SearchMetadataRecordRead])
async def read_search_metadata(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[SearchMetadataRecord]:
    return await service.list_search_metadata_records(session)


@search_router.post("/", response_model=SearchMetadataRecordRead, status_code=status.HTTP_201_CREATED)
async def create_search_metadata(
    payload: SearchMetadataRecordCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> SearchMetadataRecord:
    item = await service.create_search_metadata_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid search metadata reference")
    return item


@search_router.get("/{item_id}", response_model=SearchMetadataRecordRead)
async def read_search_metadata_record(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> SearchMetadataRecord:
    item = await service.get_search_metadata_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Search metadata not found")
    return item


@search_router.patch("/{item_id}", response_model=SearchMetadataRecordRead)
async def update_search_metadata(
    item_id: UUID,
    payload: SearchMetadataRecordUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> SearchMetadataRecord:
    item = await service.get_search_metadata_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Search metadata not found")
    updated = await service.update_search_metadata_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid search metadata reference")
    return updated


@search_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_search_metadata(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_search_metadata_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Search metadata not found")
    await service.delete_search_metadata_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
