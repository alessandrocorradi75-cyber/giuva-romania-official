"""Environment-aware application configuration for the GIUVA backend."""

from functools import lru_cache
from os import getenv
from typing import Literal

from pydantic import Field, field_validator, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

EnvironmentName = Literal["development", "testing", "production"]

_DEVELOPMENT_JWT_SECRET = "development-only-secret-change-me"
_PRODUCTION_PLACEHOLDER_SECRETS = {
    "",
    "change-this-before-production",
    _DEVELOPMENT_JWT_SECRET,
}


class Settings(BaseSettings):
    """Shared settings loaded from environment variables and local env files."""

    model_config = SettingsConfigDict(
        env_file=(".env", ".env.development"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "GIUVA API"
    environment: EnvironmentName = "development"
    debug: bool = False
    api_v1_prefix: str = "/api/v1"
    backend_cors_origins: list[str] = Field(default_factory=lambda: ["http://127.0.0.1:3000"])
    allowed_hosts: list[str] = Field(default_factory=lambda: ["127.0.0.1", "localhost"])

    database_url: str = "postgresql+asyncpg://giuva:giuva_password@localhost:5432/giuva"
    database_echo: bool = False
    database_pool_pre_ping: bool = True

    jwt_secret_key: str = _DEVELOPMENT_JWT_SECRET
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60

    log_level: Literal["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"] = "INFO"
    docs_enabled: bool = True

    @field_validator("backend_cors_origins", "allowed_hosts", mode="before")
    @classmethod
    def split_csv_values(cls, value: str | list[str]) -> list[str]:
        if isinstance(value, str):
            return [item.strip() for item in value.split(",") if item.strip()]
        return value

    @field_validator("environment", mode="before")
    @classmethod
    def normalize_environment(cls, value: str) -> EnvironmentName:
        normalized = value.strip().lower()
        if normalized == "local":
            return "development"
        if normalized not in {"development", "testing", "production"}:
            msg = "environment must be development, testing, or production"
            raise ValueError(msg)
        return normalized  # type: ignore[return-value]

    @model_validator(mode="after")
    def validate_production_security(self) -> "Settings":
        if self.environment != "production":
            return self

        if self.jwt_secret_key in _PRODUCTION_PLACEHOLDER_SECRETS or len(self.jwt_secret_key) < 32:
            msg = "jwt_secret_key must be provided by environment and be at least 32 characters in production"
            raise ValueError(msg)

        if not self.database_url.startswith("postgresql+asyncpg://"):
            msg = "database_url must use the postgresql+asyncpg driver in production"
            raise ValueError(msg)

        if any(origin in {"*", "http://127.0.0.1:3000", "http://localhost:3000"} for origin in self.backend_cors_origins):
            msg = "backend_cors_origins must be restricted to production origins in production"
            raise ValueError(msg)

        return self


class DevelopmentSettings(Settings):
    model_config = SettingsConfigDict(
        env_file=(".env", ".env.development"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    environment: EnvironmentName = "development"
    debug: bool = True
    log_level: Literal["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"] = "DEBUG"


class TestingSettings(Settings):
    model_config = SettingsConfigDict(
        env_file=(".env", ".env.testing"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    environment: EnvironmentName = "testing"
    database_url: str = "postgresql+asyncpg://giuva:giuva_password@localhost:5432/giuva_test"
    backend_cors_origins: list[str] = Field(default_factory=lambda: ["http://127.0.0.1:3000"])
    jwt_secret_key: str = "testing-only-secret-change-me"
    access_token_expire_minutes: int = 15
    docs_enabled: bool = True


class ProductionSettings(Settings):
    model_config = SettingsConfigDict(
        env_file=(".env", ".env.production"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    environment: EnvironmentName = "production"
    debug: bool = False
    backend_cors_origins: list[str] = Field(default_factory=list)
    allowed_hosts: list[str] = Field(default_factory=list)
    database_url: str = ""
    jwt_secret_key: str = ""
    docs_enabled: bool = False
    log_level: Literal["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"] = "INFO"


def _environment_name() -> EnvironmentName:
    value = getenv("ENVIRONMENT", getenv("APP_ENV", "development")).strip().lower()
    if value == "local":
        return "development"
    if value not in {"development", "testing", "production"}:
        return "development"
    return value  # type: ignore[return-value]


@lru_cache
def get_settings() -> Settings:
    settings_by_environment: dict[EnvironmentName, type[Settings]] = {
        "development": DevelopmentSettings,
        "testing": TestingSettings,
        "production": ProductionSettings,
    }
    return settings_by_environment[_environment_name()]()


settings = get_settings()
