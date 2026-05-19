from fastapi import APIRouter

router = APIRouter()


@router.get("/schema")
async def volunteer_schema() -> dict[str, object]:
    return {
        "module": "volunteer_portal",
        "status": "planned",
        "features": [
            "onboarding",
            "QR badge",
            "status",
            "training",
            "participation",
            "events",
        ],
        "tables": ["volunteers", "trainings", "events"],
    }
