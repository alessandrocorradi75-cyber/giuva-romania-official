"""Operational module provider contract."""

from __future__ import annotations

from typing import Protocol, Sequence

from backend.app.modules.base import ModuleConfiguration, ModuleHealthCheck, ModuleLifecycleResult, ModuleManifest
from backend.app.modules.contracts.api import ModuleApiContract


class ModuleProvider(Protocol):
    """Interface implemented by installable GIUVA discipline modules."""

    manifest: ModuleManifest

    def api_contracts(self) -> Sequence[ModuleApiContract]:
        """Return internal API contracts for the module."""

    def default_configuration(self) -> ModuleConfiguration:
        """Return default configuration for safe installation."""

    def install(self, configuration: ModuleConfiguration) -> ModuleLifecycleResult:
        """Install the module without external side effects."""

    def uninstall(self) -> ModuleLifecycleResult:
        """Uninstall the module without deleting domain data."""

    def health_check(self) -> ModuleHealthCheck:
        """Return a local health check result."""
