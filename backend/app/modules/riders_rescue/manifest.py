"""Riders Rescue installable module."""

from backend.app.modules.base import ModuleConfigurationField, ModuleManifest, ModulePermission, ModuleScope, ModuleStatus
from backend.app.modules.base.provider import StaticModuleProvider
from backend.app.modules.contracts import ModuleApiContract, ModuleApiOperation

MANIFEST = ModuleManifest(
    key="riders_rescue",
    name="Riders Rescue",
    version="1.0.0",
    description="Operational module for rider-based civic support and response coordination.",
    supported_scopes=(ModuleScope.COUNTRY, ModuleScope.REGION, ModuleScope.CITY),
    permissions=(
        ModulePermission(key="riders.read", description="Read Riders Rescue operational records."),
        ModulePermission(key="riders.manage", description="Manage Riders Rescue operational records."),
    ),
    configuration_fields=(
        ModuleConfigurationField(key="dispatch_enabled", value_type="boolean", default=False),
        ModuleConfigurationField(key="default_city", value_type="string", required=False),
    ),
    status=ModuleStatus.AVAILABLE,
)

API_CONTRACTS = (
    ModuleApiContract(
        key="riders_rescue.operations.read",
        operation=ModuleApiOperation.READ,
        description="Read internal Riders Rescue operation summaries.",
        required_permissions=("riders.read",),
    ),
)

provider = StaticModuleProvider(manifest=MANIFEST, contracts=API_CONTRACTS)
