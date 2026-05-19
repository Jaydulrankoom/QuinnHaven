import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Lightbulb, Globe } from "lucide-react";

export default function MeetOurDesigner() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-charcoal/5">
        <div className="absolute inset-0 bg-white -z-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
          >
            Our Leadership
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#141162] leading-[1.1] mb-8 font-light"
          >
            Meet Our <span className="italic text-gold">Designer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-charcoal/60 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Bringing a refined, global perspective and a meticulous eye for detail to every home in Connecticut.
          </motion.p>
        </div>
      </section>

      {/* 2. MAIN PROFILE */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-white/50 border border-charcoal/5 rounded-sm -z-10 translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img loading="lazy" 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUlsSeS4_s2ZcvEplpSTobkVDhz3a2XRqAQ&s" 
                  alt="Amanda Lai, CEO and Lead Designer" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[4/5] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-10 -right-4 lg:-right-12 bg-white p-8 shadow-xl border border-charcoal/5 hidden md:block max-w-[280px]">
                 <p className="font-serif text-[#141162] text-2xl mb-1">Amanda Lai</p>
                 <p className="text-gold uppercase tracking-widest text-xs font-bold block">Lead Designer & CEO</p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">
                  Background
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#141162] mb-10 leading-[1.2]">A Thoughtful Design Perspective</h2>
              <div className="space-y-6 text-charcoal/80 font-light text-lg leading-relaxed mb-12">
                <p>
                  Amanda Lai brings a thoughtful design perspective shaped by formal education, international experience, and years of hands-on project work. She holds a bachelor’s degree in interior design and built her professional foundation through more than seven years of experience in Shanghai, China, where she worked on numerous high-end residential design projects. Later, through further business studies in Australia, she broadened her perspective by combining design expertise with a deeper understanding of business, client service, and project execution.
                </p>
                <p>
                  Today, Amanda works closely with homeowners, builders, and designers to create kitchens, bathrooms, and interior spaces that feel elevated, practical, and deeply personal. Her approach blends refined design sensibility with real-life functionality—helping clients create homes that not only look beautiful, but support the way they live every day.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-charcoal/10">
                 <div className="flex flex-col gap-4 group">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-charcoal/5 group-hover:border-gold/30 transition-colors">
                     <Globe className="w-5 h-5 text-gold" />
                   </div>
                   <h4 className="font-bold text-[#141162] text-sm uppercase tracking-wider">Global Experience</h4>
                   <p className="text-sm text-charcoal/70 font-light leading-relaxed">Shanghai and Australian background offering an international standard of luxury detail.</p>
                 </div>
                 <div className="flex flex-col gap-4 group">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-charcoal/5 group-hover:border-gold/30 transition-colors">
                     <Lightbulb className="w-5 h-5 text-gold" />
                   </div>
                   <h4 className="font-bold text-[#141162] text-sm uppercase tracking-wider">Practical Elegance</h4>
                   <p className="text-sm text-charcoal/70 font-light leading-relaxed">Marrying refined aesthetics with the ergonomic demands of everyday living.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESIGN PHILOSOPHY QUOTE */}
      <section className="py-32 bg-[#141162] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141162] via-[#141162]/90 to-[#141162]/60"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-8 block">The Philosophy</span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-12 font-serif italic max-w-3xl mx-auto">
            "We believe great design is more than a beautiful finish—it is a thoughtful balance of function, comfort, and the way you truly live. Our goal is to create spaces that feel personal, timeless, and practical, while making the entire process clear, seamless, and deeply rewarding."
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-8 bg-gold"></div>
             <span className="block text-sm font-bold uppercase tracking-widest text-gold text-center">
               Amanda Lai
             </span>
             <div className="h-[1px] w-8 bg-gold"></div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-white py-32 text-center border-t border-charcoal/5">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Take the Next Step</span>
          <h2 className="text-4xl md:text-5xl text-[#141162] font-serif mb-8 leading-tight">Ready to collaborate?</h2>
          <p className="text-charcoal/60 text-lg font-light mb-12 leading-relaxed max-w-xl mx-auto">
            Sit down with Amanda and our design team at our Wallingford studio to map out your dream space. 
            Experience our premium materials firsthand and let us guide your project from vision to reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="inline-block bg-[#141162] text-white px-10 py-5 uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-colors duration-300"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/showroom" 
              className="inline-block bg-white text-[#141162] border border-[#141162]/20 px-10 py-5 uppercase tracking-widest text-sm font-semibold hover:bg-[#141162]/5 transition-colors duration-300"
            >
               Visit Showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

