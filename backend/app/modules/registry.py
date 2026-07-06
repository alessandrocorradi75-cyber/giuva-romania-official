"""In-memory module registry contract implementation.

This registry is intentionally process-local and non-persistent. It exists to
clarify architecture boundaries before database-backed registries are approved.
"""

from __future__ import annotations

from dataclasses import dataclass, field

from backend.app.modules.contracts import ModuleDefinition


@dataclass
class InMemoryModuleRegistry:
    """Minimal registry for architecture validation and future replacement."""

    _modules: dict[str, ModuleDefinition] = field(default_factory=dict)

    def register(self, module: ModuleDefinition) -> None:
        self._modules[module.key] = module

    def get(self, key: str) -> ModuleDefinition | None:
        return self._modules.get(key)

    def list(self) -> tuple[ModuleDefinition, ...]:
        return tuple(self._modules.values())
