from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_session
from app.models.enterprise_foundation import (
    DonationRecord,
    ManagedEvent,
    ManagedPartner,
    ManagedSponsor,
    MembershipRecord,
    TrainingModule,
    VolunteerCertification,
)
from app.models.enums import UserRole
from app.models.user import User
from app.schemas.enterprise_foundation import (
    DonationRecordCreate,
    DonationRecordRead,
    DonationRecordUpdate,
    ManagedEventCreate,
    ManagedEventRead,
    ManagedEventUpdate,
    ManagedPartnerCreate,
    ManagedPartnerRead,
    ManagedPartnerUpdate,
    ManagedSponsorCreate,
    ManagedSponsorRead,
    ManagedSponsorUpdate,
    MembershipRecordCreate,
    MembershipRecordRead,
    MembershipRecordUpdate,
    TrainingModuleCreate,
    TrainingModuleRead,
    TrainingModuleUpdate,
    VolunteerCertificationCreate,
    VolunteerCertificationRead,
    VolunteerCertificationUpdate,
)
from app.security.dependencies import get_current_active_user
from app.security.rbac import require_minimum_role
from app.services import enterprise_foundation as service

events_router = APIRouter()
training_router = APIRouter()
certifications_router = APIRouter()
partners_router = APIRouter()
sponsors_router = APIRouter()
donations_router = APIRouter()
memberships_router = APIRouter()


@events_router.get("/", response_model=list[ManagedEventRead])
async def read_events(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[ManagedEvent]:
    return await service.list_event_records(session)


@events_router.post("/", response_model=ManagedEventRead, status_code=status.HTTP_201_CREATED)
async def create_event(
    payload: ManagedEventCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ManagedEvent:
    item = await service.create_event_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid event reference")
    return item


@events_router.get("/{item_id}", response_model=ManagedEventRead)
async def read_event(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> ManagedEvent:
    item = await service.get_event_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Event not found")
    return item


@events_router.patch("/{item_id}", response_model=ManagedEventRead)
async def update_event(
    item_id: UUID,
    payload: ManagedEventUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ManagedEvent:
    item = await service.get_event_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Event not found")
    updated = await service.update_event_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid event reference")
    return updated


@events_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_event(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_event_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Event not found")
    await service.delete_event_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@training_router.get("/", response_model=list[TrainingModuleRead])
async def read_training_modules(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[TrainingModule]:
    return await service.list_training_records(session)


@training_router.post("/", response_model=TrainingModuleRead, status_code=status.HTTP_201_CREATED)
async def create_training_module(
    payload: TrainingModuleCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> TrainingModule:
    item = await service.create_training_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid training reference")
    return item


@training_router.get("/{item_id}", response_model=TrainingModuleRead)
async def read_training_module(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> TrainingModule:
    item = await service.get_training_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Training module not found")
    return item


@training_router.patch("/{item_id}", response_model=TrainingModuleRead)
async def update_training_module(
    item_id: UUID,
    payload: TrainingModuleUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> TrainingModule:
    item = await service.get_training_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Training module not found")
    updated = await service.update_training_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid training reference")
    return updated


@training_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_training_module(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_training_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Training module not found")
    await service.delete_training_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@certifications_router.get("/", response_model=list[VolunteerCertificationRead])
async def read_certifications(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[VolunteerCertification]:
    return await service.list_certification_records(session)


@certifications_router.post("/", response_model=VolunteerCertificationRead, status_code=status.HTTP_201_CREATED)
async def create_certification(
    payload: VolunteerCertificationCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> VolunteerCertification:
    item = await service.create_certification_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid certification reference")
    return item


@certifications_router.get("/{item_id}", response_model=VolunteerCertificationRead)
async def read_certification(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> VolunteerCertification:
    item = await service.get_certification_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Certification not found")
    return item


@certifications_router.patch("/{item_id}", response_model=VolunteerCertificationRead)
async def update_certification(
    item_id: UUID,
    payload: VolunteerCertificationUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> VolunteerCertification:
    item = await service.get_certification_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Certification not found")
    updated = await service.update_certification_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid certification reference")
    return updated


@certifications_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_certification(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_certification_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Certification not found")
    await service.delete_certification_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)

@partners_router.get("/", response_model=list[ManagedPartnerRead])
async def read_managed_partners(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[ManagedPartner]:
    return await service.list_partner_records(session)


@partners_router.post("/", response_model=ManagedPartnerRead, status_code=status.HTTP_201_CREATED)
async def create_managed_partner(
    payload: ManagedPartnerCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ManagedPartner:
    item = await service.create_partner_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid partner reference")
    return item


@partners_router.get("/{item_id}", response_model=ManagedPartnerRead)
async def read_managed_partner(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> ManagedPartner:
    item = await service.get_partner_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Partner not found")
    return item


@partners_router.patch("/{item_id}", response_model=ManagedPartnerRead)
async def update_managed_partner(
    item_id: UUID,
    payload: ManagedPartnerUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ManagedPartner:
    item = await service.get_partner_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Partner not found")
    updated = await service.update_partner_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid partner reference")
    return updated


@partners_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_managed_partner(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_partner_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Partner not found")
    await service.delete_partner_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@sponsors_router.get("/", response_model=list[ManagedSponsorRead])
async def read_managed_sponsors(
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> list[ManagedSponsor]:
    return await service.list_sponsor_records(session)


@sponsors_router.post("/", response_model=ManagedSponsorRead, status_code=status.HTTP_201_CREATED)
async def create_managed_sponsor(
    payload: ManagedSponsorCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ManagedSponsor:
    item = await service.create_sponsor_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid sponsor reference")
    return item


@sponsors_router.get("/{item_id}", response_model=ManagedSponsorRead)
async def read_managed_sponsor(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ManagedSponsor:
    item = await service.get_sponsor_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Sponsor not found")
    return item


@sponsors_router.patch("/{item_id}", response_model=ManagedSponsorRead)
async def update_managed_sponsor(
    item_id: UUID,
    payload: ManagedSponsorUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> ManagedSponsor:
    item = await service.get_sponsor_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Sponsor not found")
    updated = await service.update_sponsor_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid sponsor reference")
    return updated


@sponsors_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_managed_sponsor(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_sponsor_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Sponsor not found")
    await service.delete_sponsor_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@donations_router.get("/", response_model=list[DonationRecordRead])
async def read_donations(
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> list[DonationRecord]:
    return await service.list_donation_records(session)


@donations_router.post("/", response_model=DonationRecordRead, status_code=status.HTTP_201_CREATED)
async def create_donation(
    payload: DonationRecordCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> DonationRecord:
    item = await service.create_donation_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid donation reference")
    return item


@donations_router.get("/{item_id}", response_model=DonationRecordRead)
async def read_donation(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> DonationRecord:
    item = await service.get_donation_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Donation not found")
    return item


@donations_router.patch("/{item_id}", response_model=DonationRecordRead)
async def update_donation(
    item_id: UUID,
    payload: DonationRecordUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> DonationRecord:
    item = await service.get_donation_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Donation not found")
    updated = await service.update_donation_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid donation reference")
    return updated


@donations_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_donation(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_donation_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Donation not found")
    await service.delete_donation_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@memberships_router.get("/", response_model=list[MembershipRecordRead])
async def read_memberships(
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> list[MembershipRecord]:
    return await service.list_membership_records(session)


@memberships_router.get("/me", response_model=list[MembershipRecordRead])
async def read_my_memberships(
    current_user: User = Depends(get_current_active_user),
    session: AsyncSession = Depends(get_session),
) -> list[MembershipRecord]:
    return await service.list_my_membership_records(session, current_user.id)


@memberships_router.post("/", response_model=MembershipRecordRead, status_code=status.HTTP_201_CREATED)
async def create_membership(
    payload: MembershipRecordCreate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> MembershipRecord:
    item = await service.create_membership_record(session, payload)
    if item is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid membership reference")
    return item


@memberships_router.get("/{item_id}", response_model=MembershipRecordRead)
async def read_membership(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.COORDINATOR)),
    session: AsyncSession = Depends(get_session),
) -> MembershipRecord:
    item = await service.get_membership_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Membership not found")
    return item


@memberships_router.patch("/{item_id}", response_model=MembershipRecordRead)
async def update_membership(
    item_id: UUID,
    payload: MembershipRecordUpdate,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> MembershipRecord:
    item = await service.get_membership_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Membership not found")
    updated = await service.update_membership_record(session, item, payload)
    if updated is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid membership reference")
    return updated


@memberships_router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_membership(
    item_id: UUID,
    _: object = Depends(require_minimum_role(UserRole.ADMIN)),
    session: AsyncSession = Depends(get_session),
) -> Response:
    item = await service.get_membership_record(session, item_id)
    if item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Membership not found")
    await service.delete_membership_record(session, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)
