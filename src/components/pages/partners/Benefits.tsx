'use client';
import { motion } from 'framer-motion';
import { CalendarCheck, Trophy, Scale, LineChart, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Benefits = () => {

  return (
    <section className="bg-tcl-off-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
           <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-[3px] bg-tcl-gold"></div>
             <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-gold">Partnership Benefits</span>
           </div>
           <h2 className="font-barlow-condensed font-bold text-3xl md:text-[44px] text-tcl-navy uppercase mb-4 leading-tight">What It Means To Be A<br/>TCL Partner</h2>
           <p className="font-source-sans text-lg md:text-[18px] text-[#555] max-w-[620px] leading-relaxed">
             As a TCL Academy Partner, your academy becomes part of a national ecosystem built around competition, credibility, and progression.
           </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
           
           {/* Featured Card */}
           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-tcl-navy rounded-2xl shadow-xl overflow-hidden p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-tcl-navy-light relative text-center md:text-left"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-tcl-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                 <CalendarCheck className="w-10 h-10 text-tcl-gold stroke-[1.5px]" />
              </div>
              <div className="flex-1 relative z-10">
                 <h3 className="font-barlow-condensed font-semibold text-2xl md:text-[26px] text-white uppercase mb-2">Priority Tournament Entry</h3>
                 <p className="font-source-sans text-[16px] md:text-[17px] text-white/80 leading-relaxed">
                    First access to all TCL regional tournaments and qualifiers. Secure your spot in high-demand events before they open to the public.
                 </p>
              </div>
           </motion.div>

           {/* Standard Cards */}
           {[
             { icon: Trophy, title: "National Championships", desc: "Clear eligibility pathways to TCL championship events." },
             { icon: Scale, title: "Competition Standards", desc: "Consistent rules, formats, and professional officiating." },
             { icon: LineChart, title: "National Visibility", desc: "Results, rankings, and recognition across platforms." },
             { icon: MessageCircle, title: "Direct Communication", desc: "Access to TCL tournament leadership and support." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 + (i * 0.1) }}
               whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
               className="bg-white rounded-2xl border border-tcl-gray-200 shadow-md p-8 group transition-all duration-300"
             >
                <div className="w-14 h-14 rounded-xl bg-tcl-navy/5 flex items-center justify-center mb-6 group-hover:bg-tcl-gold/10 transition-colors">
                   <item.icon className="w-8 h-8 text-tcl-navy stroke-[2px] group-hover:text-tcl-gold transition-colors" />
                </div>
                <h3 className="font-barlow-condensed font-semibold text-[20px] text-tcl-navy uppercase mb-3">{item.title}</h3>
                <p className="font-source-sans text-[15px] text-[#666] leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>

        <div className="text-left">
           <Link href="/register" className="inline-flex items-center gap-2 font-barlow-condensed font-semibold text-[15px] text-tcl-crimson uppercase tracking-wide hover:underline decoration-2 underline-offset-4">
              Become a Partner <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
