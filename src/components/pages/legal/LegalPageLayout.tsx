'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface TocItem {
  id: string;
  label: string;
}

interface LegalPageLayoutProps {
  title: string;
  effectiveDate: string;
  tocItems: TocItem[];
  children?: React.ReactNode;
}

const PATH_TO_PAGE: Record<string, string> = {
  '/privacy': 'privacy',
  '/terms': 'terms',
  '/disclaimer': 'disclaimer',
};

const LegalPageLayout = ({ title, effectiveDate, tocItems, children }: LegalPageLayoutProps) => {
  const pathname = usePathname();
  const currentPage = PATH_TO_PAGE[pathname] || '';
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-tcl-off-white min-h-screen font-source-sans text-tcl-navy">

      {/* SECTION 1: HEADER */}
      <section className="bg-white pt-44 pb-16 md:pt-52 md:pb-20 relative border-b border-tcl-light-gray">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 font-source-sans text-[13px] font-medium text-tcl-navy/50 mb-6">
            <Link href="/" className="hover:text-tcl-navy transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-tcl-navy/80" aria-current="page">{title}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-barlow-condensed font-bold text-[28px] md:text-[44px] text-tcl-navy uppercase tracking-wide mb-4"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-barlow font-medium text-[13px] text-tcl-crimson"
          >
            {effectiveDate}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DOCUMENT BODY */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-layered border border-tcl-light-gray p-5 md:p-10"
          >
            {/* Document Title Internal */}
            <div className="mb-10 text-center md:text-left">
              <span className="font-source-sans text-[14px] font-medium text-[#999] uppercase tracking-[0.06em]">
                Cricket Texoma — {title}
              </span>
            </div>

            {/* Table of Contents */}
            {tocItems.length > 0 && (
              <div className="bg-[#FAFAF8] rounded-lg p-6 border border-tcl-light-gray mb-12">
                <h3 className="font-barlow-condensed font-bold text-[14px] text-tcl-navy uppercase tracking-wider mb-4">
                  Table of Contents
                </h3>
                <nav aria-label="Table of contents">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {tocItems.map((item, idx) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(item.id, e)}
                          className="group flex items-baseline gap-3 text-[15px] font-source-sans font-medium text-tcl-crimson hover:text-tcl-crimson-dark transition-colors"
                        >
                          <span className="font-barlow font-bold text-tcl-navy text-sm w-4">{idx + 1}.</span>
                          <span className="group-hover:underline">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* Main Content Injection */}
            <div className="legal-content space-y-4 text-[16px] leading-[1.8] text-[#444]">
              {children}
            </div>

          </motion.div>

        </div>
      </section>

      {/* SECTION 3: RELATED POLICIES */}
      <section className="bg-tcl-warm-stone py-12 border-t border-tcl-light-gray/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h4 className="font-barlow-condensed font-bold text-[14px] text-tcl-navy uppercase tracking-wider mb-6">
            Related Policies
          </h4>
          <nav aria-label="Related legal pages" className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 font-source-sans text-[15px]">
            <Link
              href="/privacy"
              className={`font-medium hover:text-tcl-crimson hover:underline transition-colors ${currentPage === 'privacy' ? 'text-tcl-navy font-bold cursor-default hover:no-underline hover:text-tcl-navy' : 'text-[#666]'}`}
              aria-current={currentPage === 'privacy' ? 'page' : undefined}
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-[#CCC]" aria-hidden="true">·</span>
            <Link
              href="/terms"
              className={`font-medium hover:text-tcl-crimson hover:underline transition-colors ${currentPage === 'terms' ? 'text-tcl-navy font-bold cursor-default hover:no-underline hover:text-tcl-navy' : 'text-[#666]'}`}
              aria-current={currentPage === 'terms' ? 'page' : undefined}
            >
              Terms of Service
            </Link>
            <span className="hidden sm:inline text-[#CCC]" aria-hidden="true">·</span>
            <Link
              href="/disclaimer"
              className={`font-medium hover:text-tcl-crimson hover:underline transition-colors ${currentPage === 'disclaimer' ? 'text-tcl-navy font-bold cursor-default hover:no-underline hover:text-tcl-navy' : 'text-[#666]'}`}
              aria-current={currentPage === 'disclaimer' ? 'page' : undefined}
            >
              Disclaimer
            </Link>
          </nav>
        </div>
      </section>

      {/* Back to Top Button (Legal Page Specific) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-tcl-navy text-white rounded-full shadow-lg flex items-center justify-center hover:bg-tcl-crimson hover:scale-105 transition-all duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp weight="bold" size={20} className="group-hover:text-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};

export default LegalPageLayout;
