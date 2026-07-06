"""Federated event synchronization contracts."""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from enum import Enum
from typing import Any, Mapping


class SyncEventType(str, Enum):
    """Supported synchronization event families."""

    CONFIGURATION_UPDATED = "configuration_updated"
    MODULE_REGISTERED = "module_registered"
    MODULE_ACTIVATED = "module_activated"
    NODE_REGISTERED = "node_registered"
    NODE_STATUS_CHANGED = "node_status_changed"
    DOMAIN_EVENT = "domain_event"


class SyncEventStatus(str, Enum):
    """Queue state for a future synchronization event."""

    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"


@dataclass(frozen=True)
class SyncEventEnvelope:
    """Transport-neutral synchronization event envelope."""

    event_id: str
    event_type: SyncEventType
    source_node_id: str
    target_node_id: str | None
    occurred_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    payload: Mapping[str, Any] = field(default_factory=dict)
    schema_version: str = "1.0"
