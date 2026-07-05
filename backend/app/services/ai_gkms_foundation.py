from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.ai_gkms_foundation import AIAssistantContext, KnowledgeDocument, SOPReference, SearchMetadataRecord
from app.models.organization import Organization
from app.models.user import User
from app.repositories import ai_gkms_foundation as repo
from app.schemas.ai_gkms_foundation import (
    AIAssistantContextCreate,
    AIAssistantContextUpdate,
    KnowledgeDocumentCreate,
    KnowledgeDocumentUpdate,
    SOPReferenceCreate,
    SOPReferenceUpdate,
    SearchMetadataRecordCreate,
    SearchMetadataRecordUpdate,
)


async def _exists(session: AsyncSession, model: type[object], item_id: UUID | None) -> bool:
    if item_id is None:
        return True
    return await session.get(model, item_id) is not None


async def _knowledge_refs_valid(session: AsyncSession, payload: KnowledgeDocumentCreate | KnowledgeDocumentUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _exists(session, User, payload.owner_user_id)


async def _knowledge_doc_exists(session: AsyncSession, item_id: UUID | None) -> bool:
    return await _exists(session, KnowledgeDocument, item_id)


async def list_knowledge_document_records(session: AsyncSession) -> list[KnowledgeDocument]:
    return await repo.list_knowledge_documents(session)


async def get_knowledge_document_record(session: AsyncSession, item_id: UUID) -> KnowledgeDocument | None:
    return await repo.get_knowledge_document(session, item_id)


async def create_knowledge_document_record(session: AsyncSession, payload: KnowledgeDocumentCreate) -> KnowledgeDocument | None:
    if not await _knowledge_refs_valid(session, payload):
        return None
    return await repo.create_knowledge_document(session, payload)


async def update_knowledge_document_record(
    session: AsyncSession,
    item: KnowledgeDocument,
    payload: KnowledgeDocumentUpdate,
) -> KnowledgeDocument | None:
    if not await _knowledge_refs_valid(session, payload):
        return None
    return await repo.update_knowledge_document(session, item, payload)


async def delete_knowledge_document_record(session: AsyncSession, item: KnowledgeDocument) -> None:
    await repo.delete_knowledge_document(session, item)


async def _sop_refs_valid(session: AsyncSession, payload: SOPReferenceCreate | SOPReferenceUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _knowledge_doc_exists(session, payload.knowledge_document_id)


async def list_sop_reference_records(session: AsyncSession) -> list[SOPReference]:
    return await repo.list_sop_references(session)


async def get_sop_reference_record(session: AsyncSession, item_id: UUID) -> SOPReference | None:
    return await repo.get_sop_reference(session, item_id)


async def create_sop_reference_record(session: AsyncSession, payload: SOPReferenceCreate) -> SOPReference | None:
    if not await _sop_refs_valid(session, payload):
        return None
    return await repo.create_sop_reference(session, payload)


async def update_sop_reference_record(session: AsyncSession, item: SOPReference, payload: SOPReferenceUpdate) -> SOPReference | None:
    if not await _sop_refs_valid(session, payload):
        return None
    return await repo.update_sop_reference(session, item, payload)


async def delete_sop_reference_record(session: AsyncSession, item: SOPReference) -> None:
    await repo.delete_sop_reference(session, item)


async def _ai_context_refs_valid(session: AsyncSession, payload: AIAssistantContextCreate | AIAssistantContextUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _knowledge_doc_exists(session, payload.knowledge_document_id)


async def list_ai_context_records(session: AsyncSession) -> list[AIAssistantContext]:
    return await repo.list_ai_contexts(session)


async def get_ai_context_record(session: AsyncSession, item_id: UUID) -> AIAssistantContext | None:
    return await repo.get_ai_context(session, item_id)


async def create_ai_context_record(session: AsyncSession, payload: AIAssistantContextCreate) -> AIAssistantContext | None:
    if not await _ai_context_refs_valid(session, payload):
        return None
    return await repo.create_ai_context(session, payload)


async def update_ai_context_record(
    session: AsyncSession,
    item: AIAssistantContext,
    payload: AIAssistantContextUpdate,
) -> AIAssistantContext | None:
    if not await _ai_context_refs_valid(session, payload):
        return None
    return await repo.update_ai_context(session, item, payload)


async def delete_ai_context_record(session: AsyncSession, item: AIAssistantContext) -> None:
    await repo.delete_ai_context(session, item)


async def _search_refs_valid(session: AsyncSession, payload: SearchMetadataRecordCreate | SearchMetadataRecordUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _knowledge_doc_exists(session, payload.knowledge_document_id)


async def list_search_metadata_records(session: AsyncSession) -> list[SearchMetadataRecord]:
    return await repo.list_search_metadata(session)


async def get_search_metadata_record(session: AsyncSession, item_id: UUID) -> SearchMetadataRecord | None:
    return await repo.get_search_metadata(session, item_id)


async def create_search_metadata_record(session: AsyncSession, payload: SearchMetadataRecordCreate) -> SearchMetadataRecord | None:
    if not await _search_refs_valid(session, payload):
        return None
    return await repo.create_search_metadata(session, payload)


async def update_search_metadata_record(
    session: AsyncSession,
    item: SearchMetadataRecord,
    payload: SearchMetadataRecordUpdate,
) -> SearchMetadataRecord | None:
    if not await _search_refs_valid(session, payload):
        return None
    return await repo.update_search_metadata(session, item, payload)


async def delete_search_metadata_record(session: AsyncSession, item: SearchMetadataRecord) -> None:
    await repo.delete_search_metadata(session, item)
