from typing import TypeVar
from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.ai_gkms_foundation import AIAssistantContext, KnowledgeDocument, SOPReference, SearchMetadataRecord
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


async def list_knowledge_documents(session: AsyncSession) -> list[KnowledgeDocument]:
    return await _list(session, KnowledgeDocument, KnowledgeDocument.title)


async def get_knowledge_document(session: AsyncSession, item_id: UUID) -> KnowledgeDocument | None:
    return await session.get(KnowledgeDocument, item_id)


async def create_knowledge_document(session: AsyncSession, payload: KnowledgeDocumentCreate) -> KnowledgeDocument:
    return await _create(session, KnowledgeDocument, payload)


async def update_knowledge_document(session: AsyncSession, item: KnowledgeDocument, payload: KnowledgeDocumentUpdate) -> KnowledgeDocument:
    return await _update(session, item, payload)


async def delete_knowledge_document(session: AsyncSession, item: KnowledgeDocument) -> None:
    await _delete(session, item)


async def list_sop_references(session: AsyncSession) -> list[SOPReference]:
    return await _list(session, SOPReference, SOPReference.code)


async def get_sop_reference(session: AsyncSession, item_id: UUID) -> SOPReference | None:
    return await session.get(SOPReference, item_id)


async def create_sop_reference(session: AsyncSession, payload: SOPReferenceCreate) -> SOPReference:
    return await _create(session, SOPReference, payload)


async def update_sop_reference(session: AsyncSession, item: SOPReference, payload: SOPReferenceUpdate) -> SOPReference:
    return await _update(session, item, payload)


async def delete_sop_reference(session: AsyncSession, item: SOPReference) -> None:
    await _delete(session, item)


async def list_ai_contexts(session: AsyncSession) -> list[AIAssistantContext]:
    return await _list(session, AIAssistantContext, AIAssistantContext.name)


async def get_ai_context(session: AsyncSession, item_id: UUID) -> AIAssistantContext | None:
    return await session.get(AIAssistantContext, item_id)


async def create_ai_context(session: AsyncSession, payload: AIAssistantContextCreate) -> AIAssistantContext:
    return await _create(session, AIAssistantContext, payload)


async def update_ai_context(session: AsyncSession, item: AIAssistantContext, payload: AIAssistantContextUpdate) -> AIAssistantContext:
    return await _update(session, item, payload)


async def delete_ai_context(session: AsyncSession, item: AIAssistantContext) -> None:
    await _delete(session, item)


async def list_search_metadata(session: AsyncSession) -> list[SearchMetadataRecord]:
    return await _list(session, SearchMetadataRecord, SearchMetadataRecord.title)


async def get_search_metadata(session: AsyncSession, item_id: UUID) -> SearchMetadataRecord | None:
    return await session.get(SearchMetadataRecord, item_id)


async def create_search_metadata(session: AsyncSession, payload: SearchMetadataRecordCreate) -> SearchMetadataRecord:
    return await _create(session, SearchMetadataRecord, payload)


async def update_search_metadata(session: AsyncSession, item: SearchMetadataRecord, payload: SearchMetadataRecordUpdate) -> SearchMetadataRecord:
    return await _update(session, item, payload)


async def delete_search_metadata(session: AsyncSession, item: SearchMetadataRecord) -> None:
    await _delete(session, item)
