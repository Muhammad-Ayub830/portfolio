import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import Container from "@/components/Container";
import { PreviewBody } from "@/components/SitePreview";
import { projects } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects | ${SITE.name}`,
  description:
    "A real client project and concept projects, each built from first call to launch.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-white py-14 md:py-20">
          <Container>
            <h1 className="text-4xl font-bold md:text-5xl">Projects</h1>
            <p className="mt-4 max-w-[60ch] text-lg leading-8 text-muted">
              Real client work comes first. Concept projects are sites I
              designed and built to practise a full client process.
            </p>

            <ul className="mt-12 flex flex-col gap-10">
              {projects.map((p) => (
                // The id matches the link from the home page (/projects#slug).
                // The target: classes highlight the card that was clicked.
                <li
                  key={p.slug}
                  id={p.slug}
                  className="scroll-mt-6 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] target:ring-2 target:ring-accent"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-[240px] border-b border-line bg-gray-100 lg:min-h-[360px] lg:border-b-0 lg:border-r">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={`Screenshot of the ${p.title} website`}
                          fill
                          sizes="(min-width: 1024px) 600px, 100vw"
                          className="object-cover object-top"
                        />
                      ) : (
                        <div aria-hidden="true" className="h-full bg-white">
                          <PreviewBody accent={p.accent} soft={p.soft} large />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
                      <p
                        className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                          p.real
                            ? "bg-accent-soft text-accent"
                            : "bg-gray-100 text-muted"
                        }`}
                      >
                        {p.badge}
                      </p>
                      <h2 className="text-3xl font-bold">{p.title}</h2>
                      <p className="text-lg leading-8 text-muted">
                        {p.description}
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        {p.tags.join(" · ")}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-[10px] bg-accent px-7 py-4 font-semibold text-white hover:bg-indigo-700"
                          >
                            Visit live site ↗
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        )}
                        <p className="text-sm text-gray-500">
                          Case study coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
