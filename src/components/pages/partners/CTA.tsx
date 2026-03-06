'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
   return (
      <section className="bg-tcl-warm-stone py-24 md:py-28 relative overflow-hidden">
         {/* Decorative Elements */}
         <div className="absolute top-0 left-0 w-full h-16 bg-tcl-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
         <div className="absolute top-[62px] left-0 w-full h-[2px] bg-tcl-crimson transform -rotate-[0.5deg] origin-top-left hidden"></div>

         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <svg width="280" height="280" viewBox="0 0 24 24" fill="currentColor" className="text-tcl-navy">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
         </div>

         <div className="max-w-3xl mx-auto px-4 text-center relative z-10 pt-10">

            <span className="font-barlow-condensed font-medium text-tcl-crimson uppercase tracking-widest text-sm block mb-4">Get Started</span>

            <motion.h2
               initial={{ opacity: 0, scale: 0.96 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="font-barlow-condensed font-bold text-[44px] text-tcl-navy uppercase mb-6"
            >
               Ready To Join The TCL Family?
            </motion.h2>

            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.15 }}
               className="font-source-sans text-[18px] text-[#555] max-w-[580px] mx-auto leading-[1.6] mb-10"
            >
               Take the first step toward national-level competition and become part of America&apos;s premier cricket ecosystem.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
            >
               <Link href="/register" className="h-16 px-12 bg-tcl-crimson text-white rounded-full font-barlow-condensed font-semibold text-[16px] uppercase tracking-wide flex items-center gap-2 hover:bg-tcl-crimson-dark hover:scale-105 transition-all shadow-xl shadow-tcl-crimson/25 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">Apply Now <ArrowRight className="w-5 h-5 stroke-[2.5px]" /></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
               </Link>
               <Link href="/tournaments" className="h-14 px-10 border-2 border-tcl-navy text-tcl-navy rounded-full font-barlow-condensed font-semibold text-[15px] uppercase tracking-wide flex items-center gap-2 hover:bg-tcl-navy hover:text-white transition-all">
                  View Tournaments <Calendar className="w-5 h-5 stroke-[2px]" />
               </Link>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.45 }}
               className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-source-sans text-sm text-[#888]"
            >
               <a href="mailto:info@texomacricket.com" className="flex items-center gap-2 hover:text-tcl-navy transition-colors">
                  <Mail className="w-4 h-4 text-tcl-crimson" /> info@texomacricket.com
               </a>
               <span className="hidden sm:inline text-tcl-crimson">·</span>
               <a href="tel:469-246-7342" className="flex items-center gap-2 hover:text-tcl-navy transition-colors">
                  <Phone className="w-4 h-4 text-tcl-crimson" /> 469-246-7342
               </a>
            </motion.div>

         </div>
      </section>
   );
};

export default CTA;
