# Portfolio v2

A static-friendly personal portfolio built with Next.js 15, React 19, Tailwind CSS 4, and the App Router.

## Stack

- Next.js 15.3.1
- React 19
- Tailwind CSS 4
- App Router
- EmailJS browser integration
- Vitest for lightweight regression checks

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Fill in the required variables:

- `NEXT_PUBLIC_SITE_URL`
  - Production site URL used for canonical and social metadata.
  - Example: `https://your-domain.example`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

4. Start the development server:

```bash
npm run dev
```

## EmailJS Notes

The contact form remains frontend-only and sends through EmailJS.

Your EmailJS template should expect these parameters:

- `from_name`
- `from_email`
- `reply_to`
- `subject`
- `message`
- `to_name`

If the EmailJS variables are missing on a deployment, the form stays visible but reports that direct email is the reliable fallback.

## Quality Commands

```bash
npm run lint
npm test
npm run build
```

## Project Structure

- `src/content/site.js`
  - Centralized portfolio content, navigation, project data, and shared copy.
- `src/lib/metadata.js`
  - Metadata helpers and site URL normalization.
- `src/lib/contactForm.js`
  - Contact form validation and EmailJS configuration helpers.
- `src/lib/scrollNavigation.js`
  - Pure scroll-navigation logic used by the hook and tests.
- `src/components/ContactForm.jsx`
  - Improved EmailJS contact experience with validation and fallback handling.

## CI

GitHub Actions runs:

- install
- lint
- tests
- build

Workflow file: `.github/workflows/ci.yml`
