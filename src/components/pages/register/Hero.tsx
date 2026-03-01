'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle } from '@phosphor-icons/react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-tcl-navy pt-44 pb-16 md:pt-52 md:pb-24 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 98%, 0 100%)' }}>
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 z-0 bg-radial-navy opacity-80"></div>

      {/* Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none grain"></div>

      <div className="max-w-3xl w-full mx-auto px-4 md:px-6 relative z-10 text-center">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 font-source-sans text-[13px] font-medium text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Register</span>
        </nav>

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 mb-5"
        >
          <div className="w-10 h-[3px] bg-tcl-gold rounded-full"></div>
          <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-[0.12em] text-tcl-gold">Registration</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-barlow-condensed font-bold text-[34px] sm:text-[42px] md:text-[56px] leading-[1.1] text-white uppercase tracking-tight mb-4"
        >
          Register Now
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-source-sans text-[16px] md:text-[19px] font-normal text-white/80 leading-relaxed max-w-[480px] mx-auto mb-8"
        >
          Join Cricket Texoma — select your registration type below to get started.
        </motion.p>

        {/* Trust Micro-bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck weight="bold" size={14} className="text-tcl-gold" />
            <span className="font-source-sans text-[13px] text-white/60">Secure Registration</span>
          </div>
          <span className="hidden sm:block text-tcl-gold/50">·</span>
          <div className="flex items-center gap-2">
            <Clock weight="bold" size={14} className="text-tcl-gold" />
            <span className="font-source-sans text-[13px] text-white/60">Takes 3–5 minutes</span>
          </div>
          <span className="hidden sm:block text-tcl-gold/50">·</span>
          <div className="flex items-center gap-2">
            <CheckCircle weight="bold" size={14} className="text-tcl-gold" />
            <span className="font-source-sans text-[13px] text-white/60">Confirmation via email</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
