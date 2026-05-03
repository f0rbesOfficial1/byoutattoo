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

## Icons

- Use **Phosphor Icons** via `@phosphor-icons/react`. Never import from `lucide-react`.
- Phosphor names have **no `Icon` suffix**: write `<Check />`, `<CaretDown />`, `<MagnifyingGlass />`, not `<CheckIcon />`.
- The default weight is **light** — set globally via `IconContext.Provider` in `src/components/icon-provider.tsx`, which wraps the app in `src/app/layout.tsx` and the Storybook decorator in `.storybook/preview.tsx`. Do not pass `weight=` on individual icons unless you specifically need a different weight.
- Common Lucide → Phosphor renames: `ChevronDown` → `CaretDown`, `Search` → `MagnifyingGlass`, `MoreHorizontal` → `DotsThree`, `Settings` → `Gear`, `Mail` → `Envelope`, `LogOut` → `SignOut`, `Loader2` → `CircleNotch`, `Send` → `PaperPlaneTilt`, `Smile` → `Smiley`, `Home` → `House`, `LifeBuoy` → `Lifebuoy`, `AlertTriangle`/`OctagonX` → `Warning`/`XCircle`, `Sparkles` → `Sparkle`, `Bold` → `TextB`, `Italic`/`Underline`/`AlignX` → `TextItalic`/`TextUnderline`/`TextAlignX`.
