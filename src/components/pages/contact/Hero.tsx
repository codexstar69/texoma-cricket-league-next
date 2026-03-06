'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
   return (
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-white pt-44 pb-24 md:pt-52 overflow-hidden border-b border-tcl-light-gray">
         {/* Background Layers */}
         <div className="absolute inset-0 z-0 bg-radial-gradient from-tcl-off-white to-transparent opacity-80"></div>
         <div className="absolute inset-0 z-0 opacity-[0.05]">
            <img
               src="/contact-hero.png"
               alt="Sports Texoma Entrance"
               className="w-full h-full object-cover grayscale mix-blend-overlay"
            />
         </div>

         <div className="max-w-7xl w-full mx-auto px-6 relative z-20">
            <div className="max-w-3xl flex flex-col items-start text-left">
               {/* Breadcrumb */}
               <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-source-sans text-[13px] font-medium text-tcl-navy/50 mb-8">
                  <Link href="/" className="hover:text-tcl-navy transition-colors">Home</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page" className="text-tcl-navy">Contact</span>
               </nav>

               {/* Overline */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-5"
               >
                  <div className="w-10 h-[3px] bg-tcl-crimson rounded-full"></div>
                  <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-[0.12em] text-tcl-navy">Contact Us</span>
               </motion.div>

               {/* Headline */}
               <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 }}
                  className="font-barlow-condensed font-bold text-[48px] md:text-[64px] text-tcl-navy uppercase tracking-[0.02em] leading-none mb-6"
               >
                  Get In Touch
               </motion.h1>

               {/* Description */}
               <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.24 }}
                  className="font-source-sans text-[18px] md:text-[20px] font-normal text-tcl-navy/80 leading-[1.65] max-w-[520px]"
               >
                  Whether you&apos;re a player, parent, coach, or academy &mdash; we&apos;d love to hear from you.
               </motion.p>
            </div>
         </div>
      </section>
   );
};

export default Hero;
