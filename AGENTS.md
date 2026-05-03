<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project conventions

## Component library: shadcn/ui

This project uses **shadcn/ui** as its component library. All UI primitives (buttons, inputs, dialogs, cards, etc.) should come from shadcn rather than being hand-built or pulled from another library.

- Add new components with `npx shadcn@latest add <component>` (e.g. `button`, `card`, `dialog`).
- Components land in `src/components/ui/` and are owned by this repo: edit them directly when you need to customize.
- Compose larger features by combining shadcn primitives, not by replacing them.
- Prefer shadcn's `cn()` helper from `@/lib/utils` for conditional class names.

## Styling

- Tailwind CSS v4 with CSS variables defined in `src/app/globals.css`.
- Brand palette: Titanium & Charcoal — deep charcoal background (`#171717`), titanium white foreground (`#E5E4E2`).
- Headings use Cormorant Garamond (serif), body uses Geist Sans. Wired through `--font-heading` (alias of `--font-cormorant`) and `--font-sans`.
- Always reference colors via semantic tokens (`bg-background`, `text-primary`, `border-border`), never raw hex.
