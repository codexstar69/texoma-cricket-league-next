'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-tcl-warm-stone py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
           initial={{ opacity: 0, scale: 0.96 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="font-barlow-condensed font-bold text-[44px] text-tcl-navy uppercase mb-6"
        >
          Ready To Compete?
        </motion.h2>
        
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="font-source-sans text-lg text-[#555] max-w-[550px] mx-auto leading-[1.6] mb-10"
        >
          Register your team or academy for the upcoming season and secure your place on the national stage.
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
          <Link href="/partners" className="h-14 px-10 border-2 border-tcl-navy text-tcl-navy rounded-full font-barlow-condensed font-semibold text-[15px] uppercase tracking-wide flex items-center gap-2 hover:bg-tcl-navy hover:text-tcl-white transition-all group">
            Become a Partner <Handshake className="w-5 h-5 stroke-[2px] group-hover:stroke-white transition-colors" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
