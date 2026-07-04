# R3 Foundation Block D - Programs, Disciplines and Projects

## Scope

This implementation covers:

- R3-015 Programs Foundation
- R3-016 Disciplines Foundation
- R3-017 Projects Foundation
- R3-018 Program Participation Foundation

No frontend UI, public page, website content, dependency, authentication, RBAC, or organization-model behavior was changed.

## Programs Domain

Programs represent long-term GIUVA initiatives such as Community & Social, Riders Rescue, Preparedness, Civil Support, Journey, Academy, Youth, Senior, Food Solidarity, Community Agriculture, and Project Pulse.

The `Program` model supports:

- owner organization
- code
- name
- description
- status
- visibility
- country availability

Protected CRUD endpoints are available under `/api/v1/programs`.

## Disciplines Domain

Disciplines belong to programs and provide a structured way to divide long-term initiatives into operational areas.

The `Discipline` model supports:

- parent program
- owner organization
- code
- name
- description
- status
- visibility
- country availability

Protected CRUD endpoints are available under `/api/v1/disciplines`.

## Projects Domain

Projects belong to programs and may also belong to organizations.

The `Project` model supports:

- parent program
- organization
- code
- title
- description
- status
- start date
- end date
- optional budget
- visibility
- country
- city

Protected CRUD endpoints are available under `/api/v1/projects`.

## Participation Foundation

Volunteer participation is tracked through `ProjectParticipation`, which links a project to a volunteer identity from Block C.

The model supports:

- project
- volunteer identity
- participation role
- start date
- end date
- status

Protected CRUD endpoints are available under `/api/v1/project-participations`.

## RBAC Policy

The endpoints use the existing R3 Block B RBAC dependencies:

- Read access for programs, disciplines, projects, and participation requires at least `COORDINATOR`.
- Program, discipline, and project create/update/delete requires `ADMIN`.
- Participation create/update/delete requires at least `COORDINATOR`, matching volunteer coordination workflows.

No public backend exposure or public registration workflow was added.

## Database Migration

A new Alembic migration was added:

- `backend/alembic/versions/20260704_0003_add_programs_projects_participation.py`

It creates:

- `programs`
- `disciplines`
- `projects`
- `project_participations`
- `programstatus` enum
- `projectstatus` enum
- `participationstatus` enum

The existing `visibility` enum is reused.

## Backend Layers Added

Models:

- `backend/app/models/program.py`
- updated `backend/app/models/enums.py`
- updated `backend/app/models/__init__.py`

Schemas:

- `backend/app/schemas/program.py`

Repositories:

- `backend/app/repositories/programs.py`
- `backend/app/repositories/disciplines.py`
- `backend/app/repositories/projects.py`
- `backend/app/repositories/participations.py`

Services:

- `backend/app/services/programs.py`
- `backend/app/services/disciplines.py`
- `backend/app/services/projects.py`
- `backend/app/services/participations.py`

Routes:

- `backend/app/api/routes/programs.py`
- `backend/app/api/routes/disciplines.py`
- `backend/app/api/routes/projects.py`
- `backend/app/api/routes/participations.py`
- updated `backend/app/api/router.py`

## Validation Notes

Validation performed for this block:

```bash
npm run lint
```

A backend Python syntax check was also run against the changed backend files.

Backend test scripts are not currently defined in `backend/pyproject.toml`, so no backend test command was available for this block.
