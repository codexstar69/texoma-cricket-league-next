'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, MinusCircle } from 'lucide-react';

const tiers = [
   {
      name: "Founding Partner",
      price: "$2,500",
      color: "border-t-tcl-crimson",
      badge: "Most Popular",
      badgeColor: "bg-tcl-crimson text-white",
      features: [
         "Highest priority registration",
         "Featured recognition",
         "Match recordings included",
         "Advisory input on formats",
         "Annual Gala Event access"
      ],
      cta: { text: "Select Tier", style: "bg-tcl-crimson text-white hover:bg-tcl-crimson-dark" },
      footer: "Includes Founding Partner benefits",
      featured: true
   },
   {
      name: "National Partner",
      price: "$1,800",
      color: "border-t-tcl-navy",
      features: [
         "Priority registration",
         "Listed recognition",
         "Match recordings included",
         "National rankings",
         "Gala Event (limited)"
      ],
      cta: { text: "Select Tier", style: "border-2 border-tcl-navy text-tcl-navy hover:bg-tcl-navy hover:text-white" },
      footer: "Includes National Partner benefits"
   },
   {
      name: "Regional Partner",
      price: "$1,200",
      color: "border-t-tcl-sky",
      features: [
         "Standard priority registration",
         "Listed recognition",
         "Match recordings (add-on)",
         "Qualify for nationals",
         "Limited gala access"
      ],
      cta: { text: "Select Tier", style: "border-2 border-tcl-navy text-tcl-navy hover:bg-tcl-navy hover:text-white" },
      footer: "Includes Regional Partner benefits"
   },
   {
      name: "Development Partner",
      price: "$600",
      color: "border-t-tcl-green",
      badge: "Entry Level",
      badgeColor: "bg-tcl-green text-white",
      features: [
         "Tournament access",
         "Listed recognition",
         "Match recordings (add-on)",
         "Development pathway",
         { text: "Not included", excluded: true }
      ],
      cta: { text: "Select Tier", style: "border-2 border-tcl-navy text-tcl-navy hover:bg-tcl-navy hover:text-white" },
      footer: "Includes Development Partner benefits"
   }
];

const Pricing = () => {
   // Hidden per user request
   return null;

   return (
      <section id="pricing" className="bg-tcl-off-white py-28 md:py-32 relative">
         {/* Divider */}
         <div className="absolute top-0 left-0 w-full h-16 bg-tcl-navy" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
         <div className="absolute top-[62px] left-0 w-full h-[2px] bg-tcl-crimson transform -rotate-[0.5deg] origin-top-left hidden"></div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <span className="font-barlow-condensed font-medium text-[13px] text-tcl-navy uppercase tracking-widest block mb-2">Membership</span>
               <h2 className="font-barlow-condensed font-bold text-[48px] text-tcl-navy uppercase mb-4">Choose Your Legacy</h2>
               <p className="font-source-sans text-[18px] text-[#555]">Select the partnership tier that aligns with your academy&apos;s ambition.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
               {tiers.map((tier, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className={`bg-white rounded-2xl border border-tcl-gray-200 shadow-lg p-7 flex flex-col relative
                     border-t-[4px] ${tier.color}
                     ${tier.featured ? 'lg:scale-[1.03] shadow-xl z-10' : 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300'}
                  `}
                  >
                     {tier.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                           <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + (i * 0.1) }}
                              className={`${tier.badgeColor} font-barlow-condensed font-semibold text-[12px] uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap`}
                           >
                              {tier.badge}
                           </motion.div>
                        </div>
                     )}

                     <div className="text-center mb-6 pt-2">
                        <h3 className="font-barlow-condensed font-bold text-[22px] text-tcl-navy uppercase mb-1">{tier.name}</h3>
                        <div className="flex items-baseline justify-center gap-1">
                           <span className="font-barlow font-bold text-[40px] text-tcl-navy">{tier.price}</span>
                           <span className="font-source-sans text-[15px] text-[#999] font-normal">/ year</span>
                        </div>
                     </div>

                     <div className="w-full h-[1px] bg-tcl-gray-100 mb-6"></div>

                     <ul className="space-y-3 mb-8 flex-1">
                        {tier.features.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-3">
                              {typeof feature === 'string' ? (
                                 <>
                                    <CheckCircle2 className="w-5 h-5 text-tcl-green shrink-0" />
                                    <span className="font-source-sans text-[15px] text-[#444] leading-snug">{feature}</span>
                                 </>
                              ) : (
                                 <>
                                    <MinusCircle className="w-5 h-5 text-tcl-gray-300 shrink-0" />
                                    <span className="font-source-sans text-[15px] text-[#AAA] leading-snug italic">{feature.text}</span>
                                 </>
                              )}
                           </li>
                        ))}
                     </ul>

                     <button className={`w-full h-12 rounded-xl font-barlow-condensed font-semibold text-[14px] uppercase tracking-wide transition-all ${tier.cta.style}`}>
                        {tier.cta.text}
                     </button>

                     <div className="text-center mt-4">
                        <span className="font-source-sans text-[12px] text-[#999] italic">{tier.footer}</span>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Pricing;
