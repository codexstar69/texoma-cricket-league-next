import type { Metadata } from "next";
import ContactPage from "@/components/pages/contact/ContactPage";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch With TCL",
  description:
    "Contact the Cricket Texoma team. Reach us by phone at 469-246-7342, email, or visit our facility in the Texoma region. We're here to help with registration, tournaments, and partnerships.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Cricket Texoma",
    description:
      "Get in touch with the Cricket Texoma team. Phone, email, and location details for registration, tournaments, and partnership inquiries.",
    url: `${SITE_URL}/contact`,
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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  name: "Contact Cricket Texoma",
  url: `${SITE_URL}/contact`,
  description:
    "Contact the Cricket Texoma team for registration, tournaments, partnerships, and general inquiries.",
  mainEntity: {
    "@type": "SportsOrganization",
    name: "Cricket Texoma",
    telephone: "+1-469-246-7342",
    email: "info@crickettexoma.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
};

export default function Contact() {
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
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />
      <ContactPage />
    </>
  );
}
