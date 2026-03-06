'use client';
import { motion } from 'framer-motion';
import { Target, Users, Megaphone, Flag, MapPin, Compass } from 'lucide-react';

const Facility = () => {
  return (
    <section className="bg-tcl-off-white py-20 md:py-32 relative overflow-hidden border-t border-tcl-light-gray">
      {/* Bg Image */}
      <div className="absolute inset-0 opacity-[0.05]">
        <img
          src="/about-facility.png"
          alt="Texoma Landscape"
          className="w-full h-full object-cover grayscale mix-blend-multiply"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-[55%_45%] gap-16 items-center">

        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[3px] bg-tcl-crimson"></div>
            <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-navy">Our Home</span>
          </div>
          <h2 className="font-barlow-condensed font-bold text-5xl text-tcl-navy uppercase mb-4">Sports Texoma</h2>
          <p className="font-source-sans text-lg text-tcl-navy/80 max-w-[600px] mb-8 leading-[1.6]">
            At the heart of TCL is Sports Texoma, the home venue where we anchor national championships at a centralized, purpose-built facility.
          </p>
          <p className="font-source-sans text-[17px] text-tcl-navy/85 leading-[1.7] mb-10">
            Sports Texoma is a regional sports complex platform rooted in the Texoma Region, spanning communities across Texas and Oklahoma.
          </p>

          <div className="space-y-5 mb-10">
            {[
              { icon: Target, text: "Create inclusive, competitive sporting opportunities" },
              { icon: Users, text: "Support local teams and leagues" },
              { icon: Megaphone, text: "Amplify underrepresented sports" },
              { icon: Flag, text: "Build regional pride through athletics" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 pl-4 border-l-2 border-tcl-crimson">
                <item.icon className="w-6 h-6 text-tcl-crimson stroke-[2.5px]" />
                <span className="font-source-sans text-[16px] font-medium text-tcl-navy">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-tcl-light-gray p-5 shadow-sm">
              <MapPin className="w-7 h-7 text-tcl-crimson mb-3 stroke-[2.5px]" />
              <span className="block font-barlow-condensed font-medium text-xs text-tcl-navy uppercase tracking-widest mb-1">Location</span>
              <span className="block font-source-sans text-[16px] font-semibold text-tcl-navy mb-0.5">Sports Texoma</span>
            </div>
            <div className="bg-white rounded-xl border border-tcl-light-gray p-5 shadow-sm">
              <Compass className="w-7 h-7 text-tcl-crimson mb-3 stroke-[2.5px]" />
              <span className="block font-barlow-condensed font-medium text-xs text-tcl-navy uppercase tracking-widest mb-1">Region</span>
              <span className="block font-source-sans text-[16px] font-semibold text-tcl-navy mb-0.5">Texas & Oklahoma</span>
              <span className="block font-source-sans text-[13px] text-tcl-navy/60">Cross-state community</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/about-facility.png"
            alt="Sports Texoma Facility"
            className="rounded-2xl border border-tcl-light-gray shadow-xl"
          />
          <div className="absolute bottom-6 right-6 bg-tcl-crimson rounded-lg px-4 py-2 shadow-lg">
            <span className="font-barlow-condensed font-semibold text-sm text-white">Est. 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facility;
