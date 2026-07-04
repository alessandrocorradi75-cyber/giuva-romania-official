from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import User
from app.repositories.users import get_user_by_id, list_users


async def list_managed_users(session: AsyncSession) -> list[User]:
    return await list_users(session)


async def get_managed_user(session: AsyncSession, user_id: UUID) -> User | None:
    return await get_user_by_id(session, user_id)
