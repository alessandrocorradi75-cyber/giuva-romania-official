from enum import StrEnum


class UserRole(StrEnum):
    PUBLIC = "public"
    VOLUNTEER = "volunteer"
    COORDINATOR = "coordinator"
    ADMIN = "admin"


class VolunteerStatus(StrEnum):
    APPLIED = "applied"
    ACTIVE = "active"
    PAUSED = "paused"
    SUSPENDED = "suspended"


class CampaignStatus(StrEnum):
    DRAFT = "draft"
    ACTIVE = "active"
    FUNDED = "funded"
    CLOSED = "closed"


class PartnerCategory(StrEnum):
    INSTITUTIONAL = "institutional"
    MEDICAL = "medical"
    HOSPITALITY = "hospitality"
    MEDIA = "media"
    TECHNICAL = "technical"
    MOBILITY = "mobility"


class Visibility(StrEnum):
    PRIVATE = "private"
    PUBLIC = "public"
    FEATURED = "featured"


class OrganizationType(StrEnum):
    EUROPE = "europe"
    COUNTRY = "country"
    REGION = "region"
    CITY = "city"
    COMMUNITY = "community"


class MembershipStatus(StrEnum):
    INVITED = "invited"
    ACTIVE = "active"
    PAUSED = "paused"
    ENDED = "ended"
