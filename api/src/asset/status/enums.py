from enum import Enum

class AssetStatusEnum(Enum):
    AVAILABLE = "available"
    RESERVED = "reserved"
    ASSIGNED = "assigned"
    DEFECTIVE = "defective"
    UNDER_REPAIR = "under_repair"
    UNDER_MAINTENANCE = "under_maintenance"
    QUARANTINED = "quarantined"
    STOLEN = "stolen"
    RETIRED = "retired"