'use client';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="bg-tcl-crimson py-24 md:py-32 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-stripe-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-tcl-gold/20 to-transparent pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-block"
        >
          <span className="bg-tcl-gold text-tcl-navy font-barlow-condensed font-bold text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
            Limited Availability
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-barlow-condensed font-bold text-4xl md:text-7xl text-tcl-white uppercase mb-6 tracking-tight"
        >
          The 2026 Season Is Open
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-source-sans text-tcl-white/90 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Elevate your game. Join the premier cricket organization in the Texoma region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center mb-12"
        >
          <Link href="/register">
            <motion.span
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-tcl-white text-tcl-crimson font-barlow-condensed font-bold text-lg md:text-xl uppercase px-12 py-5 rounded-2xl shadow-2xl hover:bg-tcl-off-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Register Your Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>

          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-tcl-white/40 text-tcl-white font-barlow-condensed font-bold text-lg md:text-xl uppercase px-12 py-5 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center cursor-pointer"
            >
              Inquire Now
            </motion.span>
          </Link>
        </motion.div>

        {/* Enhanced Phone Button for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="font-barlow-condensed text-tcl-white/50 text-xs uppercase tracking-widest mb-4">Or speak with an advisor</p>
          <a
            href="tel:469-246-7342"
            className="group flex items-center gap-4 bg-tcl-navy/30 hover:bg-tcl-navy/50 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl active:scale-95"
            aria-label="Call Cricket Texoma at 469-246-7342"
          >
            <div className="w-12 h-12 bg-tcl-gold rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <Phone className="w-6 h-6 text-tcl-navy fill-tcl-navy/20" />
            </div>
            <div className="text-left">
              <span className="block font-barlow-condensed font-bold text-2xl text-white leading-none">469-246-7342</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
