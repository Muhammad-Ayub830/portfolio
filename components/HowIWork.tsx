import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { steps } from "@/lib/data";

export default function HowIWork() {
  return (
    <section id="process" className="bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-2.5">
          <Eyebrow>My process</Eyebrow>
          <h2 className="text-3xl font-bold md:text-[40px] md:leading-tight">
            How I work
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col gap-3.5 rounded-2xl border border-line bg-surface p-7"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-lg font-bold text-accent"
              >
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-[15px] leading-[23px] text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
