'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Phone, EnvelopeSimple, Users, Globe } from '@phosphor-icons/react';
import { TRANSITION_SPRING } from '@/utils/animations';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const PAGE_TO_PATH: Record<string, string> = {
  home: '/',
  about: '/about',
  tournaments: '/tournaments',
  partners: '/partners',
  contact: '/contact',
  register: '/register',
};

const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([k, v]) => [v, k])
);

const Navbar = () => {
  const pathname = usePathname();
  const currentPage = PATH_TO_PAGE[pathname] || 'home';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  const navLinks = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'Tournaments', id: 'tournaments', href: '/tournaments' },
    { name: 'Partners', id: 'partners', href: '/partners' },
    { name: 'About', id: 'about', href: '/about' },
    { name: 'Contact', id: 'contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out`}>
        {/* Utility Top Bar - Enterprise Depth */}
        <div
          className={`bg-white border-b border-tcl-light-gray transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between font-source-sans text-[11px] uppercase tracking-widest font-semibold text-tcl-navy/60">
            <div className="flex items-center gap-6">
              <a href="tel:469-246-7342" className="flex items-center gap-2 hover:text-tcl-crimson transition-colors">
                <Phone size={14} weight="fill" className="text-tcl-crimson" />
                <span>469.246.7342</span>
              </a>
              <a href="mailto:info@crickettexoma.com" className="hidden sm:flex items-center gap-2 hover:text-tcl-crimson transition-colors">
                <EnvelopeSimple size={14} weight="fill" className="text-tcl-crimson" />
                <span>info@crickettexoma.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Globe size={14} weight="fill" className="text-tcl-navy/40" />
                <span>TEXAS & OKLAHOMA</span>
              </div>
              <span className="text-tcl-light-gray">|</span>
              <Link href="/partners" className="flex items-center gap-1.5 hover:text-tcl-navy transition-colors">
                <Users size={14} weight="fill" className="text-tcl-navy/40" />
                <span>ACADEMY PORTAL</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          aria-label="Main navigation"
          className={`transition-all duration-500 relative ${isScrolled
            ? 'bg-white/95 backdrop-blur-2xl py-1 md:py-2 shadow-[0_4px_30px_rgba(0,0,0,0.06)]'
            : 'bg-white/90 backdrop-blur-sm py-1 md:py-2 border-b border-tcl-light-gray shadow-sm'
            }`}
        >
          {/* Subtle Bottom Accent Line */}
          <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tcl-crimson/20 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

          <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
            {/* Logo Wrapper */}
            <Link
              href="/"
              className="relative z-50 group flex items-center gap-4"
              aria-label="Cricket Texoma - Home"
            >
              <div className="relative">
                <img
                  src="/cricket-texoma-logo-2026.png"
                  alt="Cricket Texoma logo"
                  className={`w-auto object-contain transition-all duration-500 origin-left scale-125 md:scale-100 ${isScrolled ? 'h-12 md:h-16' : 'h-[3.75rem] md:h-24'
                    }`}
                  width={128}
                  height={128}
                />
              </div>
              <div className={`hidden lg:flex flex-col border-l border-tcl-light-gray pl-4 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-x-4 pointer-events-none hidden' : 'opacity-100 translate-x-0'}`}>
                <span className="font-barlow-condensed font-bold text-xl text-tcl-navy leading-none tracking-tight">CRICKET TEXOMA</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`group relative font-barlow-condensed font-semibold text-[15px] uppercase tracking-[0.1em] transition-all py-2 ${currentPage === item.id ? 'text-tcl-crimson' : 'text-tcl-navy/60 hover:text-tcl-navy'
                    }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Refined Active Indicator */}
                  {currentPage === item.id ? (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-tcl-crimson"
                      transition={TRANSITION_SPRING}
                    />
                  ) : (
                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-tcl-navy/20 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Actions Area */}
            <div className="flex items-center gap-6">
              <div className="hidden xl:flex flex-col text-right">
                <span className="font-barlow-condensed font-bold text-tcl-navy text-base uppercase tracking-tighter">Season 2026</span>
                <span className="font-source-sans font-bold text-xs text-tcl-crimson uppercase tracking-widest">Enrollment Open</span>
              </div>

              <Link href="/register">
                <motion.span
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`hidden md:flex items-center gap-3 text-white font-barlow-condensed font-bold text-[13px] uppercase tracking-[0.1em] px-8 py-3.5 rounded-full transition-all relative overflow-hidden group cursor-pointer
                    ${currentPage === 'register'
                      ? 'bg-tcl-navy ring-2 ring-tcl-crimson ring-offset-2 ring-offset-white'
                      : 'bg-tcl-navy hover:bg-tcl-navy-light shadow-lg hover:shadow-tcl-navy/25'}
                  `}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  <span className="relative z-10">Register Now</span>
                </motion.span>
              </Link>

              <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden text-tcl-navy p-2 hover:bg-tcl-light-gray rounded-xl transition-all relative z-50"
                aria-label="Open mobile navigation menu"
              >
                <List weight="bold" size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Enterprise Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-[60] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header in Overlay */}
            <div className="flex justify-between items-center p-6 border-b border-tcl-light-gray">
              <img src="/cricket-texoma-logo-2026.png" alt="Cricket Texoma" className="h-14" width={56} height={56} />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-12 h-12 rounded-full bg-tcl-off-white flex items-center justify-center text-tcl-navy hover:bg-tcl-light-gray transition-all shadow-sm"
                aria-label="Close navigation menu"
              >
                <X weight="bold" size={24} />
              </button>
            </div>

            {/* Navigation Links in Overlay */}
            <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center gap-2 p-8">
              {navLinks.map((item, i) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), type: "spring", stiffness: 100 }}
                >
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between font-barlow-condensed font-bold text-5xl uppercase tracking-tighter py-2 border-b border-tcl-light-gray transition-all ${currentPage === item.id ? 'text-tcl-crimson pl-4' : 'text-tcl-navy/40 hover:text-tcl-navy hover:pl-2'
                      }`}
                    onClick={() => setIsMobileOpen(false)}
                    aria-current={currentPage === item.id ? 'page' : undefined}
                  >
                    <span>{item.name}</span>
                    <div className={`w-8 h-1 bg-tcl-crimson rounded-full transition-transform duration-300 ${currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50 origin-right'}`} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA in Overlay */}
            <div className="p-8 pb-12 w-full space-y-6">
              <div className="flex flex-col gap-4 text-center">
                <p className="font-source-sans text-[11px] text-tcl-navy/40 uppercase tracking-[0.2em] font-bold">Inquiries & Support</p>
                <div className="flex justify-center gap-8">
                  <a href="tel:469-246-7342" className="flex flex-col items-center gap-2" aria-label="Call Cricket Texoma">
                    <div className="w-10 h-10 rounded-full bg-tcl-off-white flex items-center justify-center shadow-sm"><Phone className="text-tcl-crimson" size={18} /></div>
                    <span className="font-barlow-condensed font-bold text-tcl-navy text-sm">Call</span>
                  </a>
                  <a href="mailto:info@crickettexoma.com" className="flex flex-col items-center gap-2" aria-label="Email Cricket Texoma">
                    <div className="w-10 h-10 rounded-full bg-tcl-off-white flex items-center justify-center shadow-sm"><EnvelopeSimple className="text-tcl-crimson" size={18} /></div>
                    <span className="font-barlow-condensed font-bold text-tcl-navy text-sm">Email</span>
                  </a>
                </div>
              </div>
              <Link
                href="/register"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full bg-tcl-navy text-white text-center font-barlow-condensed font-black text-xl uppercase py-5 rounded-2xl shadow-xl shadow-tcl-navy/20 hover:bg-tcl-navy-light active:scale-[0.98] transition-all"
              >
                Register Your Team
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
