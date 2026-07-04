"""Add programs, disciplines, projects, and participation."""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

revision: str = "20260704_0003"
down_revision: str | None = "20260704_0002"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None

program_status = postgresql.ENUM("DRAFT", "ACTIVE", "PAUSED", "ARCHIVED", name="programstatus")
project_status = postgresql.ENUM(
    "DRAFT",
    "PLANNED",
    "ACTIVE",
    "COMPLETED",
    "CANCELLED",
    "ARCHIVED",
    name="projectstatus",
)
participation_status = postgresql.ENUM(
    "INVITED",
    "ACTIVE",
    "PAUSED",
    "COMPLETED",
    "WITHDRAWN",
    name="participationstatus",
)
visibility = postgresql.ENUM("PRIVATE", "PUBLIC", "FEATURED", name="visibility", create_type=False)


def upgrade() -> None:
    bind = op.get_bind()
    program_status.create(bind, checkfirst=True)
    project_status.create(bind, checkfirst=True)
    participation_status.create(bind, checkfirst=True)

    op.create_table(
        "programs",
        sa.Column("owner_organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("code", sa.String(length=80), nullable=False),
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("status", program_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("country_availability", postgresql.ARRAY(sa.String(length=2)), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["owner_organization_id"], ["organizations.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_programs_code"), "programs", ["code"], unique=True)

    op.create_table(
        "disciplines",
        sa.Column("program_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("owner_organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("code", sa.String(length=80), nullable=False),
        sa.Column("name", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("status", program_status, nullable=False),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("country_availability", postgresql.ARRAY(sa.String(length=2)), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["owner_organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["program_id"], ["programs.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("program_id", "code", name="uq_disciplines_program_code"),
    )

    op.create_table(
        "projects",
        sa.Column("program_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("organization_id", postgresql.UUID(as_uuid=True), nullable=True),
        sa.Column("code", sa.String(length=80), nullable=False),
        sa.Column("title", sa.String(length=180), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("status", project_status, nullable=False),
        sa.Column("starts_at", sa.Date(), nullable=True),
        sa.Column("ends_at", sa.Date(), nullable=True),
        sa.Column("budget", sa.Numeric(precision=12, scale=2), nullable=True),
        sa.Column("visibility", visibility, nullable=False),
        sa.Column("country_code", sa.String(length=2), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["organization_id"], ["organizations.id"]),
        sa.ForeignKeyConstraint(["program_id"], ["programs.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_projects_code"), "projects", ["code"], unique=True)

    op.create_table(
        "project_participations",
        sa.Column("project_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("volunteer_identity_id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.Column("role", sa.String(length=120), nullable=False),
        sa.Column("starts_at", sa.Date(), nullable=True),
        sa.Column("ends_at", sa.Date(), nullable=True),
        sa.Column("status", participation_status, nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("id", postgresql.UUID(as_uuid=True), nullable=False),
        sa.ForeignKeyConstraint(["project_id"], ["projects.id"]),
        sa.ForeignKeyConstraint(["volunteer_identity_id"], ["volunteer_identities.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint(
            "project_id",
            "volunteer_identity_id",
            name="uq_project_participations_project_volunteer",
        ),
    )


def downgrade() -> None:
    op.drop_table("project_participations")
    op.drop_index(op.f("ix_projects_code"), table_name="projects")
    op.drop_table("projects")
    op.drop_table("disciplines")
    op.drop_index(op.f("ix_programs_code"), table_name="programs")
    op.drop_table("programs")

    bind = op.get_bind()
    participation_status.drop(bind, checkfirst=True)
    project_status.drop(bind, checkfirst=True)
    program_status.drop(bind, checkfirst=True)
