'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-tcl-navy pt-44 pb-16 md:pt-52 md:pb-20 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 z-0 bg-radial-navy opacity-80"></div>
      <div className="absolute inset-0 z-0 opacity-[0.1]">
        <img
          src="/private-coaching.png"
          alt="Cricket coaching session"
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl flex flex-col items-start text-left">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-source-sans text-[13px] font-medium text-white/50 mb-6 md:mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Academy Partners</span>
          </nav>

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4 md:mb-5"
          >
            <div className="w-8 md:w-10 h-[3px] bg-tcl-gold rounded-full"></div>
            <span className="font-barlow-condensed font-medium text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-tcl-gold">Academy Partners</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-barlow-condensed font-bold text-[40px] md:text-[72px] leading-none text-white uppercase tracking-wide mb-6"
          >
            Become a <br className="hidden md:block" /> TCL Partner
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-source-sans text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-2xl mb-10"
          >
            Join a national ecosystem built around competition, credibility, and progression.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/register" className="h-14 px-10 bg-tcl-crimson text-white rounded-xl font-barlow-condensed font-semibold text-[15px] uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-tcl-crimson-dark hover:scale-105 transition-all shadow-lg shadow-tcl-crimson/30">
              Apply Now <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
            </Link>
            <Link href="/tournaments" className="h-14 px-10 border border-white/30 text-white rounded-xl font-barlow-condensed font-semibold text-[15px] uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              View Tournaments <Calendar className="w-5 h-5 stroke-[2px]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
