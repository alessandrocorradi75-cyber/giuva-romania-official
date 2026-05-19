from datetime import date, datetime
from decimal import Decimal

from pydantic import EmailStr

from app.models.enums import CampaignStatus, PartnerCategory, Visibility, VolunteerStatus
from app.schemas.common import Timestamped


class VolunteerRead(Timestamped):
    name: str
    email: EmailStr
    phone: str | None
    city: str | None
    status: VolunteerStatus
    training_level: str | None
    qr_code: str | None
    joined_at: datetime | None


class TrainingRead(Timestamped):
    title: str
    provider: str | None
    date: date | None
    certificate: str | None
    expiration: date | None


class EventRead(Timestamped):
    title: str
    location: str | None
    date: datetime | None
    participants: int


class CampaignRead(Timestamped):
    title: str
    goal: Decimal
    raised: Decimal
    status: CampaignStatus
    summary: str | None


class SponsorRead(Timestamped):
    name: str
    type: str | None
    contribution: Decimal
    visibility: Visibility
    website: str | None


class StoryRead(Timestamped):
    title: str
    slug: str
    content: str
    cover_image: str | None
    location: str | None
    author: str | None
    published_at: datetime | None


class PartnerRead(Timestamped):
    name: str
    category: PartnerCategory
    website: str | None
    status: str
    logo: str | None
    visibility: Visibility
