"""Module lifecycle contracts."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol

from backend.app.modules.base.manifest import ModuleConfiguration, ModuleHealthCheck, ModuleLifecycleState, ModuleManifest


@dataclass(frozen=True)
class ModuleLifecycleResult:
    """Result returned by lifecycle operations."""

    module_key: str
    state: ModuleLifecycleState
    message: str


class ModuleLifecycle(Protocol):
    """Interface implemented by operational GIUVA modules."""

    manifest: ModuleManifest

    def install(self, configuration: ModuleConfiguration) -> ModuleLifecycleResult:
        """Prepare the module for a node installation."""

    def uninstall(self) -> ModuleLifecycleResult:
        """Remove the module installation from a node."""

    def enable(self) -> ModuleLifecycleResult:
        """Enable the module installation."""

    def disable(self) -> ModuleLifecycleResult:
        """Disable the module installation."""

    def health_check(self) -> ModuleHealthCheck:
        """Return module health without external side effects."""
