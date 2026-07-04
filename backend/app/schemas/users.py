from uuid import UUID

from pydantic import EmailStr

from app.models.enums import UserRole
from app.schemas.common import Timestamped


class UserRead(Timestamped):
    email: EmailStr
    role: UserRole
    is_active: bool


class UserMembershipSummary(Timestamped):
    organization_id: UUID
    role: UserRole
    title: str | None
    is_primary: bool
