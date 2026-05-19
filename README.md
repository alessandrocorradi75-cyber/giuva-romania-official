# GIUVA.RO Platform

GIUVA.RO is now structured as a real platform, not a static landing page.

## Frontend

- Next.js 15
- TypeScript
- TailwindCSS
- Framer Motion
- Component architecture under `components/`
- Static content source under `data/`, ready to be replaced by CMS fetchers

Run:

```bash
npm install
npm run dev
```

Frontend URL:

```text
http://127.0.0.1:3000
```

## Backend

- FastAPI
- PostgreSQL
- SQLAlchemy async
- Alembic migration scaffold
- JWT security utilities
- Modular API routes under `backend/app/api/routes/`

Backend modules:

- Volunteers
- Trainings
- Events
- Project Pulse campaigns
- Sponsors
- Journey stories
- Galleries
- Partners
- Civil Response informational resources

Run PostgreSQL:

```bash
docker compose up -d postgres
```

Run API:

```bash
cd backend
copy .env.example .env
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

API docs:

```text
http://127.0.0.1:8000/docs
```

## Critical Boundary

GIUVA is a community platform first. Civil Response is informational and protocol-based only.

GIUVA is not an emergency dispatch system, intervention command platform, police body or autonomous emergency operator.

## Next Operational Steps

1. Connect Sanity or Strapi for Journey, news, events and campaigns.
2. Generate the first Alembic migration from SQLAlchemy models.
3. Replace placeholder API endpoints with database-backed CRUD.
4. Add real auth persistence and role guards for volunteer, coordinator and admin.
5. Connect the Next.js frontend to `NEXT_PUBLIC_API_BASE_URL`.
