# DriveStash

Secure, simple cloud file storage. Upload files, organize them into folders, share them with links and permissions, and get to them from anywhere. New accounts get 1 GB of free storage.

> **Status:** early development. Only the frontend exists so far, and the auth page UI is being built. There is no backend yet.

## Planned features

- Email/password accounts (register, login)
- Upload files, with drag & drop
- Folders, including nested folders
- Rename, move and delete, with a Trash you can restore from
- Share links with permissions and optional expiry
- "Shared with me" view
- Per-user storage quota (1 GB default)

## Tech stack

**Frontend** ([frontend/](frontend/))
- React 19 + TypeScript (strict), built with Vite
- Tailwind CSS v4
- React Router
- axios (API calls), react-hot-toast (notifications), react-dropzone (uploads), date-fns (dates), lucide-react (icons)
- oxlint (linting)

**Backend:** not started yet.

## Project structure

```text
drive-stash/
├── frontend/              # React app
│   └── src/
│       ├── components/ui/ # Shared UI building blocks (Button, Input, Modal, ...)
│       ├── pages/         # One component per route
│       ├── config/        # App config (API client)
│       ├── context/       # React context providers
│       └── hooks/         # Custom hooks
```

## Getting started

Requirements: Node.js 24+

```bash
cd frontend
npm install
npm run dev
```

The app runs at http://localhost:5173.

### Frontend scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Typecheck (`tsc -b`), then build for production into `dist/` |
| `npm run lint` | Lint with oxlint |
| `npm run preview` | Serve the production build locally |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/login` | Log in |
| `/register` | Create an account |
| anything else | Redirects to `/` |

## Progress

- [x] Vite + React + TypeScript + Tailwind setup
- [x] Routing (home, login, register)
- [x] UI component library converted to TypeScript (`components/ui`)
- [ ] Auth page: form UI (in progress)
- [ ] Backend API
- [ ] Auth (register / login / logout)
- [ ] Drive: folders and file uploads
- [ ] Sharing
- [ ] Trash
