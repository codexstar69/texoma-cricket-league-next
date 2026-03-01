import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import Mission from "@/components/sections/Mission";
import Timeline from "@/components/sections/Timeline";
import Membership from "@/components/sections/Membership";
import AcademyPartners from "@/components/sections/AcademyPartners";
import Testimonial from "@/components/sections/Testimonial";
import Facility from "@/components/sections/Facility";
import Values from "@/components/sections/Values";
import CTABanner from "@/components/sections/CTABanner";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Cricket Texoma | Premier Youth Cricket in Texas & Oklahoma",
  description:
    "Join Cricket Texoma — the premier youth cricket platform in Texas & Oklahoma. Elite coaching, professional tournaments, and a clear pathway to competitive cricket for players of all ages.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Cricket Texoma | Premier Youth Cricket in Texas & Oklahoma",
    description:
      "Join Cricket Texoma — elite coaching, professional tournaments, and a clear pathway to competitive cricket for players of all ages.",
    url: SITE_URL,
  },
};

// Homepage JSON-LD
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  name: "Cricket Texoma - Home",
  url: SITE_URL,
  description:
    "Cricket Texoma is the premier youth cricket platform in the Texoma region. Professional pathways, world-class tournaments, and elite coaching.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: {
    "@type": "SportsOrganization",
    name: "Cricket Texoma",
    sport: "Cricket",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <Hero />
      <Programs />
      <Mission />
      <Timeline />
      <Membership />
      <AcademyPartners />
      <Testimonial />
      <Facility />
      <Values />
      <CTABanner />
    </>
  );
}
