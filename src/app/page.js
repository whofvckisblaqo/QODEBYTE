import Hero        from "@/components/Hero";
import Programs    from "@/components/Programs";
import WhyEarly    from "@/components/WhyEarly";
import Projects    from "@/components/Projects";
import WhyTeens    from "@/components/WhyTeens";
import Spotlight   from "@/components/Spotlight";
import Testimonial from "@/components/Testimonial";
import CTA         from "@/components/CTA";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Programs />
      <WhyEarly />
      <Projects />
      <WhyTeens />
      <Spotlight />
      <Testimonial />
      <CTA />
    </div>
  );
}