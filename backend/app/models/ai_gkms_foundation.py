from typing import Any

from sqlalchemy import Enum, ForeignKey, JSON, String, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base, TimestampMixin, UUIDPrimaryKeyMixin
from app.models.enums import AIContextScope, FoundationStatus, KnowledgeSourceType, SearchMetadataStatus, Visibility


class KnowledgeDocument(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "knowledge_documents"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    owner_user_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    summary: Mapped[str | None] = mapped_column(Text, nullable=True)
    source_type: Mapped[KnowledgeSourceType] = mapped_column(Enum(KnowledgeSourceType), nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    visibility: Mapped[Visibility] = mapped_column(Enum(Visibility), default=Visibility.PRIVATE, nullable=False)
    language: Mapped[str] = mapped_column(String(12), default="ro", nullable=False)
    source_reference: Mapped[str | None] = mapped_column(String(500), nullable=True)
    content_hash: Mapped[str | None] = mapped_column(String(128), nullable=True)
    metadata_json: Mapped[dict[str, Any] | None] = mapped_column("metadata", JSON, nullable=True)


class SOPReference(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "sop_references"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    knowledge_document_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("knowledge_documents.id"), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    code: Mapped[str] = mapped_column(String(80), nullable=False)
    owner: Mapped[str | None] = mapped_column(String(120), nullable=True)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    version: Mapped[str] = mapped_column(String(40), default="1.0", nullable=False)
    review_cycle: Mapped[str | None] = mapped_column(String(80), nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)


class AIAssistantContext(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "ai_assistant_contexts"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    knowledge_document_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("knowledge_documents.id"), nullable=True)
    name: Mapped[str] = mapped_column(String(180), nullable=False)
    scope: Mapped[AIContextScope] = mapped_column(Enum(AIContextScope), nullable=False)
    status: Mapped[FoundationStatus] = mapped_column(Enum(FoundationStatus), default=FoundationStatus.DRAFT, nullable=False)
    purpose: Mapped[str] = mapped_column(Text, nullable=False)
    safety_notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    allowed_sources: Mapped[dict[str, Any] | None] = mapped_column(JSON, nullable=True)


class SearchMetadataRecord(UUIDPrimaryKeyMixin, TimestampMixin, Base):
    __tablename__ = "search_metadata_records"

    organization_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("organizations.id"), nullable=True)
    knowledge_document_id: Mapped[UUID | None] = mapped_column(UUID(as_uuid=True), ForeignKey("knowledge_documents.id"), nullable=True)
    entity_type: Mapped[str] = mapped_column(String(120), nullable=False)
    entity_id: Mapped[str | None] = mapped_column(String(120), nullable=True)
    title: Mapped[str] = mapped_column(String(180), nullable=False)
    keywords: Mapped[str | None] = mapped_column(Text, nullable=True)
    language: Mapped[str] = mapped_column(String(12), default="ro", nullable=False)
    status: Mapped[SearchMetadataStatus] = mapped_column(Enum(SearchMetadataStatus), default=SearchMetadataStatus.DRAFT, nullable=False)
    metadata_json: Mapped[dict[str, Any] | None] = mapped_column("metadata", JSON, nullable=True)
