from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enums import UserRole
from app.models.user import User
from app.schemas.organization import OrganizationMembershipRead, VolunteerIdentityRead
from app.schemas.users import UserRead
from app.security.dependencies import get_current_active_user
from app.security.rbac import require_minimum_role
from app.services.organizations import get_user_membership_summary, get_user_volunteer_identity
from app.services.users import get_managed_user, list_managed_users

router = APIRouter()


@router.get("/", response_model=list[UserRead])
async def read_users(
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> list[User]:
    return await list_managed_users(session)


@router.get("/me/memberships", response_model=list[OrganizationMembershipRead])
async def read_my_memberships(
    current_user: User = Depends(get_current_active_user),
    session: AsyncSession = Depends(get_session),
) -> list[object]:
    return await get_user_membership_summary(session, current_user.id)


@router.get("/me/volunteer-identity", response_model=VolunteerIdentityRead | None)
async def read_my_volunteer_identity(
    current_user: User = Depends(get_current_active_user),
    session: AsyncSession = Depends(get_session),
) -> object | None:
    return await get_user_volunteer_identity(session, current_user.id)


@router.get("/{user_id}", response_model=UserRead)
async def read_user(
    user_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> User:
    user = await get_managed_user(session, user_id)
    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user
