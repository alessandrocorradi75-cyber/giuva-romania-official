"""Synchronization queue architecture interface.

The queue is intentionally in-memory and does not process events. It defines the
future contract without enabling synchronization behavior.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone

from backend.app.sync.events import SyncEventEnvelope, SyncEventStatus


@dataclass(frozen=True)
class SyncQueueItem:
    """Queue item for a future synchronization worker."""

    event: SyncEventEnvelope
    status: SyncEventStatus = SyncEventStatus.PENDING
    attempts: int = 0
    last_error: str | None = None
    queued_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime | None = None


@dataclass
class InMemorySyncQueue:
    """Minimal queue interface for architecture validation only."""

    _items: list[SyncQueueItem] = field(default_factory=list)

    def enqueue(self, event: SyncEventEnvelope) -> SyncQueueItem:
        item = SyncQueueItem(event=event)
        self._items.append(item)
        return item

    def list_pending(self) -> tuple[SyncQueueItem, ...]:
        return tuple(item for item in self._items if item.status == SyncEventStatus.PENDING)

    def list_all(self) -> tuple[SyncQueueItem, ...]:
        return tuple(self._items)
