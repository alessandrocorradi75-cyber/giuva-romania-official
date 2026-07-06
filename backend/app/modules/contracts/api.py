"""Module API contract declarations.

These contracts describe internal module capabilities. They do not expose FastAPI
routes or public HTTP endpoints.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Mapping, Sequence


class ModuleApiOperation(str, Enum):
    """Supported operation categories for module API contracts."""

    READ = "read"
    CREATE = "create"
    UPDATE = "update"
    DELETE = "delete"
    EXECUTE = "execute"


@dataclass(frozen=True)
class ModuleApiContract:
    """Internal API capability exposed by a module to the platform."""

    key: str
    operation: ModuleApiOperation
    description: str
    input_schema: str | None = None
    output_schema: str | None = None
    required_permissions: Sequence[str] = field(default_factory=tuple)
    metadata: Mapping[str, str] = field(default_factory=dict)
