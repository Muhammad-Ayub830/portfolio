import Container from "./Container";
import Button from "./Button";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section id="top" className="bg-white py-14 md:py-28">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[72px]">
          <div className="flex flex-1 flex-col gap-7">
            <p className="w-fit rounded-full bg-accent-soft px-3 py-1.5 text-[13px] font-semibold text-accent">
              Available for remote projects
            </p>
            <h1 className="text-[40px] font-bold leading-[1.15] sm:text-5xl lg:text-[60px] lg:leading-[68px]">
              I build fast, clean websites for{" "}
              <span className="text-accent">small businesses.</span>
            </h1>
            <p className="max-w-[560px] text-lg leading-8 text-muted lg:text-xl">
              Full-stack developer helping clinics, cafés and local brands get
              online, from first call to launch.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row">
              <Button href="#projects" className="w-full sm:w-auto">
                View my work
              </Button>
              <Button href="/contact" variant="outline" className="w-full sm:w-auto">
                Get in touch
              </Button>
            </div>
            <p className="text-sm font-medium text-gray-500">
              React · Next.js · Node.js · Express
            </p>
          </div>

          <HeroCarousel className="w-full lg:w-[520px] lg:shrink-0" />
        </div>
      </Container>
    </section>
  );
}
