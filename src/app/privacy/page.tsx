import type { Metadata } from "next";
import PrivacyPolicy from "@/components/pages/legal/PrivacyPolicy";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cricket Texoma privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Privacy() {
  return <PrivacyPolicy />;
}
