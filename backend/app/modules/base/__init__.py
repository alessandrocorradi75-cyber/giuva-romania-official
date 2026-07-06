"""Base contracts for the GIUVA module engine."""

from backend.app.modules.base.exceptions import (
    ModuleAlreadyInstalledError,
    ModuleDependencyError,
    ModuleEngineError,
    ModuleNotFoundError,
    ModuleVersionError,
)
from backend.app.modules.base.lifecycle import ModuleLifecycle, ModuleLifecycleResult
from backend.app.modules.base.manifest import (
    ModuleConfiguration,
    ModuleConfigurationField,
    ModuleDefinition,
    ModuleHealthCheck,
    ModuleHealthStatus,
    ModuleLifecycleState,
    ModuleManifest,
    ModulePermission,
    ModuleScope,
    ModuleStatus,
)
from backend.app.modules.base.provider import StaticModuleProvider

__all__ = [
    "ModuleAlreadyInstalledError",
    "ModuleConfiguration",
    "ModuleConfigurationField",
    "ModuleDefinition",
    "ModuleDependencyError",
    "ModuleEngineError",
    "ModuleHealthCheck",
    "ModuleHealthStatus",
    "ModuleLifecycle",
    "ModuleLifecycleResult",
    "ModuleLifecycleState",
    "ModuleManifest",
    "ModuleNotFoundError",
    "ModulePermission",
    "ModuleScope",
    "ModuleStatus",
    "ModuleVersionError",
    "StaticModuleProvider",
]
