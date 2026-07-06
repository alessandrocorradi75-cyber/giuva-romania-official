"""Module loader implementation."""

from __future__ import annotations

from dataclasses import dataclass, field

from backend.app.modules.contracts import ModuleProvider
from backend.app.modules.registry import InMemoryModuleRegistry


@dataclass
class ModuleLoader:
    """Loads module providers into the in-memory module registry."""

    registry: InMemoryModuleRegistry = field(default_factory=InMemoryModuleRegistry)

    def load(self, provider: ModuleProvider) -> None:
        self.registry.register(provider)

    def load_many(self, providers: list[ModuleProvider] | tuple[ModuleProvider, ...]) -> InMemoryModuleRegistry:
        for provider in providers:
            self.load(provider)
        return self.registry
