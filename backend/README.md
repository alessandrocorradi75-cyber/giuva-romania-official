# GIUVA API

FastAPI backend for the GIUVA.RO community platform.

## Modules

- `auth`: JWT utilities and future login/register flow
- `volunteers`: onboarding, QR badge, status, training and participation
- `project-pulse`: campaigns, sponsors and transparent metrics
- `journey`: stories and galleries
- `partners`: partner categories, logos, visibility and status
- `civil-response`: preparedness resources and training calendar only

## Local Setup

```bash
copy .env.example .env
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

## Database

PostgreSQL is required. SQLite is intentionally not used.

```bash
docker compose up -d postgres
```

## Migrations

After installing backend dependencies:

```bash
alembic revision --autogenerate -m "initial platform schema"
alembic upgrade head
```

## Civil Response Rule

This backend must not implement emergency dispatch, real-time intervention command, autonomous incident response or public-safety authority features.
