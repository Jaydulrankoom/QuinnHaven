import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MapPin, ChevronRight, PencilRuler, Wrench } from "lucide-react";
import { LOCATIONS } from "../data";

export default function LocationsMegaMenu({ onLinkClick }: { onLinkClick: () => void }) {
  // Let active location default to the first one in the list
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0]);

  const designServices = [
    "Kitchen Design",
    "Custom Cabinets Design",
    "Closet Design",
    "Home Office Design",
    "Entryway Storage Design"
  ];

  const renovationServices = [
    "Bathroom Remodeling",
    "Kitchen Remodeling",
    "Basement Bar Remodeling",
    "Home Office Remodeling",
    "Entryway Storage Remodeling"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] xl:w-[900px] bg-white border border-charcoal/5 shadow-2xl rounded-sm overflow-hidden flex cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Left Panel: Locations List */}
      <div className="w-[35%] bg-cream/70 border-r border-charcoal/5 py-8 px-6 flex flex-col gap-1">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50 mb-4 px-4">Our Locations</h3>
        {LOCATIONS.filter(loc => loc.id !== 'connecticut').map((loc) => {
          // Append ", CT" if it's not already in the name to match the prompt specifications
          const locName = loc.name.endsWith("CT") ? loc.name : `${loc.name}, CT`;

          return (
            <button
              key={loc.id}
              onMouseEnter={() => setActiveLocation(loc)}
              className={`text-left px-4 py-3 rounded-sm text-sm transition-all flex items-center justify-between group ${
                activeLocation.id === loc.id 
                  ? "bg-white shadow-sm text-gold font-medium border border-charcoal/5" 
                  : "text-charcoal hover:bg-white/60 hover:text-gold border border-transparent"
              }`}
            >
              <span className="flex items-center gap-3">
                <MapPin className={`w-4 h-4 ${activeLocation.id === loc.id ? "text-gold" : "text-charcoal/30 group-hover:text-gold/60"}`} />
                {locName}
              </span>
              <ChevronRight className={`w-3 h-3 transition-opacity ${activeLocation.id === loc.id ? "opacity-100 text-gold" : "opacity-0 group-hover:opacity-50"}`} />
            </button>
          );
        })}
      </div>

      {/* Right Panel: Services */}
      <div className="w-[65%] p-10 bg-white relative">
        <div className="flex items-center gap-3 border-b border-charcoal/5 pb-5 mb-8">
          <MapPin className="w-5 h-5 text-gold" />
          <h3 className="text-xl xl:text-2xl font-serif text-[#141162]">
            Services in {activeLocation.name.endsWith("CT") ? activeLocation.name : `${activeLocation.name}, CT`}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 gap-10">
          {/* Design Category */}
          <div>
            <span className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-5">
              <PencilRuler className="w-4 h-4" /> Design
            </span>
            <ul className="space-y-4">
              {designServices.map((service, idx) => {
                const locationSuffix = activeLocation.name.endsWith("CT") ? activeLocation.name : `${activeLocation.name}, CT`;
                const fullService = `${service} ${locationSuffix}`;
                const slug = fullService.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                
                return (
                  <li key={idx}>
                    <Link 
                      to={`/services/${slug}`} 
                      onClick={onLinkClick}
                      className="text-sm font-light text-charcoal/80 hover:text-gold transition-colors block leading-snug group"
                    >
                      <span className="relative inline-block pb-0.5 overflow-hidden">
                        {service}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Renovation Category */}
          <div>
             <span className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-5">
              <Wrench className="w-4 h-4" /> Renovation
            </span>
            <ul className="space-y-4">
              {renovationServices.map((service, idx) => {
                const locationSuffix = activeLocation.name.endsWith("CT") ? activeLocation.name : `${activeLocation.name}, CT`;
                const fullService = `${service} ${locationSuffix}`;
                const slug = fullService.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                
                return (
                  <li key={idx}>
                     <Link 
                      to={`/services/${slug}`} 
                      onClick={onLinkClick}
                      className="text-sm font-light text-charcoal/80 hover:text-gold transition-colors block leading-snug group"
                    >
                      <span className="relative inline-block pb-0.5 overflow-hidden">
                        {service}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
