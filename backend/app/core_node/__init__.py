"""CORE node package for the GIUVA federated architecture."""

from backend.app.core_node.architecture import (
    CoreArchitectureProfile,
    CoreFederationBoundary,
    CoreNodeIdentity,
    CoreNodeRole,
)
from backend.app.core_node.configuration import CentralConfiguration, CentralConfigurationSnapshot

__all__ = [
    "CentralConfiguration",
    "CentralConfigurationSnapshot",
    "CoreArchitectureProfile",
    "CoreFederationBoundary",
    "CoreNodeIdentity",
    "CoreNodeRole",
]
