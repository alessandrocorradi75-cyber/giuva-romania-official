from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.organization import Organization, OrganizationMembership, VolunteerIdentity


async def list_organizations(session: AsyncSession) -> list[Organization]:
    result = await session.execute(select(Organization).order_by(Organization.type, Organization.name))
    return list(result.scalars().all())


async def get_organization_by_id(session: AsyncSession, organization_id: UUID) -> Organization | None:
    result = await session.execute(select(Organization).where(Organization.id == organization_id))
    return result.scalar_one_or_none()


async def get_organization_by_code(session: AsyncSession, code: str) -> Organization | None:
    result = await session.execute(select(Organization).where(Organization.code == code))
    return result.scalar_one_or_none()


async def list_child_organizations(session: AsyncSession, parent_id: UUID) -> list[Organization]:
    result = await session.execute(
        select(Organization).where(Organization.parent_id == parent_id).order_by(Organization.type, Organization.name)
    )
    return list(result.scalars().all())


async def list_user_memberships(session: AsyncSession, user_id: UUID) -> list[OrganizationMembership]:
    result = await session.execute(
        select(OrganizationMembership)
        .where(OrganizationMembership.user_id == user_id)
        .order_by(OrganizationMembership.is_primary.desc(), OrganizationMembership.created_at.desc())
    )
    return list(result.scalars().all())


async def get_volunteer_identity_by_user_id(session: AsyncSession, user_id: UUID) -> VolunteerIdentity | None:
    result = await session.execute(select(VolunteerIdentity).where(VolunteerIdentity.user_id == user_id))
    return result.scalar_one_or_none()
