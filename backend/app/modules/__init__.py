"""Module engine package for federated GIUVA capabilities."""

from backend.app.modules.academy import provider as academy_provider
from backend.app.modules.community import provider as community_provider
from backend.app.modules.contracts import ModuleActivation, ModuleDefinition, ModuleEngine, ModuleScope, ModuleStatus
from backend.app.modules.installer import ModuleDependencyResolver, ModuleInstaller, ModuleUninstaller, ModuleVersionManager
from backend.app.modules.loader import ModuleLoader
from backend.app.modules.registry import InMemoryModuleRegistry
from backend.app.modules.riders_rescue import provider as riders_rescue_provider

BUILT_IN_MODULE_PROVIDERS = (
    riders_rescue_provider,
    community_provider,
    academy_provider,
)

__all__ = [
    "BUILT_IN_MODULE_PROVIDERS",
    "InMemoryModuleRegistry",
    "ModuleActivation",
    "ModuleDefinition",
    "ModuleDependencyResolver",
    "ModuleEngine",
    "ModuleInstaller",
    "ModuleLoader",
    "ModuleScope",
    "ModuleStatus",
    "ModuleUninstaller",
    "ModuleVersionManager",
]
