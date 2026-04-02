# Portfolio Changelog

## Before -> After

- Minimal root metadata with invalid viewport config -> Correct App Router metadata plus dedicated `viewport` export and per-route metadata
- Hardcoded page copy in multiple files -> Centralized content model in `src/content/site.js`
- Flat project objects with one link -> Richer project data with summary, stack, status, type, and live/source actions
- Basic hero with one CTA -> Stronger homepage with value proposition, service framing, credibility notes, and featured work
- Flat skills grid -> Grouped skill categories with descriptions
- Browser-only `sendForm` without validation -> Controlled EmailJS form with validation, status handling, and fallback messaging
- Touch-interfering scroll navigation -> Desktop-only restrained scroll navigation with pure helper logic
- Sparse header/footer -> More polished responsive header, stronger footer, clearer links, and better trust signals
- No `.env.example` or setup docs -> Documented environment contract and README setup guide
- No tests -> Vitest regression coverage for contact and scroll logic
- No CI -> GitHub Actions workflow for lint, tests, and build
- Unused `Logo.jsx`, `data.js`, and stale prop surface -> Dead code removed and shared components simplified
