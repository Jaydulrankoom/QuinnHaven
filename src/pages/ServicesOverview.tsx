import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PlayCircle, Users } from "lucide-react";
import { SERVICES } from "../data";

export default function ServicesOverview() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream">
      {/* HERO SECTION */}
      <section className="bg-charcoal text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Architectural Design Services</h1>
          <p className="text-xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            From the initial 3D concept to the final white-glove installation, we provide end-to-end luxury renovation services for Connecticut's most demanding homeowners and builders.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((s, idx) => (
               <Link 
                  to={`/services/${s.id}`} 
                  key={s.id}
                  className="group flex flex-col sm:flex-row bg-white border border-charcoal/5 shadow-sm hover:shadow-xl transition-all duration-300"
               >
                  <div className="w-full sm:w-2/5 h-[300px] sm:h-auto overflow-hidden relative">
                     <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10" />
                     <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="w-full sm:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                     <h2 className="text-3xl font-serif text-charcoal mb-4 group-hover:text-gold transition-colors">{s.title}</h2>
                     <p className="font-light text-charcoal/70 mb-8 leading-relaxed line-clamp-3">
                        {Array.isArray(s.pageCopy) ? s.pageCopy[0] : s.desc}
                     </p>
                     <span className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-charcoal group-hover:text-gold transition-colors">
                        Explore Service <ArrowRight className="w-4 h-4" />
                     </span>
                  </div>
               </Link>
            ))}
         </div>
      </section>

      {/* WHY CHOOSE US - TRUST INDICATORS */}
      <section className="py-24 bg-white border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif text-charcoal mb-16">The QuinnHaven Standard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold">
                        <PlayCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal uppercase tracking-widest mb-4">Photorealistic 3D</h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                        Visualize your finished space in stunning high-definition 3D before construction ever begins, eliminating costly revisions and guesswork.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold">
                        <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal uppercase tracking-widest mb-4">Master Artisans</h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                        Our network of installers and builders are vetted masters of their craft, ensuring that our bespoke millwork is fitted to millimeter tolerances.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 text-gold">
                        <MessageSquare className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-charcoal uppercase tracking-widest mb-4">White-Glove Support</h3>
                    <p className="text-charcoal/70 font-light leading-relaxed text-sm">
                        Clear timelines, transparent quoting, and dedicated project managers ensure your luxury renovation is a stress-free experience.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
