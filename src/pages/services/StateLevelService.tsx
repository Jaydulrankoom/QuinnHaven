import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, MapPin, PhoneCall, CheckCircle2, CalendarDays, 
  PenTool, Grid3X3, Hammer, Ruler, Truck, Star, Quote, ArrowRight, ShieldCheck, Compass, LayoutTemplate
} from "lucide-react";
import { BRAND } from "../../data";
import { STATE_SEO_CONTENT } from "../../data/stateSEO";

export default function StateLevelService({ slug }: { slug: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Default to kitchen-design if not found
  const data = STATE_SEO_CONTENT[slug] || STATE_SEO_CONTENT["kitchen-design"];
  
  if (!data) return <div className="min-h-screen bg-cream"></div>;

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative w-full flex items-center justify-center text-center mt-24 py-20 lg:py-32 min-h-[500px] md:min-h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src={`https://images.unsplash.com/photo-${data.images.hero}?q=80&w=2070&auto=format&fit=crop`} 
            alt={data.heroTitle}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-charcoal/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-white pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center justify-center gap-2 text-gold uppercase tracking-[0.2em] text-sm font-bold mb-4">
              <MapPin className="w-4 h-4" /> Serving Connecticut
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-serif leading-tight mb-6 mt-2 tracking-tight capitalize">
              {data.heroTitle}
            </h1>
            <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              {data.heroDesc}
            </p>
            <p className="text-sm font-semibold tracking-widest uppercase text-white/70 mb-8">
              {data.trustStatement}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact"
                className="bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-[#141162] transition-all duration-300 shadow-xl w-full sm:w-auto border border-gold hover:border-white"
              >
                Get Free Estimate
              </Link>
              <Link 
                to="/portfolio" 
                className="border border-white/40 text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Service Overview</span>
              <h2 className="text-4xl font-serif text-charcoal mb-8">{data.overviewTitle}</h2>
              <div className="space-y-6 text-lg font-light text-charcoal/80 leading-relaxed mb-10">
                <p>{data.overviewPara1}</p>
                <p>{data.overviewPara2}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gold/5 transform translate-x-4 translate-y-4 rounded-sm" />
              <img 
                src={`https://images.unsplash.com/photo-${data.images.overview}?q=80&w=2070&auto=format&fit=crop`} 
                alt={`${data.heroTitle} Overview`} 
                referrerPolicy="no-referrer"
                className="relative z-10 rounded-sm shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl lg:text-5xl font-serif mb-16">Why Choose QuinnHaven?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <PenTool className="w-10 h-10 text-gold mb-6 mx-auto" />
              <h3 className="text-xl font-serif mb-4">Custom Design Approach</h3>
              <p className="font-light text-white/70 text-sm leading-relaxed">We never use out-of-the-box templates. Every project is meticulously designed from the ground up to perfectly fit your home's unique dimensions and your personal aesthetic vision.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <Hammer className="w-10 h-10 text-gold mb-6 mx-auto" />
              <h3 className="text-xl font-serif mb-4">High-Quality Materials</h3>
              <p className="font-light text-white/70 text-sm leading-relaxed">From premium marine-grade plywood and solid hardwoods to industry-leading hardware and finishes, our material selections ensure absolute durability and a luxurious feel.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <LayoutTemplate className="w-10 h-10 text-gold mb-6 mx-auto" />
              <h3 className="text-xl font-serif mb-4">Functional Planning</h3>
              <p className="font-light text-white/70 text-sm leading-relaxed">A beautiful space must also work perfectly. We heavily emphasize spatial mechanics, traffic flow, and deep organizational logic so your design improves your daily routine.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <Star className="w-10 h-10 text-gold mb-6 mx-auto" />
              <h3 className="text-xl font-serif mb-4">Long-Term Value Focus</h3>
              <p className="font-light text-white/70 text-sm leading-relaxed">Our execution isn't just about the immediate aesthetic transformation; it's engineered to be a permanent, high-value asset that substantially elevates your property's equity status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Our Methodology</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">The Execution Workflow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.processSteps.map((step, idx) => {
              const icons = [<PhoneCall key="1" />, <Compass key="2" />, <Grid3X3 key="3" />, <CheckCircle2 key="4" />, <Hammer key="5" />, <Truck key="6" />];
              return (
              <div key={idx} className="bg-white p-10 border border-charcoal/5 shadow-sm hover:border-gold transition-colors relative group">
                <span className="absolute top-8 right-8 text-6xl font-serif text-charcoal/5 group-hover:text-gold/10 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>
                <div className="w-14 h-14 bg-gold/10 text-gold flex items-center justify-center rounded-sm mb-8 group-hover:scale-110 transition-transform origin-left">
                  {icons[idx] || <Hammer />}
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-4">{step.title}</h3>
                <p className="text-sm font-light text-charcoal/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* 5. SERVICE DETAIL EXPANSION */}
      <section className="py-24 bg-white border-t border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-serif mb-10">{data.detailTitle}</h2>
          <div className="space-y-8 text-lg font-light text-charcoal/80 leading-relaxed text-left">
            <p>{data.detailPara1}</p>
            <p>{data.detailPara2}</p>
            <p>{data.detailPara3}</p>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO SECTION */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Featured Transformations</span>
               <h2 className="text-4xl lg:text-5xl font-serif capitalize">Connecticut Projects</h2>
            </div>
            <Link to="/portfolio" className="border-b border-white pb-1 uppercase tracking-widest text-xs font-bold hover:text-gold hover:border-gold transition-colors shrink-0">
              View Entire Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm h-[400px] mb-6">
                <img src={`https://images.unsplash.com/photo-${data.images.port1}?q=80&w=2070&auto=format&fit=crop`} alt={`Project 1`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{data.portfolio.p1Title}</h3>
              <p className="text-sm font-light text-white/60">{data.portfolio.p1Desc}</p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm h-[400px] mb-6">
                <img src={`https://images.unsplash.com/photo-${data.images.port2}?q=80&w=2070&auto=format&fit=crop`} alt={`Project 2`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{data.portfolio.p2Title}</h3>
              <p className="text-sm font-light text-white/60">{data.portfolio.p2Desc}</p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm h-[400px] mb-6">
                <img src={`https://images.unsplash.com/photo-${data.images.port3}?q=80&w=2070&auto=format&fit=crop`} alt={`Project 3`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{data.portfolio.p3Title}</h3>
              <p className="text-sm font-light text-white/60">{data.portfolio.p3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Client Success</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-16">What Connecticut Homeowners Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 border border-charcoal/5 shadow-sm relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10" />
                <div className="flex gap-1 text-gold mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                <p className="font-light text-charcoal/80 mb-8 italic text-sm leading-relaxed text-left">
                  "{t.quote}"
                </p>
                <div className="text-left">
                  <strong className="block font-serif text-charcoal tracking-wide">{t.name}</strong>
                  <span className="text-xs uppercase tracking-widest text-charcoal/50">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-charcoal/10 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-cream/50 transition-colors"
                >
                  <span className="font-serif text-lg text-[#141162] pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 font-light text-charcoal/80 leading-relaxed md:text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-32 bg-charcoal text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <CalendarDays className="w-16 h-16 text-gold mx-auto mb-8" />
          <h2 className="text-4xl lg:text-6xl font-serif mb-6 capitalize">Start Your Project Today</h2>
          <p className="text-xl font-light text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to transform your home with precision and elegance? Request a consultation and take the first step toward your extraordinary new space.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link 
              to="/contact"
              className="bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all shadow-xl w-full sm:w-auto"
            >
              Get Free Estimate
            </Link>
            <Link 
              to="/contact" 
              className="border border-white/40 text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              Contact Us Today
            </Link>
          </div>

          <p className="text-sm font-light text-white/60 tracking-widest uppercase">
            Call us directly at <a href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`} className="text-gold font-bold hover:underline">{BRAND.phone}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
