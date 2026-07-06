"""Module registry package."""

from backend.app.modules.registry.store import InMemoryModuleRegistry, ModuleRegistryEntry

ModuleRegistry = InMemoryModuleRegistry

__all__ = ["InMemoryModuleRegistry", "ModuleRegistry", "ModuleRegistryEntry"]
