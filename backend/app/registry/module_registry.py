"""Federated module registry interfaces."""

from __future__ import annotations

from dataclasses import dataclass, field

from backend.app.modules.contracts import ModuleDefinition


@dataclass(frozen=True)
class ModuleRegistryEntry:
    """Central registry entry for a federation module."""

    module: ModuleDefinition
    owner_node_id: str
    approved_for_federation: bool = False


@dataclass
class ModuleRegistry:
    """Non-persistent registry interface for future central module governance."""

    _entries: dict[str, ModuleRegistryEntry] = field(default_factory=dict)

    def register(self, entry: ModuleRegistryEntry) -> None:
        self._entries[entry.module.key] = entry

    def get(self, module_key: str) -> ModuleRegistryEntry | None:
        return self._entries.get(module_key)

    def list(self) -> tuple[ModuleRegistryEntry, ...]:
        return tuple(self._entries.values())
