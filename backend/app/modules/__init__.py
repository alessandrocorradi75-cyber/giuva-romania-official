"""Module engine package for federated GIUVA capabilities."""

from backend.app.modules.contracts import ModuleActivation, ModuleDefinition, ModuleEngine, ModuleScope, ModuleStatus
from backend.app.modules.registry import InMemoryModuleRegistry

__all__ = [
    "InMemoryModuleRegistry",
    "ModuleActivation",
    "ModuleDefinition",
    "ModuleEngine",
    "ModuleScope",
    "ModuleStatus",
]
