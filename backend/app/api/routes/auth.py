from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.user import User
from app.schemas.auth import AuthenticatedUser, LoginRequest, Token
from app.security.dependencies import get_current_active_user
from app.services.auth import authenticate_user, create_user_access_token

router = APIRouter()


@router.post("/login", response_model=Token)
async def login(payload: LoginRequest, session: AsyncSession = Depends(get_session)) -> Token:
    user = await authenticate_user(session, payload.email, payload.password)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not user.is_active:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Inactive user")

    return Token(access_token=create_user_access_token(user))


@router.get("/me", response_model=AuthenticatedUser)
async def read_current_user(current_user: User = Depends(get_current_active_user)) -> User:
    return current_user
