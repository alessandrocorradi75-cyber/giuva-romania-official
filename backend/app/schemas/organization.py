from uuid import UUID

from app.models.enums import MembershipStatus, OrganizationType, UserRole, VolunteerStatus
from app.schemas.common import Timestamped


class OrganizationRead(Timestamped):
    parent_id: UUID | None
    type: OrganizationType
    code: str
    name: str
    legal_name: str | None
    country_code: str | None
    region: str | None
    city: str | None
    timezone: str | None
    description: str | None
    is_active: bool


class OrganizationMembershipRead(Timestamped):
    user_id: UUID
    organization_id: UUID
    role: UserRole
    status: MembershipStatus
    title: str | None
    is_primary: bool


class VolunteerIdentityRead(Timestamped):
    user_id: UUID
    primary_organization_id: UUID | None
    volunteer_code: str
    display_name: str
    country_code: str | None
    region: str | None
    city: str | None
    status: VolunteerStatus
