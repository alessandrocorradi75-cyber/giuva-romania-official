"""Academy installable module."""

from backend.app.modules.base import ModuleConfigurationField, ModuleManifest, ModulePermission, ModuleScope, ModuleStatus
from backend.app.modules.base.provider import StaticModuleProvider
from backend.app.modules.contracts import ModuleApiContract, ModuleApiOperation

MANIFEST = ModuleManifest(
    key="academy",
    name="Academy",
    version="1.0.0",
    description="Module for GIUVA training, learning paths and certification readiness.",
    supported_scopes=(ModuleScope.COUNTRY, ModuleScope.REGION, ModuleScope.CITY),
    permissions=(
        ModulePermission(key="academy.read", description="Read academy training records."),
        ModulePermission(key="academy.manage", description="Manage academy training records."),
    ),
    configuration_fields=(
        ModuleConfigurationField(key="certifications_enabled", value_type="boolean", default=False),
        ModuleConfigurationField(key="default_delivery_mode", value_type="string", default="internal"),
    ),
    status=ModuleStatus.AVAILABLE,
)

API_CONTRACTS = (
    ModuleApiContract(
        key="academy.training.read",
        operation=ModuleApiOperation.READ,
        description="Read internal academy training summaries.",
        required_permissions=("academy.read",),
    ),
)

provider = StaticModuleProvider(manifest=MANIFEST, contracts=API_CONTRACTS)
