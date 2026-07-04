from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.program import Project
from app.repositories.organizations import get_organization_by_id
from app.repositories.programs import get_program
from app.repositories.projects import create_project, delete_project, get_project, list_projects, update_project
from app.schemas.program import ProjectCreate, ProjectUpdate


async def list_project_records(session: AsyncSession, program_id: UUID | None = None) -> list[Project]:
    return await list_projects(session, program_id)


async def get_project_record(session: AsyncSession, project_id: UUID) -> Project | None:
    return await get_project(session, project_id)


async def create_project_record(session: AsyncSession, payload: ProjectCreate) -> Project | None:
    if await get_program(session, payload.program_id) is None:
        return None
    if payload.organization_id is not None:
        organization = await get_organization_by_id(session, payload.organization_id)
        if organization is None:
            return None
    return await create_project(session, payload)


async def update_project_record(session: AsyncSession, project: Project, payload: ProjectUpdate) -> Project | None:
    if payload.program_id is not None and await get_program(session, payload.program_id) is None:
        return None
    if payload.organization_id is not None:
        organization = await get_organization_by_id(session, payload.organization_id)
        if organization is None:
            return None
    return await update_project(session, project, payload)


async def delete_project_record(session: AsyncSession, project: Project) -> None:
    await delete_project(session, project)
