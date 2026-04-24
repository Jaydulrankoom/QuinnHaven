import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  CalendarClock, 
  CircleDollarSign, 
  Users, 
  ShieldCheck, 
  MessageSquare,
  UserCheck,
  CheckCircle2,
  Clock,
  LayoutTemplate,
  ArrowRight
} from "lucide-react";

export default function ProjectManagement() {
  return (
    <div className="flex flex-col min-h-screen pt-0 bg-cream font-sans text-charcoal">
      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-charcoal flex items-center justify-center text-center pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop')" }}
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
            Project Management
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            Seamless Execution. <span className="italic text-gold-light">From Concept to Completion.</span>
          </motion.p>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed italic border-l-4 border-gold pl-6 md:pl-8 text-left">
            At QuinnHaven, our Project Management service ensures every detail of your project is handled with precision, transparency, and care. From initial planning to final handover, we coordinate every phase so you can enjoy a stress-free experience and exceptional results.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE DO (Feature Cards) */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Expertise</span>
            <h2 className="text-3xl lg:text-4xl font-serif text-[#141162]">What We Do</h2>
            <p className="mt-4 text-charcoal/70 font-light max-w-2xl mx-auto text-lg hover:text-gold transition-colors">
              We manage your project end-to-end with a strong focus on quality, timeline, and budget control:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <CalendarClock className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Planning & Scheduling</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">Structured timelines to ensure smooth execution and keep all teams aligned from day one.</p>
            </div>
            
            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <CircleDollarSign className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Budget Management</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">Transparent cost control with no hidden surprises, actively managing resources to stay within budget.</p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group">
              <Users className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Vendor Coordination</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">Seamlessly managing suppliers, contractors, and installations acting as your single point of contact.</p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group lg:col-start-1 lg:col-span-1">
              <ShieldCheck className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Quality Control</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">Regular structural and aesthetic inspections to ensure our premium standards are consistently met.</p>
            </div>

            <div className="bg-cream p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors group md:col-span-2 lg:col-span-1 lg:col-start-2">
              <MessageSquare className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h3 className="text-xl font-serif text-charcoal mb-3">Progress Updates</h3>
              <p className="font-light text-sm text-charcoal/70 leading-relaxed">Clear, structured communication at every stage of the project so you are always well-informed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS (Numbered Timeline) */}
      <section className="py-32 bg-[#141162] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-gold-light text-xs font-bold mb-4 block">The Roadmap</span>
            <h2 className="text-3xl lg:text-4xl font-serif">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative max-w-5xl mx-auto">
            {/* Horizontal Line mapping on Desktop */}
            <div className="hidden md:block absolute top-[1.35rem] left-[12.5%] right-[12.5%] h-px bg-white/20"></div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-serif text-xl mb-6 shadow-xl shrink-0 group-hover:-translate-y-1 transition-transform border border-gold">1</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Consultation & Planning</h4>
              <p className="text-sm font-light text-white/70">Understanding vision, requirements, and budget framework.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">2</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Design & Scheduling</h4>
              <p className="text-sm font-light text-white/70">Creating a clear execution roadmap mapped closely to key milestones.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">3</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Execution & Coordination</h4>
              <p className="text-sm font-light text-white/70">Actively managing all on-site teams, suppliers, and physical workflow.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-[#141162] border border-white/20 text-white flex items-center justify-center font-serif text-xl mb-6 shrink-0 group-hover:-translate-y-1 group-hover:border-gold transition-all">4</div>
              <h4 className="text-lg font-medium mb-3 group-hover:text-gold-light transition-colors">Quality Check & Delivery</h4>
              <p className="text-sm font-light text-white/70">Final comprehensive inspection to ensure excellence prior to handover.</p>
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
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" 
                alt="Construction Management" 
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">The QuinnHaven Standard</span>
              <h2 className="text-3xl lg:text-4xl font-serif text-[#141162] mb-6">Why Choose Us</h2>
              <p className="text-xl font-light text-charcoal/80 leading-relaxed mb-10 italic">
                We don’t just manage projects — we deliver peace of mind.
              </p>
              
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <UserCheck className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Dedicated Project Manager</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">A dedicated leader for every project coordinating details end-to-end.</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">On-Time Delivery</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Strict timeline control methodologies to avoid costly delays.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Professional Coordination</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Harmonizing efforts between all designers, contractors, and specialized teams.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">High Attention to Detail</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Rigorous quality assurance guaranteeing premium standards.</span>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-charcoal/5 shrink-0">
                    <MessageSquare className="w-6 h-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <strong className="block font-serif text-lg text-charcoal mb-1">Smooth Communication</strong>
                    <span className="text-sm font-light text-charcoal/70 leading-relaxed">Consistent communication directly to you from start to finish.</span>
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
          <h2 className="text-4xl font-serif text-[#141162] mb-6">Let’s build something exceptional.</h2>
          <p className="text-lg font-light text-charcoal/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether residential or commercial, we ensure your project is delivered with excellence and precision.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-medium hover:bg-[#141162] hover:text-white transition-all duration-300 shadow-xl"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
