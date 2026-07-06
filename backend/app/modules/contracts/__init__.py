"""Module engine contracts for federated GIUVA capabilities."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol, Sequence

from backend.app.modules.base import ModuleDefinition, ModuleManifest, ModuleScope, ModuleStatus
from backend.app.modules.contracts.api import ModuleApiContract, ModuleApiOperation
from backend.app.modules.contracts.provider import ModuleProvider


@dataclass(frozen=True)
class ModuleActivation:
    """Node-specific module activation contract."""

    module_key: str
    node_id: str
    enabled: bool = False
    configuration_version: str | None = None


class ModuleEngine(Protocol):
    """Interface expected from module engine implementations."""

    def list_modules(self) -> Sequence[ModuleDefinition]:
        """Return module definitions known to the engine."""

    def get_module(self, key: str) -> ModuleDefinition | None:
        """Return one module definition by key."""

    def list_activations(self, node_id: str) -> Sequence[ModuleActivation]:
        """Return module activations for a local or core node."""


__all__ = [
    "ModuleActivation",
    "ModuleApiContract",
    "ModuleApiOperation",
    "ModuleDefinition",
    "ModuleEngine",
    "ModuleManifest",
    "ModuleProvider",
    "ModuleScope",
    "ModuleStatus",
]
