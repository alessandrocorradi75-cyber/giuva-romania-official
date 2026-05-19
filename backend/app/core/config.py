from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_name: str = "GIUVA API"
    environment: str = "local"
    api_v1_prefix: str = "/api/v1"
    backend_cors_origins: list[str] = Field(default_factory=lambda: ["http://127.0.0.1:3000"])

    database_url: str = "postgresql+asyncpg://giuva:giuva_password@localhost:5432/giuva"

    jwt_secret_key: str = "change-this-before-production"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60

    @field_validator("backend_cors_origins", mode="before")
    @classmethod
    def split_origins(cls, value: str | list[str]) -> list[str]:
        if isinstance(value, str):
            return [origin.strip() for origin in value.split(",") if origin.strip()]
        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
