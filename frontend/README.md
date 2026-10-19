# DriveStash: Frontend

The React + TypeScript + Vite app for DriveStash. For the project overview, features and progress, see the [root README](../README.md).

## Run it

```bash
npm install
npm run dev     # http://localhost:5173
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Typecheck, then build for production into `dist/` |
| `npm run lint` | Lint with oxlint |
| `npm run preview` | Serve the production build locally |

## Layout

```text
src/
├── components/ui/  # Shared UI: Button, Input, Modal, ConfirmDialog, Dropdown, ItemDropdown, EmptyState, ProgressBar, Spinner
├── pages/          # One component per route (Auth, HomePage, Drive, SharedWithMe, SharedFile, Trash)
├── config/         # API client config
├── context/        # React context providers
├── hooks/          # Custom hooks
├── App.tsx         # Routes
└── main.tsx        # Entry point (BrowserRouter)
```
