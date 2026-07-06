"""Module engine exceptions."""


class ModuleEngineError(Exception):
    """Base exception for module engine failures."""


class ModuleNotFoundError(ModuleEngineError):
    """Raised when a requested module is not registered."""


class ModuleAlreadyInstalledError(ModuleEngineError):
    """Raised when installing an already installed module."""


class ModuleDependencyError(ModuleEngineError):
    """Raised when module dependencies cannot be resolved."""


class ModuleVersionError(ModuleEngineError):
    """Raised when module version constraints are invalid or unsupported."""
