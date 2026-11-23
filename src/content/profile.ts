/**
 * Single source of truth for the site AND the printable CV.
 * Edit a fact here and both the portfolio and the PDF pick it up.
 *
 * Sourcing rule: every claim below comes from Ahmad's own CV, his own words,
 * or a public listing. No invented metrics.
 */

export type Link = { label: string; href: string };

export type Contact = {
  location: string;
  /** Display form, e.g. "+20 106 018 5682". */
  phone?: string;
  /** Digits only, for wa.me links. */
  whatsapp?: string;
};

export type Role = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  /** Short context shown next to the company, e.g. "Delivery platform". */
  context?: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
};

export type Product = {
  name: string;
  kind: string;
  role: string;
  domain: "health" | "yard" | "facility" | "iot" | "fleet" | "pharmacy" | "safety";
  description: string;
  href?: string;
};

export type FeaturedProject = {
  id: "govisual" | "bulbul";
  name: string;
  role: string;
  period: string;
  headline: string;
  description: string;
  points: string[];
  stack: string[];
  links: Link[];
};

export const site = {
  /** Set NEXT_PUBLIC_SITE_URL once a domain is bought. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  cvFile: "/Ahmad_Amhan_CV.pdf",
};

export const profile = {
  name: "Ahmad Amhan",
  title: "Product Owner & Mobile Team Lead",
  tagline:
    "Product Owner and Mobile Team Lead. I take mobile products from the first requirement to the store release, and lead the teams that build them.",
  intro:
    "Product Owner & Mobile Team Lead at Unifi Solutions and co-founder of GoVisual. Since 2021 I have been building and shipping Flutter apps for healthcare, facility management, IoT, fleet and delivery.",
  summary:
    "Product Owner and Mobile Team Lead who has been shipping Flutter apps to Google Play and the App Store since 2021. I own B2B product requirements end to end, lead mobile architecture, code review and releases, and coordinate delivery across web, backend and QA. Co-founder and full-stack engineer at GoVisual (Next.js, Node.js). Experience across healthcare, facility management (CAFM/CMMS), IoT, fleet and delivery, including white-label apps.",
  email: "ahmadamhan11@gmail.com",
  linkedin: {
    label: "linkedin.com/in/ahmad-amhan-182a9019a",
    href: "https://www.linkedin.com/in/ahmad-amhan-182a9019a/",
  },
  /** Public contact shown on the site and the default CV. */
  contact: {
    location: "Cairo, Egypt",
    phone: "+20 106 018 5682",
    whatsapp: "201060185682",
  } satisfies Contact,
  workingWith: "Remote with teams in Canada and the Middle East",
  languages: ["Arabic", "English"],
};

export const glance: { label: string; value: string }[] = [
  { label: "Roles", value: "Product Owner · Team Lead · Engineer" },
  { label: "Platforms", value: "Android · iOS · Flutter Web" },
  { label: "Domains", value: "Healthcare · CAFM/CMMS · IoT · Fleet · Delivery" },
  { label: "Languages", value: "Arabic · English" },
];

export const featured: FeaturedProject[] = [
  {
    id: "govisual",
    name: "GoVisual",
    role: "Co-Founder & Full-Stack Engineer",
    period: "2026 – Present",
    headline: "A business's products, prices and options in one shareable catalog.",
    description:
      "An Arabic-first platform where a business presents its products and organises customer inquiries and orders. Each catalog is shared by link or QR code. Customers can ask about a product on WhatsApp or send an order without creating an account. It is used for fashion, handmade goods, food and beauty.",
    points: [
      "Co-founder. I work across the Next.js frontend and the Node.js backend with the founding team.",
      "Catalog appearance: the template catalogue, a custom brand colour picker and the live preview owners see before they publish.",
      "Public catalog interactions and right-to-left behaviour for Arabic.",
      "API and browser regression tests around those features.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vitest", "Playwright"],
    links: [{ label: "govisual.info", href: "https://govisual.info" }],
  },
  {
    id: "bulbul",
    name: "Bulbul",
    role: "Flutter Developer",
    period: "2025 – 2026",
    headline: "Three Flutter apps for one delivery platform.",
    description:
      "Bulbul is a delivery platform operating in Damascus: restaurants, shops, a grocery market and errands. I worked in a small team on its three Flutter apps, for customers, vendors and drivers. All three are on Google Play and the App Store.",
    points: [
      "Customer app: sign-in and onboarding, location and address flows with maps, branch browsing with search and category filters, favourites and cart.",
      "Vendor app: a real-time order queue with background services and native notifications, plus product management with variants.",
      "Driver app: views for available, ongoing and completed orders, with background location tracking.",
      "Push notifications with deep links, and a shared utilities package for localization, pagination and error states.",
    ],
    stack: ["Flutter", "Dart", "Bloc/Cubit", "Dio", "Google Maps", "Socket.IO", "OneSignal", "Background services", "get_it / Injectable", "go_router"],
    links: [
      { label: "bulbulsy.com", href: "https://bulbulsy.com" },
      { label: "Google Play", href: "https://play.google.com/store/apps/developer?id=BulbulApp" },
      { label: "App Store", href: "https://apps.apple.com/us/developer/louai-chabban/id6808256667" },
    ],
  },
];

export const products: Product[] = [
  {
    name: "X.eMAR / MedXSol",
    kind: "Medication management system",
    role: "Product Owner",
    domain: "health",
    description:
      "Digital medication administration records for care facilities. I led requirements and delivery for the nurse mobile app and the admin system, which is built with React and packaged as a desktop app with Tauri. Covers real-time patient reporting, nurse workflows and facility and floor management.",
  },
  {
    name: "Reliable Yard Management",
    kind: "Yard operations platform",
    role: "Product Owner & Mobile Lead",
    domain: "yard",
    description:
      "A published iOS app and a Flutter Web admin portal for yard owners and administrators: vehicle check-in and check-out, QR code scanning, QR label printing and multi-yard vehicle management.",
  },
  {
    name: "ALEF 360° HSEQ",
    kind: "Health & safety mobile app",
    role: "Mobile Team Lead",
    domain: "safety",
    description:
      "The Flutter app for a health, safety, environment and quality platform that covers incidents, inspections, permits to work and corrective actions.",
    href: "https://disrupt-x.io/alef-360-hseq/",
  },
  {
    name: "CAFM / CMMS Field Apps",
    kind: "Technician operations",
    role: "Mobile Team Lead",
    domain: "facility",
    description:
      "Flutter apps used by technicians in the field: work orders, asset tracking, QR scanning, checklists, attachments and maintenance history.",
    href: "https://disrupt-x.io/alef-360-cafm-cmms/",
  },
  {
    name: "CAFM / CMMS Tenant Apps",
    kind: "Facility requests",
    role: "Mobile Team Lead",
    domain: "facility",
    description:
      "Tenant-facing Flutter apps for submitting facility service requests with photos and notes, tracking progress and reviewing service history.",
  },
  {
    name: "Alef IoT",
    kind: "IoT monitoring & facility management",
    role: "Mobile Team Lead",
    domain: "iot",
    description:
      "A Flutter app that gives business users mobile access to connected IoT data: facility, asset, utility and operational monitoring.",
    href: "https://disrupt-x.io/alef-360-iot-platform/",
  },
  {
    name: "Alef IoT TechNex Captain",
    kind: "Fleet management",
    role: "Mobile Team Lead",
    domain: "fleet",
    description:
      "A Flutter fleet app: vehicle tracking, vehicle health monitoring, job assignment, route planning, alerts, reports and dashboards.",
    href: "https://disrupt-x.io/alef-360-mobility/",
  },
  {
    name: "Care First Pharmacy",
    kind: "Pharmacy patient app",
    role: "Mobile Team Lead",
    domain: "pharmacy",
    description:
      "A patient app in the MedXSol ecosystem: prescription profile access, refill requests, medication reminders and direct communication with the pharmacy.",
  },
];

export const capabilities: { title: string; body: string; items: string[] }[] = [
  {
    title: "Product ownership",
    body: "I turn what a business needs into work a team can build and a client can sign off.",
    items: [
      "Requirements, priorities and delivery scope",
      "Technical tasks and acceptance criteria",
      "Coordination between stakeholders, developers, QA and clients",
    ],
  },
  {
    title: "Mobile leadership",
    body: "I lead Flutter teams on Android and iOS and stay hands-on in the code.",
    items: [
      "Architecture decisions and code review",
      "Task planning and release preparation",
      "Production issue resolution",
    ],
  },
  {
    title: "Release & store operations",
    body: "I get apps through Google Play and the App Store, and keep them there.",
    items: [
      "Metadata, privacy policies and review notes",
      "Rejection appeals and permission compliance",
      "CI/CD pipelines and white-label delivery",
    ],
  },
];

export const experience: Role[] = [
  {
    id: "unifi-po",
    role: "Product Owner / Mobile Team Lead",
    company: "Unifi Solutions",
    start: "Dec 2024",
    end: "Present",
    location: "Canada (remote)",
    bullets: [
      "Product Owner for multiple B2B software products: requirements, priorities, delivery scope, and coordination between stakeholders, developers, QA and clients.",
      "Lead Flutter development across Android and iOS: architecture decisions, code reviews, task planning, release preparation and production issue resolution.",
      "Translate business requirements into technical tasks, acceptance criteria and implementation flows for mobile, frontend, backend and QA teams.",
      "Manage white-label mobile apps for ALEF, CAFM/CMMS, tenant services, healthcare, pharmacy, fleet management and technician field operations.",
      "Coordinate Google Play and App Store releases: metadata, privacy policy updates, review notes, rejection appeals, permission compliance and follow-up.",
      "Support web delivery by clarifying requirements, reviewing and merging pull requests, and coordinating with React developers.",
      "Led mobile and Flutter Web delivery for Reliable Yard Management: the mobile app and the admin portal for yard owners.",
    ],
  },
  {
    id: "govisual",
    role: "Co-Founder & Full-Stack Engineer",
    company: "GoVisual",
    companyUrl: "https://govisual.info",
    context: "Catalog SaaS",
    start: "May 2026",
    end: "Present",
    location: "Remote",
    bullets: [
      "Co-founder of GoVisual, an Arabic-first platform where businesses present their products in a catalog shared by link or QR code, receive product inquiries on WhatsApp and take orders without customer accounts.",
      "Work across the stack with the founding team: a Next.js (App Router) and TypeScript frontend, and a Node.js, Express and MongoDB backend.",
      "Delivered catalog appearance features: the template catalogue, a custom brand colour picker and a live preview before publishing, in Arabic (RTL) and English.",
      "Added API lifecycle tests and browser regression tests for these features (Vitest, Playwright).",
    ],
  },
  {
    id: "bulbul",
    role: "Flutter Developer",
    company: "Bulbul",
    companyUrl: "https://bulbulsy.com",
    context: "Delivery platform",
    start: "Nov 2025",
    end: "Jun 2026",
    location: "Remote",
    bullets: [
      "Worked in a small team on three Flutter apps for a delivery platform operating in Damascus: customer, vendor and driver. All three are published on Google Play and the App Store.",
      "Customer app: authentication and onboarding, location and address flows with Google Maps, branch browsing with search and category filters, favourites, cart and orders.",
      "Vendor and driver apps: a real-time order queue with background services and native notifications, driver order views with background location tracking, and vendor product management with variants.",
      "Push notifications (OneSignal) with deep links, and a shared utilities package for localization, pagination and error states.",
    ],
  },
  {
    id: "unifi-lead",
    role: "Mobile Team Lead",
    company: "Unifi Solutions",
    start: "Oct 2023",
    end: "Dec 2024",
    location: "Canada (remote)",
    bullets: [
      "Led multiple B2B projects.",
      "Served as Technical Project Manager for multiple mobile and frontend projects.",
    ],
  },
  {
    id: "unifi-dev-cairo",
    role: "Flutter Developer",
    company: "Unifi Solutions",
    start: "Jan 2023",
    end: "Oct 2023",
    location: "Cairo, Egypt (on-site)",
    bullets: ["Developed more than three mobile applications, including one with Google Maps tracking."],
  },
  {
    id: "sakari",
    role: "Flutter Developer",
    company: "Sakari Software Development",
    companyUrl: "https://www.sakari.ca",
    start: "Feb 2021",
    end: "Jan 2023",
    location: "Canada (remote)",
    bullets: [
      "Developed a mobile app for yayatopia.com and several other mobile applications.",
      "Developed WordPress websites, including alexandriasmiles.ca and coremontreal.com.",
    ],
  },
  {
    id: "unifi-dev-remote",
    role: "Flutter Developer",
    company: "Unifi Solutions",
    start: "Jan 2022",
    end: "Jul 2022",
    location: "Canada (remote)",
    bullets: ["Developed more than three mobile applications using Flutter."],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Product & leadership",
    items: [
      "Product ownership",
      "Requirement clarification",
      "Acceptance criteria",
      "Technical project management",
      "PR review",
      "Release coordination",
      "QA support",
    ],
  },
  {
    group: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Flutter Web",
      "Bloc/Cubit",
      "Provider",
      "Dio",
      "Retrofit",
      "get_it / Injectable",
      "Clean Architecture",
      "Localization",
    ],
  },
  {
    group: "Integrations",
    items: [
      "Firebase",
      "Push notifications",
      "Google Maps",
      "REST APIs",
      "Socket.IO / WebSocket",
      "Background services",
      "OneSignal",
      "Local notifications",
      "Local storage",
      "QR scanning",
    ],
  },
  {
    group: "Web & backend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  },
  {
    group: "Delivery",
    items: [
      "Codemagic (CI/CD)",
      "Shorebird",
      "Google Play Console",
      "App Store Connect",
      "Git",
      "Jira & Bitbucket",
      "AI-assisted development",
    ],
  },
];

export const education = {
  degree: "B.Eng. Information Engineering",
  school: "Arab International University (AIU)",
  place: "Damascus",
  period: "2015 – 2020",
  projects: [
    "Store web application (ASP.NET MVC, C#)",
    "Store mobile app for Android (Java)",
    "Ticket booking system (C#, ASP.NET, SQL Server)",
    "Search engine (Python)",
  ],
};
