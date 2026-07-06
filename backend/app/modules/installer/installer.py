"""Module installer implementation."""

from __future__ import annotations

from dataclasses import dataclass

from backend.app.modules.base import (
    ModuleAlreadyInstalledError,
    ModuleConfiguration,
    ModuleLifecycleResult,
    ModuleLifecycleState,
)
from backend.app.modules.installer.dependencies import ModuleDependencyResolver
from backend.app.modules.registry import InMemoryModuleRegistry, ModuleRegistryEntry


@dataclass
class ModuleInstaller:
    """Installs registered modules without persistence or API exposure."""

    registry: InMemoryModuleRegistry
    dependency_resolver: ModuleDependencyResolver = ModuleDependencyResolver()

    def install(self, module_key: str, configuration: ModuleConfiguration | None = None) -> ModuleLifecycleResult:
        entry = self.registry.require(module_key)
        if entry.state in {ModuleLifecycleState.INSTALLED, ModuleLifecycleState.ENABLED}:
            raise ModuleAlreadyInstalledError(f"Module is already installed: {module_key}")

        available = self.registry.list()
        self.dependency_resolver.resolve(entry.manifest, available)
        resolved_configuration = configuration or entry.provider.default_configuration()
        result = entry.provider.install(resolved_configuration)
        self.registry.replace(
            ModuleRegistryEntry(
                manifest=entry.manifest,
                provider=entry.provider,
                state=result.state,
                configuration=resolved_configuration,
            )
        )
        return result


@dataclass
class ModuleUninstaller:
    """Uninstalls registered modules without deleting domain data."""

    registry: InMemoryModuleRegistry

    def uninstall(self, module_key: str) -> ModuleLifecycleResult:
        entry = self.registry.require(module_key)
        result = entry.provider.uninstall()
        self.registry.replace(
            ModuleRegistryEntry(
                manifest=entry.manifest,
                provider=entry.provider,
                state=result.state,
                configuration=entry.configuration,
            )
        )
        return result
