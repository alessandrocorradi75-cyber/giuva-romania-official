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


class ProgramStatus(StrEnum):
    DRAFT = "draft"
    ACTIVE = "active"
    PAUSED = "paused"
    ARCHIVED = "archived"


class ProjectStatus(StrEnum):
    DRAFT = "draft"
    PLANNED = "planned"
    ACTIVE = "active"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    ARCHIVED = "archived"


class ParticipationStatus(StrEnum):
    INVITED = "invited"
    ACTIVE = "active"
    PAUSED = "paused"
    COMPLETED = "completed"
    WITHDRAWN = "withdrawn"


class EventType(StrEnum):
    COMMUNITY = "community"
    TRAINING = "training"
    VOLUNTEERING = "volunteering"
    PARTNER = "partner"
    FUNDRAISING = "fundraising"
    GOVERNANCE = "governance"


class FoundationStatus(StrEnum):
    DRAFT = "draft"
    PLANNED = "planned"
    ACTIVE = "active"
    PAUSED = "paused"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    ARCHIVED = "archived"


class TrainingLevel(StrEnum):
    INTRODUCTORY = "introductory"
    BASIC = "basic"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"


class DeliveryMode(StrEnum):
    ONLINE = "online"
    IN_PERSON = "in_person"
    HYBRID = "hybrid"


class CertificationStatus(StrEnum):
    ISSUED = "issued"
    EXPIRED = "expired"
    REVOKED = "revoked"
    PENDING = "pending"


class DonationStatus(StrEnum):
    PLEDGED = "pledged"
    RECEIVED = "received"
    CANCELLED = "cancelled"
    REFUNDED = "refunded"


class MembershipType(StrEnum):
    VOLUNTEER = "volunteer"
    COORDINATOR = "coordinator"
    STAFF = "staff"
    PARTNER = "partner"
    SUPPORTER = "supporter"
