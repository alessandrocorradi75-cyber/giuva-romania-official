"""Add organizations, memberships, and volunteer identities."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260704_0002"
down_revision: str | None = "20260704_0001"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

organization_type = postgresql.ENUM(
    "EUROPE",
    "COUNTRY",
    "REGION",
    "CITY",
    "COMMUNITY",
    name="organizationtype",
)
membership_status = postgresql.ENUM("INVITED", "ACTIVE", "PAUSED", "ENDED", name="membershipstatus")
user_role = postgresql.ENUM(
    "PUBLIC",
    "VOLUNTEER",
    "COORDINATOR",
    "ADMIN",
    name="userrole",
    create_type=False,
)
volunteer_status = postgresql.ENUM(
    "APPLIED",
    "ACTIVE",
    "PAUSED",
    "SUSPENDED",
    name="volunteerstatus",
    create_type=False,
)


def upgrade() -> None:
    bind = op.get_bind()
    organization_type.create(bind, checkfirst=True)
    membership_status.create(bind, checkfirst=True)

    op.create_table(
        "organizations",
        sa.Column("parent_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("type", organization_type, nullable=False),
        sa.Column("code", sa.String(length=80), nullable=False),
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("legal_name", sa.String(length=255), nullable=True),
        sa.Column("country_code", sa.String(length=2), nullable=True),
        sa.Column("region", sa.String(length=120), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=True),
        sa.Column("timezone", sa.String(length=80), nullable=True),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["parent_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_organizations_code"), "organizations", ["code"], unique=True)

    op.create_table(
        "organization_memberships",
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("role", user_role, nullable=False),
        sa.Column("status", membership_status, nullable=False),
        sa.Column("title", sa.String(length=120), nullable=True),
        sa.Column("is_primary", sa.Boolean(), nullable=False),
        sa.Column("started_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("ended_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("user_id", "organization_id", name="uq_organization_memberships_user_org"),
    )

    op.create_table(
        "volunteer_identities",
        sa.Column("user_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("primary_organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("volunteer_code", sa.String(length=80), nullable=False),
        sa.Column("display_name", sa.String(length=180), nullable=False),
        sa.Column("country_code", sa.String(length=2), nullable=True),
        sa.Column("region", sa.String(length=120), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=True),
        sa.Column("status", volunteer_status, nullable=False),
        sa.Column("verified_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["primary_organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("user_id"),
    )
    op.create_index(
        op.f("ix_volunteer_identities_volunteer_code"),
        "volunteer_identities",
        ["volunteer_code"],
        unique=True,
    )


def downgrade() -> None:
    op.drop_index(op.f("ix_volunteer_identities_volunteer_code"), table_name="volunteer_identities")
    op.drop_table("volunteer_identities")
    op.drop_table("organization_memberships")
    op.drop_index(op.f("ix_organizations_code"), table_name="organizations")
    op.drop_table("organizations")

    bind = op.get_bind()
    membership_status.drop(bind, checkfirst=True)
    organization_type.drop(bind, checkfirst=True)
