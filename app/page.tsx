import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedProjects />
        <HowIWork />
        <About />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
