'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-tcl-warm-stone py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Shield bg */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" className="text-tcl-navy">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-barlow-condensed font-bold text-[44px] text-tcl-navy uppercase mb-6"
        >
          Ready To Join The TCL Family?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-source-sans text-lg text-[#555] max-w-[600px] mx-auto leading-[1.6] mb-10"
        >
          Whether you're a player, parent, coach, academy, umpire, or scorer—there's a place for you here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
        >
          <Link href="/register" className="h-14 px-10 bg-tcl-crimson text-tcl-white rounded-full font-barlow-condensed font-semibold text-[15px] uppercase tracking-wide flex items-center gap-2 hover:bg-tcl-crimson-dark hover:scale-105 transition-all shadow-lg shadow-tcl-crimson/20">
            Register Now <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
          </Link>
          <Link href="/contact" className="h-14 px-10 border-2 border-tcl-navy text-tcl-navy rounded-full font-barlow-condensed font-semibold text-[15px] uppercase tracking-wide hover:bg-tcl-navy hover:text-tcl-white transition-all flex items-center justify-center">
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-source-sans text-sm text-[#888]"
        >
          <a href="mailto:info@texomacricket.com" className="flex items-center gap-2 hover:text-tcl-navy transition-colors">
            <Mail className="w-4 h-4 text-tcl-gold" /> info@texomacricket.com
          </a>
          <span className="hidden sm:inline text-tcl-gold">·</span>
          <a href="tel:469-246-7342" className="flex items-center gap-2 hover:text-tcl-navy transition-colors">
            <Phone className="w-4 h-4 text-tcl-gold" /> 469-246-7342
          </a>
          <span className="hidden sm:inline text-tcl-gold">·</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-tcl-gold" /> Sports Texoma
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
