'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-tcl-navy overflow-hidden pt-44 pb-24 md:pt-52 md:pb-36">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cricket-pitch" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L50 100 M0 50 L100 50" stroke="white" strokeWidth="1" />
              <rect x="25" y="25" width="50" height="50" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cricket-pitch)" />
        </svg>
      </div>

      <div className="absolute inset-0 z-0 bg-radial-gradient from-tcl-navy-light/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left pt-10 md:pt-0">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-source-sans text-[13px] font-medium text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Tournaments</span>
          </nav>

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[3px] bg-tcl-gold"></div>
            <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-gold">Tournaments</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-barlow-condensed font-bold text-[42px] sm:text-[52px] md:text-[64px] leading-none text-white uppercase tracking-wide mb-6"
          >
            Tournament Calendar
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-source-sans text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-[580px]"
          >
            Your comprehensive guide to TCL's annual competitive season and championship events
          </motion.p>
        </div>

        {/* Right Decorative Element (Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-end relative"
        >
          {/* Abstract Season Stack */}
          <div className="relative w-80 h-80">
            <div className="absolute top-0 right-0 w-64 h-24 bg-tcl-green/20 backdrop-blur-sm border border-white/10 rounded-xl transform -rotate-6 z-10 flex items-center justify-end px-6">
              <span className="font-barlow-condensed text-white/30 text-4xl font-bold uppercase">Spring</span>
            </div>
            <div className="absolute top-16 right-4 w-64 h-24 bg-tcl-gold/20 backdrop-blur-sm border border-white/10 rounded-xl transform -rotate-3 z-20 flex items-center justify-end px-6">
              <span className="font-barlow-condensed text-white/40 text-4xl font-bold uppercase">Summer</span>
            </div>
            <div className="absolute top-32 right-8 w-64 h-24 bg-tcl-crimson/30 backdrop-blur-md border border-tcl-crimson/30 rounded-xl z-30 flex items-center justify-end px-6 shadow-xl">
              <span className="font-barlow-condensed text-white text-4xl font-bold uppercase tracking-widest">Nationals</span>
            </div>
            <div className="absolute top-48 right-4 w-64 h-24 bg-tcl-sky/20 backdrop-blur-sm border border-white/10 rounded-xl transform rotate-3 z-20 flex items-center justify-end px-6">
              <span className="font-barlow-condensed text-white/40 text-4xl font-bold uppercase">Fall</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
