# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project

DriveStash is a cloud file storage app (Google Drive–style): files, nested folders, share links, trash, and a 1 GB per-user quota. Only the frontend exists right now, in `frontend/`. There is no backend yet.

## Working with this user

The user is learning to code by building this. Default to **"I explain, you type"**: explain the concept, show the code, and let them type it into their editor. Make edits directly only for mechanical work (renames, config one-liners, docs) or when they explicitly ask you to.

Update `README.md` (especially its **Progress** checklist) and this file after each completed step.

## Commands

Run these from `frontend/`:

- `npm run dev`: dev server on http://localhost:5173
- `npm run build`: `tsc -b && vite build`. The typecheck is part of the build, so any TS error fails the build.
- `npx tsc --noEmit -p tsconfig.app.json`: typecheck only
- `npm run lint`: oxlint

## Stack and versions (these matter, since many tutorials are older)

- **React 19** with `@types/react` 19.3. `React.FormEvent` is **deprecated**. For form submit handlers use `SubmitEvent<HTMLFormElement>` (imported from `"react"`, not the DOM global), and `ChangeEvent` for inputs.
- **TypeScript 6**, where `strict` is on by default even though `tsconfig.app.json` doesn't set it. `noUnusedLocals` and `noUnusedParameters` are on too, so an unused variable fails the build.
- `verbatimModuleSyntax` is on: type-only imports must use `import type { ... }` or inline `type` (`import { useRef, type ReactNode } from "react"`).
- **React Router v8**: import from `"react-router"`, not `"react-router-dom"`.
- **Tailwind CSS v4**: configured through `@tailwindcss/vite` and `@import "tailwindcss"` in `index.css`. There is no `tailwind.config.js`.
- Icons come from `lucide-react`.

## Conventions

- **Everything is `.tsx`/`.ts`.** Don't add `.jsx`/`.js` files. TypeScript files can't import untyped JS without a TS7016 error.
- **UI components** live in `frontend/src/components/ui/` as named exports (`export function Button`). Pages are default exports in `frontend/src/pages/`.
- **Typing component props:**
  - A component that wraps a native element uses `ComponentProps<"input">` / `ComponentProps<"button">` & its own extra props, and spreads the rest with `...props`.
  - Variant/size props use `keyof typeof variants`, so the allowed values come from the style object (see `Button.tsx`).
  - Rendered content (`children`, `trigger`, `action`) is typed `ReactNode`.
  - Callbacks are typed like `() => void`.
- **Icon props take the component, not an element:** `icon={MailIcon}`, not `icon={<MailIcon />}`. They're typed `LucideIcon`, and the receiving component renders and sizes the icon itself.
- `ItemDropdown` is generic (`<T>`) until real `File`/`Folder` types exist. Once they do, use them there.
- `ButtonVariant` is exported from `Button.tsx` for components that forward a variant (e.g. `ConfirmDialog`).

## Gotchas

- When a component destructures a prop it also needs to pass to the native element (e.g. `required` in `Input`), it must pass it explicitly. Otherwise `...props` no longer includes it.
- A `<button>` inside a `<form>` defaults to `type="submit"`. `Button` defaults to `type="button"`, so a form's submit button needs `type="submit"` set explicitly.
- `frontend/src/config/api.ts` is currently empty.
