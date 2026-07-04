from uuid import UUID

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.security import decode_access_token
from app.db.session import get_session
from app.models.enums import UserRole
from app.models.user import User
from app.repositories.users import get_user_by_id
from app.schemas.auth import TokenPayload

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.api_v1_prefix}/auth/login")

credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    session: AsyncSession = Depends(get_session),
) -> User:
    payload = decode_access_token(token)
    if payload is None:
        raise credentials_exception

    try:
        token_payload = TokenPayload(sub=UUID(str(payload.get("sub"))), role=UserRole(payload.get("role")))
    except (TypeError, ValueError):
        raise credentials_exception from None

    user = await get_user_by_id(session, token_payload.sub)
    if user is None:
        raise credentials_exception

    if user.role != token_payload.role:
        raise credentials_exception

    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)) -> User:
    if not current_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Inactive user",
        )
    return current_user
