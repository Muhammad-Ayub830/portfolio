import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
  description:
    "Tell me about your project. I reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-white py-14 md:py-24">
          <Container>
            <div className="flex max-w-[720px] flex-col gap-4">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Let’s talk about your project
              </h1>
              <p className="text-lg leading-8 text-muted">
                Tell me about your project. I reply within 24 hours.
              </p>
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
              <ContactForm />

              <aside className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                    Email
                  </h2>
                  <a href={`mailto:${SITE.email}`} className="text-lg font-semibold">
                    {SITE.email}
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                    Where I am
                  </h2>
                  <p className="leading-7 text-muted">
                    Based in Pakistan (UTC+5). Happy to schedule calls around
                    your time zone.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                    Elsewhere
                  </h2>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
