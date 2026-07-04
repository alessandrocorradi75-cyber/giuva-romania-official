from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.program import Program
from app.schemas.program import ProgramCreate, ProgramUpdate


async def list_programs(session: AsyncSession) -> list[Program]:
    result = await session.execute(select(Program).order_by(Program.name))
    return list(result.scalars().all())


async def get_program(session: AsyncSession, program_id: UUID) -> Program | None:
    return await session.get(Program, program_id)


async def get_program_by_code(session: AsyncSession, code: str) -> Program | None:
    result = await session.execute(select(Program).where(Program.code == code))
    return result.scalar_one_or_none()


async def create_program(session: AsyncSession, payload: ProgramCreate) -> Program:
    program = Program(**payload.model_dump())
    session.add(program)
    await session.commit()
    await session.refresh(program)
    return program


async def update_program(session: AsyncSession, program: Program, payload: ProgramUpdate) -> Program:
    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(program, key, value)
    await session.commit()
    await session.refresh(program)
    return program


async def delete_program(session: AsyncSession, program: Program) -> None:
    await session.delete(program)
    await session.commit()
