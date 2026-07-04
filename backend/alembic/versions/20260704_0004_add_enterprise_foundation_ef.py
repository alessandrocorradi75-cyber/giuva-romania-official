"""Add enterprise events, training, partners, sponsors, donations, and memberships."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260704_0004"
down_revision: str | None = "20260704_0003"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

event_type = postgresql.ENUM("COMMUNITY", "TRAINING", "VOLUNTEERING", "PARTNER", "FUNDRAISING", "GOVERNANCE", name="eventtype")
foundation_status = postgresql.ENUM("DRAFT", "PLANNED", "ACTIVE", "PAUSED", "COMPLETED", "CANCELLED", "ARCHIVED", name="foundationstatus")
training_level = postgresql.ENUM("INTRODUCTORY", "BASIC", "INTERMEDIATE", "ADVANCED", name="traininglevel")
delivery_mode = postgresql.ENUM("ONLINE", "IN_PERSON", "HYBRID", name="deliverymode")
certification_status = postgresql.ENUM("ISSUED", "EXPIRED", "REVOKED", "PENDING", name="certificationstatus")
donation_status = postgresql.ENUM("PLEDGED", "RECEIVED", "CANCELLED", "REFUNDED", name="donationstatus")
membership_type = postgresql.ENUM("VOLUNTEER", "COORDINATOR", "STAFF", "PARTNER", "SUPPORTER", name="membershiptype")
visibility = postgresql.ENUM("PRIVATE", "PUBLIC", "FEATURED", name="visibility", create_type=False)
membership_status = postgresql.ENUM("INVITED", "ACTIVE", "PAUSED", "ENDED", name="membershipstatus", create_type=False)


def upgrade() -> None:
    bind = op.get_bind()
    event_type.create(bind, checkfirst=True)
    foundation_status.create(bind, checkfirst=True)
    training_level.create(bind, checkfirst=True)
    delivery_mode.create(bind, checkfirst=True)
    certification_status.create(bind, checkfirst=True)
    donation_status.create(bind, checkfirst=True)
    membership_type.create(bind, checkfirst=True)

    op.create_table(
        "managed_events",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("program_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("project_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("event_type", event_type, nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("starts_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("ends_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("country_code", sa.String(length=2), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=True),
        sa.Column("location", sa.String(length=255), nullable=True),
        sa.Column("max_participants", sa.Integer(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["program_id"], ["programs.id"]),
        sa.ForeignKeyConstraint(["project_id"], ["projects.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "training_modules",
        sa.Column("owner_organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("program_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("category", sa.String(length=120), nullable=True),
        sa.Column("level", training_level, nullable=False),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("duration_minutes", sa.Integer(), nullable=True),
        sa.Column("delivery_mode", delivery_mode, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["owner_organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["program_id"], ["programs.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "volunteer_certifications",
        sa.Column("volunteer_identity_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("training_module_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("issuer_organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("issued_at", sa.Date(), nullable=True),
        sa.Column("expires_at", sa.Date(), nullable=True),
        sa.Column("status", certification_status, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["issuer_organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["training_module_id"], ["training_modules.id"]),
        sa.ForeignKeyConstraint(["volunteer_identity_id"], ["volunteer_identities.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "managed_partners",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("partner_type", sa.String(length=120), nullable=True),
        sa.Column("country_code", sa.String(length=2), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=True),
        sa.Column("website", sa.String(length=255), nullable=True),
        sa.Column("contact_email", sa.String(length=255), nullable=True),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "managed_sponsors",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("sponsor_type", sa.String(length=120), nullable=True),
        sa.Column("country_code", sa.String(length=2), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=True),
        sa.Column("website", sa.String(length=255), nullable=True),
        sa.Column("contact_email", sa.String(length=255), nullable=True),
        sa.Column("status", foundation_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "donation_records",
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("project_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("donor_name", sa.String(length=180), nullable=True),
        sa.Column("donor_email", sa.String(length=255), nullable=True),
        sa.Column("amount", sa.Numeric(precision=12, scale=2), nullable=False),
        sa.Column("currency", sa.String(length=3), nullable=False),
        sa.Column("status", donation_status, nullable=False),
        sa.Column("purpose", sa.String(length=255), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["project_id"], ["projects.id"]),
        sa.PrimaryKeyConstraint("id"),
    )

    op.create_table(
        "membership_records",
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("membership_type", membership_type, nullable=False),
        sa.Column("status", membership_status, nullable=False),
        sa.Column("starts_at", sa.Date(), nullable=True),
        sa.Column("ends_at", sa.Date(), nullable=True),
        sa.Column("notes", sa.Text(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )


def downgrade() -> None:
    op.drop_table("membership_records")
    op.drop_table("donation_records")
    op.drop_table("managed_sponsors")
    op.drop_table("managed_partners")
    op.drop_table("volunteer_certifications")
    op.drop_table("training_modules")
    op.drop_table("managed_events")

    bind = op.get_bind()
    membership_type.drop(bind, checkfirst=True)
    donation_status.drop(bind, checkfirst=True)
    certification_status.drop(bind, checkfirst=True)
    delivery_mode.drop(bind, checkfirst=True)
    training_level.drop(bind, checkfirst=True)
    foundation_status.drop(bind, checkfirst=True)
    event_type.drop(bind, checkfirst=True)
