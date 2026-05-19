from fastapi import APIRouter

router = APIRouter()


@router.get("/scope")
async def civil_response_scope() -> dict[str, object]:
    return {
        "module": "civil_response",
        "allowed": [
            "preparedness info",
            "public awareness",
            "event support",
            "volunteer coordination",
            "training calendar",
        ],
        "not_allowed": [
            "intervention system",
            "emergency dispatch",
            "real-time response command",
        ],
        "notice": "GIUVA is informational and protocol-based, not an emergency operator.",
    }
