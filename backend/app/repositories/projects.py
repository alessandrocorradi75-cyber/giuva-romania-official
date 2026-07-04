from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.program import Project
from app.schemas.program import ProjectCreate, ProjectUpdate


async def list_projects(session: AsyncSession, program_id: UUID | None = None) -> list[Project]:
    statement = select(Project).order_by(Project.title)
    if program_id is not None:
        statement = statement.where(Project.program_id == program_id)
    result = await session.execute(statement)
    return list(result.scalars().all())


async def get_project(session: AsyncSession, project_id: UUID) -> Project | None:
    return await session.get(Project, project_id)


async def create_project(session: AsyncSession, payload: ProjectCreate) -> Project:
    project = Project(**payload.model_dump())
    session.add(project)
    await session.commit()
    await session.refresh(project)
    return project


async def update_project(session: AsyncSession, project: Project, payload: ProjectUpdate) -> Project:
    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(project, key, value)
    await session.commit()
    await session.refresh(project)
    return project


async def delete_project(session: AsyncSession, project: Project) -> None:
    await session.delete(project)
    await session.commit()
