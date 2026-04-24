import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Grid3X3, 
  Droplets, 
  Zap, 
  Wrench,
  ShieldCheck,
  Truck,
  Tags,
  Layers,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function BuilderSupply() {
  return (
    <div className="flex flex-col min-h-screen pt-0 bg-cream font-sans text-charcoal">
      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-charcoal flex items-center justify-center text-center pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-charcoal/80 to-[#141162]/40 mix-blend-multiply" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-white mt-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
          >
            QuinnHaven Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6 font-light"
          >
            Builder Supply
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Quality Materials for Every Project.
          </motion.p>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed italic border-l-4 border-gold pl-6 md:pl-8 text-left">
            At QuinnHaven, our Builder Supply service provides high-quality materials and essential construction products for residential and commercial projects. We ensure reliability, durability, and timely supply so your project never stops.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE SUPPLY (Feature Cards) */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Our Inventory</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#141162]">What We Supply</h2>
            <p className="mt-4 text-charcoal/70 font-light max-w-2xl mx-auto text-lg">
              We provide a wide range of premium building materials:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <Building2 className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Structural Materials</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Fundamental building blocks including cement, high-grade steel, sand, and aggregates tailored to engineering specs.
              </p>
            </div>
            
            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <Grid3X3 className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Interior Materials</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Premium surfacing and finishes including curated tiles, solid wood cabinetry, flooring, and decorative trims.
              </p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <Droplets className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Plumbing Supplies</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Complete rough-in and finishing components including commercial pipes, reliable fittings, and luxury fixtures.
              </p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group lg:col-start-1 lg:col-span-1">
              <Zap className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Electrical Materials</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Safe and code-compliant electrical systems, including heavy-duty wiring, modern switches, and breaker panels.
              </p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group md:col-span-2 lg:col-span-1 lg:col-start-2">
              <Wrench className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Hardware & Accessories</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Essential professional accessories covering industrial-grade tools, specialty fasteners, and installation hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (Numbered Timeline) */}
      <section className="py-32 bg-[#141162] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-gold-light text-xs font-bold mb-4 block">The Process</span>
            <h2 className="text-3xl lg:text-4xl font-serif">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative max-w-5xl mx-auto">
            {/* Horizontal Line mapping on Desktop */}
            <div className="hidden md:block absolute top-[1.35rem] left-[12.5%] right-[12.5%] h-px bg-white/20"></div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-serif text-xl mb-6 shadow-xl shrink-0 group-hover:-translate-y-1 transition-transform border border-gold">1</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Requirement Discussion</h4>
              <p className="text-sm font-light text-white/70">Understanding your specific project scale, timeline, and material needs.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">2</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Material Selection</h4>
              <p className="text-sm font-light text-white/70">Expert consultation to choose suitable, durable, and high-quality options.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">3</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Quotation & Approval</h4>
              <p className="text-sm font-light text-white/70">Clear, upfront, and transparent pricing provided before logistics begin.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">4</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Delivery & Supply</h4>
              <p className="text-sm font-light text-white/70">Reliable, accurately scheduled, on-time delivery directly to your site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (List / Block) */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gold/10 -translate-x-6 translate-y-6 rounded-sm -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=2000&auto=format&fit=crop" 
                alt="Stacked construction materials" 
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">The QuinnHaven Advantage</span>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#141162] mb-6">Why Choose Us</h2>
              <p className="text-xl font-light text-charcoal/80 leading-relaxed mb-10 italic">
                We are more than a supplier — we are your project partner.
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <ShieldCheck className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">High-Quality Materials</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Rigorously tested, industry-standard supplies built for longevity.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Truck className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Reliable & On-Time</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Dependable logistics mapping to keep your workforce moving.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Tags className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Competitive Pricing</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Exceptional value and deeply transparent pricing frameworks.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Layers className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Wide Product Range</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Comprehensive inventory serving diverse application needs.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Trusted Sourcing</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">A certified, reliable network for both commercial and residential scopes.</span>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-32 bg-white border-t border-charcoal/5 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#141162] mb-6">Start your project with the right materials.</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-gold text-white px-10 py-5 mt-4 uppercase tracking-widest text-sm font-medium hover:bg-[#141162] hover:text-white transition-all duration-300 shadow-xl"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
