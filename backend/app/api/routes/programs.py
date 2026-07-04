from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enums import UserRole
from app.models.program import Program
from app.schemas.program import ProgramCreate, ProgramRead, ProgramUpdate
from app.security.rbac import require_minimum_role
from app.services.programs import (
    create_program_record,
    delete_program_record,
    get_program_record,
    list_program_records,
    update_program_record,
)

router = APIRouter()


@router.get("/", response_model=list[ProgramRead])
async def read_programs(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[Program]:
    return await list_program_records(session)


@router.post("/", response_model=ProgramRead, status_code=status.HTTP_201_CREATED)
async def create_program_endpoint(
    payload: ProgramCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Program:
    program = await create_program_record(session, payload)
    if program is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid organization reference")
    return program


@router.get("/{program_id}", response_model=ProgramRead)
async def read_program(
    program_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> Program:
    program = await get_program_record(session, program_id)
    if program is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Program not found")
    return program


@router.patch("/{program_id}", response_model=ProgramRead)
async def update_program_endpoint(
    program_id: UUID,
    payload: ProgramUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Program:
    program = await get_program_record(session, program_id)
    if program is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Program not found")
    updated = await update_program_record(session, program, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid organization reference")
    return updated


@router.delete("/{program_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_program_endpoint(
    program_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    program = await get_program_record(session, program_id)
    if program is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Program not found")
    await delete_program_record(session, program)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
