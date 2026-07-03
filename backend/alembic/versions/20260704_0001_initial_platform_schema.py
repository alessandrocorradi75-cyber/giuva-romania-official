"""Initial Alembic baseline for the GIUVA platform schema."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260704_0001"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

user_role = postgresql.ENUM("PUBLIC", "VOLUNTEER", "COORDINATOR", "ADMIN", name="userrole")
volunteer_status = postgresql.ENUM("APPLIED", "ACTIVE", "PAUSED", "SUSPENDED", name="volunteerstatus")
campaign_status = postgresql.ENUM("DRAFT", "ACTIVE", "FUNDED", "CLOSED", name="campaignstatus")
partner_category = postgresql.ENUM(
    "INSTITUTIONAL",
    "MEDICAL",
    "HOSPITALITY",
    "MEDIA",
    "TECHNICAL",
    "MOBILITY",
    name="partnercategory",
)
visibility = postgresql.ENUM("PRIVATE", "PUBLIC", "FEATURED", name="visibility")


def upgrade() -> None:
    bind = op.get_bind()
    user_role.create(bind, checkfirst=True)
    volunteer_status.create(bind, checkfirst=True)
    campaign_status.create(bind, checkfirst=True)
    partner_category.create(bind, checkfirst=True)
    visibility.create(bind, checkfirst=True)

    op.create_table(
        "users",
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("hashed_password", sa.String(length=255), nullable=False),
        sa.Column("role", user_role, nullable=False),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_users_email"), "users", ["email"], unique=True)

    op.create_table(
        "volunteers",
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("email", sa.String(length=255), nullable=False),
        sa.Column("phone", sa.String(length=40), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=True),
        sa.Column("status", volunteer_status, nullable=False),
        sa.Column("training_level", sa.String(length=120), nullable=True),
        sa.Column("qr_code", sa.String(length=255), nullable=True),
        sa.Column("joined_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("qr_code", name="uq_volunteers_qr_code"),
    )
    op.create_index(op.f("ix_volunteers_email"), "volunteers", ["email"], unique=True)

    op.create_table(
        "stories",
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("slug", sa.String(length=220), nullable=False),
        sa.Column("content", sa.Text(), nullable=False),
        sa.Column("cover_image", sa.String(length=255), nullable=True),
        sa.Column("location", sa.String(length=180), nullable=True),
        sa.Column("author", sa.String(length=180), nullable=True),
        sa.Column("published_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_stories_slug"), "stories", ["slug"], unique=True)

    op.create_table(
        "galleries",
        sa.Column("event", sa.String(length=180), nullable=False),
        sa.Column("story_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("images", postgresql.ARRAY(sa.String()), nullable=False),
        sa.Column("captions", postgresql.ARRAY(sa.String()), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["story_id"], ["stories.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "trainings",
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("provider", sa.String(length=180), nullable=True),
        sa.Column("date", sa.Date(), nullable=True),
        sa.Column("certificate", sa.String(length=255), nullable=True),
        sa.Column("expiration", sa.Date(), nullable=True),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "events",
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("location", sa.String(length=180), nullable=True),
        sa.Column("date", sa.DateTime(timezone=True), nullable=True),
        sa.Column("participants", sa.Integer(), nullable=False),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "campaigns",
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("goal", sa.Numeric(precision=12, scale=2), nullable=False),
        sa.Column("raised", sa.Numeric(precision=12, scale=2), nullable=False),
        sa.Column("status", campaign_status, nullable=False),
        sa.Column("summary", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "sponsors",
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("type", sa.String(length=120), nullable=True),
        sa.Column("contribution", sa.Numeric(precision=12, scale=2), nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("website", sa.String(length=255), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "partners",
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("category", partner_category, nullable=False),
        sa.Column("website", sa.String(length=255), nullable=True),
        sa.Column("status", sa.String(length=80), nullable=False),
        sa.Column("logo", sa.String(length=255), nullable=True),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "preparedness_resources",
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("category", sa.String(length=120), nullable=False),
        sa.Column("content", sa.Text(), nullable=False),
        sa.Column("published_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "training_calendar_items",
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("provider", sa.String(length=180), nullable=True),
        sa.Column("audience", sa.String(length=120), nullable=True),
        sa.Column("starts_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("location", sa.String(length=180), nullable=True),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )


def downgrade() -> None:
    op.drop_table("training_calendar_items")
    op.drop_table("preparedness_resources")
    op.drop_table("partners")
    op.drop_table("sponsors")
    op.drop_table("campaigns")
    op.drop_table("events")
    op.drop_table("trainings")
    op.drop_table("galleries")
    op.drop_index(op.f("ix_stories_slug"), table_name="stories")
    op.drop_table("stories")
    op.drop_index(op.f("ix_volunteers_email"), table_name="volunteers")
    op.drop_table("volunteers")
    op.drop_index(op.f("ix_users_email"), table_name="users")
    op.drop_table("users")

    bind = op.get_bind()
    visibility.drop(bind, checkfirst=True)
    partner_category.drop(bind, checkfirst=True)
    campaign_status.drop(bind, checkfirst=True)
    volunteer_status.drop(bind, checkfirst=True)
    user_role.drop(bind, checkfirst=True)
