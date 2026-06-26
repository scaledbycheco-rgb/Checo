import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jncmechanicalservices.com/#business",
      name: "JNC Mechanical Services",
      description:
        "JNC Mechanical Service Inc. provides top-tier commercial and industrial HVAC solutions serving Los Angeles and Orange County. Specializing in commercial HVAC, chiller service, mechanical retrofits, preventive care, and installation.",
      url: "https://jncmechanicalservices.com",
      telephone: "+15626442129",
      email: "JNCMechanical@yahoo.com",
      priceRange: "$$",
      areaServed: [
        "Los Angeles", "Orange County", "Greater Los Angeles Area",
      ],
      serviceType: [
        "Commercial HVAC", "Chiller Service", "Mechanical Retrofits",
        "Preventive Maintenance", "Service Repair", "HVAC Installation",
      ],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "07:00", closes: "17:00" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jncmechanicalservices.com/#website",
      url: "https://jncmechanicalservices.com",
      name: "JNC Mechanical Services",
      publisher: { "@id": "https://jncmechanicalservices.com/#business" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-white focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Results />
        <Testimonials />
        <VideoSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
