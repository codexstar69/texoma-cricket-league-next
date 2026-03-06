'use client';
import { MapPin } from 'lucide-react';

const Facility = () => {
  return (
    <section className="bg-tcl-gray-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Left Text */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-1 bg-tcl-crimson"></div>
            <span className="font-rajdhani font-bold text-tcl-navy uppercase tracking-widest text-sm">Our Home</span>
          </div>
          <h2 className="font-oswald font-bold text-4xl text-tcl-navy mb-2">Sports Texoma</h2>
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-tcl-crimson" />
            <span className="font-rajdhani font-semibold text-tcl-gray-700">Sports Texoma</span>
          </div>

          <p className="font-roboto text-tcl-gray-700 mb-8 leading-relaxed">
            Our headquarters and primary facility sits at the heart of the Texoma region, serving the cross-state athletic community of Texas and Oklahoma. Purpose-built for cricket with professional-grade turf pitches, indoor training nets, and spectator facilities.
          </p>

          <div className="aspect-video rounded-xl overflow-hidden mb-2 border-2 border-tcl-navy/15 shadow-md">
            <iframe
              title="Sports Texoma Location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Texas,USA&zoom=6"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://www.google.com/maps/search/Sports+Texoma" target="_blank" rel="noopener noreferrer" className="text-tcl-crimson font-rajdhani font-bold text-sm hover:underline">Get Directions →</a>
        </div>

        {/* Right Image */}
        <div className="flex flex-col gap-8">
          <div className="relative transform rotate-1">
            <img
              src="/about-facility.png"
              alt="Sports Texoma Exterior"
              className="rounded-xl shadow-xl w-full aspect-[4/5] object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}
            />
          </div>
        </div>
      </div>

      {/* Vision Mission Band */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="bg-tcl-white border border-tcl-light-gray rounded-xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 md:divide-x divide-tcl-light-gray">
          <div className="md:pr-8">
            <span className="font-rajdhani font-bold text-tcl-crimson uppercase text-xs tracking-wider block mb-2">Our Vision</span>
            <p className="font-montserrat font-semibold italic text-tcl-navy text-lg md:text-xl">To build a unified national pathway that connects grassroots participation to elite competition.</p>
          </div>
          <div className="md:pl-8">
            <span className="font-rajdhani font-bold text-tcl-crimson uppercase text-xs tracking-wider block mb-2">Our Mission</span>
            <p className="font-montserrat font-semibold italic text-tcl-navy text-lg md:text-xl">To unite cricket teams across the US through a respected tournament platform with high professional standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
