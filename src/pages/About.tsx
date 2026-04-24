import { Link } from "react-router-dom";
import { BRAND } from "../data";
import { MapPin, Phone, Mail, CheckCircle2, Globe, Wrench, LayoutTemplate } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-0 bg-cream font-sans text-charcoal">
       
      {/* 1. HERO - Cinematic & Dramatic */}
      <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden bg-charcoal flex items-center justify-center text-center pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop')" }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#141162]/90 via-charcoal/80 to-[#141162]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-transparent opacity-80" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-white mt-12">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Rooted in Design, Driven by Passion</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8 font-light">
            Bringing your <span className="italic text-gold-light">dream home</span> to life.
          </h1>
          <p className="text-xl font-light text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            We are more than just a design company—we are your dedicated partners. Located in Wallingford, CT, we are a premier one-stop destination for high-quality cabinetry, expert space planning, and professional installation.
          </p>
          <Link 
            to="/showroom" 
            className="inline-block bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-charcoal transition-all duration-300 shadow-xl"
          >
            Visit Our Showroom
          </Link>
        </div>
      </section>

      {/* 2. THE MISSION & QUOTE */}
      <section className="py-24 bg-cream relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <p className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed mb-12 italic border-l-4 border-gold pl-6 md:pl-8 text-left">
             "Our mission is to make premium home renovations a seamless, enjoyable experience. We don't just sell cabinets; we design beautiful, functional spaces where families can create lasting memories."
             <span className="block mt-6 text-sm font-bold uppercase tracking-widest text-gold not-italic">— Amanda Lai, CEO QuinnHaven Design</span>
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-16">
              <div className="flex items-start gap-3 bg-white p-6 border border-charcoal/5 shadow-sm">
                 <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                 <span className="font-medium text-charcoal tracking-wide">Custom Kitchen & Bath Design</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-6 border border-charcoal/5 shadow-sm">
                 <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                 <span className="font-medium text-charcoal tracking-wide">Closets, Offices & Entertainment Units</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-6 border border-charcoal/5 shadow-sm">
                 <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                 <span className="font-medium text-charcoal tracking-wide">3D Visualization & Space Planning</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-6 border border-charcoal/5 shadow-sm">
                 <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                 <span className="font-medium text-charcoal tracking-wide">Full Project Management & Install</span>
              </div>
           </div>
        </div>
      </section>

      {/* 3. OUR STORY & EVOLUTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-charcoal/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
           <div className="order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-gold/10 -translate-x-4 translate-y-4 rounded-sm -z-10" />
             <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
               alt="QuinnHaven Design Team at work" 
               referrerPolicy="no-referrer"
               className="w-full aspect-square object-cover rounded-sm shadow-xl"
             />
           </div>
           <div className="order-1 md:order-2">
              <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Our Origin Story</span>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#141162] mb-6">Built on Uncompromising Quality</h2>
              <p className="font-light text-charcoal/70 leading-relaxed text-lg mb-6">
                QuinnHaven Design was founded with a singular, driving vision: to make high-end home renovations an integrated, joyful experience rather than a stressful ordeal. We saw a gap in the market for a truly one-stop design studio that didn't just sell components, but engineered complete lifestyles.
              </p>
              <p className="font-light text-charcoal/70 leading-relaxed text-lg mb-6">
                What began as a passionate pursuit of perfection in kitchen and bath cabinetry quickly evolved. As our clients' needs grew, so did our capabilities. Today, QuinnHaven encompasses a fully licensed contracting and installation team, capable of managing large-scale, complex remodels entirely in-house.
              </p>
              <p className="font-light text-charcoal/70 leading-relaxed text-lg">
                By maintaining strict control over our materials—sourcing beautiful, durable solid birch craftsmanship and premium stonework—we ensure that every transformation looks breathtaking and is built to stand the test of time.
              </p>
           </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (The Difference) */}
      <section className="py-24 bg-white border-y border-charcoal/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">The Difference</span>
               <h2 className="text-3xl lg:text-4xl font-serif text-[#141162]">Why Choose QuinnHaven</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Tailored */}
               <div className="bg-cream border border-charcoal/5 p-10 hover:border-gold transition-colors shadow-sm">
                  <LayoutTemplate className="w-10 h-10 text-gold mb-6" />
                  <h4 className="text-xl font-serif mb-4 text-charcoal">Tailored to Your Needs</h4>
                  <p className="text-sm font-light text-charcoal/70 leading-relaxed">
                    You won’t find any cookie-cutter solutions here. We focus on how you actually live. We use expert space planning and highly detailed 3D renderings so you can perfect your highly functional layout before production even begins.
                  </p>
               </div>
               
               {/* Craftsmanship */}
               <div className="bg-cream border border-charcoal/5 p-10 hover:border-gold transition-colors shadow-sm">
                  <Wrench className="w-10 h-10 text-gold mb-6" />
                  <h4 className="text-xl font-serif mb-4 text-charcoal">High-Quality Craftsmanship</h4>
                  <p className="text-sm font-light text-charcoal/70 leading-relaxed">
                    We believe in building spaces that last. Our cabinetry features solid birch wood doors, full cabinet-grade plywood boxes, and dovetail drawers, all backed by a 3 to 5-year warranty. We securely pair this with exquisite countertops and hardware.
                  </p>
               </div>

               {/* Process */}
               <div className="bg-cream border border-charcoal/5 p-10 hover:border-gold transition-colors shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-gold mb-6" />
                  <h4 className="text-xl font-serif mb-4 text-charcoal">Seamless Project Process</h4>
                  <p className="text-sm font-light text-charcoal/70 leading-relaxed">
                    Renovating shouldn't be a headache. We act as your dedicated project manager every step of the way. From precise on-site measurements to fast delivery and flawless professional installation, we offer a true one-stop experience.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. LOCAL ROOTS & SHOWROOM EXPERIENCE */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-cream">
         <div className="bg-white shadow-xl flex flex-col md:flex-row overflow-hidden rounded-sm border border-charcoal/5">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
               <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Our Home Base</span>
               <h2 className="text-3xl font-serif text-[#141162] mb-6">Rooted in Connecticut</h2>
               <p className="font-light text-charcoal/70 mb-6 leading-relaxed">
                 By pairing a vast selection of premium materials with advanced 3D technology and a stress-free installation process, we deliver exceptional value and total peace of mind for homeowners, contractors, and investors alike across CT.
               </p>
               <p className="font-light text-charcoal/70 mb-8 leading-relaxed">
                 We invite you to step away from the digital screens and visit our Wallingford design studio. Run your hands over the solid birch wood elements, examine the premium materials, and sit down with us over a cup of coffee to map out your dream space.
               </p>
               
               <div className="space-y-4 border-t border-charcoal/10 pt-6">
                  <div className="flex items-center gap-3 text-charcoal text-sm font-medium">
                     <MapPin className="w-5 h-5 text-gold" />
                     <span>121 N Plains Industrial Road, Unit C, Wallingford, CT</span>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
               <img 
                 src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" 
                 alt="Designer showroom display with birch elements" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover"
               />
            </div>
         </div>
      </section>

      {/* 6. SOFT CTA */}
      <section className="py-24 bg-white border-t border-charcoal/5 text-center">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-[#141162] mb-6">Let's talk about your space.</h2>
            <p className="text-lg font-light text-charcoal/70 mb-10">
               If you're ready to sit back and watch your vision come to life, we’d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="font-medium">{BRAND.phone}</span>
               </a>
               <span className="hidden sm:block text-charcoal/20">|</span>
               <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="font-medium">{BRAND.email}</span>
               </a>
            </div>
         </div>
      </section>

    </div>
  );
}
