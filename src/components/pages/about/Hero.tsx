'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-white pt-44 pb-16 md:pt-52 md:pb-20 overflow-hidden border-b border-tcl-light-gray">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-white"></div>
      <div className="absolute inset-0 z-0 bg-radial-gradient from-tcl-off-white to-transparent opacity-80"></div>
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <img
          src="/hero-cricket.png"
          alt="Cricket player in action"
          className="w-full h-full object-cover grayscale mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-source-sans text-[13px] font-medium text-tcl-navy/50 mb-6 md:mb-8">
            <Link href="/" className="hover:text-tcl-navy transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-tcl-navy">About</span>
          </nav>

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4 md:mb-5"
          >
            <div className="w-8 md:w-10 h-[3px] bg-tcl-crimson rounded-full"></div>
            <span className="font-barlow-condensed font-medium text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-tcl-navy">About Cricket Texoma</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-barlow-condensed font-bold text-[40px] sm:text-[48px] md:text-[72px] leading-[1.05] text-tcl-navy uppercase tracking-tight mb-4 md:mb-6"
          >
            Empowering <br className="hidden md:block" /> Cricket
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-source-sans text-lg md:text-xl font-normal text-tcl-navy/80 leading-relaxed max-w-2xl"
          >
            Building the premier platform for the next generation of American cricketers through competition, community, and consistency.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
