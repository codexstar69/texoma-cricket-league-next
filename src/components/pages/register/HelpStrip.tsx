'use client';
import { motion } from 'framer-motion';
import { Lifebuoy } from '@phosphor-icons/react';

const HelpStrip = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-tcl-off-white py-10 border-t border-tcl-light-gray"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <Lifebuoy weight="bold" size={22} className="text-tcl-crimson shrink-0" />
          <p className="font-source-sans text-[16px] text-tcl-navy">
            <span className="font-semibold">Need help with registration?</span> Reach us at <a href="mailto:info@texomacricket.com" className="text-tcl-crimson hover:underline">info@texomacricket.com</a> or call <a href="tel:469-246-7342" className="text-tcl-crimson hover:underline">469-246-7342</a>.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpStrip;
