import type { Metadata } from "next";
import PartnersPage from "@/components/pages/partners/PartnersPage";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Partner With Us — Academy & Club Partnership Program",
  description:
    "Partner with Cricket Texoma. Our academy partnership program offers co-branded tournaments, facility access, coaching support, and player development pathways for cricket clubs across Texas and Oklahoma.",
  alternates: {
    canonical: `${SITE_URL}/partners`,
  },
  openGraph: {
    title: "Partner With Cricket Texoma — Academy & Club Programs",
    description:
      "Join our academy partnership program. Co-branded tournaments, facility access, coaching support, and player development pathways for cricket clubs.",
    url: `${SITE_URL}/partners`,
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
      name: "Partners",
      item: `${SITE_URL}/partners`,
    },
  ],
};

export default function Partners() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <PartnersPage />
    </>
  );
}
