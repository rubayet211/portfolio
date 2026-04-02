export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skill" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const siteContent = {
  seo: {
    siteName: "Rhyme Rubayet",
    defaultTitle: "Rhyme Rubayet | Software Engineer",
    description:
      "Portfolio of Rhyme Rubayet, a software engineer building polished web products with Next.js, React, NestJS, and modern frontend systems.",
    keywords: [
      "Rhyme Rubayet",
      "Software Engineer",
      "Full-stack Developer",
      "Next.js portfolio",
      "React developer",
      "NestJS developer",
      "Frontend engineer",
      "Portfolio website",
    ],
    ogImage: "/profile.png",
  },
  person: {
    name: "Rhyme Rubayet",
    role: "Software Engineer",
    roleExtended: "Software Engineer and Full-stack Web Developer",
    tagline: "Building modern, reliable products for teams that care about quality.",
    email: "rubayet211@gmail.com",
    location: "Dhaka, Bangladesh",
    currentCompany: "ComboKid",
    education: "BSc in Computer Science and Engineering, AIUB",
    experience: "2+ years",
    resumePath: "/cv.pdf",
    availability:
      "Open to full-time product roles, freelance collaborations, and thoughtful technical partnerships.",
  },
  hero: {
    eyebrow: "Balanced for hiring teams and client work",
    title: "I design and ship web experiences that feel considered from the first click.",
    description:
      "I work across the product surface, from frontend interaction details to backend integration, with a focus on clean architecture, dependable delivery, and user trust.",
    primaryCta: {
      label: "View Projects",
      href: "/projects",
    },
    secondaryCta: {
      label: "Start a Conversation",
      href: "/contact",
    },
    highlights: [
      {
        label: "Experience",
        value: "2+ years building production-ready web products",
      },
      {
        label: "Core stack",
        value: "Next.js, React, NestJS, Spring Boot, Tailwind CSS",
      },
      {
        label: "Working style",
        value: "Practical, maintainable, and user-focused delivery",
      },
    ],
  },
  home: {
    services: [
      {
        title: "Frontend systems",
        description:
          "Interfaces with stronger hierarchy, clearer states, and responsive behavior that feels intentional on real devices.",
      },
      {
        title: "Full-stack delivery",
        description:
          "Feature work that connects polished UI with maintainable backend logic, sensible data flow, and production-minded structure.",
      },
      {
        title: "Product refinement",
        description:
          "Cleanup passes that reduce rough edges, improve trust signals, and make existing products easier to evolve.",
      },
    ],
    featuredSkillTags: [
      "Next.js",
      "React",
      "NestJS",
      "Spring Boot",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "PostgreSQL",
    ],
    credibilityNotes: [
      "Remote product delivery experience with distributed teams",
      "Comfortable improving both new builds and existing codebases",
      "Focused on usability, maintainability, accessibility, and polish",
    ],
  },
  about: {
    intro:
      "I'm a software engineer who enjoys turning rough ideas into dependable products that are easier to use and easier to maintain.",
    paragraphs: [
      "I studied Computer Science and Engineering at AIUB, then moved into professional product work where I have been building web applications with technologies such as Next.js, React, NestJS, Flutter, Spring Boot, and AWS.",
      "I currently work remotely with ComboKid, a Hong Kong-based company, where I contribute as a full-stack web developer. The work has sharpened how I approach collaboration, delivery, and the tradeoffs between speed and long-term maintainability.",
      "My preference is for straightforward systems, readable code, and thoughtful product decisions. I like breaking complex problems into smaller parts, improving weak UX, and making the final result feel calm and complete instead of rushed.",
      "Outside client and product work, I spend time experimenting with AI tools, modern frontend libraries, and small personal projects that help me explore new ideas quickly.",
    ],
    highlights: [
      { label: "Current role", value: "Full-stack Web Developer at ComboKid" },
      { label: "Based in", value: "Dhaka, Bangladesh" },
      { label: "Education", value: "BSc in Computer Science and Engineering" },
      { label: "Availability", value: "Open to roles, freelance work, and collaborations" },
    ],
    principles: [
      "Write code that another engineer can confidently extend.",
      "Prefer clarity and reliable behavior over unnecessary complexity.",
      "Treat accessibility, responsiveness, and performance as product quality, not optional cleanup.",
    ],
  },
  skills: [
    {
      title: "Frontend",
      description: "Building performant, readable interfaces with strong UX fundamentals.",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "Flutter",
      ],
    },
    {
      title: "Backend and APIs",
      description: "Structuring application logic and integrations for product delivery.",
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "Spring Boot MVC",
        "ASP.NET Core MVC",
      ],
    },
    {
      title: "Data and tooling",
      description: "Supporting day-to-day development with practical platform knowledge.",
      items: [
        "MongoDB",
        "PostgreSQL",
        "Java",
        "Python",
        "AWS",
        "WordPress",
      ],
    },
    {
      title: "Additional platforms",
      description: "Exploring adjacent ecosystems and product formats when they fit.",
      items: ["C++", "C#", "Godot Game Engine", "GDScript", "Dart"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Altaaqa Foods",
      summary:
        "A production e-commerce experience focused on easy browsing, clear structure, and a smooth purchase journey.",
      type: "E-commerce",
      status: "Live",
      featured: true,
      stack: ["Next.js", "React", "Tailwind CSS"],
      liveUrl: "https://www.altaaqafoods.com",
      image: "/nextjs-logo.jpg",
    },
    {
      id: 2,
      title: "Tuitionibd",
      summary:
        "A platform connecting students and tutors through a workflow built for clarity on both sides of the marketplace.",
      type: "Education platform",
      status: "Live",
      featured: true,
      stack: ["Next.js", "NestJS", "Responsive UI"],
      liveUrl: "https://www.tuitionibd.com",
      image: "/nextandnest.png",
    },
    {
      id: 3,
      title: "Arosee Fragnance",
      summary:
        "A product-focused storefront for a fragrance brand, designed to present catalog items cleanly and credibly.",
      type: "Brand commerce",
      status: "Live",
      featured: false,
      stack: ["Next.js", "React", "E-commerce UI"],
      liveUrl: "https://www.aroseefragnance.com",
      image: "/nextjs-logo.jpg",
    },
    {
      id: 4,
      title: "Online Book Store",
      summary:
        "A full-stack book retail concept pairing a modern frontend with a Spring-powered backend implementation.",
      type: "Full-stack project",
      status: "Source available",
      featured: false,
      stack: ["Next.js", "Spring Boot", "Java"],
      repoUrl: "https://github.com/rubayet211/FullStack_Online_BookShop",
      image: "/nextandspring.png",
    },
    {
      id: 5,
      title: "Think I Need",
      summary:
        "A SaaS product concept that uses AI-assisted product discovery to help customers find relevant Amazon items faster.",
      type: "SaaS",
      status: "Live",
      featured: true,
      stack: ["Next.js", "React", "AI-assisted discovery"],
      liveUrl: "https://www.thinkineed.com/",
      image: "/nextjs-logo.jpg",
    },
    {
      id: 6,
      title: "Freelance",
      summary:
        "A marketplace-style platform for freelancers and clients, structured around practical collaboration flows.",
      type: "Marketplace",
      status: "Source available",
      featured: false,
      stack: ["Next.js", "NestJS", "Marketplace workflows"],
      repoUrl: "https://github.com/rubayet211/freelance",
      image: "/nextandnest.png",
    },
  ],
  contact: {
    title: "Let's build something useful.",
    intro:
      "If you need a developer who cares about maintainability, thoughtful UX, and shipping polished work, send a message. I'm happy to discuss product roles, freelance projects, and collaboration opportunities.",
    responseNote:
      "The form sends through EmailJS. If it is temporarily unavailable, email is the fastest fallback.",
    successMessage:
      "Your message was sent successfully. I'll review it and get back to you as soon as I can.",
    errorMessage:
      "The message could not be sent right now. Please try again shortly or use the email link below.",
    validationMessage: "Please correct the highlighted fields before sending your message.",
    missingConfigMessage:
      "The contact form is not configured for this deployment yet. Please email me directly instead.",
    emailCtaLabel: "Email me directly",
    availabilityCard:
      "Currently open to product engineering roles, freelance delivery, and collaborations that need a strong quality pass.",
    responseExpectation: "Usually replies within a few business days.",
  },
  footer: {
    note:
      "Built to present work clearly, communicate trust, and make starting a conversation easy.",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/rubayet211",
    },
    {
      label: "X",
      href: "https://x.com/RhymeTheDev",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rhymerubayet/",
    },
  ],
};
