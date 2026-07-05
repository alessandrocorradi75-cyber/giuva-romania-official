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

    now = datetime.now(UTC)
    expires_at = now + timedelta(minutes=settings.access_token_expire_minutes)
    payload: dict[str, Any] = {
        "sub": subject,
        "exp": expires_at,
        "iat": now,
        "iss": settings.jwt_issuer,
        "aud": settings.jwt_audience,
        "typ": "access",
    }
    if claims:
        payload.update(claims)
    return jwt.encode(payload, settings.jwt_secret_key, algorithm=settings.jwt_algorithm)


def decode_access_token(token: str) -> dict[str, Any] | None:
    from jose import JWTError, jwt

    try:
        payload = jwt.decode(
            token,
            settings.jwt_secret_key,
            algorithms=[settings.jwt_algorithm],
            issuer=settings.jwt_issuer,
            audience=settings.jwt_audience,
        )
    except JWTError:
        return None

    if payload.get("typ") != "access":
        return None

    return payload
