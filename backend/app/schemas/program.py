from datetime import date
from decimal import Decimal
from uuid import UUID

from pydantic import BaseModel, Field

from app.models.enums import ParticipationStatus, ProgramStatus, ProjectStatus, Visibility
from app.schemas.common import Timestamped


class ProgramBase(BaseModel):
    owner_organization_id: UUID | None = None
    code: str = Field(min_length=2, max_length=80)
    name: str = Field(min_length=2, max_length=180)
    description: str | None = None
    status: ProgramStatus = ProgramStatus.DRAFT
    visibility: Visibility = Visibility.PRIVATE
    country_availability: list[str] = Field(default_factory=list)


class ProgramCreate(ProgramBase):
    pass


class ProgramUpdate(BaseModel):
    owner_organization_id: UUID | None = None
    code: str | None = Field(default=None, min_length=2, max_length=80)
    name: str | None = Field(default=None, min_length=2, max_length=180)
    description: str | None = None
    status: ProgramStatus | None = None
    visibility: Visibility | None = None
    country_availability: list[str] | None = None


class ProgramRead(Timestamped, ProgramBase):
    pass


class DisciplineBase(BaseModel):
    program_id: UUID
    owner_organization_id: UUID | None = None
    code: str = Field(min_length=2, max_length=80)
    name: str = Field(min_length=2, max_length=180)
    description: str | None = None
    status: ProgramStatus = ProgramStatus.DRAFT
    visibility: Visibility = Visibility.PRIVATE
    country_availability: list[str] = Field(default_factory=list)


class DisciplineCreate(DisciplineBase):
    pass


class DisciplineUpdate(BaseModel):
    program_id: UUID | None = None
    owner_organization_id: UUID | None = None
    code: str | None = Field(default=None, min_length=2, max_length=80)
    name: str | None = Field(default=None, min_length=2, max_length=180)
    description: str | None = None
    status: ProgramStatus | None = None
    visibility: Visibility | None = None
    country_availability: list[str] | None = None


class DisciplineRead(Timestamped, DisciplineBase):
    pass


class ProjectBase(BaseModel):
    program_id: UUID
    organization_id: UUID | None = None
    code: str = Field(min_length=2, max_length=80)
    title: str = Field(min_length=2, max_length=180)
    description: str | None = None
    status: ProjectStatus = ProjectStatus.DRAFT
    starts_at: date | None = None
    ends_at: date | None = None
    budget: Decimal | None = None
    visibility: Visibility = Visibility.PRIVATE
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(BaseModel):
    program_id: UUID | None = None
    organization_id: UUID | None = None
    code: str | None = Field(default=None, min_length=2, max_length=80)
    title: str | None = Field(default=None, min_length=2, max_length=180)
    description: str | None = None
    status: ProjectStatus | None = None
    starts_at: date | None = None
    ends_at: date | None = None
    budget: Decimal | None = None
    visibility: Visibility | None = None
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)


class ProjectRead(Timestamped, ProjectBase):
    pass


class ProjectParticipationBase(BaseModel):
    project_id: UUID
    volunteer_identity_id: UUID
    role: str = Field(min_length=2, max_length=120)
    starts_at: date | None = None
    ends_at: date | None = None
    status: ParticipationStatus = ParticipationStatus.ACTIVE


class ProjectParticipationCreate(ProjectParticipationBase):
    pass


class ProjectParticipationUpdate(BaseModel):
    project_id: UUID | None = None
    volunteer_identity_id: UUID | None = None
    role: str | None = Field(default=None, min_length=2, max_length=120)
    starts_at: date | None = None
    ends_at: date | None = None
    status: ParticipationStatus | None = None


class ProjectParticipationRead(Timestamped, ProjectParticipationBase):
    pass
