import Container from "./Container";
import Button from "./Button";

export default function ContactCta() {
  return (
    <section id="contact" className="bg-accent py-16 md:py-[88px]">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-bold text-white md:text-[44px] md:leading-tight">
            Have a project in mind?
          </h2>
          <p className="max-w-[48ch] text-lg text-indigo-100">
            Tell me about your idea. I reply within 24 hours.
          </p>
          <Button href="/contact" variant="white" className="mt-1">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
