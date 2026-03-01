
# Transform Vite React SPA to Next.js

## Goals
Convert the existing Vite + React SPA (texoma-cricket-league) into a Next.js 15 app with file-based routing. The UI must remain 100% identical.

## Key Decisions
- Create a new Next.js project at `/Users/codex/Downloads/league/texoma-cricket-league-next`
- Use Next.js 15 App Router
- Install Tailwind CSS properly with the exact custom config from the CDN script
- Use `"use client"` directives for all components using framer-motion, useState, useEffect, etc.
- Replace the NavigationContext-based navigation with Next.js `useRouter`/`usePathname`
- Copy all public assets from `public/` folder
- Keep all component code exactly the same (just adapt imports/navigation)

## Route Mapping
- `home` → `/` (page.tsx)
- `about` → `/about/page.tsx`
- `tournaments` → `/tournaments/page.tsx`
- `partners` → `/partners/page.tsx`
- `contact` → `/contact/page.tsx`
- `register` → `/register/page.tsx`
- `privacy` → `/privacy/page.tsx`
- `terms` → `/terms/page.tsx`
- `disclaimer` → `/disclaimer/page.tsx`

## Checklist
- [x] Create Next.js project with bun
- [x] Install dependencies: react, react-dom, framer-motion, lucide-react, @phosphor-icons/react
- [x] Configure Tailwind CSS with exact custom theme (colors, fonts, backgroundImage, boxShadow, animation, keyframes)
- [x] Add Google Fonts via link in layout
- [x] Create global CSS with custom styles (scrollbar, grain, drop-cap)
- [x] Create root layout.tsx with metadata, fonts, Navbar, Footer
- [x] Create NavigationContext replacement using Next.js useRouter/usePathname (src/hooks/useNavigation.ts)
- [x] Copy utils/animations.ts
- [x] Copy components/ui (AnimatedCounter, ScrollToTop, ConditionalScrollToTop) - adapted to use client
- [x] Copy components/layout (Navbar, Footer) - replaced navigate() imports with useNavigation hook
- [x] Create all route pages: /, /about, /tournaments, /partners, /contact, /register, /privacy, /terms, /disclaimer
- [x] Copy all section components for home page (11 components)
- [x] Copy all page-specific components (42 component files across about/tournaments/partners/contact/register/legal)
- [x] Copy all public assets (28 images)
- [x] Verify build succeeds ✅ All 10 routes build + serve successfully
