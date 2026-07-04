from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.organization import VolunteerIdentity
from app.models.program import ProjectParticipation
from app.repositories.participations import (
    create_project_participation,
    delete_project_participation,
    get_project_participation,
    list_project_participations,
    update_project_participation,
)
from app.repositories.projects import get_project
from app.schemas.program import ProjectParticipationCreate, ProjectParticipationUpdate


async def list_participation_records(
    session: AsyncSession,
    project_id: UUID | None = None,
) -> list[ProjectParticipation]:
    return await list_project_participations(session, project_id)


async def get_participation_record(session: AsyncSession, participation_id: UUID) -> ProjectParticipation | None:
    return await get_project_participation(session, participation_id)


async def create_participation_record(
    session: AsyncSession,
    payload: ProjectParticipationCreate,
) -> ProjectParticipation | None:
    if await get_project(session, payload.project_id) is None:
        return None
    if await session.get(VolunteerIdentity, payload.volunteer_identity_id) is None:
        return None
    return await create_project_participation(session, payload)


async def update_participation_record(
    session: AsyncSession,
    participation: ProjectParticipation,
    payload: ProjectParticipationUpdate,
) -> ProjectParticipation | None:
    if payload.project_id is not None and await get_project(session, payload.project_id) is None:
        return None
    if payload.volunteer_identity_id is not None:
        volunteer_identity = await session.get(VolunteerIdentity, payload.volunteer_identity_id)
        if volunteer_identity is None:
            return None
    return await update_project_participation(session, participation, payload)


async def delete_participation_record(session: AsyncSession, participation: ProjectParticipation) -> None:
    await delete_project_participation(session, participation)
