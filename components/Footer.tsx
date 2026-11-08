import Container from "./Container";
import { SITE } from "@/lib/site";

export default function Footer() {
  const links = [
    { label: "GitHub", href: SITE.github },
    { label: "Email", href: `mailto:${SITE.email}` },
  ];

  return (
    <footer className="border-t border-line bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
