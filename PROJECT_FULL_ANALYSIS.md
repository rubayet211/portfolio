# PROJECT_FULL_ANALYSIS

## 1. Project Overview

This repository is a small personal portfolio website built with Next.js App Router and deployed as a static site at build time. The codebase presents professional profile information for **Rhyme Rubayet**, including an introduction, skill list, project showcase, downloadable CV, and a contact form that sends messages through EmailJS directly from the browser.

### Analysis Scope

- **Confirmed:** This document is based on the tracked repository state in `K:\Apply\portfolio\portfolio-v2`.
- **Confirmed:** The repository contains a frontend-only Next.js application with source code in `src/`, static assets in `public/`, and npm-based dependency management via `package.json` and `package-lock.json`.
- **Confirmed:** `npm run build` succeeds and prerenders the site as static routes.
- **Confirmed:** `npm run lint` succeeds with no ESLint errors.
- **Confirmed:** No tracked backend, internal API, database, authentication system, middleware, or test suite exists in the repository.
- **Inferred:** The site is intended for recruiting, client acquisition, and personal branding rather than transactional or authenticated product workflows.

### Evidence Base

Primary files used for this analysis include:

- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `jsconfig.json`
- `eslint.config.mjs`
- `postcss.config.mjs`
- `src/app/layout.js`
- `src/app/clientLayout.js`
- `src/app/page.js`
- `src/app/about/page.jsx`
- `src/app/skill/page.jsx`
- `src/app/projects/page.jsx`
- `src/app/contact/page.jsx`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/ScrollArrow.jsx`
- `src/components/data.js`
- `src/hooks/useScrollNavigation.jsx`

## 2. Executive Summary

This project is a **frontend-only portfolio application** implemented with **Next.js 15.3.1**, **React 19**, and **Tailwind CSS 4**. It uses the App Router under `src/app` and relies on a global client wrapper (`src/app/clientLayout.js`) to add persistent navigation, footer, scroll reset behavior, and a cross-page scroll navigation control.

From a product perspective, the site is a digital portfolio for a software engineer. Its primary user journeys are:

- reading an introductory landing page
- learning about the author on `/about`
- browsing technical skills on `/skill`
- reviewing selected projects on `/projects`
- contacting the author on `/contact`
- downloading a résumé from `public/cv.pdf`

Architecturally, the codebase is simple and mostly presentational. There is no internal server-side business layer. The only nontrivial client logic is:

- route-aware layout behavior in `src/app/clientLayout.js`
- responsive/mobile navigation behavior in `src/components/Header.jsx`
- custom cross-route scroll navigation in `src/hooks/useScrollNavigation.jsx`
- EmailJS-powered contact submission and clipboard copy behavior in `src/app/contact/page.jsx`

The project is easy to understand and maintain at its current size, but it also has notable limitations:

- content is hardcoded in components and arrays
- no CMS, database, or admin editing path exists
- no first-party backend validation exists for contact submissions
- no tests or CI/CD configuration are present
- build emits a Next.js warning because `metadata.viewport` is set incorrectly in `src/app/layout.js`

## 3. Tech Stack Summary

| Area | Technology | Evidence | Notes |
| --- | --- | --- | --- |
| Framework | Next.js 15.3.1 | `package.json` | App Router structure under `src/app` |
| UI Library | React 19 | `package.json` | Uses React client components and hooks |
| Rendering Model | Static prerendered Next.js app | `npm run build` output | Routes build as static content |
| Styling | Tailwind CSS 4 | `package.json`, `postcss.config.mjs`, `src/app/globals.css` | Tailwind v4 `@import "tailwindcss"` pattern |
| Icons | `lucide-react` | `package.json` | Used for arrows, menu icons, social icons, mail, check |
| Contact Integration | `@emailjs/browser` | `package.json`, `src/app/contact/page.jsx` | Browser-only outbound form submission |
| Fonts | `next/font/google` with Inter | `src/app/layout.js` | Uses `Inter` with weights and fallback stack |
| Package Manager | npm | `package-lock.json` | No pnpm/yarn/bun lockfiles present |
| Language | JavaScript / JSX | file extensions under `src/` | No TypeScript source files |
| Module Alias | `@/*` -> `./src/*` | `jsconfig.json` | Used across imports |
| Linting | ESLint + `eslint-config-next` | `eslint.config.mjs` | `next/core-web-vitals` preset |
| Build Tooling | Next.js build pipeline | `package.json` scripts | No custom bundler config present |

### Project Classification

- **Confirmed:** This is a **frontend-only** web application.
- **Confirmed:** It is a **single application**, not a monorepo.
- **Confirmed:** It is not a hybrid full-stack app in the tracked codebase.
- **Confirmed:** No internal backend service, ORM, or API route tree exists.
- **Inferred:** It can likely be hosted on Vercel or any platform capable of serving a Next.js static output or standard Next.js app, but no deployment target is explicitly configured in code.

## 4. Dependency Analysis

### Runtime Dependencies

| Package | Declared In | Role | Observed Usage |
| --- | --- | --- | --- |
| `next` | `package.json` | Framework, routing, build/runtime | App Router, `next/link`, `next/image`, `next/navigation`, `next/font/google` |
| `react` | `package.json` | UI runtime | `useState`, `useEffect`, `useRef` |
| `react-dom` | `package.json` | DOM renderer | Indirect React runtime dependency |
| `lucide-react` | `package.json` | Icon library | `ArrowRight`, `ExternalLink`, `Menu`, `X`, `Github`, `Linkedin`, `Twitter`, `Mail`, `Check`, `ArrowDown` |
| `@emailjs/browser` | `package.json` | Client-side email sending | `emailjs.sendForm(...)` in `src/app/contact/page.jsx` |

### Development Dependencies

| Package | Declared In | Role | Observed Usage |
| --- | --- | --- | --- |
| `eslint` | `package.json` | Lint runner | Used by `npm run lint` |
| `eslint-config-next` | `package.json` | Next.js ESLint rules | Pulled in by `eslint.config.mjs` |
| `@eslint/eslintrc` | `package.json` | Flat config compatibility helper | `FlatCompat` in `eslint.config.mjs` |
| `tailwindcss` | `package.json` | Utility CSS framework | Loaded through `src/app/globals.css` |
| `@tailwindcss/postcss` | `package.json` | Tailwind PostCSS plugin | Configured in `postcss.config.mjs` |

### Dependency Role Breakdown

- **Core packages:** `next`, `react`, `react-dom`
- **UI-support packages:** `lucide-react`, `tailwindcss`
- **Integration package:** `@emailjs/browser`
- **Tooling packages:** `eslint`, `eslint-config-next`, `@eslint/eslintrc`, `@tailwindcss/postcss`

### Potentially Unused or Suspicious Items

- **Confirmed:** `npm ls --depth=0` reports extraneous installed packages such as `@emnapi/core`, `@emnapi/runtime`, `@emnapi/wasi-threads`, `@napi-rs/wasm-runtime`, and `@tybys/wasm-util`.
- **Confirmed:** These packages are **not declared** in `package.json`.
- **Unknown / Could not verify from code:** Whether those extraneous packages were left from a previous install state, another tool, or an IDE/plugin process. They are not referenced in the tracked application code.
- **Confirmed:** `src/components/Logo.jsx` exists but appears unused by the rendered application. `src/app/about/page.jsx` imports `Logo` without using it.

### Absent Dependency Categories

- **Confirmed:** No state management library such as Redux, Zustand, Jotai, MobX, or Recoil is installed.
- **Confirmed:** No form library such as React Hook Form or Formik is installed.
- **Confirmed:** No validation library such as Zod or Yup is installed.
- **Confirmed:** No database or ORM library such as Prisma, Drizzle, Sequelize, Mongoose, or TypeORM is installed.
- **Confirmed:** No auth library such as NextAuth/Auth.js, Clerk, Firebase Auth, or Supabase Auth is installed.
- **Confirmed:** No testing library such as Jest, Vitest, Cypress, or Playwright is installed.
- **Confirmed:** No analytics or monitoring package such as Sentry, Vercel Analytics, LogRocket, or PostHog is installed.

## 5. Architecture Overview

### High-Level Architecture

The application uses a **single Next.js App Router tree** under `src/app`:

- `src/app/layout.js` defines the global HTML shell, metadata, font setup, and wraps the site with `ClientLayout`.
- `src/app/clientLayout.js` is a client component that renders:
  - the shared `Header`
  - a shared `<main>` container
  - the shared `Footer`
  - the `ScrollArrow` control on every route except `/contact`
- each route is implemented as a page component under `src/app/<segment>/page.jsx` or `src/app/page.js`

### Separation of Concerns

| Concern | Location | Notes |
| --- | --- | --- |
| Route definitions and page content | `src/app/*` | Each route owns its screen markup |
| Shared site chrome | `src/app/clientLayout.js`, `src/components/Header.jsx`, `src/components/Footer.jsx` | Global layout is centralized |
| Shared styling primitives | `src/app/globals.css` | Tailwind utilities plus custom semantic classes |
| Static content/data | `src/components/data.js`, hardcoded arrays in pages | No CMS or API-backed content |
| Cross-route navigation behavior | `src/hooks/useScrollNavigation.jsx` | Custom interaction logic |
| External contact submission | `src/app/contact/page.jsx` | EmailJS integration done in browser |

### Architectural Style

- **Confirmed:** The architecture is lightweight and mostly presentation-oriented.
- **Confirmed:** Business logic is minimal and embedded close to the UI.
- **Confirmed:** There is no service layer, repository layer, or domain layer.
- **Inferred:** For a portfolio site of this size, the direct placement of content and interaction logic inside page components is acceptable, but this structure would become harder to maintain if the site grows substantially.

### Rendering Model

- **Confirmed:** `npm run build` shows `/`, `/about`, `/skill`, `/projects`, `/contact`, and `/_not-found` as static routes.
- **Confirmed:** The route components do not fetch server data.
- **Confirmed:** Most content is hardcoded and available at build time.
- **Inferred:** The site is optimized for static delivery with small islands of client interactivity.

## 6. Folder and File Structure Breakdown

### Top-Level Structure

| Path | Purpose |
| --- | --- |
| `package.json` | Dependency manifest and npm scripts |
| `package-lock.json` | Exact npm lockfile |
| `next.config.mjs` | Next.js configuration |
| `jsconfig.json` | Path alias setup |
| `eslint.config.mjs` | ESLint flat config |
| `postcss.config.mjs` | PostCSS plugin config for Tailwind |
| `.gitignore` | Standard ignore rules for Next.js, env files, logs, build output |
| `public/` | Static assets such as images and CV PDF |
| `src/` | Application source code |
| `.next/` | Generated Next.js build output; not part of authored source |
| `node_modules/` | Installed dependencies; not part of authored source |

### `src/` Breakdown

| Path | Purpose |
| --- | --- |
| `src/app/` | App Router routes, layout, global CSS |
| `src/components/` | Shared presentational components and project data |
| `src/hooks/` | Custom React hook for route navigation behavior |

### `src/app/` Breakdown

| Path | Purpose |
| --- | --- |
| `src/app/layout.js` | Root HTML/layout wrapper and metadata definition |
| `src/app/clientLayout.js` | Shared body, header, footer, scroll reset, conditional `ScrollArrow` |
| `src/app/globals.css` | Theme variables and custom classes |
| `src/app/page.js` | Home page |
| `src/app/about/page.jsx` | About page |
| `src/app/skill/page.jsx` | Skills page |
| `src/app/projects/page.jsx` | Projects page |
| `src/app/contact/page.jsx` | Contact page |
| `src/app/favicon.ico` | Browser favicon asset |

### `src/components/` Breakdown

| Path | Purpose |
| --- | --- |
| `src/components/Header.jsx` | Responsive navigation header |
| `src/components/Footer.jsx` | Footer with copyright and social links |
| `src/components/ScrollArrow.jsx` | Bottom-center next-page navigation button |
| `src/components/data.js` | Static `projectsData` array |
| `src/components/Logo.jsx` | SVG logo component; appears unused |

### `src/hooks/` Breakdown

| Path | Purpose |
| --- | --- |
| `src/hooks/useScrollNavigation.jsx` | Wheel/touch/route-sequencing hook for next/previous page navigation |

### Conventions and Observations

- **Confirmed:** The project uses the Next.js App Router file-system convention.
- **Confirmed:** Import aliases use `@/` for the `src/` directory.
- **Confirmed:** The codebase mixes `.js` and `.jsx` extensions.
- **Confirmed:** There is no dedicated `lib/`, `utils/`, `services/`, `server/`, `api/`, or `types/` directory.
- **Confirmed:** Validation, data access, and business logic are not separated into dedicated modules.
- **Inferred:** This structure is intentionally minimal and optimized for simplicity rather than layered architecture.

## 7. Product Purpose and Problem Solved

### What the Project Is

This application is a personal portfolio website for **Rhyme Rubayet**, presenting professional identity, technical skills, selected project work, and contact information.

### Problem It Solves

The site solves the problem of presenting a software engineer’s profile in a curated, easily navigable web format. It gives potential employers, clients, or collaborators a single place to:

- understand who the engineer is
- see relevant skills
- review selected projects and live links
- obtain a résumé
- make contact without needing a separate backend contact system

### Domain and Product Orientation

- **Confirmed:** The domain is personal branding / developer portfolio.
- **Inferred:** Likely users are recruiters, hiring managers, freelance clients, startup founders, and professional peers.
- **Inferred:** The product is optimized for quick evaluation and direct outreach rather than long-form content, blogging, or transactional conversion.

### Central vs Secondary Features

| Priority | Feature |
| --- | --- |
| Central | Personal introduction and identity |
| Central | Skill presentation |
| Central | Project showcase |
| Central | Contact workflow |
| Central | CV download |
| Secondary | Cross-page scroll navigation |
| Secondary | Social profile linking |

## 8. User Roles and Primary Workflows

### User Roles

| Role | Evidence | Primary Goals |
| --- | --- | --- |
| Visitor / Recruiter | Inferred from content and structure | Review profile, assess fit, download CV, contact author |
| Visitor / Client | Inferred from portfolio and contact flow | Inspect projects, evaluate capabilities, start a conversation |
| Site Owner | Inferred from hardcoded content model | Update biography, skills, projects, and contact details in source code |

### Primary Workflows

#### 1. Learn Who the Author Is

1. Visitor lands on `/`.
2. Clicks `Explore`, which links to `/about`.
3. Reads biography text and downloads the CV from `public/cv.pdf`.

#### 2. Review Capabilities

1. Visitor opens `/skill`.
2. Reads the hardcoded skill grid rendered from the `skills` array in `src/app/skill/page.jsx`.

#### 3. Review Work Samples

1. Visitor opens `/projects`.
2. Browses cards built from `projectsData` in `src/components/data.js`.
3. Opens a live project or repository link in a new tab.
4. Optionally uses the “View All Projects” GitHub link.

#### 4. Make Contact

1. Visitor opens `/contact`.
2. Either copies the email address using `navigator.clipboard.writeText(...)` or submits the form.
3. Form data is sent directly to EmailJS by `emailjs.sendForm(...)`.
4. UI shows success or failure message based on the promise result.

#### 5. Navigate Sequentially Across the Portfolio

1. Visitor scrolls to page edge or uses the bottom `ScrollArrow`.
2. `useScrollNavigation` moves between routes in the fixed `ROUTES` sequence:
   - `/`
   - `/about`
   - `/skill`
   - `/projects`
   - `/contact`

## 9. Full Feature Inventory

| Feature | Location | Status | Notes |
| --- | --- | --- | --- |
| Landing hero with CTA | `src/app/page.js` | Confirmed complete | Static hero and link to `/about` |
| Global navigation header | `src/components/Header.jsx` | Confirmed complete | Desktop and mobile variants |
| About profile section | `src/app/about/page.jsx` | Confirmed complete | Includes profile image and CV download |
| Skills grid | `src/app/skill/page.jsx` | Confirmed complete | Hardcoded technology list |
| Project showcase grid | `src/app/projects/page.jsx` | Confirmed complete | Data-driven cards with live links |
| Contact form | `src/app/contact/page.jsx` | Confirmed complete | Browser-side EmailJS form submission |
| Copy email interaction | `src/app/contact/page.jsx` | Confirmed complete | Clipboard API with temporary UI feedback |
| Scroll-to-next-page button | `src/components/ScrollArrow.jsx` | Confirmed complete | Hidden on `/contact` |
| Scroll-driven route transitions | `src/hooks/useScrollNavigation.jsx` | Confirmed partial / nuanced | Works for wheel navigation; touch behavior on small touch devices is inconsistent |
| Footer social links | `src/components/Footer.jsx` | Confirmed complete | GitHub, X/Twitter, LinkedIn |
| Static asset delivery | `public/*` | Confirmed complete | Images and CV are directly served |
| Authentication | Not present | Confirmed absent | No login or user session model |
| Admin dashboard | Not present | Confirmed absent | No role-specific area |
| API layer | Not present | Confirmed absent | No `src/app/api` routes |
| Database persistence | Not present | Confirmed absent | No DB configuration or schema |
| Automated testing | Not present | Confirmed absent | No test config or test files |

## 10. Pages / Routes / Screens Breakdown

### Route Inventory

| Route | File | Type | Auth | Data Source | Notes |
| --- | --- | --- | --- | --- | --- |
| `/` | `src/app/page.js` | Static page with small client footprint | Public | Hardcoded text | Hero landing page |
| `/about` | `src/app/about/page.jsx` | Static page | Public | Hardcoded text + `public/profile.png` + `public/cv.pdf` | Biography and CV download |
| `/skill` | `src/app/skill/page.jsx` | Static page | Public | Local `skills` array | Skills grid |
| `/projects` | `src/app/projects/page.jsx` | Client page | Public | `projectsData` from `src/components/data.js` | Hover effects and outbound links |
| `/contact` | `src/app/contact/page.jsx` | Client page | Public | Form fields + env vars for EmailJS | Contact form and email copy |
| `/_not-found` | Implicit Next.js route | Framework-generated | Public | N/A | No custom not-found UI file exists |

### Shared Layout Structure

- `src/app/layout.js`
  - Sets metadata and font.
  - Wraps the application in `<html lang="en" ...>`.
  - Delegates `<body>` rendering to `ClientLayout`.
- `src/app/clientLayout.js`
  - renders `Header`
  - wraps route content in `<main className="flex-1 flex">`
  - renders `Footer`
  - renders `ScrollArrow` except on `/contact`
  - scrolls to top on route changes using `window.scrollTo(0, 0)`

### `/` Home

- **File:** `src/app/page.js`
- **Purpose:** Introductory landing screen.
- **Major UI sections:**
  - centered hero title “Rhyme Rubayet”
  - subtitle “SOFTWARE ENGINEER + WEB DEVELOPER”
  - `Explore` CTA linking to `/about`
- **Key components/packages used:**
  - `next/link`
  - `ArrowRight` from `lucide-react`
- **Data dependencies:** None outside inline strings.
- **User actions:** Click `Explore`.
- **Backend/API calls involved:** None.
- **Auth requirement:** Public.
- **State/validation behavior:** None.
- **Notable logic:** Marked `"use client"` even though no React hooks are used.

### `/about`

- **File:** `src/app/about/page.jsx`
- **Purpose:** Present biography, profile image, and downloadable CV.
- **Major UI sections:**
  - “About Me” heading
  - profile image using `next/image`
  - multiple biography paragraphs
  - CV download button
- **Key components/packages used:**
  - `next/image`
- **Data dependencies:**
  - `/profile.png`
  - `/cv.pdf`
- **User actions:** Download CV.
- **Backend/API calls involved:** None.
- **Auth requirement:** Public.
- **State/validation behavior:** None.
- **Notable logic:** `Logo` is imported from `@/components/Logo` but never rendered.

### `/skill`

- **File:** `src/app/skill/page.jsx`
- **Purpose:** Display technical skills.
- **Major UI sections:**
  - page heading
  - responsive skills grid
- **Key components/packages used:** None beyond React JSX and Tailwind classes.
- **Data dependencies:** Local `skills` array declared inside the component.
- **User actions:** Read-only browsing.
- **Backend/API calls involved:** None.
- **Auth requirement:** Public.
- **State/validation behavior:** None.
- **Notable logic:** Purely static rendering of a hardcoded array.

### `/projects`

- **File:** `src/app/projects/page.jsx`
- **Purpose:** Showcase selected projects with live links.
- **Major UI sections:**
  - heading
  - responsive project card grid
  - “View All Projects” GitHub link
- **Key components/packages used:**
  - `useState`
  - `next/link`
  - `next/image`
  - `ExternalLink` from `lucide-react`
- **Data dependencies:** `projectsData` imported from `src/components/data.js`
- **User actions:**
  - hover project cards
  - open a project live link/repository
  - open GitHub profile
- **Backend/API calls involved:** None.
- **Auth requirement:** Public.
- **State/validation behavior:** Uses local `hoveredProject` state to scale hovered image.
- **Notable logic:** The component function is named `projects` with a lowercase initial letter, which is unusual but still valid because it is the default export.

### `/contact`

- **File:** `src/app/contact/page.jsx`
- **Purpose:** Allow visitors to contact the site owner.
- **Major UI sections:**
  - “Get in Touch” info panel
  - email copy button
  - contact form with name, email, subject, message
  - transient success/failure status area
- **Key components/packages used:**
  - `useState`
  - `useRef`
  - `Mail` and `Check` from `lucide-react`
  - `@emailjs/browser`
- **Data dependencies:**
  - hardcoded email address `rubayet211@gmail.com`
  - environment variables:
    - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
    - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
    - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **User actions:**
  - copy email to clipboard
  - submit contact form
- **Backend/API calls involved:** No first-party API calls. Submission goes directly to EmailJS from the client.
- **Auth requirement:** Public.
- **State/validation behavior:**
  - browser-native `required` validation on inputs
  - `isCopied` for temporary copy confirmation
  - `isSending` for submit button disabled/loading state
  - `sendStatus` for feedback banner
- **Notable logic:**
  - calls `form.current.reset()` on success
  - logs EmailJS failure text with `console.log("FAILED...", error.text)`
  - clears feedback banner after 5 seconds

### `/_not-found`

- **File:** No explicit file in tracked source.
- **Purpose:** Default Next.js not-found handling.
- **Confirmed:** The build output includes `/_not-found`.
- **Unknown / Could not verify from code:** The exact UI text/content because no custom `not-found` component is defined in tracked source.

### Protected/Admin/Dynamic/Nested Routes

- **Confirmed:** No protected routes exist.
- **Confirmed:** No admin routes exist.
- **Confirmed:** No dashboard routes exist.
- **Confirmed:** No dynamic segments such as `[slug]` or `[id]` exist.
- **Confirmed:** No route groups, parallel routes, or intercepting routes exist.
- **Confirmed:** The only layout layer is the root `src/app/layout.js` plus shared UI composition from `src/app/clientLayout.js`.

## 11. API / Backend Breakdown

### Internal Backend Presence

- **Confirmed:** No internal backend API exists in the tracked repository.
- **Confirmed:** There is no `src/app/api/` directory.
- **Confirmed:** There are no server actions, request handlers, controllers, services, repositories, or middleware modules.
- **Confirmed:** No `middleware.js` or `middleware.ts` file exists at the project root or under `src/`.

### How the “Backend” Responsibility Is Actually Handled

The only user-submitted data flow is in `src/app/contact/page.jsx`, and it bypasses a first-party backend:

1. The user fills out the contact form.
2. The page keeps a reference to the `<form>` element using `useRef()`.
3. `sendEmail(e)` prevents default form submission.
4. `emailjs.sendForm(...)` sends the form directly to EmailJS using public identifiers from `process.env.NEXT_PUBLIC_*`.
5. The UI shows success or error feedback locally in React state.

### Implications

- **Confirmed:** There is no server-side validation layer.
- **Confirmed:** There is no custom request logging, rate limiting, spam protection, or persistence in repo code.
- **Confirmed:** Response handling is limited to EmailJS promise resolution in the browser.
- **Inferred:** Any anti-spam, email template logic, or delivery reliability policy depends on EmailJS configuration outside this repository.

## 12. Database and Data Model Breakdown

### Database Presence

- **Confirmed:** No database is implemented in tracked source.
- **Confirmed:** No ORM/ODM package is installed.
- **Confirmed:** No schema file such as `prisma/schema.prisma` or equivalent exists.
- **Confirmed:** No migrations or seed scripts exist.

### Effective Data Model in This Repository

The application still has a few structured content models, but they are all in-memory, hardcoded JavaScript objects/arrays.

#### `projectsData`

- **File:** `src/components/data.js`
- **Structure:** Array of objects with fields:
  - `id`
  - `title`
  - `description`
  - `image`
  - `liveLink`
- **Usage:** Imported by `src/app/projects/page.jsx` and mapped into project cards.
- **Meaning:** Represents the portfolio project catalog shown to visitors.

#### `skills`

- **File:** `src/app/skill/page.jsx`
- **Structure:** Array of strings declared inside the page component.
- **Usage:** Mapped into skill cards.
- **Meaning:** Represents the author’s technology stack and tooling familiarity.

#### Other Hardcoded Content

| Data Type | Location | Example |
| --- | --- | --- |
| Person name | `src/app/page.js`, `src/app/layout.js`, `src/components/Footer.jsx` | `Rhyme Rubayet` |
| Biography text | `src/app/about/page.jsx` | Paragraph content about experience and interests |
| Contact email | `src/app/contact/page.jsx` | `rubayet211@gmail.com` |
| Route order | `src/hooks/useScrollNavigation.jsx` | `ROUTES = ["/", "/about", "/skill", "/projects", "/contact"]` |
| Social URLs | `src/components/Footer.jsx` | GitHub, X/Twitter, LinkedIn |

### Data Relationships

- **Confirmed:** There are no relational data models.
- **Confirmed:** No persistent ownership or identity model exists.
- **Inferred:** The “data layer” is effectively static content embedded directly into UI code.

## 13. Authentication and Authorization

- **Confirmed:** No authentication mechanism exists.
- **Confirmed:** No login, signup, logout, password reset, email verification, or session handling code exists.
- **Confirmed:** No role-based access control logic exists.
- **Confirmed:** No user profile/account area exists.
- **Confirmed:** No route guard or permission middleware exists.
- **Confirmed:** All tracked routes are public.

### Security Posture in This Area

- **Confirmed:** Because no auth model exists, there are no protected capabilities to document.
- **Inferred:** The site’s attack surface is mainly limited to public page rendering and the external EmailJS form submission path.

## 14. State Management and Data Flow

### State Management Strategy

- **Confirmed:** The application uses only **component-local React state** and refs.
- **Confirmed:** No global state store exists.
- **Confirmed:** No server-state library such as React Query or SWR is used.

### Local State Inventory

| Component / Hook | State / Ref | Purpose |
| --- | --- | --- |
| `src/components/Header.jsx` | `isMenuOpen` | Controls mobile overlay menu visibility |
| `src/components/Header.jsx` | `hasScrolled` | Changes header background/blur after scroll |
| `src/app/projects/page.jsx` | `hoveredProject` | Tracks hovered card for image scaling |
| `src/app/contact/page.jsx` | `isCopied` | Temporary copied-email indicator |
| `src/app/contact/page.jsx` | `isSending` | Submit loading/disabled state |
| `src/app/contact/page.jsx` | `sendStatus` | Success/error message state |
| `src/app/contact/page.jsx` | `form` (`useRef`) | Holds form DOM reference for EmailJS |
| `src/hooks/useScrollNavigation.jsx` | `isNavigating` | Prevents rapid repeated route changes |
| `src/hooks/useScrollNavigation.jsx` | `lastScrollTime` | Throttle timing for wheel/touch navigation |
| `src/hooks/useScrollNavigation.jsx` | `touchStartY` | Tracks gesture starting point |
| `src/hooks/useScrollNavigation.jsx` | `isMobile` | Determines navigation event strategy |
| `src/hooks/useScrollNavigation.jsx` | `scrollTimeout` (`useRef`) | Cleanup placeholder; not materially used for navigation timing |

### Data Flow by Feature

#### Static Content Rendering

1. Next.js loads the route component.
2. The component renders text and asset references directly from source code or local arrays.
3. No fetch or async loader is involved.

#### Global Layout and Navigation Flow

1. `src/app/layout.js` wraps pages in `ClientLayout`.
2. `ClientLayout` reads `pathname` using `usePathname()`.
3. On pathname change, it runs `window.scrollTo(0, 0)`.
4. `Header` also uses `usePathname()` to mark the active route.
5. `ScrollArrow` is shown unless the current route is `/contact`.

#### Project Showcase Flow

1. `src/app/projects/page.jsx` imports `projectsData`.
2. The component maps the array into cards.
3. Hover events update `hoveredProject`.
4. The matching project image scales up using conditional class names.

#### Contact Form Flow

1. User enters data into native HTML fields.
2. Browser-level `required` constraints provide minimal validation.
3. On submit, `sendEmail` prevents default form action.
4. `isSending` is set to `true`.
5. EmailJS reads the form via `form.current`.
6. Success or failure updates `sendStatus`.
7. Success also resets the form.
8. `finally` resets loading and clears the message after 5 seconds.

### Error Handling

- **Confirmed:** Error handling is UI-local and minimal.
- **Confirmed:** Contact submission failure shows a generic message.
- **Confirmed:** Error details are only logged with `console.log`.
- **Confirmed:** There is no centralized error boundary, telemetry, or retry logic in tracked source.

### Loading and Optimistic Behavior

- **Confirmed:** The contact form disables the submit button while sending.
- **Confirmed:** No optimistic update pattern exists.
- **Confirmed:** No skeleton, suspense, or loading route files exist.

### Client/Server Boundary

- **Confirmed:** The codebase heavily uses client components for interactive screens and shared layout behavior.
- **Confirmed:** No server-only modules or server data loaders are present.
- **Inferred:** The server/client boundary is minimal because the site is almost entirely static content plus browser interactivity.

## 15. UI / Component System

### Shared UI Components

| Component | File | Role |
| --- | --- | --- |
| `Header` | `src/components/Header.jsx` | Primary navigation, active route styling, mobile menu |
| `Footer` | `src/components/Footer.jsx` | Copyright and social links |
| `ScrollArrow` | `src/components/ScrollArrow.jsx` | Sequential navigation CTA |
| `Logo` | `src/components/Logo.jsx` | Custom SVG mark, apparently unused |

### Layout and Composition Pattern

- Shared chrome is applied once in `src/app/clientLayout.js`.
- Individual pages are responsible only for their main content.
- `main` uses flex layout so the footer remains visually at the bottom.

### Styling Approach

- **Confirmed:** Styling combines Tailwind utility classes with custom semantic helper classes in `src/app/globals.css`.
- **Confirmed:** Theme values are declared in CSS custom properties using the Tailwind v4 `@theme` syntax.
- **Confirmed:** Reusable custom classes include:
  - `.menu-item`
  - `.stripe-bg`
  - `.social-icon`
  - `.button-outline`
  - `.cutout-button`
- **Inferred:** The design system is small but intentionally branded around dark surfaces and gold-accent tones.

### Typography and Branding

- `src/app/layout.js` loads the Inter font from Google using `next/font/google`.
- Home and section headings use serif-related class names such as `font-serif`.
- Visual branding relies on:
  - profile imagery in `public/profile.png`
  - logo asset `public/logo.png`
  - optional SVG `src/components/Logo.jsx`
  - dark background palette and accent color variables

### Responsiveness

- **Confirmed:** Pages use responsive Tailwind breakpoints such as `sm:`, `md:`, `lg:`, and `xl:`.
- **Confirmed:** The header switches from a desktop nav bar to a mobile overlay menu.
- **Confirmed:** The about page swaps from a single column to a two-column layout on medium screens.
- **Confirmed:** The projects grid scales from one to three columns depending on viewport width.
- **Confirmed:** Skill cards adjust column counts across breakpoints.

### Accessibility Indicators

Positive indicators:

- minimum touch-target sizing appears in multiple controls via `min-h-[44px]` and `min-w-[44px]`
- image `alt` text is provided
- menu toggle button has `aria-label="Toggle menu"`
- scroll arrow button has `aria-label="Scroll to next page"`
- form fields use `<label htmlFor=...>`

Gaps:

- **Confirmed:** No explicit keyboard focus styling is defined in `globals.css`.
- **Confirmed:** External links in `Footer` do not include visible text labels, relying on icons only.
- **Unknown / Could not verify from code:** Full accessibility quality under screen reader and keyboard-only testing.

### UX Patterns

- Fixed top navigation with active route underline
- Hero-first landing page with CTA
- Mobile full-screen overlay menu
- Hover-driven project reveal CTA
- Persistent bottom-center next-page affordance
- Contact form with inline success/failure messaging

## 16. External Integrations

### EmailJS

| Aspect | Evidence | Notes |
| --- | --- | --- |
| Package | `@emailjs/browser` in `package.json` | Browser SDK |
| Usage site | `src/app/contact/page.jsx` | `emailjs.sendForm(...)` |
| Config source | `process.env.NEXT_PUBLIC_*` | Public environment variables |
| Required keys | `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Read at runtime on client |

Implications:

- **Confirmed:** The contact feature depends on EmailJS to function.
- **Confirmed:** If the required public env vars are missing, contact submission cannot work.
- **Inferred:** Email template structure, recipient mapping, and service-level protections are managed outside the repo in EmailJS.

### Outbound External Links

| Destination Type | Location |
| --- | --- |
| GitHub profile | `src/components/Footer.jsx`, `src/app/projects/page.jsx` |
| X/Twitter profile | `src/components/Footer.jsx` |
| LinkedIn profile | `src/components/Footer.jsx` |
| Featured project sites/repos | `src/components/data.js` -> consumed in `src/app/projects/page.jsx` |

### Static Assets as External-Facing Resources

| Asset | Location | Role |
| --- | --- | --- |
| CV PDF | `public/cv.pdf` | Downloadable résumé |
| Logo PNG | `public/logo.png` | Brand identity in header |
| Profile image | `public/profile.png` | About page portrait |
| Project thumbnails | `public/nextandnest.png`, `public/nextandspring.png`, `public/nextjs-logo.jpg` | Project card visuals |

### Other Integrations

- **Confirmed:** No payment provider integration exists.
- **Confirmed:** No analytics integration exists.
- **Confirmed:** No cloud storage SDK exists.
- **Confirmed:** No AI API integration exists.
- **Confirmed:** No maps, webhook, CMS, or notification integration exists.
- **Inferred:** `next/font/google` introduces a framework-managed dependency on Google Fonts infrastructure at build/runtime according to Next.js behavior, but no manual font config is present in repo code.

## 17. Config / Environment / Build / Deployment

### Config Files

| File | Purpose | Notes |
| --- | --- | --- |
| `next.config.mjs` | Next.js config | Exports an empty config object |
| `jsconfig.json` | Module alias config | Defines `@/*` -> `./src/*` |
| `eslint.config.mjs` | ESLint config | Uses `FlatCompat` with `next/core-web-vitals` |
| `postcss.config.mjs` | PostCSS config | Registers `@tailwindcss/postcss` |
| `.gitignore` | Ignore rules | Ignores `.next`, `node_modules`, `.env*`, logs, build output |

### Environment Variables

No `.env`, `.env.local`, or `.env.example` file is tracked in the repository.

| Variable | Used In | Purpose | Status |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `src/app/contact/page.jsx` | EmailJS service selection | Required for contact form |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `src/app/contact/page.jsx` | EmailJS template selection | Required for contact form |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `src/app/contact/page.jsx` | EmailJS public API key | Required for contact form |

### npm Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `next dev` | Local development server |
| `build` | `next build` | Production build |
| `start` | `next start` | Serve built app |
| `lint` | `next lint` | ESLint run |

### Observed Build Behavior

`npm run build` completed successfully and reported static prerendering for:

- `/`
- `/about`
- `/skill`
- `/projects`
- `/contact`
- `/_not-found`

Observed route output:

| Route | Size | First Load JS |
| --- | --- | --- |
| `/` | 987 B | 106 kB |
| `/_not-found` | 977 B | 102 kB |
| `/about` | 172 B | 107 kB |
| `/contact` | 3.49 kB | 105 kB |
| `/projects` | 2.02 kB | 112 kB |
| `/skill` | 136 B | 101 kB |

### Observed Lint Behavior

- **Confirmed:** `npm run lint` completed successfully with no ESLint errors or warnings.

### Build Warning

- **Confirmed:** Next.js emitted warnings that `metadata.viewport` is unsupported in the metadata export and should be moved to a `viewport` export.
- **Evidence:** `src/app/layout.js`
- **Impact:** Non-blocking warning during production build.

### Deployment Signals

- **Confirmed:** No `vercel.json`, `netlify.toml`, `Dockerfile`, `docker-compose`, GitHub Actions workflow, or other CI/CD config is tracked.
- **Unknown / Could not verify from code:** The actual hosting platform.
- **Inferred:** The project is compatible with standard Next.js hosting, and because all current routes prerender statically, static-friendly hosting is likely viable.

## 18. Important File-by-File Notes

| File | Notes |
| --- | --- |
| `.gitignore` | Standard ignore file for Node/Next artifacts, env files, logs, and build output. |
| `package.json` | Defines the project as `portfolio`, includes minimal runtime and tooling dependencies, and exposes `dev`, `build`, `start`, and `lint` scripts. |
| `package-lock.json` | npm lockfile pinning resolved package tree; also shows only the declared dependencies at the root package entry. |
| `next.config.mjs` | Empty Next.js config export; no custom images, rewrites, headers, or experimental features enabled. |
| `jsconfig.json` | Enables `@/` imports from `src/`; no broader compiler customization. |
| `eslint.config.mjs` | Uses `FlatCompat` to extend `next/core-web-vitals`; minimal lint customization. |
| `postcss.config.mjs` | Registers Tailwind’s PostCSS plugin; no additional PostCSS plugins configured. |
| `src/app/layout.js` | Root layout; loads Inter font, defines metadata, sets `lang="en"`, and wraps the app with `ClientLayout`. Also contains the `metadata.viewport` warning source. |
| `src/app/clientLayout.js` | Client wrapper that renders `Header`, `Footer`, route content, scroll-to-top behavior, and conditional `ScrollArrow`. |
| `src/app/globals.css` | Tailwind v4 import plus theme tokens and custom shared classes. Central to the site’s visual identity. |
| `src/app/page.js` | Home page hero screen with branded title, subtitle, and `/about` CTA. |
| `src/app/about/page.jsx` | About screen with profile image, biography text, and CV download button. Imports `Logo` without using it. |
| `src/app/skill/page.jsx` | Skills screen; renders a local array of technology strings into a responsive grid. |
| `src/app/projects/page.jsx` | Projects screen; maps `projectsData` to cards with hover state and outbound links. |
| `src/app/contact/page.jsx` | Contact screen; implements clipboard copy and EmailJS form submission with local status state. |
| `src/app/favicon.ico` | Favicon used by the browser; not application logic. |
| `src/components/Header.jsx` | Fixed header with active route detection, mobile overlay menu, and scroll-reactive styling. Uses PNG logo rather than `Logo.jsx`. |
| `src/components/Footer.jsx` | Footer with current year calculation and outbound social links. |
| `src/components/ScrollArrow.jsx` | Fixed bottom-center control that triggers `navigateToNextPage`; accepts an unused `position` prop. |
| `src/components/Logo.jsx` | Standalone SVG logo component. Appears not to be rendered anywhere in the live UI. |
| `src/components/data.js` | Stores the `projectsData` array used by the projects page. |
| `src/hooks/useScrollNavigation.jsx` | Custom route sequencing hook using wheel/touch events, top/bottom page-edge checks, and router pushes. Contains nuanced mobile/touch behavior. |
| `public/cv.pdf` | Downloadable CV file linked from the About page. |
| `public/logo.png` | Header branding asset. |
| `public/profile.png` | About page profile image. |
| `public/nextandnest.png` | Project thumbnail used in `projectsData`. |
| `public/nextandspring.png` | Project thumbnail used in `projectsData`. |
| `public/nextjs-logo.jpg` | Reused project thumbnail used in `projectsData`. |

## 19. Strengths of the Current Codebase

- The project is small, understandable, and easy to reverse-engineer quickly.
- The App Router structure under `src/app` is conventional and clean.
- Shared layout concerns are centralized in `src/app/clientLayout.js`.
- Styling is consistent and uses a compact design language defined in `src/app/globals.css`.
- The dependency surface is minimal.
- `projectsData` in `src/components/data.js` creates at least one reusable content source instead of hardcoding all project cards inline.
- The contact form provides immediate user feedback and a disabled sending state.
- Responsive layout decisions are evident across pages and navigation.
- The site successfully builds and prerenders statically.
- ESLint passes cleanly under the current configuration.

## 20. Weaknesses / Risks / Tech Debt

| Area | Observation | Classification |
| --- | --- | --- |
| Build config | `src/app/layout.js` sets `metadata.viewport`, which triggers a Next.js build warning. | Confirmed |
| Content management | Biography, skills, projects, route order, and contact info are hardcoded in source files. | Confirmed |
| Backend validation | Contact submission goes directly from browser to EmailJS with no first-party validation or spam/rate-limit layer. | Confirmed |
| Env ergonomics | No `.env.example` or documented setup for EmailJS keys exists in tracked code. | Confirmed |
| Testing | No automated tests are present. | Confirmed |
| Unused code | `src/components/Logo.jsx` appears unused; `Logo` is imported but unused in `src/app/about/page.jsx`. | Confirmed |
| Unused prop | `src/components/ScrollArrow.jsx` accepts `position` but does not use it. | Confirmed |
| Logging | Contact failures are logged with `console.log`, with no structured error reporting. | Confirmed |
| Mobile/touch nav | `useScrollNavigation` returns early when `isMobile` is true, so the touch handlers in that effect are not registered for small-screen touch devices. | Confirmed behavior / Inferred intent mismatch |
| Naming consistency | Default export function names like `projects` and `service` are lowercase and inconsistent with common React naming conventions. | Confirmed |
| Accessibility depth | Basic accessibility indicators exist, but there is no evidence of dedicated accessibility testing or advanced focus/announcement patterns. | Confirmed / Unknown runtime quality |
| Deployment clarity | No deployment config or CI/CD workflow is tracked. | Confirmed |
| Theme support | CSS variables suggest theming discipline, but there is no confirmed dark/light theme switcher. | Confirmed absence of switcher |

## 21. Incomplete / Unclear / Inferred Areas

### Unclear or Unverifiable from Code

| Topic | Status |
| --- | --- |
| Actual hosting provider | Unknown / Could not verify from code |
| EmailJS template configuration and recipient mapping | Unknown / Could not verify from code |
| Real production environment variable values | Unknown / Could not verify from code |
| Real-world spam protection for contact form | Unknown / Could not verify from code |
| Full accessibility compliance | Unknown / Could not verify from code |
| Runtime behavior of default Next.js `/_not-found` UI | Unknown / Could not verify from code |

### Inferred Areas

- **Inferred:** The site is intended to support job search and professional lead generation.
- **Inferred:** Static prerendering is the preferred deployment mode because the current app has no dynamic server requirements.
- **Inferred:** The custom scroll navigation is meant to create a presentation-like sequential browsing experience across pages.

### Possible Partial or Incomplete Signals

- `src/components/Logo.jsx` may represent abandoned or future branding work because the header uses `public/logo.png` instead.
- The `position` prop in `src/components/ScrollArrow.jsx` suggests planned configurability that was not completed.
- The touch-navigation handlers in `src/hooks/useScrollNavigation.jsx` suggest intended mobile/touch gesture support, but the current early return on `isMobile` prevents that logic on small touch devices.

### TODO / FIXME / Placeholder Markers

- **Confirmed:** No `TODO`, `FIXME`, `HACK`, or `XXX` markers were found in tracked source files.

## 22. Glossary of Important Internal Terms

| Term | Meaning |
| --- | --- |
| `ClientLayout` | The client-side wrapper in `src/app/clientLayout.js` that applies shared site chrome and route-aware behavior. |
| `projectsData` | Static array in `src/components/data.js` containing featured project metadata. |
| `ROUTES` | The fixed route order in `src/hooks/useScrollNavigation.jsx` used for sequential navigation. |
| `useScrollNavigation` | Custom hook that decides when to move to the next or previous route based on scroll or gesture context. |
| `ScrollArrow` | Shared floating action button that advances to the next route in the `ROUTES` sequence. |
| `button-outline` | Shared CSS class in `src/app/globals.css` used for outline-style CTAs such as `Explore` and `Download CV`. |
| `cutout-button` | Shared CSS class in `src/app/globals.css` used for the Contact button in the desktop header. |
| `stripe-bg` | Shared background class in `src/app/globals.css` used on the home page hero. |
| `isMenuOpen` | Header local state controlling mobile overlay visibility. |
| `sendStatus` | Contact-page local state object storing success/error feedback text. |
| `isSending` | Contact-page boolean state that disables the submit button while EmailJS is sending. |
| `hoveredProject` | Projects-page state used to enlarge the hovered project thumbnail. |

## 23. Concise “Explain This Project to Another LLM” Summary

This repository is a small **Next.js 15 App Router portfolio site** for **Rhyme Rubayet**. It uses **React 19**, **Tailwind CSS 4**, **lucide-react**, and **@emailjs/browser**. The source is organized into `src/app` for routes/layout, `src/components` for shared UI and static project data, and `src/hooks` for one custom navigation hook. There is **no tracked backend, database, auth system, API route tree, middleware, tests, or CI/CD config**.

The route set is simple and fully public: `/`, `/about`, `/skill`, `/projects`, and `/contact`, plus the implicit Next.js `/_not-found`. `src/app/layout.js` sets the root HTML shell and font, while `src/app/clientLayout.js` applies the global header/footer, scroll-to-top on route change, and a bottom `ScrollArrow` component on every route except `/contact`. The site builds successfully as a **static prerendered** app.

Content is mostly hardcoded. The home page is a hero with an `Explore` CTA. The about page contains biography text, `public/profile.png`, and a CV download from `public/cv.pdf`. The skills page renders a local string array. The projects page maps `projectsData` from `src/components/data.js` into cards with hover effects and outbound live links. The contact page is the only significant interactive form: it uses `useRef`, `useState`, and `emailjs.sendForm(...)` to send messages directly from the browser using `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. There is no first-party server validation or persistence.

The most important internal behavior outside basic rendering is `src/hooks/useScrollNavigation.jsx`, which defines a fixed route sequence and uses `useRouter`, `usePathname`, wheel events, edge-of-page checks, and throttling state to move visitors between pages. `src/components/Header.jsx` handles active-route styling, mobile menu toggling, and scroll-reactive header appearance. Styling lives in `src/app/globals.css`, which defines theme variables and custom classes such as `menu-item`, `button-outline`, `cutout-button`, and `stripe-bg`.

Main strengths: very small codebase, conventional App Router structure, minimal dependency surface, static build success, and easy maintainability at current scale. Main risks/limitations: hardcoded content everywhere, no CMS/admin path, no tests, no env example, no telemetry, no backend validation for the contact form, a Next.js warning caused by `metadata.viewport` in `src/app/layout.js`, an apparently unused `Logo` component/import, and touch-navigation logic that appears inconsistent on small touch devices because `useScrollNavigation` exits early when `isMobile` is true.
