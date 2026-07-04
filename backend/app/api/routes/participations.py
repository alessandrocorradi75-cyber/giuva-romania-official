from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enums import UserRole
from app.models.program import ProjectParticipation
from app.schemas.program import ProjectParticipationCreate, ProjectParticipationRead, ProjectParticipationUpdate
from app.security.rbac import require_minimum_role
from app.services.participations import (
    create_participation_record,
    delete_participation_record,
    get_participation_record,
    list_participation_records,
    update_participation_record,
)

router = APIRouter()


@router.get("/", response_model=list[ProjectParticipationRead])
async def read_project_participations(
    project_id: UUID | None = Query(default=None),
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[ProjectParticipation]:
    return await list_participation_records(session, project_id)


@router.post("/", response_model=ProjectParticipationRead, status_code=status.HTTP_201_CREATED)
async def create_project_participation_endpoint(
    payload: ProjectParticipationCreate,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> ProjectParticipation:
    participation = await create_participation_record(session, payload)
    if participation is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid project or volunteer identity reference")
    return participation


@router.get("/{participation_id}", response_model=ProjectParticipationRead)
async def read_project_participation(
    participation_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> ProjectParticipation:
    participation = await get_participation_record(session, participation_id)
    if participation is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project participation not found")
    return participation


@router.patch("/{participation_id}", response_model=ProjectParticipationRead)
async def update_project_participation_endpoint(
    participation_id: UUID,
    payload: ProjectParticipationUpdate,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> ProjectParticipation:
    participation = await get_participation_record(session, participation_id)
    if participation is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project participation not found")
    updated = await update_participation_record(session, participation, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid project or volunteer identity reference")
    return updated


@router.delete("/{participation_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_project_participation_endpoint(
    participation_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    participation = await get_participation_record(session, participation_id)
    if participation is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project participation not found")
    await delete_participation_record(session, participation)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
