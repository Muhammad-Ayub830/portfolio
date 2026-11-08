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
  caseStudyPdf?: string; // PDF in /public, e.g. "/case-studies/haq-electronics.pdf" (opens in a new tab)
};



export const projects: Project[] = [
  {
    title: "Haq Electronics",
    badge: "Real client",
    real: true,
    description:
      "Responsive electronics store for browsing products, managing orders, and shopping online.",
    tags: ["Next.js", "E-commerce"],
    slug: "haq-electronics",
    liveUrl: "https://haq1.com",
    caseStudyPdf: "/case-studies/haq-electronics.pdf",
    accent: "#2563EB",
    soft: "#DBEAFE",
    image: "/projects/haq-electronics-home.png",
  },
  {
    title: "Multi-Page E-commerce Dashboard",
    badge: "Personal project",
    real: false,
    description:
      "Responsive analytics dashboard for managing business data, tracking sales, and viewing insights.",
    tags: ["Next.js", "Tailwind CSS", "Recharts", "Dashboard"],
    slug: "ecommerce-dashboard",
    liveUrl: "https://dashobards-using-next.vercel.app/dashboard",
    accent: "#FF8904",
    soft: "#FFF0DB",
    image: "/projects/ecommerce-dashboard.png",
  },
  {
    title: "Edusity – Education Website",
    badge: "Personal project",
    real: false,
    description:
      "Modern education website showcasing academic programs, campus life, student experiences, and contact information.",
    tags: ["Landing Page", "Education", "Responsive UI"],
    slug: "edusity-website",
    liveUrl: "https://professional-landing-page-eight.vercel.app/",
    accent: "#37306B",
    soft: "#EEECFA",
    image: "/projects/edusity-home.png",
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