'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
   return (
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-tcl-navy pt-44 pb-24 md:pt-52 overflow-hidden">
         {/* Background Layers */}
         <div className="absolute inset-0 z-0 bg-hero-gradient"></div>
         <div className="absolute inset-0 z-0 opacity-[0.12]">
            <img
               src="/contact-hero.png"
               alt="Sports Texoma Entrance"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-tcl-navy mix-blend-color"></div>
         </div>
         <div className="absolute inset-0 bg-radial-navy opacity-80 z-10 pointer-events-none"></div>

         <div className="max-w-7xl w-full mx-auto px-6 relative z-20">
            <div className="max-w-3xl flex flex-col items-start text-left">
               {/* Breadcrumb */}
               <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-source-sans text-[13px] font-medium text-white/50 mb-8">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">Contact</span>
               </nav>

               {/* Overline */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 mb-5"
               >
                  <div className="w-10 h-[3px] bg-tcl-gold rounded-full"></div>
                  <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-[0.12em] text-tcl-gold">Contact Us</span>
               </motion.div>

               {/* Headline */}
               <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 }}
                  className="font-barlow-condensed font-bold text-[48px] md:text-[64px] text-white uppercase tracking-[0.02em] leading-none mb-6"
               >
                  Get In Touch
               </motion.h1>

               {/* Description */}
               <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.24 }}
                  className="font-source-sans text-[18px] md:text-[20px] font-normal text-white/80 leading-[1.65] max-w-[520px]"
               >
                  Whether you're a player, parent, coach, or academy — we'd love to hear from you.
               </motion.p>
            </div>
         </div>
      </section>
   );
};

export default Hero;
