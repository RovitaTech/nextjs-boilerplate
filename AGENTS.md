# Project Instructions

This repository is a company website for Rovitatech. Treat it as a polished marketing site, not a demo app.

## Goals

- Keep the site visually strong, modern, and trustworthy.
- Prefer clean, high-contrast layouts with deliberate spacing and typography.
- Make every change feel production-ready for a real business audience.
- Preserve the existing brand direction unless the user explicitly asks for a redesign.

## Design Direction

- Use a clear visual hierarchy with one primary CTA per section.
- Favor premium, minimal UI over generic dashboard patterns.
- Build with responsive sections that work well on desktop, tablet, and mobile.
- Use motion sparingly and intentionally; animations should support the message, not distract from it.
- Avoid default-looking layouts, plain white backgrounds, and overused Tailwind boilerplate.
- If you add new visual styles, keep them consistent across the site.

## Folder Structure

- Put route pages in `app/` using the Next.js App Router.
- Keep shared UI components in `components/`.
- Keep reusable utilities, clients, and helpers in `lib/`.
- Keep static files in `public/`.
- Add route groups or nested routes only when they improve clarity and scaling.
- Prefer small, focused components over large monolithic page files.

## Implementation Rules

- Use TypeScript for all new code.
- Prefer server components by default; add client components only when interactivity requires them.
- Keep metadata, SEO text, and page copy business-focused and concise.
- Reuse existing styling tokens and patterns before introducing new ones.
- Do not add unnecessary dependencies.
- Keep edits minimal and aligned with the current codebase structure.

## Code Quality

- Name components and files clearly and consistently.
- Keep props small and explicit.
- Avoid hardcoded magic values when a shared constant or reusable pattern makes sense.
- When adding a new section, think about content flow, spacing, mobile behavior, and accessibility.
- Ensure forms, links, and interactive elements have clear labels and states.

## Validation

- Run the smallest relevant check after changes, usually `npm run lint` or `npm run build` when appropriate.
- Fix TypeScript, lint, and accessibility issues before considering a task done.
- Do not change unrelated files or rewrite the project structure without a clear reason.
