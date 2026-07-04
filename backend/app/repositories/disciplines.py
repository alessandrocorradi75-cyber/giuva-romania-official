from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.program import Discipline
from app.schemas.program import DisciplineCreate, DisciplineUpdate


async def list_disciplines(session: AsyncSession, program_id: UUID | None = None) -> list[Discipline]:
    statement = select(Discipline).order_by(Discipline.name)
    if program_id is not None:
        statement = statement.where(Discipline.program_id == program_id)
    result = await session.execute(statement)
    return list(result.scalars().all())


async def get_discipline(session: AsyncSession, discipline_id: UUID) -> Discipline | None:
    return await session.get(Discipline, discipline_id)


async def create_discipline(session: AsyncSession, payload: DisciplineCreate) -> Discipline:
    discipline = Discipline(**payload.model_dump())
    session.add(discipline)
    await session.commit()
    await session.refresh(discipline)
    return discipline


async def update_discipline(session: AsyncSession, discipline: Discipline, payload: DisciplineUpdate) -> Discipline:
    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(discipline, key, value)
    await session.commit()
    await session.refresh(discipline)
    return discipline


async def delete_discipline(session: AsyncSession, discipline: Discipline) -> None:
    await session.delete(discipline)
    await session.commit()
