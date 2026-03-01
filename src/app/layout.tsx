import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConditionalScrollToTop from "@/components/ui/ConditionalScrollToTop";

const SITE_URL = "https://crickettexoma.com";
const SITE_NAME = "Cricket Texoma";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0033A0",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cricket Texoma | Premier Youth Cricket in Texas & Oklahoma",
    template: "%s | Cricket Texoma",
  },
  description:
    "Cricket Texoma is the premier cricket platform in Texas and Oklahoma. Professional pathways, world-class tournaments, and elite coaching for young cricketers across the United States.",
  keywords: [
    "cricket league",
    "youth cricket",
    "Texas cricket",
    "Oklahoma cricket",
    "Texoma cricket",
    "cricket tournaments",
    "cricket academy",
    "junior cricket",
    "cricket coaching",
    "USA cricket",
    "cricket registration",
    "cricket programs",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // Canonical
  alternates: {
    canonical: SITE_URL,
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Cricket Texoma | Premier Youth Cricket in Texas & Oklahoma",
    description:
      "The premier cricket platform in Texas and Oklahoma. Professional pathways, world-class tournaments, and elite coaching for young cricketers.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Cricket Texoma - Premier Youth Cricket",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cricket Texoma | Premier Youth Cricket in Texas & Oklahoma",
    description:
      "The premier cricket platform in Texas and Oklahoma. Professional pathways, world-class tournaments, and elite coaching.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@crickettexoma",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // App metadata
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Category for search engines
  category: "sports",

  // Additional meta
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Texoma",
    "geo.position": "33.6357;-96.6089",
    ICBM: "33.6357, -96.6089",
  },
};

// Organization JSON-LD (site-wide)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/tcl-logo.png`,
  description:
    "Cricket Texoma is the premier cricket organization in the Texoma region, offering professional pathways and world-class experiences for young athletes.",
  foundingDate: "2024",
  areaServed: [
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "Oklahoma" },
  ],
  sport: "Cricket",
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-469-246-7342",
    contactType: "customer service",
    email: "info@crickettexoma.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.facebook.com/crickettexoma",
    "https://www.instagram.com/crickettexoma",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@600;700&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Rajdhani:wght@500;600;700&family=Oswald:wght@500;600;700&family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="bg-tcl-off-white text-tcl-navy min-h-screen selection:bg-tcl-crimson selection:text-white relative">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ConditionalScrollToTop />
      </body>
    </html>
  );
}
