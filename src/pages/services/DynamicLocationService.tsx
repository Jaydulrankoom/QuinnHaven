import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, MapPin, PhoneCall, CheckCircle2, CalendarDays, 
  PenTool, Grid3X3, Hammer, Ruler, Truck, Star, Quote 
} from "lucide-react";
import { BRAND } from "../../data";
import { WALLINGFORD_SEO_CONTENT } from "../../data/wallingfordSEO";
import { AVON_SEO_CONTENT } from "../../data/avonSEO";
import { GENERATED_LOCATION_SEO_CONTENT } from "../../data/generatedLocationSEO";
import StateLevelService from "./StateLevelService";

export default function DynamicLocationService() {
  const { seoSlug } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Extract city and service from slug
  // Formats: 
  // Custom: "kitchen-design-wallingford-ct", "kitchen-design"
  let parsedLocation = "";
  let parsedService = "";
  
  const knownCities = ["wallingford-ct", "new-haven-ct", "hartford-ct", "avon-ct", "norwalk-ct"];
  
  let isCityRoute = false;
  if (seoSlug) {
    for (const city of knownCities) {
      if (seoSlug.endsWith(`-${city}`)) {
        parsedLocation = city;
        const rawService = seoSlug.replace(`-${city}`, "");
        parsedService = rawService.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        // Edge cases
        if (parsedService === "Custom Cabinets Design") parsedService = "Custom Cabinets Design";
        
        isCityRoute = true;
        break;
      }
    }
  }

  // If this doesn't map to a generated local SEO city page, render the State-level Connecticuit Service page
  if (!isCityRoute) {
    return <StateLevelService slug={seoSlug || "kitchen-design"} />;
  }

  // Map the slug city to the beautiful display string
  const cityDisplays: Record<string, string> = {
    "wallingford-ct": "Wallingford, CT",
    "new-haven-ct": "New Haven, CT",
    "hartford-ct": "Hartford, CT",
    "avon-ct": "Avon, CT",
    "norwalk-ct": "Norwalk, CT"
  };
  const locationName = cityDisplays[parsedLocation];
  const serviceType = parsedService;

  // Retrieve proper SEO data 
  let seoData = null;
  if (parsedLocation === "wallingford-ct") {
    seoData = WALLINGFORD_SEO_CONTENT[parsedService];
  } else if (parsedLocation === "avon-ct" && parsedService === "Custom Cabinets Design") {
    seoData = AVON_SEO_CONTENT[parsedService];
  } else {
    seoData = GENERATED_LOCATION_SEO_CONTENT[parsedLocation]?.[parsedService];
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (!seoData) {
    return <div className="pt-32 text-center text-4xl">Service not found!</div>;
  }

  const imgs = seoData.images;
  const processSteps = seoData.processSteps;
  const faqs = seoData.faqs;

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-charcoal selection:bg-gold selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full flex items-center justify-center text-center mt-24 py-20 lg:py-32 min-h-[500px] md:min-h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src={`https://images.unsplash.com/photo-${imgs.hero}?q=80&w=2070&auto=format&fit=crop`} 
            alt={seoData.heroTitle}
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
              <MapPin className="w-4 h-4" /> Serving {locationName}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-serif leading-tight mb-6 mt-2 tracking-tight capitalize">
              {seoData.heroTitle} <span className="italic text-gold-light">{locationName}</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              {seoData.heroDesc}
            </p>
            <p className="text-sm font-semibold tracking-widest uppercase text-white/70 mb-8">
              Trusted experts serving {locationName} with premium craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact"
                className="bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-[#141162] transition-all duration-300 shadow-xl w-full sm:w-auto border border-gold hover:border-white"
              >
                Get Free Estimate
              </Link>
              <Link 
                to="/book-showroom" 
                className="border border-white/40 text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
              >
                Visit Showroom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gold/10 -translate-x-6 translate-y-6 rounded-sm -z-10" />
              <img 
                src={`https://images.unsplash.com/photo-${imgs.exp}?q=80&w=2070&auto=format&fit=crop`} 
                alt={`${serviceType} in ${locationName}`} 
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Our Expertise</span>
              <h2 className="text-3xl lg:text-5xl font-serif text-[#141162] mb-6 capitalize">{seoData.expertiseTitle}</h2>
              
              <div className="space-y-6 text-lg font-light text-charcoal/80 leading-relaxed mb-10">
                <p>{seoData.expertisePara1}</p>
                <p>{seoData.expertisePara2}</p>
                <p>{seoData.expertisePara3}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3"><CheckCircle2 className="text-gold w-5 h-5 shrink-0" /><span className="font-medium text-sm uppercase tracking-wider">Premium Materials</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-gold w-5 h-5 shrink-0" /><span className="font-medium text-sm uppercase tracking-wider">Custom Layouts</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-gold w-5 h-5 shrink-0" /><span className="font-medium text-sm uppercase tracking-wider">Structural integrity</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-gold w-5 h-5 shrink-0" /><span className="font-medium text-sm uppercase tracking-wider">3D Architecture</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-gold w-5 h-5 shrink-0" /><span className="font-medium text-sm uppercase tracking-wider">Elite Craftsmanship</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-gold w-5 h-5 shrink-0" /><span className="font-medium text-sm uppercase tracking-wider">Local Installation</span></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. LOCAL RELEVANCE SECTION */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <MapPin className="w-16 h-16 text-gold mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl lg:text-5xl font-serif mb-8">Serving {locationName} & Nearby Areas</h2>
          <p className="text-xl font-light leading-relaxed text-white/90 mb-10">
            We proudly, exclusively provide utterly flawless, heavily architected {serviceType.toLowerCase()} services deeply across {locationName} and the surrounding Connecticut terrain. We have intensely worked on multiple massive residential luxury projects directly inside local properties. Our hyper-localized methodology allows us to completely respect the town's beautiful mixture of expansive historic estates and totally sleek modern housing developments. Our sole focus remains relentlessly on completely maximizing your available spatial footprint, immensely improving layout functionality, and stunningly enhancing your interior aesthetics to massively raise your property's total equity value.
          </p>
          <div className="text-2xl font-serif italic text-gold-light border-l-4 border-gold pl-6 py-2 mx-auto max-w-3xl text-left">
            "We have meticulously architected and executed dozens of entirely custom {serviceType.toLowerCase()} projects in {locationName} homes, effortlessly creating functional, heavily organized, and luxury-focused interior environments."
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Methodology</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {processSteps.map((step, idx) => {
              const icons = [<PhoneCall key="1" />, <PenTool key="2" />, <Grid3X3 key="3" />, <Ruler key="4" />, <Hammer key="5" />, <Truck key="6" />];
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

      {/* 5. PORTFOLIO SECTION */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Featured Transformations</span>
               <h2 className="text-4xl lg:text-5xl font-serif text-charcoal capitalize">{serviceType} Projects<br />in {locationName}</h2>
            </div>
            <Link to="/portfolio" className="border-b border-charcoal pb-1 uppercase tracking-widest text-xs font-bold hover:text-gold hover:border-gold transition-colors shrink-0">
              View Entire Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm h-[400px] mb-6">
                <img src={`https://images.unsplash.com/photo-${imgs.p1}?q=80&w=2070&auto=format&fit=crop`} alt={`Luxury ${serviceType} project element 1`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">Architectural Masterpiece</h3>
              <p className="text-sm font-light text-charcoal/60">Massive custom architectural integration in {locationName} featuring stunning seamless luxury elements.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm h-[400px] mb-6">
                <img src={`https://images.unsplash.com/photo-${imgs.p2}?q=80&w=2070&auto=format&fit=crop`} alt={`Luxury ${serviceType} project element 2`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">Modern Reorganization</h3>
              <p className="text-sm font-light text-charcoal/60">Sleek, heavily modernized layout structurally wrapping the entire living suite in seamless functional logic.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm h-[400px] mb-6">
                <img src={`https://images.unsplash.com/photo-${imgs.p3}?q=80&w=2070&auto=format&fit=crop`} alt={`Luxury ${serviceType} project element 3`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-gold transition-colors">Estate Integration</h3>
              <p className="text-sm font-light text-charcoal/60">Luxury built-in spatial modifications perfectly enveloping the home, creating a dense, deeply beautiful asset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Client Success</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal mb-16">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-charcoal/5 shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10" />
              <div className="flex gap-1 text-gold mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="font-light text-charcoal/80 mb-8 italic text-sm leading-relaxed text-left">
                "The unbelievable level of detailed craftsmanship QuinnHaven delivered is truly staggering. Hiring them for our {serviceType.toLowerCase()} in {locationName} completely changed how our home historically operates. The precise execution and massive luxury feel is undeniable."
              </p>
              <div className="text-left">
                <strong className="block font-serif text-charcoal tracking-wide">David P.</strong>
                <span className="text-xs uppercase tracking-widest text-charcoal/50">{locationName}</span>
              </div>
            </div>

            <div className="bg-white p-10 border border-charcoal/5 shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10" />
               <div className="flex gap-1 text-gold mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="font-light text-charcoal/80 mb-8 italic text-sm leading-relaxed text-left">
                "Utterly flawless architectural professionalism. From the initial precise digital rendering to the absolute final installation of our project, their dedication to design quality was heavily apparent. They squeezed so much beautiful utility into our footprint."
              </p>
              <div className="text-left">
                <strong className="block font-serif text-charcoal tracking-wide">Amanda R.</strong>
                <span className="text-xs uppercase tracking-widest text-charcoal/50">{locationName}</span>
              </div>
            </div>

            <div className="bg-white p-10 border border-charcoal/5 shadow-sm relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10" />
               <div className="flex gap-1 text-gold mb-6"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="font-light text-charcoal/80 mb-8 italic text-sm leading-relaxed text-left">
                "We demanded heavily customized, deeply complicated features for our sprawling estate in Wallingford. They completely nailed the imposing, wealthy aesthetic we wanted. Furthermore, the installation crew respected our home beautifully during construction."
              </p>
              <div className="text-left">
                <strong className="block font-serif text-charcoal tracking-wide">Dr. Jonathan K.</strong>
                <span className="text-xs uppercase tracking-widest text-charcoal/50">{locationName}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (SEO HEAVY) */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-gold text-xs font-bold mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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

      {/* 8. CTA SECTION */}
      <section className="py-32 bg-charcoal text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <CalendarDays className="w-16 h-16 text-gold mx-auto mb-8" />
          <h2 className="text-4xl lg:text-6xl font-serif mb-6 capitalize">Ready for your Luxury {serviceType}?</h2>
          <p className="text-xl font-light text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Transform your wildly precious interior space with beautifully designed, immensely high-quality bespoke integrations engineered for strict functional perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link 
              to="/contact"
               className="bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all duration-300 shadow-xl w-full sm:w-auto border border-gold hover:border-white"
            >
              Get Free Estimate
            </Link>
            <Link 
              to="/book-showroom" 
              className="border border-white/40 text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              Visit Showroom
            </Link>
          </div>

          <p className="text-sm font-light text-white/60 tracking-widest uppercase">
            Or speak directly to a master designer at <a href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`} className="text-gold font-bold hover:underline">{BRAND.phone}</a>
          </p>
        </div>
      </section>

      {/* 9. SEO FOOTER CONTENT BLOCK */}
      <section className="py-16 bg-cream text-charcoal border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              <h3 className="font-serif text-2xl text-[#141162] mb-4">About Our Service Area</h3>
              <p className="font-light text-charcoal/70 leading-relaxed text-sm">
                QuinnHaven proudly architects strictly premium interior solutions extending across the entirety of {locationName} and extensively throughout deeply beautiful surrounding Connecticut areas. Our firm is relentlessly dedicated to installing heavily sophisticated, luxury remodels, seamlessly transforming massive luxury kitchens, master bathroom sanctuaries, expansive custom closets, and elegant residential living quarters.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl text-[#141162] mb-4">Explore Related Interior Services</h3>
              <ul className="space-y-3 font-light text-sm">
                <li>
                  <Link to={`/services/kitchen-design-${parsedLocation}`} className="text-gold hover:underline hover:text-[#141162] transition-colors capitalize">
                    Kitchen Design {locationName}
                  </Link>
                </li>
                <li>
                  <Link to={`/services/custom-cabinets-design-${parsedLocation}`} className="text-gold hover:underline hover:text-[#141162] transition-colors capitalize">
                    Custom Cabinets Design {locationName}
                  </Link>
                </li>
                <li>
                  <Link to={`/services/bathroom-remodeling-${parsedLocation}`} className="text-gold hover:underline hover:text-[#141162] transition-colors capitalize">
                    Bathroom Remodeling {locationName}
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
