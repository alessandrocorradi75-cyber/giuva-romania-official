from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enums import UserRole
from app.models.organization import Organization
from app.schemas.organization import OrganizationRead
from app.security.rbac import require_minimum_role
from app.services.organizations import get_organization_children, get_organization_or_none, get_organization_tree_root

router = APIRouter()


@router.get("/", response_model=list[OrganizationRead])
async def read_organization_roots(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[Organization]:
    return await get_organization_tree_root(session)


@router.get("/{organization_id}", response_model=OrganizationRead)
async def read_organization(
    organization_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> Organization:
    organization = await get_organization_or_none(session, organization_id)
    if organization is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Organization not found")
    return organization


@router.get("/{organization_id}/children", response_model=list[OrganizationRead])
async def read_organization_children(
    organization_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[Organization]:
    organization = await get_organization_or_none(session, organization_id)
    if organization is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Organization not found")
    return await get_organization_children(session, organization_id)
