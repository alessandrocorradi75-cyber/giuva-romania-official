from fastapi import APIRouter

router = APIRouter()


@router.get("/schema")
async def journey_schema() -> dict[str, object]:
    return {
        "module": "journey",
        "content_models": ["story", "gallery", "event", "campaign", "volunteer_story"],
        "tables": ["stories", "galleries"],
        "cms_ready": True,
    }
