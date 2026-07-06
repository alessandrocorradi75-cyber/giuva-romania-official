"""Federated node registration interfaces."""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone

from backend.app.local_node.node import LocalNodeCapabilities, LocalNodeIdentity


@dataclass(frozen=True)
class NodeRegistrationRequest:
    """Request contract for future local node onboarding."""

    identity: LocalNodeIdentity
    capabilities: LocalNodeCapabilities
    requested_by: str
    requested_at: datetime = field(default_factory=lambda: datetime.now(timezone.utc))


@dataclass(frozen=True)
class NodeRegistrationRecord:
    """Registration state for a local node in the federation registry."""

    request: NodeRegistrationRequest
    approved: bool = False
    approved_by: str | None = None
    approved_at: datetime | None = None


@dataclass
class NodeRegistry:
    """Non-persistent registry for future local node onboarding workflows."""

    _records: dict[str, NodeRegistrationRecord] = field(default_factory=dict)

    def register_request(self, request: NodeRegistrationRequest) -> None:
        self._records[request.identity.node_id] = NodeRegistrationRecord(request=request)

    def get(self, node_id: str) -> NodeRegistrationRecord | None:
        return self._records.get(node_id)

    def list(self) -> tuple[NodeRegistrationRecord, ...]:
        return tuple(self._records.values())
