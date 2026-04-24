import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Building, 
  Maximize, 
  Bath, 
  Users, 
  Briefcase,
  Layers,
  Award,
  Network,
  Heart,
  ArrowRight
} from "lucide-react";

export default function MultifamilyProjects() {
  return (
    <div className="flex flex-col min-h-screen pt-0 bg-cream font-sans text-charcoal">
      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-charcoal flex items-center justify-center text-center pt-24">
        {/* High-rise / Modern residential building background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop')" }}
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
            Multifamily Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Smart Design for <span className="italic text-gold-light">Modern Living Spaces.</span>
          </motion.p>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed italic border-l-4 border-gold pl-6 md:pl-8 text-left">
            At QuinnHaven, we specialize in designing and managing multifamily residential projects that combine functionality, aesthetics, and long-term value. From apartments to large residential complexes, we create spaces that people love to live in.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE OFFER (Feature Cards) */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Our Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#141162]">What We Offer</h2>
            <p className="mt-4 text-charcoal/70 font-light max-w-2xl mx-auto text-lg">
              We deliver complete and scalable multifamily solutions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <Building className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Interior Design for Apartments</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Cohesive, premium design packages tailored to individual units, bringing upscale living to multi-unit structures.
              </p>
            </div>
            
            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <Maximize className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Space Optimization Planning</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Strategic layouts that maximize square footage, ensuring every apartment feels expansive, functional, and inviting.
              </p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <Bath className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Modern Kitchen & Bath</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Signature QuinnHaven cabinetry and robust stone integrations designed to withstand tenant wear while looking luxurious.
              </p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group lg:col-start-1 lg:col-span-1">
              <Users className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Common Area Design</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Elegant lobbies, engaging hallways, and high-end amenities that elevate the community and drastically increase property value.
              </p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group md:col-span-2 lg:col-span-1 lg:col-start-2">
              <Briefcase className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Project Coordination</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">
                Full-scale construction management, bridging the gap between architectural plans and on-site implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH (Numbered Timeline) */}
      <section className="py-32 bg-[#141162] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-gold-light text-xs font-bold mb-4 block">The Workflow</span>
            <h2 className="text-3xl lg:text-4xl font-serif">Our Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative max-w-5xl mx-auto">
            {/* Horizontal Line mapping on Desktop */}
            <div className="hidden md:block absolute top-[1.35rem] left-[12.5%] right-[12.5%] h-px bg-white/20"></div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-serif text-xl mb-6 shadow-xl shrink-0 group-hover:-translate-y-1 transition-transform border border-gold">1</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Understanding Requirements</h4>
              <p className="text-sm font-light text-white/70">Deep dive into the specific goals, audience, and budget of both the developer and client.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">2</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Space Planning & Design</h4>
              <p className="text-sm font-light text-white/70">Architecting efficient, modern layouts mapped entirely to maximizing ROI and tenant flow.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">3</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Material & Style Selection</h4>
              <p className="text-sm font-light text-white/70">Curating premium, heavy-traffic finishes, conceptualized specifically for durability.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">4</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Execution & Coordination</h4>
              <p className="text-sm font-light text-white/70">Smooth, meticulously managed project delivery from bulk order processing to final installation.</p>
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
                src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern multifamily luxury interior" 
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">The QuinnHaven Guarantee</span>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#141162] mb-6">Why Choose Us</h2>
              <p className="text-xl font-light text-charcoal/80 leading-relaxed mb-10 italic">
                We bring design, comfort, and efficiency together.
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Building className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Large-Scale Experience</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Proven track record developing sprawling residential and multi-unit projects.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Layers className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Efficient Space Planning</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Architecting highly modern layouts that perfectly balance unit density with tenant demand.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">High-Quality Solutions</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Deploying industry-leading aesthetic upgrades across hundreds of units at commercial scale.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Network className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Strong Coordination</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Flawless alignment between top-level developers, heavy machinery builders, and site investors.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Heart className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Lifestyle Focus</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Designing specifically to improve functionality, well-being, and ultimately, tenant retention.</span>
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
          <h2 className="text-4xl font-serif text-[#141162] mb-6">Let’s build better living communities together.</h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-gold text-white px-10 py-5 mt-4 uppercase tracking-widest text-sm font-medium hover:bg-[#141162] hover:text-white transition-all duration-300 shadow-xl"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
