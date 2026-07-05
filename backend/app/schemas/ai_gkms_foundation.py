from typing import Any
from uuid import UUID

from pydantic import BaseModel, Field

from app.models.enums import AIContextScope, FoundationStatus, KnowledgeSourceType, SearchMetadataStatus, Visibility
from app.schemas.common import Timestamped


class KnowledgeDocumentBase(BaseModel):
    organization_id: UUID | None = None
    owner_user_id: UUID | None = None
    title: str = Field(min_length=2, max_length=180)
    summary: str | None = None
    source_type: KnowledgeSourceType
    status: FoundationStatus = FoundationStatus.DRAFT
    visibility: Visibility = Visibility.PRIVATE
    language: str = Field(default="ro", min_length=2, max_length=12)
    source_reference: str | None = Field(default=None, max_length=500)
    content_hash: str | None = Field(default=None, max_length=128)
    metadata_json: dict[str, Any] | None = None


class KnowledgeDocumentCreate(KnowledgeDocumentBase):
    pass


class KnowledgeDocumentUpdate(BaseModel):
    organization_id: UUID | None = None
    owner_user_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    summary: str | None = None
    source_type: KnowledgeSourceType | None = None
    status: FoundationStatus | None = None
    visibility: Visibility | None = None
    language: str | None = Field(default=None, min_length=2, max_length=12)
    source_reference: str | None = Field(default=None, max_length=500)
    content_hash: str | None = Field(default=None, max_length=128)
    metadata_json: dict[str, Any] | None = None


class KnowledgeDocumentRead(Timestamped, KnowledgeDocumentBase):
    pass


class SOPReferenceBase(BaseModel):
    organization_id: UUID | None = None
    knowledge_document_id: UUID | None = None
    title: str = Field(min_length=2, max_length=180)
    code: str = Field(min_length=2, max_length=80)
    owner: str | None = Field(default=None, max_length=120)
    status: FoundationStatus = FoundationStatus.DRAFT
    version: str = Field(default="1.0", min_length=1, max_length=40)
    review_cycle: str | None = Field(default=None, max_length=80)
    notes: str | None = None


class SOPReferenceCreate(SOPReferenceBase):
    pass


class SOPReferenceUpdate(BaseModel):
    organization_id: UUID | None = None
    knowledge_document_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    code: str | None = Field(default=None, min_length=2, max_length=80)
    owner: str | None = Field(default=None, max_length=120)
    status: FoundationStatus | None = None
    version: str | None = Field(default=None, min_length=1, max_length=40)
    review_cycle: str | None = Field(default=None, max_length=80)
    notes: str | None = None


class SOPReferenceRead(Timestamped, SOPReferenceBase):
    pass


class AIAssistantContextBase(BaseModel):
    organization_id: UUID | None = None
    knowledge_document_id: UUID | None = None
    name: str = Field(min_length=2, max_length=180)
    scope: AIContextScope
    status: FoundationStatus = FoundationStatus.DRAFT
    purpose: str = Field(min_length=1)
    safety_notes: str | None = None
    allowed_sources: dict[str, Any] | None = None


class AIAssistantContextCreate(AIAssistantContextBase):
    pass


class AIAssistantContextUpdate(BaseModel):
    organization_id: UUID | None = None
    knowledge_document_id: UUID | None = None
    name: str | None = Field(default=None, min_length=2, max_length=180)
    scope: AIContextScope | None = None
    status: FoundationStatus | None = None
    purpose: str | None = Field(default=None, min_length=1)
    safety_notes: str | None = None
    allowed_sources: dict[str, Any] | None = None


class AIAssistantContextRead(Timestamped, AIAssistantContextBase):
    pass


class SearchMetadataRecordBase(BaseModel):
    organization_id: UUID | None = None
    knowledge_document_id: UUID | None = None
    entity_type: str = Field(min_length=2, max_length=120)
    entity_id: str | None = Field(default=None, max_length=120)
    title: str = Field(min_length=2, max_length=180)
    keywords: str | None = None
    language: str = Field(default="ro", min_length=2, max_length=12)
    status: SearchMetadataStatus = SearchMetadataStatus.DRAFT
    metadata_json: dict[str, Any] | None = None


class SearchMetadataRecordCreate(SearchMetadataRecordBase):
    pass


class SearchMetadataRecordUpdate(BaseModel):
    organization_id: UUID | None = None
    knowledge_document_id: UUID | None = None
    entity_type: str | None = Field(default=None, min_length=2, max_length=120)
    entity_id: str | None = Field(default=None, max_length=120)
    title: str | None = Field(default=None, min_length=2, max_length=180)
    keywords: str | None = None
    language: str | None = Field(default=None, min_length=2, max_length=12)
    status: SearchMetadataStatus | None = None
    metadata_json: dict[str, Any] | None = None


class SearchMetadataRecordRead(Timestamped, SearchMetadataRecordBase):
    pass
