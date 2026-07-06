"""Operational in-memory module registry.

This registry is intentionally non-persistent. It provides the module engine
runtime boundary without changing database schema or existing business logic.
"""

from __future__ import annotations

from dataclasses import dataclass, field

from backend.app.modules.base import ModuleConfiguration, ModuleLifecycleState, ModuleManifest, ModuleNotFoundError
from backend.app.modules.contracts import ModuleProvider


@dataclass(frozen=True)
class ModuleRegistryEntry:
    """Registry entry for an installable module provider."""

    manifest: ModuleManifest
    provider: ModuleProvider
    state: ModuleLifecycleState = ModuleLifecycleState.DISCOVERED
    configuration: ModuleConfiguration | None = None


@dataclass
class InMemoryModuleRegistry:
    """Process-local registry for operational module engine flows."""

    _entries: dict[str, ModuleRegistryEntry] = field(default_factory=dict)

    def register(self, provider: ModuleProvider) -> ModuleRegistryEntry:
        entry = ModuleRegistryEntry(manifest=provider.manifest, provider=provider)
        self._entries[provider.manifest.key] = entry
        return entry

    def replace(self, entry: ModuleRegistryEntry) -> None:
        self._entries[entry.manifest.key] = entry

    def get(self, key: str) -> ModuleRegistryEntry | None:
        return self._entries.get(key)

    def require(self, key: str) -> ModuleRegistryEntry:
        entry = self.get(key)
        if entry is None:
            raise ModuleNotFoundError(f"Module is not registered: {key}")
        return entry

    def list(self) -> tuple[ModuleManifest, ...]:
        return tuple(entry.manifest for entry in self._entries.values())

    def list_entries(self) -> tuple[ModuleRegistryEntry, ...]:
        return tuple(self._entries.values())
