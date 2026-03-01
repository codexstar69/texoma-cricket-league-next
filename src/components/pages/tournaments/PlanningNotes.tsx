'use client';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';

const PlanningNotes = () => {
  return (
    <section className="bg-tcl-off-white pb-20 md:pb-24">
       <div className="max-w-4xl mx-auto px-4">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-tcl-warm-stone/40 border-l-[4px] border-l-tcl-gold rounded-xl p-8 shadow-sm"
          >
             <div className="flex items-center gap-3 mb-6">
                <FileText className="w-[22px] h-[22px] text-tcl-gold" />
                <h3 className="font-barlow-condensed font-semibold text-[18px] text-tcl-navy uppercase tracking-wide">Planning Notes for Partners</h3>
             </div>

             <ul className="space-y-3">
                {[
                  "The TCL tournament calendar is released annually to support advance planning",
                  "Final tournament dates are confirmed and published 90–120 days in advance",
                  "Academies may participate in select events or across multiple seasons, based on interest and eligibility",
                  "Tournament entry fees are charged per event, separate from Academy Partner membership"
                ].map((note, i) => (
                   <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                   >
                      <CheckCircle2 className="w-4 h-4 text-tcl-gold mt-1 shrink-0" />
                      <span className="font-source-sans text-[15px] text-[#555] leading-[1.6]">{note}</span>
                   </motion.li>
                ))}
             </ul>
          </motion.div>
       </div>
    </section>
  );
};

export default PlanningNotes;
