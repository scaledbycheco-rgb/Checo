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
      "@id": "https://checomarketing.com/#business",
      name: "Checo Marketing",
      description:
        "Freelance brand scaling agency helping founders and creators grow their brand through positioning, content strategy, and growth systems.",
      url: "https://checomarketing.com",
      telephone: "+15623820518",
      email: "scaledbycheco@gmail.com",
      priceRange: "$$",
      areaServed: "Worldwide",
      serviceType: [
        "Brand Positioning",
        "Content Strategy",
        "Growth Marketing",
        "Visual Identity",
        "Performance Analytics",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://checomarketing.com/#website",
      url: "https://checomarketing.com",
      name: "Checo Marketing",
      publisher: { "@id": "https://checomarketing.com/#business" },
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
