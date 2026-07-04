from datetime import date, datetime
from decimal import Decimal
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field

from app.models.enums import (
    CertificationStatus,
    DeliveryMode,
    DonationStatus,
    EventType,
    FoundationStatus,
    MembershipStatus,
    MembershipType,
    TrainingLevel,
    Visibility,
)
from app.schemas.common import Timestamped


class ManagedEventBase(BaseModel):
    organization_id: UUID | None = None
    program_id: UUID | None = None
    project_id: UUID | None = None
    title: str = Field(min_length=2, max_length=180)
    description: str | None = None
    event_type: EventType
    status: FoundationStatus = FoundationStatus.PLANNED
    visibility: Visibility = Visibility.PRIVATE
    starts_at: datetime
    ends_at: datetime | None = None
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)
    location: str | None = Field(default=None, max_length=255)
    max_participants: int | None = Field(default=None, ge=1)


class ManagedEventCreate(ManagedEventBase):
    pass


class ManagedEventUpdate(BaseModel):
    organization_id: UUID | None = None
    program_id: UUID | None = None
    project_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    description: str | None = None
    event_type: EventType | None = None
    status: FoundationStatus | None = None
    visibility: Visibility | None = None
    starts_at: datetime | None = None
    ends_at: datetime | None = None
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)
    location: str | None = Field(default=None, max_length=255)
    max_participants: int | None = Field(default=None, ge=1)


class ManagedEventRead(Timestamped, ManagedEventBase):
    pass


class TrainingModuleBase(BaseModel):
    owner_organization_id: UUID | None = None
    program_id: UUID | None = None
    title: str = Field(min_length=2, max_length=180)
    description: str | None = None
    category: str | None = Field(default=None, max_length=120)
    level: TrainingLevel = TrainingLevel.BASIC
    status: FoundationStatus = FoundationStatus.DRAFT
    duration_minutes: int | None = Field(default=None, ge=1)
    delivery_mode: DeliveryMode = DeliveryMode.IN_PERSON


class TrainingModuleCreate(TrainingModuleBase):
    pass


class TrainingModuleUpdate(BaseModel):
    owner_organization_id: UUID | None = None
    program_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    description: str | None = None
    category: str | None = Field(default=None, max_length=120)
    level: TrainingLevel | None = None
    status: FoundationStatus | None = None
    duration_minutes: int | None = Field(default=None, ge=1)
    delivery_mode: DeliveryMode | None = None


class TrainingModuleRead(Timestamped, TrainingModuleBase):
    pass


class VolunteerCertificationBase(BaseModel):
    volunteer_identity_id: UUID
    training_module_id: UUID | None = None
    issuer_organization_id: UUID | None = None
    title: str = Field(min_length=2, max_length=180)
    issued_at: date | None = None
    expires_at: date | None = None
    status: CertificationStatus = CertificationStatus.PENDING


class VolunteerCertificationCreate(VolunteerCertificationBase):
    pass


class VolunteerCertificationUpdate(BaseModel):
    volunteer_identity_id: UUID | None = None
    training_module_id: UUID | None = None
    issuer_organization_id: UUID | None = None
    title: str | None = Field(default=None, min_length=2, max_length=180)
    issued_at: date | None = None
    expires_at: date | None = None
    status: CertificationStatus | None = None


class VolunteerCertificationRead(Timestamped, VolunteerCertificationBase):
    pass


class ManagedPartnerBase(BaseModel):
    organization_id: UUID | None = None
    name: str = Field(min_length=2, max_length=180)
    partner_type: str | None = Field(default=None, max_length=120)
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)
    website: str | None = Field(default=None, max_length=255)
    contact_email: EmailStr | None = None
    status: FoundationStatus = FoundationStatus.DRAFT
    visibility: Visibility = Visibility.PRIVATE


class ManagedPartnerCreate(ManagedPartnerBase):
    pass


class ManagedPartnerUpdate(BaseModel):
    organization_id: UUID | None = None
    name: str | None = Field(default=None, min_length=2, max_length=180)
    partner_type: str | None = Field(default=None, max_length=120)
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)
    website: str | None = Field(default=None, max_length=255)
    contact_email: EmailStr | None = None
    status: FoundationStatus | None = None
    visibility: Visibility | None = None


class ManagedPartnerRead(Timestamped, ManagedPartnerBase):
    pass


class ManagedSponsorBase(BaseModel):
    organization_id: UUID | None = None
    name: str = Field(min_length=2, max_length=180)
    sponsor_type: str | None = Field(default=None, max_length=120)
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)
    website: str | None = Field(default=None, max_length=255)
    contact_email: EmailStr | None = None
    status: FoundationStatus = FoundationStatus.DRAFT
    visibility: Visibility = Visibility.PRIVATE


class ManagedSponsorCreate(ManagedSponsorBase):
    pass


class ManagedSponsorUpdate(BaseModel):
    organization_id: UUID | None = None
    name: str | None = Field(default=None, min_length=2, max_length=180)
    sponsor_type: str | None = Field(default=None, max_length=120)
    country_code: str | None = Field(default=None, min_length=2, max_length=2)
    city: str | None = Field(default=None, max_length=120)
    website: str | None = Field(default=None, max_length=255)
    contact_email: EmailStr | None = None
    status: FoundationStatus | None = None
    visibility: Visibility | None = None


class ManagedSponsorRead(Timestamped, ManagedSponsorBase):
    pass


class DonationRecordBase(BaseModel):
    organization_id: UUID
    project_id: UUID | None = None
    donor_name: str | None = Field(default=None, max_length=180)
    donor_email: EmailStr | None = None
    amount: Decimal = Field(gt=0)
    currency: str = Field(default="EUR", min_length=3, max_length=3)
    status: DonationStatus = DonationStatus.PLEDGED
    purpose: str | None = Field(default=None, max_length=255)


class DonationRecordCreate(DonationRecordBase):
    pass


class DonationRecordUpdate(BaseModel):
    organization_id: UUID | None = None
    project_id: UUID | None = None
    donor_name: str | None = Field(default=None, max_length=180)
    donor_email: EmailStr | None = None
    amount: Decimal | None = Field(default=None, gt=0)
    currency: str | None = Field(default=None, min_length=3, max_length=3)
    status: DonationStatus | None = None
    purpose: str | None = Field(default=None, max_length=255)


class DonationRecordRead(Timestamped, DonationRecordBase):
    pass


class MembershipRecordBase(BaseModel):
    user_id: UUID
    organization_id: UUID
    membership_type: MembershipType
    status: MembershipStatus = MembershipStatus.ACTIVE
    starts_at: date | None = None
    ends_at: date | None = None
    notes: str | None = None


class MembershipRecordCreate(MembershipRecordBase):
    pass


class MembershipRecordUpdate(BaseModel):
    user_id: UUID | None = None
    organization_id: UUID | None = None
    membership_type: MembershipType | None = None
    status: MembershipStatus | None = None
    starts_at: date | None = None
    ends_at: date | None = None
    notes: str | None = None


class MembershipRecordRead(Timestamped, MembershipRecordBase):
    pass
