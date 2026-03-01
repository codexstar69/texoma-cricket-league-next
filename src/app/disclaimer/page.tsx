import type { Metadata } from "next";
import Disclaimer from "@/components/pages/legal/Disclaimer";

const SITE_URL = "https://crickettexoma.com";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Cricket Texoma disclaimer. Important legal information regarding the use of our website and the accuracy of content provided.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return <Disclaimer />;
}
