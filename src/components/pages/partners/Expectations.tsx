'use client';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const Expectations = () => {
   return (
      <section className="bg-tcl-off-white pb-20 pt-8">
         <div className="max-w-4xl mx-auto px-4">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white rounded-2xl border border-tcl-gray-200 shadow-lg p-8 md:p-10 border-l-[4px] border-l-tcl-navy"
            >
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-[52px] h-[52px] rounded-lg bg-tcl-crimson/10 flex items-center justify-center">
                     <ShieldCheck className="w-7 h-7 text-tcl-navy stroke-[2.5px]" />
                  </div>
                  <h3 className="font-barlow-condensed font-semibold text-[20px] text-tcl-navy uppercase">What We Expect From Academy Partners</h3>
               </div>

               <p className="font-source-sans text-[17px] text-[#444] leading-[1.7]">
                  Academy Partners should conduct themselves in a manner that reflects positively on cricket and supports the broader goal of growing the sport responsibly in the United States.
               </p>
            </motion.div>
         </div>
      </section>
   );
};

export default Expectations;
