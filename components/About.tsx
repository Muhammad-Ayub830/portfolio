import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-surface py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* TODO: replace with a real photo, e.g. <Image src="/portrait.jpg" ... />
              Keep the same size and rounded corners. */}
          <div
            role="img"
            aria-label="Portrait placeholder"
            className="flex aspect-[400/440] w-full max-w-[400px] items-center justify-center rounded-3xl bg-accent-soft text-[96px] font-bold text-accent"
          >
            MA
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <Eyebrow>About me</Eyebrow>
            <h2 className="text-3xl font-bold md:text-[40px] md:leading-tight">
              A little about me
            </h2>
            <p className="max-w-[60ch] text-lg leading-[29px] text-muted">
              I’m a full-stack developer who likes turning a business goal into
              a clear, fast website. I work in small steps and keep you updated
              along the way.
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-[13px] font-semibold"
                >
                  {s}
                </li>
              ))}
            </ul>
            {/* TODO: point to the full About page once it exists */}
            <a href="/about" className="w-fit font-semibold text-accent">
              More about me →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
