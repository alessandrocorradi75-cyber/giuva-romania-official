from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.program import Program
from app.repositories.organizations import get_organization_by_id
from app.repositories.programs import create_program, delete_program, get_program, list_programs, update_program
from app.schemas.program import ProgramCreate, ProgramUpdate


async def list_program_records(session: AsyncSession) -> list[Program]:
    return await list_programs(session)


async def get_program_record(session: AsyncSession, program_id: UUID) -> Program | None:
    return await get_program(session, program_id)


async def create_program_record(session: AsyncSession, payload: ProgramCreate) -> Program | None:
    if payload.owner_organization_id is not None:
        organization = await get_organization_by_id(session, payload.owner_organization_id)
        if organization is None:
            return None
    return await create_program(session, payload)


async def update_program_record(session: AsyncSession, program: Program, payload: ProgramUpdate) -> Program | None:
    if payload.owner_organization_id is not None:
        organization = await get_organization_by_id(session, payload.owner_organization_id)
        if organization is None:
            return None
    return await update_program(session, program, payload)


async def delete_program_record(session: AsyncSession, program: Program) -> None:
    await delete_program(session, program)
