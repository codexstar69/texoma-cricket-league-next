import type { Metadata } from "next";
import TermsOfService from "@/components/pages/legal/TermsOfService";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Cricket Texoma terms of service. Review our terms and conditions governing the use of our website and participation in our programs and tournaments.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Terms() {
  return <TermsOfService />;
}
