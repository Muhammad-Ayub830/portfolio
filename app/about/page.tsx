import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactCta from "@/components/ContactCta";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import HowIWork from "@/components/HowIWork";
import { skills } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description:
    "Full-stack web developer who loves building systems, from the first idea to a working website.",
};

// Put your photo in /public and set the path here, e.g. "/portrait.jpg".
// Until then, the "MA" placeholder is shown.
const PORTRAIT: string | null = null;

// Extra skills shown only on this page.
const allSkills = [...skills, "MongoDB"];

// Edit the credentials here. Only add claims the certificates themselves show.
const credentials = [
  {
    label: "Education",
    title: "BS Computer Science ",
    detail: "Institute of Management Sciences (IMSciences), Khyber Pakhtunkhwa",
  },
  {
    label: "Training",
    title: "Certified web developer",
    detail: "Bano Qabil program, Alkhidmat Foundation",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Intro */}
        <section className="bg-white py-14 md:py-24">
          <Container>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
              {PORTRAIT ? (
                <div className="relative aspect-[400/440] w-full max-w-[400px] overflow-hidden rounded-3xl bg-accent-soft">
                  <Image
                    src={PORTRAIT}
                    alt={`Portrait of ${SITE.name}`}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  role="img"
                  aria-label="Portrait placeholder"
                  className="flex aspect-[400/440] w-full max-w-[400px] items-center justify-center rounded-3xl bg-accent-soft text-[96px] font-bold text-accent"
                >
                  MA
                </div>
              )}

              <div className="flex flex-1 flex-col gap-5">
                <Eyebrow>About me</Eyebrow>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  Hi, I’m {SITE.name}
                </h1>
                <p className="max-w-[60ch] text-lg leading-8 text-muted">
                  I’m a full-stack web developer who loves building systems,
                  from the first idea to a working website. I work in small
                  steps and keep you updated along the way.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Education and training */}
        <section className="bg-surface py-16 md:py-24">
          <Container>
            <div className="flex flex-col gap-2.5">
              <Eyebrow>Background</Eyebrow>
              <h2 className="text-3xl font-bold md:text-[40px] md:leading-tight">
                Education and training
              </h2>
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-2">
              {credentials.map((c) => (
                <li
                  key={c.title}
                  className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                    {c.label}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight">{c.title}</h3>
                  <p className="text-base leading-[26px] text-muted">{c.detail}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* How I work (same component as the home page) */}
        <HowIWork />

        {/* Skills */}
        <section className="bg-surface py-16 md:py-24">
          <Container>
            <div className="flex flex-col gap-2.5">
              <Eyebrow>Skills</Eyebrow>
              <h2 className="text-3xl font-bold md:text-[40px] md:leading-tight">
                What I work with
              </h2>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {allSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold"
                >
                  {s}
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
