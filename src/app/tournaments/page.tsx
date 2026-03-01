import type { Metadata } from "next";
import TournamentsPage from "@/components/pages/tournaments/TournamentsPage";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Tournaments — Cricket Events & Season Schedule",
  description:
    "View the full Cricket Texoma tournament schedule. T20, ODI, and Test-style cricket events across Texas and Oklahoma. Register your team and compete in premier youth cricket tournaments.",
  alternates: {
    canonical: `${SITE_URL}/tournaments`,
  },
  openGraph: {
    title: "Tournaments — Cricket Texoma Events & Schedule",
    description:
      "Browse upcoming cricket tournaments in the Texoma region. T20, ODI, and Test-style events for youth and adult players. Register your team today.",
    url: `${SITE_URL}/tournaments`,
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
      name: "Tournaments",
      item: `${SITE_URL}/tournaments`,
    },
  ],
};

const sportsEventsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Cricket Texoma Tournaments",
  description:
    "Upcoming cricket tournaments organized by Cricket Texoma.",
  itemListElement: [
    {
      "@type": "SportsEvent",
      name: "TCL Premier League",
      sport: "Cricket",
      location: {
        "@type": "Place",
        name: "Texoma Region",
        address: {
          "@type": "PostalAddress",
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "SportsOrganization",
        name: "Cricket Texoma",
        url: SITE_URL,
      },
    },
  ],
};

export default function Tournaments() {
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
          __html: JSON.stringify(sportsEventsJsonLd),
        }}
      />
      <TournamentsPage />
    </>
  );
}
