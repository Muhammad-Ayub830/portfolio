export type Project = {
  title: string;
  badge: string;
  real: boolean;
  description: string;
  tags: string[];
  accent: string;
  soft: string;
  // Screenshot in /public, e.g. "/projects/haq-electronics-home.png". Until set, a shape-based preview is shown.
  image?: string;
  slug: string; // used in the link: /projects#<slug>
  liveUrl?: string; // live site (opens in a new tab). Leave out until deployed.
};

export const projects: Project[] = [
  {
    title: "Haq Electronics",
    badge: "Real client",
    real: true,
    description:
      "Online store for an electronics shop in Peshawar, built with Next.js.",
    tags: ["Next.js", "E-commerce"],
    slug: "haq-electronics",
    liveUrl: "https://haq1.com",
    accent: "#2563EB",
    soft: "#DBEAFE",
    image: "/projects/haq-electronics-home.png",
  },
  {
    title: "Clinic website",
    badge: "Concept project",
    real: false,
    description:
      "Appointment-focused site that builds trust for a health clinic.",
    tags: ["Booking", "SEO"],
    accent: "#0D9488",
    soft: "#CCFBF1",
    slug: "clinic-website",
  },
  {
    title: "Café website",
    badge: "Concept project",
    real: false,
    description:
      "Menu-first brand site with a clear way to visit or order.",
    tags: ["Branding", "Menu"],
    accent: "#D97706",
    soft: "#FEF3C7",
    slug: "cafe-website",
  },
];

export const steps = [
  {
    title: "Listen",
    text: "We talk through your goals, customers and timeline.",
  },
  {
    title: "Agree scope",
    text: "You get a written plan with price and deadline.",
  },
  {
    title: "Design and build",
    text: "You approve the design first, then I build it.",
  },
  {
    title: "Review and launch",
    text: "Feedback, final fixes, launch and handover.",
  },
];

export const skills = ["React", "Next.js", "Node.js", "Express.js"];
