"""Add AI and GKMS foundation placeholders."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260704_0006"
down_revision: str | None = "20260704_0005"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

knowledge_source_type = postgresql.ENUM("DOCUMENT", "SOP", "POLICY", "TRAINING", "FAQ", "OTHER", name="knowledgesourcetype")
ai_context_scope = postgresql.ENUM("GLOBAL", "COUNTRY", "ORGANIZATION", "PROGRAM", "PROJECT", "ADMIN", name="aicontextscope")
search_metadata_status = postgresql.ENUM("DRAFT", "INDEX_READY", "INDEXED", "STALE", "ARCHIVED", name="searchmetadatastatus")
foundation_status = postgresql.ENUM("DRAFT", "PLANNED", "ACTIVE", "PAUSED", "COMPLETED", "CANCELLED", "ARCHIVED", name="foundationstatus", create_type=False)
visibility = postgresql.ENUM("PRIVATE", "PUBLIC", "FEATURED", name="visibility", create_type=False)


def upgrade() -> None:
    bind = op.get_bind()
    knowledge_source_type.create(bind, checkfirst=True)
    ai_context_scope.create(bind, checkfirst=True)
    search_metadata_status.create(bind, checkfirst=True)

    op.create_table(
        "knowledge_documents",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("owner_user_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("summary", sa.Text(), nullable=True),
        sa.Column("source_type", knowledge_source_type, nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("language", sa.String(length=12), nullable=False),
        sa.Column("source_reference", sa.String(length=500), nullable=True),
        sa.Column("content_hash", sa.String(length=128), nullable=True),
        sa.Column("metadata", sa.JSON(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["owner_user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_knowledge_documents_status", "knowledge_documents", ["status"])
    op.create_index("ix_knowledge_documents_source_type", "knowledge_documents", ["source_type"])

    op.create_table(
        "sop_references",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("knowledge_document_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("code", sa.String(length=80), nullable=False),
        sa.Column("owner", sa.String(length=120), nullable=True),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("version", sa.String(length=40), nullable=False),
        sa.Column("review_cycle", sa.String(length=80), nullable=True),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["knowledge_document_id"], ["knowledge_documents.id"]),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_sop_references_code", "sop_references", ["code"])

    op.create_table(
        "ai_assistant_contexts",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("knowledge_document_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("scope", ai_context_scope, nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("purpose", sa.Text(), nullable=False),
        sa.Column("safety_notes", sa.Text(), nullable=True),
        sa.Column("allowed_sources", sa.JSON(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["knowledge_document_id"], ["knowledge_documents.id"]),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_ai_assistant_contexts_scope", "ai_assistant_contexts", ["scope"])

    op.create_table(
        "search_metadata_records",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("knowledge_document_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("entity_type", sa.String(length=120), nullable=False),
        sa.Column("entity_id", sa.String(length=120), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("keywords", sa.Text(), nullable=True),
        sa.Column("language", sa.String(length=12), nullable=False),
        sa.Column("status", search_metadata_status, nullable=False),
        sa.Column("metadata", sa.JSON(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["knowledge_document_id"], ["knowledge_documents.id"]),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_search_metadata_records_entity", "search_metadata_records", ["entity_type", "entity_id"])
    op.create_index("ix_search_metadata_records_status", "search_metadata_records", ["status"])


def downgrade() -> None:
    op.drop_index("ix_search_metadata_records_status", table_name="search_metadata_records")
    op.drop_index("ix_search_metadata_records_entity", table_name="search_metadata_records")
    op.drop_table("search_metadata_records")
    op.drop_index("ix_ai_assistant_contexts_scope", table_name="ai_assistant_contexts")
    op.drop_table("ai_assistant_contexts")
    op.drop_index("ix_sop_references_code", table_name="sop_references")
    op.drop_table("sop_references")
    op.drop_index("ix_knowledge_documents_source_type", table_name="knowledge_documents")
    op.drop_index("ix_knowledge_documents_status", table_name="knowledge_documents")
    op.drop_table("knowledge_documents")

    bind = op.get_bind()
    search_metadata_status.drop(bind, checkfirst=True)
    ai_context_scope.drop(bind, checkfirst=True)
    knowledge_source_type.drop(bind, checkfirst=True)
