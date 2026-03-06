'use client';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Globe, Mail, Phone } from 'lucide-react';

const Location = () => {
   return (
      <section id="location" className="bg-tcl-off-white py-16 md:py-24 relative overflow-hidden border-t border-tcl-light-gray">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
         <div className="absolute inset-0 bg-radial-gradient from-white to-transparent pointer-events-none"></div>

         <div className="max-w-6xl mx-auto px-4 relative z-10">

            <div className="mb-12 text-center md:text-left">
               <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-10 h-[3px] bg-tcl-crimson"></div>
                  <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-navy">Our Location</span>
               </div>
               <h2 className="font-barlow-condensed font-bold text-3xl md:text-[40px] text-tcl-navy uppercase mb-2">Find Us At Sports Texoma</h2>
               <p className="font-source-sans text-[16px] md:text-[17px] text-tcl-navy/70">Our home ground in the heart of the Texoma region</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 md:gap-10">

               {/* Left Column: Map Placeholder */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-2xl border border-tcl-light-gray overflow-hidden bg-[#F2F4F7] group">
                     {/* Topographic pattern simulation */}
                     <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, transparent 20%, #0B2C4D 20%, #0B2C4D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0B2C4D 20%, #0B2C4D 80%, transparent 80%, transparent)', backgroundSize: '20px 20px, 30px 30px', backgroundPosition: '0 0, 15px 15px' }}></div>

                     <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <MapPin className="w-12 h-12 text-tcl-crimson mb-3 fill-tcl-crimson/10" />
                        <span className="font-barlow-condensed font-bold text-[18px] text-tcl-navy uppercase tracking-wide">Sports Texoma</span>
                        <span className="font-source-sans text-[14px] text-tcl-navy/60">Sports Texoma</span>
                     </div>

                     {/* Interactive overlay hint */}
                     <a
                        href="https://maps.google.com/?q=Sports+Texoma,Pottsboro,TX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-white/0 group-hover:bg-white/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300"
                     >
                        <span className="bg-tcl-navy/80 backdrop-blur-md px-4 py-2 rounded-full font-barlow-condensed font-semibold text-white uppercase text-sm border border-tcl-navy/20 shadow-md">Open Map</span>
                     </a>
                  </div>

                  <div className="mt-4 pl-1 text-center md:text-left">
                     <a
                        href="https://maps.google.com/?q=Sports+Texoma,Pottsboro,TX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group"
                     >
                        <Navigation className="w-4 h-4 text-tcl-crimson group-hover:-translate-y-0.5 transition-transform" />
                        <span className="font-barlow-condensed font-medium text-[14px] text-tcl-crimson uppercase group-hover:underline group-hover:text-tcl-crimson-dark transition-colors">Open In Google Maps →</span>
                     </a>
                  </div>
               </motion.div>

               {/* Right Column: Facility Details */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-6"
               >
                  <img
                     src="/contact-hero.png"
                     alt="Sports Texoma Facility Entrance"
                     className="rounded-2xl shadow-xl border border-tcl-light-gray w-full aspect-video object-cover"
                  />

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 }}
                     className="bg-white rounded-xl border border-tcl-light-gray shadow-md p-6"
                  >
                     <div className="space-y-4 divide-y divide-tcl-light-gray">
                        {[
                           { icon: MapPin, label: "LOCATION", value: "Sports Texoma", link: null },
                           { icon: Globe, label: "REGION", value: "Texas & Oklahoma — Texoma Region", link: null },
                           { icon: Mail, label: "EMAIL", value: "info@texomacricket.com", link: "mailto:info@texomacricket.com" },
                           { icon: Phone, label: "PHONE", value: "469-246-7342", link: "tel:4692467342" }
                        ].map((item, i) => (
                           <div key={i} className={`flex items-start gap-4 ${i > 0 ? 'pt-4' : ''}`}>
                              <item.icon className="w-[22px] h-[22px] text-tcl-crimson shrink-0 mt-0.5" />
                              <div>
                                 <span className="block font-barlow-condensed font-medium text-[11px] text-tcl-navy uppercase tracking-widest mb-1">{item.label}</span>
                                 {item.link ? (
                                    <a href={item.link} className="block font-source-sans font-medium text-[15px] text-tcl-navy hover:text-tcl-crimson transition-colors break-all">{item.value}</a>
                                 ) : (
                                    <span className="block font-source-sans font-medium text-[15px] text-tcl-navy">{item.value}</span>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default Location;
