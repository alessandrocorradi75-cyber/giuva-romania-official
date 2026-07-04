from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.program import Discipline
from app.repositories.disciplines import (
    create_discipline,
    delete_discipline,
    get_discipline,
    list_disciplines,
    update_discipline,
)
from app.repositories.organizations import get_organization_by_id
from app.repositories.programs import get_program
from app.schemas.program import DisciplineCreate, DisciplineUpdate


async def list_discipline_records(session: AsyncSession, program_id: UUID | None = None) -> list[Discipline]:
    return await list_disciplines(session, program_id)


async def get_discipline_record(session: AsyncSession, discipline_id: UUID) -> Discipline | None:
    return await get_discipline(session, discipline_id)


async def create_discipline_record(session: AsyncSession, payload: DisciplineCreate) -> Discipline | None:
    if await get_program(session, payload.program_id) is None:
        return None
    if payload.owner_organization_id is not None:
        organization = await get_organization_by_id(session, payload.owner_organization_id)
        if organization is None:
            return None
    return await create_discipline(session, payload)


async def update_discipline_record(
    session: AsyncSession,
    discipline: Discipline,
    payload: DisciplineUpdate,
) -> Discipline | None:
    if payload.program_id is not None and await get_program(session, payload.program_id) is None:
        return None
    if payload.owner_organization_id is not None:
        organization = await get_organization_by_id(session, payload.owner_organization_id)
        if organization is None:
            return None
    return await update_discipline(session, discipline, payload)


async def delete_discipline_record(session: AsyncSession, discipline: Discipline) -> None:
    await delete_discipline(session, discipline)
