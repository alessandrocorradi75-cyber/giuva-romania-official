from collections.abc import Callable

from fastapi import Depends, HTTPException, status

from app.models.enums import UserRole
from app.models.user import User
from app.security.dependencies import get_current_active_user

ROLE_LEVELS: dict[UserRole, int] = {
    UserRole.PUBLIC: 0,
    UserRole.VOLUNTEER: 10,
    UserRole.COORDINATOR: 20,
    UserRole.ADMIN: 30,
}


def require_roles(*allowed_roles: UserRole) -> Callable[[User], User]:
    allowed = set(allowed_roles)

    def dependency(current_user: User = Depends(get_current_active_user)) -> User:
        if current_user.role not in allowed:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient permissions",
            )
        return current_user

    return dependency


def require_minimum_role(required_role: UserRole) -> Callable[[User], User]:
    required_level = ROLE_LEVELS[required_role]

    def dependency(current_user: User = Depends(get_current_active_user)) -> User:
        if ROLE_LEVELS[current_user.role] < required_level:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient permissions",
            )
        return current_user

    return dependency
