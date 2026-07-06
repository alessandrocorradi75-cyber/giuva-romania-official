"""Reusable provider implementation for static discipline modules."""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Sequence

from backend.app.modules.base.lifecycle import ModuleLifecycleResult
from backend.app.modules.base.manifest import (
    ModuleConfiguration,
    ModuleHealthCheck,
    ModuleHealthStatus,
    ModuleLifecycleState,
    ModuleManifest,
)
from backend.app.modules.contracts.api import ModuleApiContract


@dataclass
class StaticModuleProvider:
    """Provider for modules that only declare contracts and lifecycle state."""

    manifest: ModuleManifest
    contracts: Sequence[ModuleApiContract] = field(default_factory=tuple)

    def api_contracts(self) -> Sequence[ModuleApiContract]:
        return tuple(self.contracts)

    def default_configuration(self) -> ModuleConfiguration:
        values = {field.key: field.default for field in self.manifest.configuration_fields if field.default is not None}
        return ModuleConfiguration(module_key=self.manifest.key, values=values)

    def install(self, configuration: ModuleConfiguration) -> ModuleLifecycleResult:
        return ModuleLifecycleResult(
            module_key=self.manifest.key,
            state=ModuleLifecycleState.INSTALLED,
            message=f"Module {self.manifest.key} installed with configuration {configuration.version}.",
        )

    def uninstall(self) -> ModuleLifecycleResult:
        return ModuleLifecycleResult(
            module_key=self.manifest.key,
            state=ModuleLifecycleState.UNINSTALLED,
            message=f"Module {self.manifest.key} uninstalled without deleting domain data.",
        )

    def enable(self) -> ModuleLifecycleResult:
        return ModuleLifecycleResult(
            module_key=self.manifest.key,
            state=ModuleLifecycleState.ENABLED,
            message=f"Module {self.manifest.key} enabled.",
        )

    def disable(self) -> ModuleLifecycleResult:
        return ModuleLifecycleResult(
            module_key=self.manifest.key,
            state=ModuleLifecycleState.DISABLED,
            message=f"Module {self.manifest.key} disabled.",
        )

    def health_check(self) -> ModuleHealthCheck:
        return ModuleHealthCheck(
            module_key=self.manifest.key,
            status=ModuleHealthStatus.HEALTHY,
            message="Static module contract is available.",
            checked_at_iso=datetime.now(timezone.utc).isoformat(),
        )
