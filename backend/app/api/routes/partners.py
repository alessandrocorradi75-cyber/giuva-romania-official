from fastapi import APIRouter

router = APIRouter()


@router.get("/categories")
async def partner_categories() -> dict[str, list[str]]:
    return {
        "categories": [
            "institutional",
            "medical",
            "hospitality",
            "media",
            "technical",
            "mobility",
        ]
    }
