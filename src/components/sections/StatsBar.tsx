'use client';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const StatsBar = () => {
  return (
    <section className="bg-tcl-white py-12 md:py-20 relative z-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {[
            { value: 500, suffix: "+", label: "Young Athletes" },
            { value: 12, suffix: "", label: "States Represented" },
            { value: 48, suffix: "", label: "Tournaments Annually" },
            { value: "6-18", suffix: "", label: "Age Groups", static: true }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center md:border-r last:border-r-0 border-tcl-gray-200 px-4">
              <div className="font-oswald font-bold text-5xl md:text-6xl text-tcl-navy mb-2 tabular-nums">
                {stat.static ? (
                  <span>{stat.value}</span>
                ) : (
                  <AnimatedCounter value={stat.value as number} suffix={stat.suffix} />
                )}
              </div>
              <span className="font-rajdhani font-semibold text-tcl-gray-500 uppercase tracking-wide text-sm">{stat.label}</span>
              <div className="w-8 h-0.5 bg-tcl-gold mt-3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
