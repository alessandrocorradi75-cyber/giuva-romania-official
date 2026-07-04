from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enums import UserRole
from app.models.program import Discipline
from app.schemas.program import DisciplineCreate, DisciplineRead, DisciplineUpdate
from app.security.rbac import require_minimum_role
from app.services.disciplines import (
    create_discipline_record,
    delete_discipline_record,
    get_discipline_record,
    list_discipline_records,
    update_discipline_record,
)

router = APIRouter()


@router.get("/", response_model=list[DisciplineRead])
async def read_disciplines(
    program_id: UUID | None = Query(default=None),
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[Discipline]:
    return await list_discipline_records(session, program_id)


@router.post("/", response_model=DisciplineRead, status_code=status.HTTP_201_CREATED)
async def create_discipline_endpoint(
    payload: DisciplineCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Discipline:
    discipline = await create_discipline_record(session, payload)
    if discipline is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid program or organization reference")
    return discipline


@router.get("/{discipline_id}", response_model=DisciplineRead)
async def read_discipline(
    discipline_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> Discipline:
    discipline = await get_discipline_record(session, discipline_id)
    if discipline is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discipline not found")
    return discipline


@router.patch("/{discipline_id}", response_model=DisciplineRead)
async def update_discipline_endpoint(
    discipline_id: UUID,
    payload: DisciplineUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Discipline:
    discipline = await get_discipline_record(session, discipline_id)
    if discipline is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discipline not found")
    updated = await update_discipline_record(session, discipline, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid program or organization reference")
    return updated


@router.delete("/{discipline_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_discipline_endpoint(
    discipline_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    discipline = await get_discipline_record(session, discipline_id)
    if discipline is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discipline not found")
    await delete_discipline_record(session, discipline)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
