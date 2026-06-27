# GIUVA.RO

Prototype oficial pentru GIUVA Romania.

GIUVA înseamnă **Global Initiative for Urban Volunteering & Awareness**.

Site-ul prezintă GIUVA Romania ca platformă civică în fază de dezvoltare pentru voluntariat urban, pregătire comunitară, educație civică, AED awareness și cultură a prevenției.

GIUVA nu înlocuiește 112, SMURD, ambulanțele, poliția, pompierii sau serviciile publice. GIUVA are caracter civic, formativ și complementar.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- conținut centralizat în `data/site.ts`
- componente reutilizabile în `components/`

## Local

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Preview:

```text
http://127.0.0.1:3000
```

## Build

```bash
npm run build
```

## Pagini principale

- `/`
- `/despre`
- `/discipline`
- `/riders-rescue`
- `/community`
- `/voluntari`
- `/deschide-o-sediu`
- `/partner`
- `/sustine`
- `/news`
- `/contact`

URL-urile vechi redirecționează către structura nouă.

## Editare conținut

Textele publice, navigația, disciplinele, noutățile, opțiunile de formular și SEO sunt în:

```text
data/site.ts
```

Formularele sunt mock frontend, pregătite pentru integrare viitoare cu email, database, export voluntari, consimțământ GDPR și confirmare automată.
