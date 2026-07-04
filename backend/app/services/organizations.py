from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.organization import Organization, OrganizationMembership, VolunteerIdentity
from app.repositories.organizations import (
    get_organization_by_id,
    get_volunteer_identity_by_user_id,
    list_child_organizations,
    list_organizations,
    list_user_memberships,
)


async def get_organization_tree_root(session: AsyncSession) -> list[Organization]:
    organizations = await list_organizations(session)
    return [organization for organization in organizations if organization.parent_id is None]


async def get_organization_or_none(session: AsyncSession, organization_id: UUID) -> Organization | None:
    return await get_organization_by_id(session, organization_id)


async def get_organization_children(session: AsyncSession, organization_id: UUID) -> list[Organization]:
    return await list_child_organizations(session, organization_id)


async def get_user_membership_summary(session: AsyncSession, user_id: UUID) -> list[OrganizationMembership]:
    return await list_user_memberships(session, user_id)


async def get_user_volunteer_identity(session: AsyncSession, user_id: UUID) -> VolunteerIdentity | None:
    return await get_volunteer_identity_by_user_id(session, user_id)
