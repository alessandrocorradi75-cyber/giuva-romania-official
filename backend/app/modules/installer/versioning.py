"""Module version management utilities."""

from __future__ import annotations

from dataclasses import dataclass

from backend.app.modules.base import ModuleVersionError


@dataclass(frozen=True)
class ModuleVersionManager:
    """Minimal semantic version comparator for module manifests."""

    def normalize(self, version: str) -> tuple[int, int, int]:
        parts = version.split(".")
        if len(parts) != 3:
            raise ModuleVersionError(f"Module version must use MAJOR.MINOR.PATCH: {version}")
        try:
            return tuple(int(part) for part in parts)  # type: ignore[return-value]
        except ValueError as exc:
            raise ModuleVersionError(f"Module version contains non-numeric segments: {version}") from exc

    def is_upgrade(self, current: str, candidate: str) -> bool:
        return self.normalize(candidate) > self.normalize(current)

    def is_compatible(self, required: str, candidate: str) -> bool:
        required_major, _, _ = self.normalize(required)
        candidate_major, _, _ = self.normalize(candidate)
        return required_major == candidate_major and self.normalize(candidate) >= self.normalize(required)
