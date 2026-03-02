import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Cricket Texoma homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-tcl-off-white">
      <div className="text-center px-6 py-20">
        <h1 className="font-barlow-condensed text-8xl font-bold text-tcl-crimson mb-4">
          404
        </h1>
        <h2 className="font-barlow-condensed text-3xl font-semibold text-tcl-navy mb-4">
          Page Not Found
        </h2>
        <p className="font-source-sans text-lg text-tcl-navy/70 max-w-md mx-auto mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-tcl-crimson text-white font-barlow-condensed font-semibold text-lg rounded-lg hover:bg-tcl-crimson-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-tcl-navy text-tcl-navy font-barlow-condensed font-semibold text-lg rounded-lg hover:bg-tcl-navy hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
