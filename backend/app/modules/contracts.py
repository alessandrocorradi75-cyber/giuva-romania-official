"""Module engine contracts for federated GIUVA capabilities."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Mapping, Protocol, Sequence


class ModuleScope(str, Enum):
    """Operational scope where a module may be enabled."""

    CORE = "core"
    COUNTRY = "country"
    REGION = "region"
    CITY = "city"
    COMMUNITY = "community"


class ModuleStatus(str, Enum):
    """Lifecycle state for module availability."""

    DRAFT = "draft"
    AVAILABLE = "available"
    DEPRECATED = "deprecated"
    DISABLED = "disabled"


@dataclass(frozen=True)
class ModuleDefinition:
    """Static definition of a module that may be enabled in a node."""

    key: str
    name: str
    version: str
    description: str
    supported_scopes: Sequence[ModuleScope] = field(default_factory=tuple)
    dependencies: Sequence[str] = field(default_factory=tuple)
    status: ModuleStatus = ModuleStatus.DRAFT
    metadata: Mapping[str, str] = field(default_factory=dict)


@dataclass(frozen=True)
class ModuleActivation:
    """Node-specific module activation contract."""

    module_key: str
    node_id: str
    enabled: bool = False
    configuration_version: str | None = None


class ModuleEngine(Protocol):
    """Interface expected from future module engine implementations."""

    def list_modules(self) -> Sequence[ModuleDefinition]:
        """Return module definitions known to the engine."""

    def get_module(self, key: str) -> ModuleDefinition | None:
        """Return one module definition by key."""

    def list_activations(self, node_id: str) -> Sequence[ModuleActivation]:
        """Return module activations for a local or core node."""
