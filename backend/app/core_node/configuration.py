"""Central federation configuration contracts."""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Mapping, Sequence


@dataclass(frozen=True)
class CentralConfiguration:
    """Configuration owned by the core node and distributed to local nodes later."""

    federation_name: str
    default_locale: str
    supported_locales: Sequence[str] = field(default_factory=tuple)
    enabled_modules: Sequence[str] = field(default_factory=tuple)
    policy_versions: Mapping[str, str] = field(default_factory=dict)
    synchronization_enabled: bool = False


@dataclass(frozen=True)
class CentralConfigurationSnapshot:
    """Immutable central configuration snapshot for future sync handshakes."""

    version: str
    checksum: str
    configuration: CentralConfiguration
