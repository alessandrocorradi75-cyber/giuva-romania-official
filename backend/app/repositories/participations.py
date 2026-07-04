from uuid import UUID

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.program import ProjectParticipation
from app.schemas.program import ProjectParticipationCreate, ProjectParticipationUpdate


async def list_project_participations(
    session: AsyncSession,
    project_id: UUID | None = None,
) -> list[ProjectParticipation]:
    statement = select(ProjectParticipation).order_by(ProjectParticipation.created_at.desc())
    if project_id is not None:
        statement = statement.where(ProjectParticipation.project_id == project_id)
    result = await session.execute(statement)
    return list(result.scalars().all())


async def get_project_participation(
    session: AsyncSession,
    participation_id: UUID,
) -> ProjectParticipation | None:
    return await session.get(ProjectParticipation, participation_id)


async def create_project_participation(
    session: AsyncSession,
    payload: ProjectParticipationCreate,
) -> ProjectParticipation:
    participation = ProjectParticipation(**payload.model_dump())
    session.add(participation)
    await session.commit()
    await session.refresh(participation)
    return participation


async def update_project_participation(
    session: AsyncSession,
    participation: ProjectParticipation,
    payload: ProjectParticipationUpdate,
) -> ProjectParticipation:
    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(participation, key, value)
    await session.commit()
    await session.refresh(participation)
    return participation


async def delete_project_participation(session: AsyncSession, participation: ProjectParticipation) -> None:
    await session.delete(participation)
    await session.commit()
