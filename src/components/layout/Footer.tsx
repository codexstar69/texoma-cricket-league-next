'use client';
import { InstagramLogo, TwitterLogo, FacebookLogo, YoutubeLogo, EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-tcl-navy-dark text-white pt-24 pb-12 border-t border-white/5 overflow-hidden" role="contentinfo">
      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-tcl-gold/[0.04] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tcl-crimson/[0.05] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6" aria-label="Cricket Texoma - Home">
              <img
                src="/cricket-texoma-logo-2026.png"
                alt="Cricket Texoma logo"
                className="h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                width={112}
                height={112}
              />
            </Link>
            <p className="font-source-sans italic text-white/60 text-sm mb-8">Big Dreams. Young Bats.</p>
            <div className="flex gap-5">
              {[
                { Icon: InstagramLogo, label: 'Follow us on Instagram', href: 'https://www.instagram.com/crickettexoma' },
                { Icon: TwitterLogo, label: 'Follow us on Twitter', href: 'https://twitter.com/crickettexoma' },
                { Icon: FacebookLogo, label: 'Follow us on Facebook', href: 'https://www.facebook.com/crickettexoma' },
                { Icon: YoutubeLogo, label: 'Subscribe on YouTube', href: 'https://www.youtube.com/@crickettexoma' },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-white/60 hover:text-tcl-gold transition-colors">
                  <Icon weight="bold" size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Tournaments */}
          <nav aria-label="Tournament links">
            <h4 className="font-barlow-condensed font-bold text-tcl-gold uppercase text-[14px] tracking-[0.12em] mb-6">Tournaments</h4>
            <ul className="space-y-3 font-source-sans text-[15px] text-white/70">
              <li><Link href="/tournaments" className="hover:text-white transition-colors">Grand Heritage T30 Cup</Link></li>
              <li><Link href="/tournaments" className="hover:text-white transition-colors">TX T20 Bash</Link></li>
              <li><Link href="/tournaments" className="hover:text-white transition-colors">Memorial Patriot Cup</Link></li>
              <li><Link href="/tournaments" className="hover:text-white transition-colors">Liberty Shield</Link></li>
              <li><Link href="/tournaments" className="hover:text-white transition-colors">Labor Day Cup</Link></li>
              <li><Link href="/tournaments" className="hover:text-white transition-colors">Thanksgiving Champions Trophy</Link></li>
            </ul>
          </nav>

          {/* Column 3: Organization */}
          <nav aria-label="Organization links">
            <h4 className="font-barlow-condensed font-bold text-tcl-gold uppercase text-[14px] tracking-[0.12em] mb-6">Organization</h4>
            <ul className="space-y-3 font-source-sans text-[15px] text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About TCL</Link></li>
              <li><Link href="/tournaments" className="hover:text-white transition-colors">Tournaments</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Partner Programs (Coming Soon)</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Facilities</Link></li>
              <li><Link href="/tournaments" className="hover:text-white transition-colors">Season Calendar</Link></li>
            </ul>
          </nav>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-barlow-condensed font-bold text-tcl-gold uppercase text-[14px] tracking-[0.12em] mb-6">Contact</h4>
            <ul className="space-y-4 font-source-sans text-[15px] text-white/70">
              <li className="flex items-start gap-3">
                <EnvelopeSimple weight="bold" size={18} className="text-tcl-gold shrink-0 mt-0.5" />
                <a href="mailto:info@crickettexoma.com" className="hover:text-white transition-colors">info@crickettexoma.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone weight="bold" size={18} className="text-tcl-gold shrink-0 mt-0.5" />
                <a href="tel:469-246-7342" className="hover:text-white transition-colors">469-246-7342</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin weight="bold" size={18} className="text-tcl-gold shrink-0 mt-0.5" />
                <span>Sports Texoma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/50 font-source-sans">
          <p>© {new Date().getFullYear()} Cricket Texoma. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-white/80 transition-colors">Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
