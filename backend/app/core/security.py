from datetime import UTC, datetime, timedelta
from typing import Any

from app.core.config import settings


def _password_context() -> object:
    from passlib.context import CryptContext

    return CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return _password_context().verify(plain_password, hashed_password)


def hash_password(password: str) -> str:
    return _password_context().hash(password)


def create_access_token(subject: str, claims: dict[str, Any] | None = None) -> str:
    from jose import jwt

    expires_at = datetime.now(UTC) + timedelta(minutes=settings.access_token_expire_minutes)
    payload: dict[str, Any] = {"sub": subject, "exp": expires_at}
    if claims:
        payload.update(claims)
    return jwt.encode(payload, settings.jwt_secret_key, algorithm=settings.jwt_algorithm)


def decode_access_token(token: str) -> dict[str, Any] | None:
    from jose import JWTError, jwt

    try:
        return jwt.decode(token, settings.jwt_secret_key, algorithms=[settings.jwt_algorithm])
    except JWTError:
        return None
