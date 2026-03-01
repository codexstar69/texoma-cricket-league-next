import type { Metadata } from "next";
import AboutPage from "@/components/pages/about/AboutPage";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "About Us — Our Mission, Vision & Values",
  description:
    "Learn about Cricket Texoma's mission to build a world-class cricket ecosystem in Texas and Oklahoma. Our values, facilities, coaching philosophy, and commitment to developing young cricketers.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Cricket Texoma — Mission, Vision & Values",
    description:
      "Discover our mission to build a world-class cricket ecosystem in the Texoma region. Professional coaching, top-tier facilities, and a pathway for young athletes.",
    url: `${SITE_URL}/about`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE_URL}/about`,
    },
  ],
};

const webpageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  name: "About Cricket Texoma",
  url: `${SITE_URL}/about`,
  description:
    "Learn about Cricket Texoma's mission, vision, values, and world-class facilities.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageJsonLd),
        }}
      />
      <AboutPage />
    </>
  );
}
