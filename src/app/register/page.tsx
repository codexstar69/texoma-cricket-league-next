import type { Metadata } from "next";
import RegisterPage from "@/components/pages/register/RegisterPage";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Register — Join Cricket Texoma",
  description:
    "Register for Cricket Texoma. Sign up as an individual player or register your team for upcoming tournaments and programs across Texas and Oklahoma.",
  alternates: {
    canonical: `${SITE_URL}/register`,
  },
  openGraph: {
    title: "Register for Cricket Texoma",
    description:
      "Sign up for Cricket Texoma. Register as a player or team for tournaments and cricket programs.",
    url: `${SITE_URL}/register`,
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
      name: "Register",
      item: `${SITE_URL}/register`,
    },
  ],
};

export default function Register() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <RegisterPage />
    </>
  );
}
