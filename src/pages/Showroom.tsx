import { MapPin, Clock, Phone, Mail, Coffee, Layers, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "../data";

export default function Showroom() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-charcoal">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-charcoal">
          <img 
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
            alt="QuinnHaven Design Showroom" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Design Studio</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Experience It In Person</h1>
          <p className="text-lg md:text-xl font-light text-white/80">
            Digital screens cannot convey the authentic touch of solid hardwoods, the structural weight of heavy European hinges, or the true veining of natural stone.
          </p>
        </div>
      </section>

      {/* WHY VISIT SECTION */}
      <section className="py-24 bg-white border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#141162] mb-6">Step Off the Screen</h2>
            <p className="text-charcoal/70 font-light max-w-2xl mx-auto text-lg">
              A luxury renovation requires tactile confirmation. Visit our Wallingford showroom to explore our curated libraries of cabinetry, stone, and architectural hardware.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-cream border border-charcoal/5 text-center group hover:border-gold transition-colors duration-300">
              <Layers className="w-10 h-10 text-gold mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-[#141162] mb-4">Tactile Materials</h3>
              <p className="font-light text-charcoal/70 text-sm leading-relaxed">
                Run your hands over painted and stained finishes. Examine the thickness of our solid wood dovetail drawers and test the silent precision of our soft-close mechanisms.
              </p>
            </div>
            <div className="p-8 bg-cream border border-charcoal/5 text-center group hover:border-gold transition-colors duration-300">
              <Coffee className="w-10 h-10 text-gold mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-[#141162] mb-4">Private Consultation</h3>
              <p className="font-light text-charcoal/70 text-sm leading-relaxed">
                Sit down with a senior design architect over a cup of coffee. We will review your blueprints, discuss your lifestyle needs, and map out an initial vision.
              </p>
            </div>
            <div className="p-8 bg-cream border border-charcoal/5 text-center group hover:border-gold transition-colors duration-300">
              <Ruler className="w-10 h-10 text-gold mx-auto mb-6" />
              <h3 className="font-serif text-2xl text-[#141162] mb-4">3D Spatial Planning</h3>
              <p className="font-light text-charcoal/70 text-sm leading-relaxed">
                Experience your new space before construction begins. We use our showroom's presentation displays to guide you through photorealistic 3D renderings of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & INFO SECTION */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image/Map Side */}
            <div className="relative h-[500px] bg-white border border-charcoal/5 p-4 shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                 alt="Showroom Location" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover"
               />
               <div className="absolute -bottom-8 -right-8 bg-[#141162] text-white p-8 shadow-2xl hidden md:block">
                  <span className="font-serif text-3xl block mb-2 text-gold">Ready?</span>
                  <p className="font-light text-sm tracking-widest uppercase">Walk-ins Welcome</p>
               </div>
            </div>

            {/* Info Side */}
            <div className="lg:pl-10">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Visit Us</span>
              <h2 className="font-serif text-4xl text-[#141162] mb-10">Showroom Details</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-charcoal/50">Address</h4>
                    <p className="text-lg text-[#141162] font-semibold">{BRAND.address}</p>
                    <a href="https://maps.app.goo.gl/7EudUhLDBgbzo6B46" target="_blank" rel="noopener noreferrer" className="text-gold text-sm font-bold tracking-widest uppercase hover:text-[#141162] transition-colors mt-2 inline-block">
                      Get Directions & Reviews →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-charcoal/50">Hours of Operation</h4>
                    <ul className="text-charcoal/80 space-y-1">
                      <li className="flex justify-between w-48"><span className="font-semibold">Monday - Friday</span> <span>9:00 AM - 5:00 PM</span></li>
                      <li className="flex justify-between w-48"><span className="font-semibold">Saturday</span> <span>10:00 AM - 3:00 PM</span></li>
                      <li className="flex justify-between w-48"><span className="font-semibold text-charcoal/50">Sunday</span> <span className="font-light italic text-charcoal/50">Closed</span></li>
                    </ul>
                    <p className="text-xs text-charcoal/50 mt-2 font-light italic">* Evening appointments available upon request.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-charcoal/50">Direct Line</h4>
                    <p className="text-lg text-[#141162] font-semibold">{BRAND.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-charcoal/50">Email inquiries</h4>
                    <p className="text-lg text-[#141162] font-semibold">{BRAND.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-showroom" className="bg-[#141162] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors text-center">
                  Book VIP Consultation
                </Link>
                <a href={`tel:${BRAND.phone}`} className="border border-[#141162] hover:bg-[#141162] hover:text-white text-[#141162] px-8 py-4 uppercase tracking-widest text-xs font-bold transition-colors text-center">
                  Call Studio
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID ROW */}
      <section className="grid grid-cols-2 md:grid-cols-4 bg-white border-t border-charcoal/5">
         <div className="aspect-square bg-charcoal relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069" alt="Hardware Sample" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
              <span className="text-white font-serif text-xl">Premium Hardware</span>
            </div>
         </div>
         <div className="aspect-square bg-charcoal relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1595514690025-a13a44d038fa?q=80&w=2070" alt="Cabinetry Mockup" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
              <span className="text-white font-serif text-xl">Custom Cabinetry</span>
            </div>
         </div>
         <div className="aspect-square bg-charcoal relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1574635606612-581d4516be1a?q=80&w=2070" alt="Stone Samples" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
              <span className="text-white font-serif text-xl">Stone & Quartz</span>
            </div>
         </div>
         <div className="aspect-square bg-charcoal relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2074" alt="Tile Textures" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-6">
              <span className="text-white font-serif text-xl">Tile Finishes</span>
            </div>
         </div>
      </section>

    </div>
  );
}
