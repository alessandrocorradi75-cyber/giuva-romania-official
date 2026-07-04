from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession

from app.models.enterprise_foundation import (
    DonationRecord,
    ManagedEvent,
    ManagedPartner,
    ManagedSponsor,
    MembershipRecord,
    TrainingModule,
    VolunteerCertification,
)
from app.models.organization import Organization, VolunteerIdentity
from app.models.program import Program, Project
from app.models.user import User
from app.repositories import enterprise_foundation as repo
from app.schemas.enterprise_foundation import (
    DonationRecordCreate,
    DonationRecordUpdate,
    ManagedEventCreate,
    ManagedEventUpdate,
    ManagedPartnerCreate,
    ManagedPartnerUpdate,
    ManagedSponsorCreate,
    ManagedSponsorUpdate,
    MembershipRecordCreate,
    MembershipRecordUpdate,
    TrainingModuleCreate,
    TrainingModuleUpdate,
    VolunteerCertificationCreate,
    VolunteerCertificationUpdate,
)


async def _exists(session: AsyncSession, model: type[object], item_id: UUID | None) -> bool:
    if item_id is None:
        return True
    return await session.get(model, item_id) is not None


async def _event_refs_valid(session: AsyncSession, payload: ManagedEventCreate | ManagedEventUpdate) -> bool:
    return (
        await _exists(session, Organization, payload.organization_id)
        and await _exists(session, Program, payload.program_id)
        and await _exists(session, Project, payload.project_id)
    )


async def list_event_records(session: AsyncSession) -> list[ManagedEvent]:
    return await repo.list_events(session)


async def get_event_record(session: AsyncSession, item_id: UUID) -> ManagedEvent | None:
    return await repo.get_event(session, item_id)


async def create_event_record(session: AsyncSession, payload: ManagedEventCreate) -> ManagedEvent | None:
    if not await _event_refs_valid(session, payload):
        return None
    return await repo.create_event(session, payload)


async def update_event_record(session: AsyncSession, item: ManagedEvent, payload: ManagedEventUpdate) -> ManagedEvent | None:
    if not await _event_refs_valid(session, payload):
        return None
    return await repo.update_event(session, item, payload)


async def delete_event_record(session: AsyncSession, item: ManagedEvent) -> None:
    await repo.delete_event(session, item)


async def _training_refs_valid(session: AsyncSession, payload: TrainingModuleCreate | TrainingModuleUpdate) -> bool:
    return await _exists(session, Organization, payload.owner_organization_id) and await _exists(session, Program, payload.program_id)


async def list_training_records(session: AsyncSession) -> list[TrainingModule]:
    return await repo.list_training_modules(session)


async def get_training_record(session: AsyncSession, item_id: UUID) -> TrainingModule | None:
    return await repo.get_training_module(session, item_id)


async def create_training_record(session: AsyncSession, payload: TrainingModuleCreate) -> TrainingModule | None:
    if not await _training_refs_valid(session, payload):
        return None
    return await repo.create_training_module(session, payload)


async def update_training_record(
    session: AsyncSession,
    item: TrainingModule,
    payload: TrainingModuleUpdate,
) -> TrainingModule | None:
    if not await _training_refs_valid(session, payload):
        return None
    return await repo.update_training_module(session, item, payload)


async def delete_training_record(session: AsyncSession, item: TrainingModule) -> None:
    await repo.delete_training_module(session, item)


async def _certification_refs_valid(
    session: AsyncSession,
    payload: VolunteerCertificationCreate | VolunteerCertificationUpdate,
) -> bool:
    return (
        await _exists(session, VolunteerIdentity, payload.volunteer_identity_id)
        and await _exists(session, TrainingModule, payload.training_module_id)
        and await _exists(session, Organization, payload.issuer_organization_id)
    )


async def list_certification_records(session: AsyncSession) -> list[VolunteerCertification]:
    return await repo.list_certifications(session)


async def get_certification_record(session: AsyncSession, item_id: UUID) -> VolunteerCertification | None:
    return await repo.get_certification(session, item_id)


async def create_certification_record(session: AsyncSession, payload: VolunteerCertificationCreate) -> VolunteerCertification | None:
    if not await _certification_refs_valid(session, payload):
        return None
    return await repo.create_certification(session, payload)


async def update_certification_record(
    session: AsyncSession,
    item: VolunteerCertification,
    payload: VolunteerCertificationUpdate,
) -> VolunteerCertification | None:
    if not await _certification_refs_valid(session, payload):
        return None
    return await repo.update_certification(session, item, payload)


async def delete_certification_record(session: AsyncSession, item: VolunteerCertification) -> None:
    await repo.delete_certification(session, item)


async def _organization_ref_valid(session: AsyncSession, organization_id: UUID | None) -> bool:
    return await _exists(session, Organization, organization_id)


async def list_partner_records(session: AsyncSession) -> list[ManagedPartner]:
    return await repo.list_managed_partners(session)


async def get_partner_record(session: AsyncSession, item_id: UUID) -> ManagedPartner | None:
    return await repo.get_managed_partner(session, item_id)


async def create_partner_record(session: AsyncSession, payload: ManagedPartnerCreate) -> ManagedPartner | None:
    if not await _organization_ref_valid(session, payload.organization_id):
        return None
    return await repo.create_managed_partner(session, payload)


async def update_partner_record(session: AsyncSession, item: ManagedPartner, payload: ManagedPartnerUpdate) -> ManagedPartner | None:
    if not await _organization_ref_valid(session, payload.organization_id):
        return None
    return await repo.update_managed_partner(session, item, payload)


async def delete_partner_record(session: AsyncSession, item: ManagedPartner) -> None:
    await repo.delete_managed_partner(session, item)


async def list_sponsor_records(session: AsyncSession) -> list[ManagedSponsor]:
    return await repo.list_managed_sponsors(session)


async def get_sponsor_record(session: AsyncSession, item_id: UUID) -> ManagedSponsor | None:
    return await repo.get_managed_sponsor(session, item_id)


async def create_sponsor_record(session: AsyncSession, payload: ManagedSponsorCreate) -> ManagedSponsor | None:
    if not await _organization_ref_valid(session, payload.organization_id):
        return None
    return await repo.create_managed_sponsor(session, payload)


async def update_sponsor_record(session: AsyncSession, item: ManagedSponsor, payload: ManagedSponsorUpdate) -> ManagedSponsor | None:
    if not await _organization_ref_valid(session, payload.organization_id):
        return None
    return await repo.update_managed_sponsor(session, item, payload)


async def delete_sponsor_record(session: AsyncSession, item: ManagedSponsor) -> None:
    await repo.delete_managed_sponsor(session, item)


async def _donation_refs_valid(session: AsyncSession, payload: DonationRecordCreate | DonationRecordUpdate) -> bool:
    return await _exists(session, Organization, payload.organization_id) and await _exists(session, Project, payload.project_id)


async def list_donation_records(session: AsyncSession) -> list[DonationRecord]:
    return await repo.list_donation_records(session)


async def get_donation_record(session: AsyncSession, item_id: UUID) -> DonationRecord | None:
    return await repo.get_donation_record(session, item_id)


async def create_donation_record(session: AsyncSession, payload: DonationRecordCreate) -> DonationRecord | None:
    if not await _donation_refs_valid(session, payload):
        return None
    return await repo.create_donation_record(session, payload)


async def update_donation_record(session: AsyncSession, item: DonationRecord, payload: DonationRecordUpdate) -> DonationRecord | None:
    if not await _donation_refs_valid(session, payload):
        return None
    return await repo.update_donation_record(session, item, payload)


async def delete_donation_record(session: AsyncSession, item: DonationRecord) -> None:
    await repo.delete_donation_record(session, item)


async def _membership_refs_valid(session: AsyncSession, payload: MembershipRecordCreate | MembershipRecordUpdate) -> bool:
    return await _exists(session, User, payload.user_id) and await _exists(session, Organization, payload.organization_id)


async def list_membership_records(session: AsyncSession) -> list[MembershipRecord]:
    return await repo.list_membership_records(session)


async def list_my_membership_records(session: AsyncSession, user_id: UUID) -> list[MembershipRecord]:
    return await repo.list_membership_records_for_user(session, user_id)


async def get_membership_record(session: AsyncSession, item_id: UUID) -> MembershipRecord | None:
    return await repo.get_membership_record(session, item_id)


async def create_membership_record(session: AsyncSession, payload: MembershipRecordCreate) -> MembershipRecord | None:
    if not await _membership_refs_valid(session, payload):
        return None
    return await repo.create_membership_record(session, payload)


async def update_membership_record(
    session: AsyncSession,
    item: MembershipRecord,
    payload: MembershipRecordUpdate,
) -> MembershipRecord | None:
    if not await _membership_refs_valid(session, payload):
        return None
    return await repo.update_membership_record(session, item, payload)


async def delete_membership_record(session: AsyncSession, item: MembershipRecord) -> None:
    await repo.delete_membership_record(session, item)
