import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Zones from "@/components/sections/Zones";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <Process />
      <Testimonials />
      <Zones />
      <CTA />
      <ContactForm />
    </>
  );
}
