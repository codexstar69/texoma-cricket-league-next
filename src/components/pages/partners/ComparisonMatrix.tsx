'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, MinusCircle, HelpCircle, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const tableData = [
  { feature: "Priority tournament registration", founding: "Highest priority", national: "Priority", regional: "Standard priority", dev: "—" },
  { feature: "Eligibility for Regional Qualifiers", founding: true, national: true, regional: true, dev: true },
  { feature: "Eligibility for National Championships", founding: true, national: true, regional: true, dev: "Qualify" },
  { feature: "TCL Academy Partner recognition", founding: "Featured", national: "Listed", regional: "Listed", dev: "Listed" },
  { feature: "Match Recordings / Analytics", founding: true, national: true, regional: "Add-On", dev: "Add-On" },
  { feature: "Advisory input on formats & calendar", founding: true, national: false, regional: false, dev: false },
  { feature: "National rankings & recognition", founding: true, national: true, regional: "Limited", dev: false },
  { feature: "Annual Gala Event", founding: true, national: true, regional: "Limited", dev: false },
  { feature: "Special Group accommodation rates", founding: true, national: true, regional: "Limited", dev: false },
];

const renderCell = (value: string | boolean) => {
  if (value === true) return <CheckCircle2 className="w-5 h-5 text-tcl-green mx-auto" />;
  if (value === false || value === "—") return <MinusCircle className="w-5 h-5 text-tcl-gray-200 mx-auto" />;
  
  // Custom badges
  if (value === "Highest priority" || value === "Featured") return <span className="font-source-sans text-[13px] font-semibold text-tcl-gold">{value}</span>;
  if (value === "Add-On") return <span className="bg-tcl-gold/10 text-tcl-gold-dark rounded-full px-3 py-0.5 font-barlow-condensed font-medium text-[11px] uppercase tracking-wide">Add-On</span>;
  if (value === "Limited") return <span className="bg-tcl-sky/10 text-tcl-sky-dark rounded-full px-3 py-0.5 font-barlow-condensed font-medium text-[11px] uppercase tracking-wide">Limited</span>;
  if (value === "Qualify") return <span className="bg-tcl-green/10 text-tcl-green rounded-full px-3 py-0.5 font-barlow-condensed font-medium text-[11px] uppercase tracking-wide">Qualify</span>;

  return <span className="font-source-sans text-[13px] font-medium text-[#444]">{value}</span>;
};

const ComparisonMatrix = () => {
  

  return (
    <section className="bg-tcl-warm-stone/40 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
         
         {/* Header */}
         <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-[3px] bg-tcl-gold"></div>
               <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-gold">Comparison</span>
            </div>
            <h2 className="font-barlow-condensed font-bold text-[40px] text-tcl-navy uppercase mb-6">Full Comparison Matrix</h2>
            
            {/* Visual Tabs */}
            <div className="flex gap-6 border-b border-tcl-gray-200 pb-1">
               {['Overview', 'Facilities & Training', 'Partner vs Non-Partner'].map((tab, i) => (
                  <span key={i} className={`font-barlow-condensed font-medium text-[14px] uppercase tracking-wide pb-3 border-b-2 ${i === 0 ? 'text-tcl-navy border-tcl-gold' : 'text-[#999] border-transparent'}`}>
                     {tab}
                  </span>
               ))}
            </div>
         </div>

         {/* --- DESKTOP TABLE --- */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block bg-white rounded-2xl border border-tcl-gray-200 shadow-lg overflow-hidden"
         >
            <table className="w-full border-collapse">
               <caption className="sr-only">TCL Academy Partner tier comparison matrix</caption>
               <thead>
                  <tr className="bg-tcl-navy text-white">
                     <th scope="col" className="text-left px-6 py-5 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] w-[40%]">Benefit Feature</th>
                     <th scope="col" className="px-4 py-5 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] border-b-[3px] border-tcl-gold w-[15%]">
                        <div className="flex flex-col items-center gap-1">
                           <span>Founding</span>
                           <Star className="w-3 h-3 fill-tcl-gold text-tcl-gold" />
                        </div>
                     </th>
                     <th scope="col" className="px-4 py-5 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] border-b-[3px] border-tcl-navy-light w-[15%]">National</th>
                     <th scope="col" className="px-4 py-5 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] border-b-[3px] border-tcl-sky w-[15%]">Regional</th>
                     <th scope="col" className="px-4 py-5 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] border-b-[3px] border-tcl-green w-[15%]">Dev</th>
                  </tr>
               </thead>
               <tbody>
                  {tableData.map((row, i) => (
                     <tr key={i} className={`border-b border-tcl-gray-200 last:border-0 hover:bg-tcl-warm-stone/20 transition-colors ${i % 2 !== 0 ? 'bg-[#FAFAF7]' : 'bg-white'}`}>
                        <th scope="row" className="text-left px-6 py-4 font-source-sans font-medium text-[14px] text-[#333]">{row.feature}</th>
                        <td className="px-4 py-4 text-center bg-tcl-gold/[0.03]">{renderCell(row.founding)}</td>
                        <td className="px-4 py-4 text-center">{renderCell(row.national)}</td>
                        <td className="px-4 py-4 text-center">{renderCell(row.regional)}</td>
                        <td className="px-4 py-4 text-center">{renderCell(row.dev)}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </motion.div>

         {/* --- MOBILE CARDS --- */}
         <div className="lg:hidden flex flex-col gap-8">
            {[
               { name: "Founding Partner", color: "border-t-tcl-gold", star: true, dataKey: "founding" },
               { name: "National Partner", color: "border-t-tcl-navy", star: false, dataKey: "national" },
               { name: "Regional Partner", color: "border-t-tcl-sky", star: false, dataKey: "regional" },
               { name: "Development Partner", color: "border-t-tcl-green", star: false, dataKey: "dev" }
            ].map((tier, i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-xl shadow-md border border-tcl-gray-200 border-t-[4px] ${tier.color} overflow-hidden`}
               >
                  <div className="bg-tcl-gray-50 p-4 border-b border-tcl-gray-200 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        {tier.star && <Star className="w-4 h-4 text-tcl-gold fill-tcl-gold" />}
                        <h3 className={`font-barlow-condensed font-bold text-[18px] uppercase ${tier.star ? 'text-tcl-gold-dark' : 'text-tcl-navy'}`}>{tier.name}</h3>
                     </div>
                  </div>
                  <div className="p-4 space-y-3">
                     {tableData.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-[1fr_auto] gap-4 items-center border-b border-tcl-gray-100 last:border-0 pb-2 last:pb-0">
                           <span className="font-source-sans text-[13px] text-[#555]">{row.feature}</span>
                           <div className="scale-90 origin-right">
                              {/* @ts-ignore */}
                              {renderCell(row[tier.dataKey])}
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>
            ))}
         </div>

         {/* Help CTA */}
         <div className="mt-8 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-tcl-gold mt-1" />
            <div>
               <h4 className="font-barlow-condensed font-semibold text-[16px] text-tcl-navy">Need help choosing a tier?</h4>
               <p className="font-source-sans text-[14px] text-[#666] mb-1">Our partnership team can guide you to the right fit.</p>
               <Link href="/contact" className="inline-flex items-center gap-1 font-barlow-condensed font-bold text-[14px] text-tcl-crimson uppercase hover:underline">
                  Contact Us <ArrowRight className="w-3.5 h-3.5" />
               </Link>
            </div>
         </div>

      </div>
    </section>
  );
};

export default ComparisonMatrix;
