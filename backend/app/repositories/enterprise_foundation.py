from typing import TypeVar
from uuid import UUID

from sqlalchemy import select
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

ModelT = TypeVar("ModelT")
PayloadT = TypeVar("PayloadT")


def _apply_updates(instance: ModelT, payload: PayloadT) -> ModelT:
    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(instance, key, value)
    return instance


async def _list(session: AsyncSession, model: type[ModelT], order_field: object) -> list[ModelT]:
    result = await session.execute(select(model).order_by(order_field))
    return list(result.scalars().all())


async def _create(session: AsyncSession, model: type[ModelT], payload: PayloadT) -> ModelT:
    instance = model(**payload.model_dump())
    session.add(instance)
    await session.commit()
    await session.refresh(instance)
    return instance


async def _update(session: AsyncSession, instance: ModelT, payload: PayloadT) -> ModelT:
    _apply_updates(instance, payload)
    await session.commit()
    await session.refresh(instance)
    return instance


async def _delete(session: AsyncSession, instance: object) -> None:
    await session.delete(instance)
    await session.commit()


async def list_events(session: AsyncSession) -> list[ManagedEvent]:
    return await _list(session, ManagedEvent, ManagedEvent.starts_at)


async def get_event(session: AsyncSession, item_id: UUID) -> ManagedEvent | None:
    return await session.get(ManagedEvent, item_id)


async def create_event(session: AsyncSession, payload: ManagedEventCreate) -> ManagedEvent:
    return await _create(session, ManagedEvent, payload)


async def update_event(session: AsyncSession, item: ManagedEvent, payload: ManagedEventUpdate) -> ManagedEvent:
    return await _update(session, item, payload)


async def delete_event(session: AsyncSession, item: ManagedEvent) -> None:
    await _delete(session, item)


async def list_training_modules(session: AsyncSession) -> list[TrainingModule]:
    return await _list(session, TrainingModule, TrainingModule.title)


async def get_training_module(session: AsyncSession, item_id: UUID) -> TrainingModule | None:
    return await session.get(TrainingModule, item_id)


async def create_training_module(session: AsyncSession, payload: TrainingModuleCreate) -> TrainingModule:
    return await _create(session, TrainingModule, payload)


async def update_training_module(session: AsyncSession, item: TrainingModule, payload: TrainingModuleUpdate) -> TrainingModule:
    return await _update(session, item, payload)


async def delete_training_module(session: AsyncSession, item: TrainingModule) -> None:
    await _delete(session, item)


async def list_certifications(session: AsyncSession) -> list[VolunteerCertification]:
    return await _list(session, VolunteerCertification, VolunteerCertification.created_at.desc())


async def get_certification(session: AsyncSession, item_id: UUID) -> VolunteerCertification | None:
    return await session.get(VolunteerCertification, item_id)


async def create_certification(session: AsyncSession, payload: VolunteerCertificationCreate) -> VolunteerCertification:
    return await _create(session, VolunteerCertification, payload)


async def update_certification(
    session: AsyncSession,
    item: VolunteerCertification,
    payload: VolunteerCertificationUpdate,
) -> VolunteerCertification:
    return await _update(session, item, payload)


async def delete_certification(session: AsyncSession, item: VolunteerCertification) -> None:
    await _delete(session, item)


async def list_managed_partners(session: AsyncSession) -> list[ManagedPartner]:
    return await _list(session, ManagedPartner, ManagedPartner.name)


async def get_managed_partner(session: AsyncSession, item_id: UUID) -> ManagedPartner | None:
    return await session.get(ManagedPartner, item_id)


async def create_managed_partner(session: AsyncSession, payload: ManagedPartnerCreate) -> ManagedPartner:
    return await _create(session, ManagedPartner, payload)


async def update_managed_partner(session: AsyncSession, item: ManagedPartner, payload: ManagedPartnerUpdate) -> ManagedPartner:
    return await _update(session, item, payload)


async def delete_managed_partner(session: AsyncSession, item: ManagedPartner) -> None:
    await _delete(session, item)


async def list_managed_sponsors(session: AsyncSession) -> list[ManagedSponsor]:
    return await _list(session, ManagedSponsor, ManagedSponsor.name)


async def get_managed_sponsor(session: AsyncSession, item_id: UUID) -> ManagedSponsor | None:
    return await session.get(ManagedSponsor, item_id)


async def create_managed_sponsor(session: AsyncSession, payload: ManagedSponsorCreate) -> ManagedSponsor:
    return await _create(session, ManagedSponsor, payload)


async def update_managed_sponsor(session: AsyncSession, item: ManagedSponsor, payload: ManagedSponsorUpdate) -> ManagedSponsor:
    return await _update(session, item, payload)


async def delete_managed_sponsor(session: AsyncSession, item: ManagedSponsor) -> None:
    await _delete(session, item)


async def list_donation_records(session: AsyncSession) -> list[DonationRecord]:
    return await _list(session, DonationRecord, DonationRecord.created_at.desc())


async def get_donation_record(session: AsyncSession, item_id: UUID) -> DonationRecord | None:
    return await session.get(DonationRecord, item_id)


async def create_donation_record(session: AsyncSession, payload: DonationRecordCreate) -> DonationRecord:
    return await _create(session, DonationRecord, payload)


async def update_donation_record(session: AsyncSession, item: DonationRecord, payload: DonationRecordUpdate) -> DonationRecord:
    return await _update(session, item, payload)


async def delete_donation_record(session: AsyncSession, item: DonationRecord) -> None:
    await _delete(session, item)


async def list_membership_records(session: AsyncSession) -> list[MembershipRecord]:
    return await _list(session, MembershipRecord, MembershipRecord.created_at.desc())


async def list_membership_records_for_user(session: AsyncSession, user_id: UUID) -> list[MembershipRecord]:
    result = await session.execute(
        select(MembershipRecord).where(MembershipRecord.user_id == user_id).order_by(MembershipRecord.created_at.desc())
    )
    return list(result.scalars().all())


async def get_membership_record(session: AsyncSession, item_id: UUID) -> MembershipRecord | None:
    return await session.get(MembershipRecord, item_id)


async def create_membership_record(session: AsyncSession, payload: MembershipRecordCreate) -> MembershipRecord:
    return await _create(session, MembershipRecord, payload)


async def update_membership_record(
    session: AsyncSession,
    item: MembershipRecord,
    payload: MembershipRecordUpdate,
) -> MembershipRecord:
    return await _update(session, item, payload)


async def delete_membership_record(session: AsyncSession, item: MembershipRecord) -> None:
    await _delete(session, item)
