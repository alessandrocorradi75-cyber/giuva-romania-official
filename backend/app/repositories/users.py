from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import User


async def list_users(session: AsyncSession) -> list[User]:
    result = await session.execute(select(User).order_by(User.email))
    return list(result.scalars().all())


async def get_user_by_email(session: AsyncSession, email: str) -> User | None:
    statement = select(User).where(User.email.ilike(email))
    result = await session.execute(statement)
    return result.scalar_one_or_none()


async def get_user_by_id(session: AsyncSession, user_id: UUID) -> User | None:
    statement = select(User).where(User.id == user_id)
    result = await session.execute(statement)
    return result.scalar_one_or_none()
