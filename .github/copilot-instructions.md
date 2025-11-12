# AI Coding Agent Instructions - Level Up Labs

## Project Overview

**Level Up Labs** is a Next.js 16 landing page for an online course platform. Built with React 19, TypeScript, and Tailwind CSS with shadcn/ui components. The architecture uses a page-based structure with component composition for landing page sections.

## Architecture

### Component Structure

- **`/app`** - Next.js App Router (RSC by default)

  - `layout.tsx` - Root layout with global fonts (Space Grotesk, Inter) and Navbar
  - `page.tsx` - Home page composing all landing sections
  - `globals.css` - Tailwind config and CSS variables

- **`/components/base`** - Layout and shell components

  - `Container.tsx` - Max-width wrapper (7xl) with responsive padding (px-4 md:px-6 lg:px-8)
  - `Navbar.tsx`, `Footer.tsx`, `Logo.tsx` - Site chrome

- **`/components/landing`** - Page section components (HeroSection, Features, Comparison, FAQ, etc.)

  - All use `"use client"` with motion animations
  - Organized as full-width sections with contained content via `<Container />`

- **`/components/ui`** - Shadcn/ui component library (New York style)

  - Pre-built components using Radix UI primitives + CVA styling
  - Examples: Button, Card, Accordion, Carousel, Tab, Dialog

- **`/lib/utils.ts`** - `cn()` utility combining clsx + tailwind-merge for className management
- **`/hooks/use-mobile.ts`** - Mobile detection hook

### Key Design Patterns

**Styling Approach:**

- Tailwind CSS v4 with CSS variables (dark mode support via `next-themes`)
- Class Variance Authority (CVA) for component variants (see `components/ui/button.tsx`)
- Use `cn()` from `@/lib/utils` to merge Tailwind classes safely
- Custom gradient buttons: `bg-gradient-to-b from-[#4E6DF5] to-[#5777fc]` with inset box-shadow

**Animation Pattern:**

- Motion library (`motion/react` v12) for entrance animations
- Common pattern: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`
- Framer Motion alternative imported via `motion/react`

**Client vs Server:**

- Root layout & `page.tsx` are RSC (React Server Components)
- Landing sections marked `"use client"` when using motion or hooks
- UI components exported as default functions (RSC-compatible)

**Icon Library:**

- Primary: `@phosphor-icons/react` (with SSR subpath: `@phosphor-icons/react/dist/ssr`)
- Fallback: `lucide-react`
- Import pattern: `import { ChalkboardTeacherIcon } from "@phosphor-icons/react/dist/ssr"`

## Development Workflows

### Build & Run Commands

```bash
bun dev          # Development server (localhost:3000)
bun build        # Production build
bun start        # Start production server
bun lint         # Run ESLint
```

### TypeScript Configuration

- Strict mode enabled
- Target: ES2017
- Path aliases: `@/*` → root directory (configured in `tsconfig.json` and `components.json`)

### Code Generation & Tools

- **shadcn/ui** - Pre-configured in `components.json` with aliases pointing to `@/components`
- **Tailwind** - v4 with PostCSS pipeline (`postcss.config.mjs`)
- **ESLint** - Next.js + TypeScript preset

## Project-Specific Conventions

### Naming & File Organization

- Components use PascalCase (e.g., `HeroSection.tsx`)
- Landing sections: singular names (`HeroSection`, not `HeroSections`)
- Utility functions: camelCase in `/lib`

### Component Props Pattern

```tsx
// Props type defined inline for simple components
export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) { ... }

// Use React.ComponentProps<T> for shadcn/ui wrappers
```

### Tailwind + CVA Pattern (Button Example)

1. Define variants object with CVA
2. Apply base styles + responsive prefixes
3. Use `cn()` to merge dynamic classes
4. Destructure `className` and merge with `buttonVariants()`

### Responsive Design Pattern

- Mobile-first: base classes then `md:` and `lg:` prefixes
- Container responsive padding manages layouts
- Gradient backgrounds use responsive sizes: `w-[300px] md:w-[700px]`

## Integration Points & Dependencies

### External Libraries

- **Radix UI** - Headless UI primitives (all major components)
- **React Hook Form + Resolvers** - Form state management (if forms added)
- **Sonner** - Toast notifications
- **Recharts** - Data visualization (if needed for comparison tables)
- **Motion** - Advanced animations
- **next-themes** - Dark mode support

### Data Patterns

- **No backend yet** - All data currently in components as objects (see Features component)
- Add API routes in `/app/api/` if needed
- Consider storing shared data in `/lib` as constants

## Common Tasks

### Adding a Landing Section

1. Create component in `/components/landing/`
2. Mark with `"use client"`
3. Wrap content in `<Container className="relative z-10">`
4. Import into `app/page.tsx` and add to render
5. Use motion for animations with standard transition pattern

### Adding UI Components

1. Use `components.json` aliases when importing shadcn
2. Override default variants via CVA in copied components
3. Always use `cn()` for className prop handling

### Form Implementation

- Use React Hook Form with Zod validation (both installed)
- Apply CVA button variants for consistent styling
- Wrap inputs in shadcn/ui `<FormField>` components

## Notes for AI Agents

- **Root layout includes `<Navbar />`** - Don't duplicate in other pages
- **All landing sections are full-width with inner containers** - Maintain pattern for consistency
- **Motion imports from `motion/react`** not `framer-motion` directly
- **Always check shadcn/ui component defaults** before customizing - many variants already exist
- **TypeScript strict mode enabled** - Add proper types for all props and returns
- **No environment variables configured yet** - Add to `.env.local` if needed for API endpoints
