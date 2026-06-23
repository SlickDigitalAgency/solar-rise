import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar, Services, Benefits, WhyUs, Process, Projects, Testimonials, Stats, Faq, Contact, Footer } from "@/components/site/Sections";
import { Consultation } from "@/components/site/Consultation";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SolarRise — Premium Solar Panel Installation & Energy Solutions" },
      { name: "description", content: "Engineer-led solar installation for homes and businesses. Free consultation via WhatsApp. 500+ projects, 10+ years, 98% satisfaction." },
      { property: "og:title", content: "SolarRise — Power Your Future With Clean Energy" },
      { property: "og:description", content: "Premium residential and commercial solar installation with lifetime support. Get a free consultation on WhatsApp today." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-clip bg-background">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Benefits />
      <WhyUs />
      <Process />
      <Projects />
      <Testimonials />
      <Stats />
      <Faq />
      <Consultation />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
