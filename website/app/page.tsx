import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
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
        "JNC Mechanical Services is Southern California's trusted HVAC company offering AC installation, heating, ventilation, repairs, and 24/7 emergency service for residential and commercial clients.",
      url: "https://jncmechanicalservices.com",
      telephone: "+15623820518",
      email: "info@jncmechanicalservices.com",
      priceRange: "$$",
      areaServed: [
        "Long Beach", "Torrance", "Carson", "Compton", "Lakewood",
        "Bellflower", "Downey", "Signal Hill", "Los Angeles",
      ],
      serviceType: [
        "AC Installation", "AC Repair", "Heating Installation", "Furnace Repair",
        "HVAC Maintenance", "Emergency HVAC Service", "Commercial HVAC", "Indoor Air Quality",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "20:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "17:00" },
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
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Results />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
