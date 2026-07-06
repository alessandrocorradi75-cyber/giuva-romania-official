"""Community and Social installable module."""

from backend.app.modules.base import ModuleConfigurationField, ModuleManifest, ModulePermission, ModuleScope, ModuleStatus
from backend.app.modules.base.provider import StaticModuleProvider
from backend.app.modules.contracts import ModuleApiContract, ModuleApiOperation

MANIFEST = ModuleManifest(
    key="community_social",
    name="Community & Social",
    version="1.0.0",
    description="Module for community programs, local social action and civic participation coordination.",
    supported_scopes=(ModuleScope.COUNTRY, ModuleScope.REGION, ModuleScope.CITY, ModuleScope.COMMUNITY),
    permissions=(
        ModulePermission(key="community.read", description="Read community and social records."),
        ModulePermission(key="community.manage", description="Manage community and social records."),
    ),
    configuration_fields=(
        ModuleConfigurationField(key="community_intake_enabled", value_type="boolean", default=False),
        ModuleConfigurationField(key="default_language", value_type="string", default="ro"),
    ),
    status=ModuleStatus.AVAILABLE,
)

API_CONTRACTS = (
    ModuleApiContract(
        key="community_social.activities.read",
        operation=ModuleApiOperation.READ,
        description="Read internal community activity summaries.",
        required_permissions=("community.read",),
    ),
)

provider = StaticModuleProvider(manifest=MANIFEST, contracts=API_CONTRACTS)
