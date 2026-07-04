"""Add governance, audit, analytics, and GDPR foundations."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260704_0005"
down_revision: str | None = "20260704_0004"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

document_type = postgresql.ENUM("POLICY", "PROCEDURE", "REPORT", "CONTRACT", "TRAINING", "OTHER", name="documenttype")
media_type = postgresql.ENUM("IMAGE", "VIDEO", "AUDIO", "DOCUMENT", "OTHER", name="mediatype")
communication_channel = postgresql.ENUM("EMAIL", "SMS", "IN_APP", "WEB", "SOCIAL", name="communicationchannel")
notification_type = postgresql.ENUM("INFO", "ACTION_REQUIRED", "REMINDER", "SYSTEM", name="notificationtype")
notification_status = postgresql.ENUM("DRAFT", "QUEUED", "DELIVERED", "READ", "ARCHIVED", name="notificationstatus")
analytics_category = postgresql.ENUM("SYSTEM", "USER", "ORGANIZATION", "PROGRAM", "PROJECT", "CONTENT", name="analyticscategory")
report_type = postgresql.ENUM("OPERATIONAL", "FINANCIAL", "PROGRAM", "GDPR", "AUDIT", name="reporttype")
gdpr_request_type = postgresql.ENUM("ACCESS", "RECTIFICATION", "ERASURE", "RESTRICTION", "PORTABILITY", "OBJECTION", name="gdprrequesttype")
gdpr_request_status = postgresql.ENUM("RECEIVED", "IN_REVIEW", "COMPLETED", "REJECTED", "CANCELLED", name="gdprrequeststatus")
foundation_status = postgresql.ENUM("DRAFT", "PLANNED", "ACTIVE", "PAUSED", "COMPLETED", "CANCELLED", "ARCHIVED", name="foundationstatus", create_type=False)
visibility = postgresql.ENUM("PRIVATE", "PUBLIC", "FEATURED", name="visibility", create_type=False)


def upgrade() -> None:
    bind = op.get_bind()
    document_type.create(bind, checkfirst=True)
    media_type.create(bind, checkfirst=True)
    communication_channel.create(bind, checkfirst=True)
    notification_type.create(bind, checkfirst=True)
    notification_status.create(bind, checkfirst=True)
    analytics_category.create(bind, checkfirst=True)
    report_type.create(bind, checkfirst=True)
    gdpr_request_type.create(bind, checkfirst=True)
    gdpr_request_status.create(bind, checkfirst=True)

    op.create_table(
        "internal_documents",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("project_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("owner_user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("document_type", document_type, nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("storage_path", sa.String(length=500), nullable=False),
        sa.Column("version", sa.String(length=40), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["owner_user_id"], ["users.id"]),
        sa.ForeignKeyConstraint(["project_id"], ["projects.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "media_assets",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("owner_user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("media_type", media_type, nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("storage_path", sa.String(length=500), nullable=False),
        sa.Column("alt_text", sa.String(length=255), nullable=True),
        sa.Column("copyright_notes", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["owner_user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "communication_campaigns",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("created_by_user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("channel", communication_channel, nullable=False),
        sa.Column("audience", sa.String(length=180), nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("message_body", sa.Text(), nullable=False),
        sa.Column("scheduled_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("sent_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["created_by_user_id"], ["users.id"]),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "internal_notifications",
        sa.Column("recipient_user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("message", sa.Text(), nullable=False),
        sa.Column("notification_type", notification_type, nullable=False),
        sa.Column("status", notification_status, nullable=False),
        sa.Column("read_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["recipient_user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "analytics_events",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("event_name", sa.String(length=180), nullable=False),
        sa.Column("event_category", analytics_category, nullable=False),
        sa.Column("metadata", sa.JSON(), nullable=True),
        sa.Column("occurred_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "report_records",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("generated_by_user_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("report_type", report_type, nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("period_start", sa.DateTime(timezone=True), nullable=False),
        sa.Column("period_end", sa.DateTime(timezone=True), nullable=False),
        sa.Column("storage_path", sa.String(length=500), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["generated_by_user_id"], ["users.id"]),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "audit_log_entries",
        sa.Column("actor_user_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("action", sa.String(length=120), nullable=False),
        sa.Column("entity_type", sa.String(length=120), nullable=False),
        sa.Column("entity_id", sa.String(length=120), nullable=True),
        sa.Column("before", sa.JSON(), nullable=True),
        sa.Column("after", sa.JSON(), nullable=True),
        sa.Column("ip_address", sa.String(length=80), nullable=True),
        sa.Column("user_agent", sa.String(length=500), nullable=True),
        sa.Column("occurred_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["actor_user_id"], ["users.id"]),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "gdpr_request_records",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("handled_by_user_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("data_subject_email", sa.String(length=255), nullable=False),
        sa.Column("request_type", gdpr_request_type, nullable=False),
        sa.Column("status", gdpr_request_status, nullable=False),
        sa.Column("requested_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("completed_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["handled_by_user_id"], ["users.id"]),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )


def downgrade() -> None:
    op.drop_table("gdpr_request_records")
    op.drop_table("audit_log_entries")
    op.drop_table("report_records")
    op.drop_table("analytics_events")
    op.drop_table("internal_notifications")
    op.drop_table("communication_campaigns")
    op.drop_table("media_assets")
    op.drop_table("internal_documents")

    bind = op.get_bind()
    gdpr_request_status.drop(bind, checkfirst=True)
    gdpr_request_type.drop(bind, checkfirst=True)
    report_type.drop(bind, checkfirst=True)
    analytics_category.drop(bind, checkfirst=True)
    notification_status.drop(bind, checkfirst=True)
    notification_type.drop(bind, checkfirst=True)
    communication_channel.drop(bind, checkfirst=True)
    media_type.drop(bind, checkfirst=True)
    document_type.drop(bind, checkfirst=True)
