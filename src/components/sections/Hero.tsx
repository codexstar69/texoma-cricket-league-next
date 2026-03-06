'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, -20]);
  const yPlaceholder = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tcl-navy pt-40">
      {/* Background Layers */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 bg-hero-gradient opacity-20" />
      <div className="absolute inset-0 z-0 bg-radial-navy opacity-40 mix-blend-multiply" />

      {/* Parallax Image */}
      <motion.div
        style={{ y: yPlaceholder }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-t from-tcl-navy via-tcl-navy/40 to-transparent z-10 bottom-0 h-2/3 mt-auto"></div>
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply bg-tcl-navy"></div>
          <img
            src="/hero-cricket.png"
            alt="Cricket player batting on natural turf wicket"
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-40"
            width={1920}
            height={1080}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start text-left">

        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 relative"
        >
          <div className="bg-white text-tcl-navy font-barlow-condensed font-bold uppercase text-[13px] tracking-[0.15em] px-4 py-1.5 shadow-sm rounded-sm border-l-4 border-tcl-crimson border-y border-y-tcl-light-gray border-r border-r-tcl-light-gray">
            2026 Season Now Open
          </div>
        </motion.div>

        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="font-barlow-condensed font-bold text-white uppercase tracking-[0.25em] text-[20px] md:text-[26px] drop-shadow-sm">Big Dreams</span>
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" aria-hidden="true"></div>
          <span className="font-barlow-condensed font-bold text-white uppercase tracking-[0.25em] text-[20px] md:text-[26px] drop-shadow-sm">Young Bats</span>
        </motion.div>

        {/* Main Heading */}
        <div className="flex flex-col items-start leading-[0.95] mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="font-barlow-condensed font-bold text-[56px] sm:text-7xl md:text-9xl text-white uppercase tracking-tight drop-shadow-md"
          >
            Cricket
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="font-barlow-condensed font-bold text-[32px] sm:text-4xl md:text-5xl text-tcl-crimson uppercase tracking-wide block drop-shadow-md"
            aria-label="Cricket Texoma"
          >
            Texoma
          </motion.span>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="font-source-sans text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 drop-shadow-sm"
        >
          The Next Generation of Cricket Begins in TEXOMA
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-5 w-full md:w-auto"
        >
          <Link href="/register">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-tcl-crimson text-white font-barlow-condensed font-semibold text-[16px] uppercase tracking-wider px-10 py-4 rounded-xl shadow-lg shadow-tcl-crimson/30 overflow-hidden group w-full sm:w-auto flex items-center justify-center cursor-pointer"
            >
              <span className="relative z-10">Register Your Team</span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
            </motion.span>
          </Link>

          <Link href="/tournaments">
            <motion.span
              whileHover={{ backgroundColor: 'rgba(11,44,77,0.05)' }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 border-[1.5px] border-white/40 text-white font-barlow-condensed font-semibold text-[16px] uppercase tracking-wider px-10 py-4 rounded-xl bg-transparent transition-all w-full sm:w-auto cursor-pointer shadow-sm hover:border-white hover:bg-white/10"
            >
              <span>Explore Tournaments</span>
              <CaretRight weight="bold" size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
