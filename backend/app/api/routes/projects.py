from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enums import UserRole
from app.models.program import Project
from app.schemas.program import ProjectCreate, ProjectRead, ProjectUpdate
from app.security.rbac import require_minimum_role
from app.services.projects import (
    create_project_record,
    delete_project_record,
    get_project_record,
    list_project_records,
    update_project_record,
)

router = APIRouter()


@router.get("/", response_model=list[ProjectRead])
async def read_projects(
    program_id: UUID | None = Query(default=None),
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[Project]:
    return await list_project_records(session, program_id)


@router.post("/", response_model=ProjectRead, status_code=status.HTTP_201_CREATED)
async def create_project_endpoint(
    payload: ProjectCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Project:
    project = await create_project_record(session, payload)
    if project is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid program or organization reference")
    return project


@router.get("/{project_id}", response_model=ProjectRead)
async def read_project(
    project_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> Project:
    project = await get_project_record(session, project_id)
    if project is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    return project


@router.patch("/{project_id}", response_model=ProjectRead)
async def update_project_endpoint(
    project_id: UUID,
    payload: ProjectUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Project:
    project = await get_project_record(session, project_id)
    if project is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    updated = await update_project_record(session, project, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid program or organization reference")
    return updated


@router.delete("/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_project_endpoint(
    project_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    project = await get_project_record(session, project_id)
    if project is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    await delete_project_record(session, project)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
