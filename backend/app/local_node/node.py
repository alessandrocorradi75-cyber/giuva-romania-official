"""Local node architecture contracts."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Mapping, Sequence


class LocalNodeType(str, Enum):
    """Supported local federation node scopes."""

    COUNTRY = "country"
    REGION = "region"
    CITY = "city"
    COMMUNITY = "community"


class LocalNodeStatus(str, Enum):
    """Registration lifecycle for a local node."""

    DRAFT = "draft"
    PENDING_APPROVAL = "pending_approval"
    ACTIVE = "active"
    SUSPENDED = "suspended"
    ARCHIVED = "archived"


@dataclass(frozen=True)
class LocalNodeIdentity:
    """Identity contract for future country, region, city and community nodes."""

    node_id: str
    name: str
    node_type: LocalNodeType
    country_code: str
    parent_node_id: str | None = None
    status: LocalNodeStatus = LocalNodeStatus.DRAFT
    metadata: Mapping[str, str] = field(default_factory=dict)


@dataclass(frozen=True)
class LocalNodeCapabilities:
    """Declares what a local node can support without activating integrations."""

    modules: Sequence[str] = field(default_factory=tuple)
    locales: Sequence[str] = field(default_factory=tuple)
    accepts_sync_events: bool = False
    publishes_sync_events: bool = False
    public_api_enabled: bool = False
