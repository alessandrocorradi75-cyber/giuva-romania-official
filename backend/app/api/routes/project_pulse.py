from fastapi import APIRouter

router = APIRouter()


@router.get("/dashboard")
async def project_pulse_dashboard() -> dict[str, object]:
    return {
        "module": "project_pulse",
        "metrics": {
            "aed_funded": 0,
            "volunteers_trained": 0,
            "km_covered": 0,
            "communities_reached": 0,
        },
        "tables": ["campaigns", "sponsors"],
        "principle": "Every donation must have a clear destination.",
    }
