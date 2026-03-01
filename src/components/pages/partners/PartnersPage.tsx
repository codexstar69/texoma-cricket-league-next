'use client';
import { motion } from 'framer-motion';

const PartnersPage = () => {
  return (
    <div className="bg-tcl-off-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-tcl-navy pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial-navy opacity-80" />
        <div className="absolute inset-0 bg-stripe-pattern opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-tcl-gold"></div>
              <span className="font-barlow-condensed font-bold text-tcl-gold uppercase tracking-[0.2em] text-sm">
                Partnerships
              </span>
              <div className="w-12 h-0.5 bg-tcl-gold"></div>
            </div>

            <h1 className="font-barlow-condensed font-bold text-5xl md:text-7xl text-white uppercase mb-6">
              Partner Programs Coming Soon
            </h1>

            <p className="font-source-sans text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We're building exciting partnership opportunities for academies and organizations across the country. Check back soon for details on how to join the Cricket Texoma network.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
