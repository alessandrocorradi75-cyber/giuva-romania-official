"""Base module manifest, permission, configuration and health contracts."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Mapping, Sequence


class ModuleScope(str, Enum):
    """Operational scope where a module may be installed."""

    CORE = "core"
    COUNTRY = "country"
    REGION = "region"
    CITY = "city"
    COMMUNITY = "community"


class ModuleStatus(str, Enum):
    """Catalog availability state for a module."""

    DRAFT = "draft"
    AVAILABLE = "available"
    INSTALLED = "installed"
    DISABLED = "disabled"
    DEPRECATED = "deprecated"
    UNINSTALLED = "uninstalled"


class ModuleLifecycleState(str, Enum):
    """Runtime lifecycle state for a module installation."""

    DISCOVERED = "discovered"
    RESOLVED = "resolved"
    INSTALLED = "installed"
    ENABLED = "enabled"
    DISABLED = "disabled"
    UNINSTALLED = "uninstalled"
    ERROR = "error"


class ModuleHealthStatus(str, Enum):
    """Health status returned by module health checks."""

    HEALTHY = "healthy"
    DEGRADED = "degraded"
    UNHEALTHY = "unhealthy"
    UNKNOWN = "unknown"


@dataclass(frozen=True)
class ModulePermission:
    """Permission requested by an installable module."""

    key: str
    description: str
    required: bool = True


@dataclass(frozen=True)
class ModuleConfigurationField:
    """Typed configuration field supported by a module."""

    key: str
    value_type: str
    required: bool = False
    default: Any | None = None
    description: str = ""


@dataclass(frozen=True)
class ModuleConfiguration:
    """Validated configuration payload for a module installation."""

    module_key: str
    values: Mapping[str, Any] = field(default_factory=dict)
    version: str = "1.0"


@dataclass(frozen=True)
class ModuleHealthCheck:
    """Result of a module health check."""

    module_key: str
    status: ModuleHealthStatus
    message: str
    checked_at_iso: str | None = None
    details: Mapping[str, str] = field(default_factory=dict)


@dataclass(frozen=True)
class ModuleManifest:
    """Installable module manifest for GIUVA disciplines."""

    key: str
    name: str
    version: str
    description: str
    supported_scopes: Sequence[ModuleScope] = field(default_factory=tuple)
    dependencies: Sequence[str] = field(default_factory=tuple)
    permissions: Sequence[ModulePermission] = field(default_factory=tuple)
    configuration_fields: Sequence[ModuleConfigurationField] = field(default_factory=tuple)
    status: ModuleStatus = ModuleStatus.DRAFT
    metadata: Mapping[str, str] = field(default_factory=dict)


ModuleDefinition = ModuleManifest
