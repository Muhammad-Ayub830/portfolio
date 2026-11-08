import Image from "next/image";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import SitePreview from "./SitePreview";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-surface py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2.5">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="text-3xl font-bold md:text-[40px] md:leading-tight">
              Featured projects
            </h2>
          </div>
          {/* TODO: point to the full Projects page once it exists */}
          <a href="/projects" className="font-semibold text-accent">
            View all projects →
          </a>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.title}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent"
            >
              {p.image ? (
                <div className="relative h-[220px] overflow-hidden border-b border-line bg-gray-100">
                  <Image
                    src={p.image}
                    alt={`Screenshot of the ${p.title} website`}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <SitePreview accent={p.accent} soft={p.soft} />
              )}
              <div className="flex flex-col gap-3 p-6">
                <p
                  className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                    p.real
                      ? "bg-accent-soft text-accent"
                      : "bg-gray-100 text-muted"
                  }`}
                >
                  {p.badge}
                </p>
                <h3 className="text-[22px] font-semibold">
                  {/* The ::after covers the whole card, so the entire card is clickable. */}
                  <a
                    href={`/projects#${p.slug}`}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {p.title}
                  </a>
                </h3>
                <p className="leading-6 text-muted">{p.description}</p>
                <p className="text-sm font-medium text-gray-500">
                  {p.tags.join(" · ")}
                </p>
                <p className="text-sm font-semibold text-accent" aria-hidden="true">
                  View project →
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
