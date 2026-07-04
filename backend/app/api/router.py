from fastapi import APIRouter

from app.api.routes import (
    auth,
    civil_response,
    disciplines,
    journey,
    organizations,
    participations,
    partners,
    programs,
    project_pulse,
    projects,
    users,
    volunteers,
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(organizations.router, prefix="/organizations", tags=["organizations"])
api_router.include_router(programs.router, prefix="/programs", tags=["programs"])
api_router.include_router(disciplines.router, prefix="/disciplines", tags=["disciplines"])
api_router.include_router(projects.router, prefix="/projects", tags=["projects"])
api_router.include_router(participations.router, prefix="/project-participations", tags=["project-participations"])
api_router.include_router(volunteers.router, prefix="/volunteers", tags=["volunteers"])
api_router.include_router(project_pulse.router, prefix="/project-pulse", tags=["project-pulse"])
api_router.include_router(journey.router, prefix="/journey", tags=["journey"])
api_router.include_router(partners.router, prefix="/partners", tags=["partners"])
api_router.include_router(civil_response.router, prefix="/civil-response", tags=["civil-response"])
