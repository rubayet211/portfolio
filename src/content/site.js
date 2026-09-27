export const navigationItems = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const siteContent = {
  seo: {
    siteName: "Rhyme Rubayet",
    defaultTitle: "Rhyme Rubayet | Full-stack Product Engineer",
    description:
      "Rhyme Rubayet is a full-stack product engineer in Dhaka. He ships production platforms, commerce operations, and practical AI systems.",
    keywords: [
      "Rhyme Rubayet",
      "Full-stack product engineer",
      "Software engineer Bangladesh",
      "Next.js",
      "SvelteKit",
      "AI automation",
      "E-commerce integrations",
    ],
    ogImage: "/og.png",
  },
  person: {
    name: "Rhyme Rubayet",
    role: "Full-stack product engineer",
    tagline: "I ship the product and the system behind it.",
    email: "rhymezrubayet@gmail.com",
    location: "Dhaka, Bangladesh",
    currentCompany: "ComboKid",
    education: "BSc in Computer Science and Engineering, AIUB",
    experience: "March 2024 – Present",
    resumePath: "/cv.pdf",
    resumeDownloadName: "Rhyme_Rubayet_CV_Latest.pdf",
    availability: "Open to full-time product roles and freelance product work.",
  },
  hero: {
    eyebrow: "Dhaka, Bangladesh · Remote",
    title: "Rhyme Rubayet",
    role: "Full-stack product engineer",
    description:
      "I take products from the interface through data, payments, admin tools, and deployment. Recent work covers a production learning platform, commerce operations, and AI inside real workflows.",
    primaryCta: {
      label: "View my work",
      href: "/#work",
    },
    secondaryCta: {
      label: "Contact me",
      href: "/contact",
    },
    facts: [
      { label: "Now", value: "Software Engineer at ComboKid, since March 2024" },
      { label: "Range", value: "Platforms, commerce operations, AI workflows, extensions" },
      { label: "Education", value: "BSc CSE, AIUB, 2020–2024" },
    ],
  },
  capabilities: [
    {
      title: "Product engineering",
      description:
        "Public pages, logged-in product flows, and the deployment that keeps them running. English Tinglish, Spoken English GPT, ToolsToFind, and the shops are deployed products, not mockups.",
    },
    {
      title: "Backend and platform",
      description:
        "Auth, data models, and admin workflows. Prices and access are decided on the server. Payment review, session revocation, and order state are part of the product.",
    },
    {
      title: "AI and automation",
      description:
        "Gemini feedback inside a lesson, OpenRouter calls in a publishing pipeline, and a browser extension that reads the form on the page. The model sits in a workflow with storage, review, and limits.",
    },
    {
      title: "Integrations",
      description:
        "Manual bKash review, Steadfast courier booking, Meta Pixel with a server-side Conversions API, Resend, Bunny video, Google OAuth, Stripe, and PostHog.",
    },
  ],
  stack: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Svelte", "SvelteKit", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Next.js server", "SvelteKit server", "Zod", "JWT sessions"],
    },
    {
      title: "Data",
      items: ["MongoDB", "Mongoose", "PostgreSQL", "Drizzle", "Prisma", "Supabase"],
    },
    {
      title: "AI",
      items: ["Gemini", "OpenRouter", "Content pipelines", "Extension scripting"],
    },
    {
      title: "Integrations",
      items: [
        "Google OAuth",
        "bKash review",
        "Meta Pixel",
        "Meta Conversions API",
        "Steadfast",
        "Resend",
        "Bunny",
        "Stripe",
        "PostHog",
        "UploadThing",
      ],
    },
  ],
  stackNote:
    "Earlier product work also includes Flutter, Firebase, Django, NestJS, Spring Boot, and WordPress. Those are not the center of the current production stack.",
  experience: [
    {
      role: "Software Engineer",
      company: "ComboKid",
      period: "March 2024 – Present",
      location: "Remote · Hong Kong team, based in Dhaka",
      summary:
        "Full-stack product work across a web tool, a mobile app, and a customer-review flow.",
      points: [
        "Milestone Track. Next.js and Django. Parents submit milestone photos, and OCR plus a GPT step turns them into structured records.",
        "ComboKid mobile. Flutter, Firebase, and Node.js. Video playback and comments on Android and iOS, with a Node.js proxy for APIs that were blocked on the target network.",
        "Prodeep Travels. WordPress. A review flow that only verified customers can submit.",
      ],
    },
  ],
  about: {
    intro:
      "I build software that has to survive contact with real users, payments, and admin work.",
    paragraphs: [
      "I studied Computer Science and Engineering at AIUB, then joined ComboKid in March 2024 as a software engineer. The team is based in Hong Kong. I work remotely from Dhaka.",
      "The day job is full-stack product work: a web tool, a Flutter app, and the unglamorous pieces that make them reliable. Alongside that, I have been building my own production systems. English Tinglish is a full learning platform. SHINGHOO is a commerce operation, not a landing page. Spoken English GPT and ToolsToFind are where AI shows up inside a product, with data, payments, and publishing around it.",
      "I care about the rules that keep those systems honest. Money is priced on the server. Access can be revoked. A private repository is labeled as private. A domain that no longer belongs to the project does not stay on the page.",
    ],
    principles: [
      "Decide price, access, and payment state on the server.",
      "Put AI inside a workflow that can store, review, and fail.",
      "Ship the operational path: admin, email, video, courier, analytics.",
    ],
  },
  projects: [
    {
      id: "english-tinglish",
      title: "English Tinglish",
      eyebrow: "Production platform",
      summary:
        "An IELTS product for Bengali learners: public courses, student learning, manual bKash enrollment, and an admin back office.",
      product:
        "A production education platform for the English Tinglish business. Students browse programs, enroll, watch recorded lessons, submit assignments, and take mock tests. Staff run courses, payments, and email from an admin back office.",
      role: "End-to-end product engineering, from the public site through auth, payments, content, email, video, and deployment.",
      challenge:
        "Enrollment cannot trust the browser. Price, seat state, and access have to stay consistent for guests, students, and admins.",
      built: [
        "Public marketing pages, course catalog, free recorded previews, and Bengali/English localization",
        "JWT sessions that can be revoked, Google OAuth, and role checks",
        "Student dashboard with classes, assignments, resources, notifications, progress, and mock tests",
        "Manual bKash checkout, admin approval or rejection, and partial-payment tracking",
        "Resend templates, broadcast email, and email logs",
        "Bunny video upload and lesson playback",
      ],
      decisions: [
        "Guest and logged-in checkout share one server-side enrollment flow. Amounts are computed on the server.",
        "Manual bKash review is the live payment path. The automated payment webhook stays disabled until a real gateway exists.",
        "Deploys do not mutate data unless a migration is explicitly requested.",
        "The repo README records a baseline of 521 passing Vitest tests on 18 July 2026, covering auth, payments, uploads, and security checks. I have not re-run that suite for this portfolio.",
      ],
      stack: ["SvelteKit", "Svelte 5", "MongoDB", "Mongoose", "Resend", "Bunny", "Vitest"],
      categories: ["production"],
      status: "Live",
      source: "private",
      featured: true,
      liveUrl: "https://english-tinglish.vercel.app",
      image: "/work/english-tinglish.png",
      imageAlt: "English Tinglish homepage with course navigation and a Bengali IELTS headline",
    },
    {
      id: "shaver",
      title: "SHINGHOO Mini Shaver",
      eyebrow: "Commerce and integrations",
      summary:
        "A Bengali shop for a mini shaver, with server-priced checkout, bKash review, Steadfast booking, and deduplicated Meta tracking.",
      product:
        "A direct-response store and order desk for the SHINGHOO mini shaver. Customers place an order on the site. Staff review payment, then book a courier parcel.",
      role: "Full-stack build of the storefront, order API, admin desk, courier booking, and tracking.",
      challenge:
        "The payment is a manual bKash transfer, so the server has to price the order, stop duplicate transaction IDs, and send exactly one purchase event.",
      built: [
        "Bengali landing page and checkout",
        "Server-side pricing with Zod validation. The browser cannot set the price.",
        "Admin authentication with a hashed password and a signed session cookie",
        "Order states: pending, on hold, approved, rejected",
        "Steadfast courier booking when an order is approved, plus a webhook path for status updates",
        "Meta Pixel and Conversions API. Both copies of Purchase share one deterministic event id.",
      ],
      decisions: [
        "A bKash transaction ID can belong to only one order, enforced by a unique index.",
        "Purchase is recorded when the order is stored, not again when an admin approves it or when the courier collects cash.",
        "The pixel does not auto-invent button events. The server owns the conversion payload.",
      ],
      stack: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "Zod", "Steadfast", "Meta CAPI"],
      categories: ["production", "commerce"],
      status: "Live",
      source: "private",
      featured: true,
      liveUrl: "https://shaver.vercel.app",
      image: "/work/shaver.png",
      imageAlt: "SHINGHOO mini shaver landing page in Bengali with price and product photo",
    },
    {
      id: "spoken-english-gpt",
      title: "Spoken English GPT",
      eyebrow: "AI product",
      summary:
        "Spoken-English practice with a curriculum, Gemini feedback, and package access that starts only after bKash review.",
      product:
        "A spoken-English product for Bengali learners. Lessons, assessments, and voice or text feedback sit behind packages that an admin unlocks after checking a manual bKash payment.",
      role: "Product engineering across the learner experience, curriculum tools, payments, and Gemini-backed feedback.",
      challenge:
        "The model has to give feedback inside a lesson, while access and AI quota still depend on a reviewed payment.",
      built: [
        "Curriculum journeys, lesson playback, and learner audio controls",
        "Gemini feedback for session review, rewriting, text chat, and voice",
        "Package checkout with manual bKash submission and admin approval",
        "Postgres via Drizzle and Supabase, with UploadThing for audio",
        "Meta Pixel and Conversions API. Purchase is sent only when an admin verifies a real payment.",
        "Vitest and Playwright are part of the repository scripts",
      ],
      decisions: [
        "AI usage checks package quota before a Gemini call runs.",
        "A rejected payment or a complimentary grant does not send a Purchase event.",
        "Bengali and English are both first-class in the interface.",
      ],
      stack: ["SvelteKit", "Svelte 5", "TypeScript", "PostgreSQL", "Drizzle", "Supabase", "Gemini"],
      categories: ["production", "ai"],
      status: "Live",
      source: "private",
      featured: true,
      liveUrl: "https://spoken-english-gpt-six.vercel.app",
      image: "/work/spoken-english-gpt.png",
      imageAlt: "Spoken English GPT homepage in Bengali with a live AI speaking session",
    },
    {
      id: "tools-to-find",
      title: "ToolsToFind",
      eyebrow: "AI and content systems",
      summary:
        "A public library of business calculators and articles, with a CMS, programmatic SEO, and LLM calls through OpenRouter.",
      product:
        "A public site of business tools, industry pages, and a blog. Behind it is an admin CMS, a publishing pipeline, and programmatic pages.",
      role: "Application engineering for the tools, the CMS, SEO pages, and the publishing pipeline.",
      challenge:
        "The public site has to stay indexable and editable while generation, scheduling, and billing sit behind an admin workflow.",
      built: [
        "Calculator and marketing pages, blog rendering, and industry sections",
        "Admin CMS with a TipTap editor, media checks, and scheduled publishing",
        "Programmatic SEO pages, with test suites for governance and sitemaps",
        "LLM calls through OpenRouter, using the OpenAI SDK against an OpenRouter base URL",
        "Stripe and PostHog modules in the codebase",
        "MongoDB for content",
      ],
      decisions: [
        "Publishing and SEO behavior are covered by focused test scripts for the editor, CMS, and programmatic pages.",
        "Model access is configured through OpenRouter rather than hard-wired to a single provider in the client.",
      ],
      stack: ["Next.js", "TypeScript", "MongoDB", "OpenRouter", "TipTap", "Stripe", "PostHog"],
      categories: ["production", "ai"],
      status: "Live",
      source: "private",
      featured: true,
      liveUrl: "https://tools-to-find.vercel.app",
      image: "/work/tools-to-find.png",
      imageAlt: "ToolsToFind homepage offering business calculators and a pricing path",
    },
    {
      id: "altaaqa-foods",
      title: "Altaaqa Foods",
      eyebrow: "Commerce",
      summary:
        "A health-food storefront with catalog, accounts, and product media. The custom domain no longer resolves.",
      product:
        "An online shop for Altaaqa Foods. The Vercel deployment still serves the catalog, sign-in, and product pages.",
      role: "Storefront and catalog on Next.js, with accounts, database access, and uploads.",
      challenge: "Keep a bilingual product catalog deployable after the public domain stopped resolving.",
      built: [
        "Catalog, featured products, cart entry, and sign-in",
        "Prisma with PostgreSQL",
        "NextAuth and UploadThing for accounts and media",
      ],
      decisions: [
        "The portfolio links to the Vercel deployment, not to altaaqafoods.com, which no longer has DNS.",
      ],
      stack: ["Next.js", "React", "Prisma", "PostgreSQL", "NextAuth", "UploadThing"],
      categories: ["production", "commerce"],
      status: "Live",
      source: "private",
      featured: false,
      liveUrl: "https://altaaqa-foods.vercel.app",
      domainNote: "altaaqafoods.com no longer resolves. This link is the Vercel deployment, which still serves the store.",
      image: "/work/altaaqa-foods.png",
      imageAlt: "Altaaqa Foods homepage with a product jar and a Bengali headline",
    },
    {
      id: "arosee",
      title: "Arosee",
      eyebrow: "Commerce",
      summary:
        "A fragrance shop with search, catalog, and accounts. The custom domain no longer resolves.",
      product:
        "A storefront for Arosee fragrances. The Vercel deployment still serves the shop, search, and sign-in.",
      role: "Svelte storefront for the catalog and shop chrome.",
      challenge: "Keep the shop reachable after the original domain stopped resolving.",
      built: ["Store header, search, shop, and sign-in", "Product catalog pages"],
      decisions: [
        "The portfolio links to the Vercel deployment, not to aroseefragnance.com, which no longer has DNS.",
      ],
      stack: ["Svelte"],
      categories: ["production", "commerce"],
      status: "Live",
      source: "private",
      featured: false,
      liveUrl: "https://arosee-ecommerce.vercel.app",
      domainNote: "aroseefragnance.com no longer resolves. This link is the Vercel deployment, which still serves the shop.",
      image: "/work/arosee.png",
      imageAlt: "Arosee catalog page showing fragrance bottles and prices",
    },
    {
      id: "smartform-ai",
      title: "SmartForm AI",
      eyebrow: "Browser extension",
      summary:
        "A Manifest V3 extension that fills job-application forms from a saved profile. There is no public store listing.",
      product:
        "An experimental Chrome extension. A content script reads forms on the page. A side panel holds the profile and controls. The repository also contains AI and ATS-related modules.",
      role: "Extension architecture: manifest, content script, side panel, and profile storage.",
      challenge:
        "The form lives on someone else's site, so the extension has to understand the page without pretending the product is a website.",
      built: [
        "Manifest V3 with a side panel, storage, alarms, and scripting",
        "Content scripts that run on http and https pages",
        "Source modules for profiles, ATS detection, and AI-assisted filling",
      ],
      decisions: [
        "Shown as an experiment. It is not listed here as a shipped Chrome Web Store product.",
        "The repository is private, so there is no source button.",
      ],
      stack: ["Manifest V3", "TypeScript", "Content scripts", "Side panel"],
      categories: ["extension", "ai"],
      status: "Experimental",
      source: "private",
      featured: false,
      liveUrl: "",
      image: "",
      imageAlt: "",
    },
  ],
  projectFilters: [
    { id: "all", label: "All" },
    { id: "production", label: "Production" },
    { id: "ai", label: "AI" },
    { id: "commerce", label: "Commerce" },
    { id: "extension", label: "Extensions" },
  ],
  contact: {
    title: "Have a product that needs to ship?",
    intro:
      "I take on full-time product engineering roles and freelance work where someone needs the interface, the backend, and the operational pieces built together.",
    responseNote: "Email is the direct path. The form sends through EmailJS when this deployment has keys configured.",
    successMessage: "Message sent. I will read it and reply.",
    errorMessage: "The message did not send. Use the email link and try again later.",
    validationMessage: "Check the highlighted fields, then send again.",
    missingConfigMessage: "This deployment has no EmailJS keys. Email me directly.",
    emailCtaLabel: "Email me",
    availabilityCard: "Open to full-time product roles and freelance product work.",
    responseExpectation: "I usually reply within a few business days.",
  },
  footer: {
    note: "Production systems, commerce operations, and practical AI. Based in Dhaka.",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/rubayet211" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rhymerubayet/" },
    { label: "X", href: "https://x.com/RhymeTheDev" },
  ],
};
