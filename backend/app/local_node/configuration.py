"""Local node configuration contracts."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Mapping, Sequence


@dataclass(frozen=True)
class LocalConfiguration:
    """Configuration owned by a local GIUVA node."""

    node_id: str
    display_name: str
    country_code: str
    default_locale: str
    supported_locales: Sequence[str] = field(default_factory=tuple)
    enabled_modules: Sequence[str] = field(default_factory=tuple)
    local_policy_overrides: Mapping[str, str] = field(default_factory=dict)
    synchronization_enabled: bool = False


@dataclass(frozen=True)
class LocalConfigurationSnapshot:
    """Immutable local configuration snapshot for future federation sync."""

    version: str
    checksum: str
    configuration: LocalConfiguration
