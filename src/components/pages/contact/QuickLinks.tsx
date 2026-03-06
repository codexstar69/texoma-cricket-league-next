'use client';
import { motion } from 'framer-motion';
import { Lightning, CalendarBlank, Handshake, Info, TwitterLogo, InstagramLogo, FacebookLogo, YoutubeLogo } from '@phosphor-icons/react';
import Link from 'next/link';

const PAGE_TO_PATH: Record<string, string> = {
   home: '/',
   about: '/about',
   tournaments: '/tournaments',
   partners: '/partners',
   contact: '/contact',
   register: '/register',
};

const QuickLinks = () => {
   return (
      <section className="bg-tcl-warm-stone py-20">
         <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
               <h2 className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase">Looking For Something Specific?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
               {[
                  { icon: Lightning, title: "Programs", page: "home" },
                  { icon: CalendarBlank, title: "Tournaments", page: "tournaments" },
                  { icon: Handshake, title: "Academy Partners", page: "partners" },
                  { icon: Info, title: "About TCL", page: "about" }
               ].map((item, i) => (
                  <Link
                     key={i}
                     href={PAGE_TO_PATH[item.page] || '/'}
                     className="block w-full"
                  >
                     <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="bg-white rounded-xl border border-tcl-light-gray p-5 text-center group hover:border-tcl-crimson transition-all duration-200 shadow-sm hover:shadow-layered"
                     >
                        <div className="w-[52px] h-[52px] mx-auto rounded-xl bg-tcl-navy/10 flex items-center justify-center mb-4 group-hover:bg-tcl-crimson/10 transition-colors">
                           <item.icon weight="bold" size={28} className="text-tcl-crimson" />
                        </div>
                        <span className="font-barlow-condensed font-semibold text-[15px] text-tcl-navy uppercase tracking-wide group-hover:text-tcl-crimson transition-colors">{item.title}</span>
                     </motion.div>
                  </Link>
               ))}
            </div>

            {/* Social Closing */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-center"
            >
               <span className="block font-barlow-condensed font-medium text-[11px] text-[#AAA] uppercase tracking-[0.1em] mb-4">Follow Us</span>
               <div className="flex justify-center gap-6">
                  {[
                     { Icon: TwitterLogo, href: 'https://twitter.com/crickettexoma', label: 'Twitter' },
                     { Icon: InstagramLogo, href: 'https://www.instagram.com/crickettexoma', label: 'Instagram' },
                     { Icon: FacebookLogo, href: 'https://www.facebook.com/crickettexoma', label: 'Facebook' },
                     { Icon: YoutubeLogo, href: 'https://www.youtube.com/@crickettexoma', label: 'YouTube' },
                  ].map(({ Icon, href, label }) => (
                     <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${label}`} className="text-[#999] hover:text-tcl-crimson transition-colors p-2 rounded-full hover:bg-white/50">
                        <Icon weight="bold" size={22} />
                     </a>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default QuickLinks;
