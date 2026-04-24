import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, PencilRuler, Globe } from "lucide-react";

export default function MeetOurDesigner() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal -z-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 -z-10 mix-blend-luminosity"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
          >
            Vision & Leadership
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-white leading-tight mb-8"
          >
            Meet Our <span className="italic text-gold-light">Designer</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. MAIN PROFILE */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gold/10 -translate-x-6 translate-y-6 rounded-sm -z-10 hidden md:block"></div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUlsSeS4_s2ZcvEplpSTobkVDhz3a2XRqAQ&s" 
                alt="Amanda Lai, CEO and Lead Designer" 
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[4/5] object-cover rounded-sm shadow-xl object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-2xl border border-charcoal/5 hidden md:block max-w-xs">
                 <p className="font-serif text-charcoal text-xl mb-2">Amanda Lai</p>
                 <p className="text-gold uppercase tracking-widest text-xs font-bold">CEO & Lead Designer</p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7 lg:pl-10">
              <h2 className="font-serif text-4xl text-[#141162] mb-8">A Refined, Global Perspective</h2>
              <div className="space-y-6 text-charcoal/70 font-light text-lg leading-relaxed mb-10">
                <p>
                  We believe every house has the potential to become a true sanctuary. To achieve that, we bring an uncompromising, international standard of luxury design right to your doorstep in Connecticut.
                </p>
                <p>
                  As the visionary behind QuinnHaven Design, Amanda Lai honed her aesthetic perspective and exacting technical skills at a top-tier interior design firm in Shanghai. After furthering her architectural education and design sensibilities in Australia, she brought that elite, global expertise to the United States.
                </p>
                <p>
                  Her approach is deeply personal: merging international trends and cutting-edge spatial ergonomics with the warm, lived-in reality of the American home. She doesn't just design kitchens and bathrooms; she creates deeply functional, breathtaking environments tailored to the precise way your family lives.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-charcoal/10">
                 <div className="flex flex-col gap-3">
                   <Globe className="w-6 h-6 text-gold" />
                   <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">Global Influence</h4>
                   <p className="text-sm text-charcoal/60 font-light">Trained in Shanghai and Australia, bringing world-class perspective.</p>
                 </div>
                 <div className="flex flex-col gap-3">
                   <PencilRuler className="w-6 h-6 text-gold" />
                   <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">Ergonomic Focus</h4>
                   <p className="text-sm text-charcoal/60 font-light">Mastery of spatial planning, balancing beauty with extreme utility.</p>
                 </div>
                 <div className="flex flex-col gap-3">
                   <Compass className="w-6 h-6 text-gold" />
                   <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">Local Execution</h4>
                   <p className="text-sm text-charcoal/60 font-light">Delivering white-glove, end-to-end installation right here in CT.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESIGN PHILOSOPHY QUOTE */}
      <section className="py-24 bg-white border-y border-charcoal/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-8 block">The Philosophy</span>
          <p className="text-2xl md:text-3xl font-light text-[#141162] leading-relaxed mb-10 font-serif italic">
            "Our mission is to make premium home renovations a seamless, enjoyable experience. We don't just sell cabinets; we design beautiful, functional spaces where families can create lasting memories."
          </p>
          <span className="block text-sm font-bold uppercase tracking-widest text-gold text-center">
            — Amanda Lai
          </span>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-[#141162] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-6">Ready to collaborate?</h2>
          <p className="text-white/70 text-lg font-light mb-10 leading-relaxed">
            Sit down with our design team at our Wallingford studio to map out your dream space. 
            Experience our premium materials firsthand and let us guide your project from vision to reality.
          </p>
          <Link 
            to="/book-showroom" 
            className="inline-block bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-[#141162] transition-colors"
          >
            Book a Design Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
