Build a complete, production-quality multi-page Next.js (App Router) website — a **craft distillery & premium spirits brand**. The feeling: "distilled heritage" — tactile and warm, like a label come to life.

## Routes
`/`, `/spirits`, `/distillery`, `/visit`, `/cocktails`, `/where-to-buy`

## Design language
- Palette: charred barrel black `#1A1411`, copper `#B8733A`, raw grain `#D9C8A9`, a deep botanical green for gin.
- Type: custom-feeling serif/slab with a letterpress texture for display + a compact sans for tasting notes.
- Layout: textured backgrounds (paper grain, subtle emboss), bottles as heroes, cellar-dark sections.

## Motion language (signature)
- **3D bottle turntable** per SKU (CSS 3D rotate via drag/scroll) with label detail zoom.
- **Flavor wheel** tasting-note visual that animates on scroll (SVG).
- **Batch/barrel lookup**: enter a bottle number -> see its barrel, age, and proof.
- **Cocktail library** filtered by what's in the visitor's bar (multi-select).
- **Age gate** modal on first load (21+), remembered client-side.

Write: `components/age-gate.tsx`, `components/bottle-turntable.tsx`, `components/flavor-wheel.tsx`, `components/barrel-lookup.tsx`, `components/cocktail-filter.tsx`, `components/reveal.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`. Create `lib/spirits.ts` + `lib/cocktails.ts`.

## Content — fictional brand "PROOF DISTILLING CO."
- `/` — atmospheric hero; spirits teaser; distillery story; flavor wheel; where-to-buy CTA.
- `/spirits` — SKUs (bourbon, rye, gin, rum) with turntable + tasting notes; each item's batch lookup.
- `/distillery` — process story (grain to barrel), timeline.
- `/visit` — tours/events + a booking form.
- `/cocktails` — filterable recipe library.
- `/where-to-buy` — a simple retailer locator (filter by region; illustrative data).

Note age-gate + responsible-drinking messaging. Use a fictional brand + sample contact details.

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`
- NO 3D/WebGL/map libraries. Do NOT import `three`, `@react-three/*`, `mapbox-gl`, `maplibre-gl`, `d3`, etc. (not installed). Build any "3D"/interactive visuals with CSS 3D transforms, inline SVG, gradients, and motion.

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` -> `{ Button }`
- `@/components/ui/card` -> `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` -> `{ Badge }`
- `@/components/ui/input` -> `{ Input }`
- `@/components/ui/label` -> `{ Label }`
Everything else you MUST write yourself under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1. (A dynamic route page with `generateStaticParams`/`generateMetadata` stays a SERVER component; put interactive UI in `"use client"` children.)
2. Icons are components: `<ArrowUpRight className="size-4" />`. Never `{icon.size}`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) lives in `app/layout.tsx`, rendered EXACTLY once; pages must NOT render it.
4. Import every symbol you use; no unused imports; no `any`; type props explicitly.
5. Photos: plain `<img loading="lazy" alt="..." className="... object-cover">`; use `https://picsum.photos/seed/<unique-slug>/<w>/<h>`; graphics via CSS gradients / inline SVG. No empty src.
6. Respect reduced motion (`useReducedMotion()`); skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy (fictional business). No lorem ipsum / TODO / sample text.
8. Responsive mobile-first; never overflow horizontally.
9. Clearly label testimonials, results, figures, and imagery as illustrative demo content. Use a FICTIONAL business name + sample contact details; never present invented credentials, results, certifications, or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="...">...</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route, every component, and any `lib/*` data module you reference.
