from fastapi import APIRouter, HTTPException, status

from app.core.security import create_access_token
from app.models.enums import UserRole
from app.schemas.auth import LoginRequest, Token

router = APIRouter()


@router.post("/login", response_model=Token)
async def login(payload: LoginRequest) -> Token:
    if not payload.email or not payload.password:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Missing credentials")

    token = create_access_token(
        subject=payload.email,
        claims={"role": UserRole.PUBLIC.value},
    )
    return Token(access_token=token)
