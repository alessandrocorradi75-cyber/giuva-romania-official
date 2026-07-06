"""Federated core node architecture contracts."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Mapping, Sequence


class CoreNodeRole(str, Enum):
    """Supported roles for the central GIUVA federation layer."""

    FEDERATION_COORDINATOR = "federation_coordinator"
    CONFIGURATION_AUTHORITY = "configuration_authority"
    REGISTRY_AUTHORITY = "registry_authority"
    SYNCHRONIZATION_COORDINATOR = "synchronization_coordinator"


@dataclass(frozen=True)
class CoreNodeIdentity:
    """Stable identity for the central GIUVA platform node."""

    node_id: str
    name: str
    canonical_region: str = "EU"
    roles: Sequence[CoreNodeRole] = field(default_factory=tuple)


@dataclass(frozen=True)
class CoreFederationBoundary:
    """Defines what the core may coordinate without owning local operations."""

    owns_global_configuration: bool = True
    owns_module_registry: bool = True
    owns_node_registry: bool = True
    owns_local_operational_data: bool = False
    exposes_public_operational_api: bool = False


@dataclass(frozen=True)
class CoreArchitectureProfile:
    """Read-only profile describing the core architecture contract."""

    identity: CoreNodeIdentity
    boundary: CoreFederationBoundary
    supported_country_nodes: Sequence[str] = field(default_factory=tuple)
    metadata: Mapping[str, str] = field(default_factory=dict)
