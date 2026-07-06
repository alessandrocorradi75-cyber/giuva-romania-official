"""Module dependency resolution."""

from __future__ import annotations

from dataclasses import dataclass

from backend.app.modules.base import ModuleDependencyError, ModuleManifest


@dataclass(frozen=True)
class ModuleDependencyResolver:
    """Validates that module dependencies are present in a manifest set."""

    def resolve(self, target: ModuleManifest, available: list[ModuleManifest] | tuple[ModuleManifest, ...]) -> tuple[str, ...]:
        available_keys = {module.key for module in available}
        missing = tuple(dependency for dependency in target.dependencies if dependency not in available_keys)
        if missing:
            raise ModuleDependencyError(f"Missing dependencies for {target.key}: {', '.join(missing)}")
        return tuple(target.dependencies)
