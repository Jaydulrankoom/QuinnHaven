import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Phone, MapPin, PenTool, LayoutDashboard, Hammer, Sparkles, Box } from "lucide-react";
import { SERVICES, BRAND } from "../data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-charcoal">
      
      {/* 1. LAYERED 3D HERO SECTION */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-charcoal flex items-center">
        {/* Background Base */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
            transform: "translateZ(0)" 
          }}
        />
        
        {/* Subtle Brand & Charcoal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141162]/90 via-charcoal/80 to-[#141162]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90" />

        {/* Floating 3D Elements (Parallax & Continuous Animation) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut", delay: 0.2 },
            x: { duration: 1.5, ease: "easeOut", delay: 0.2 },
            y: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1.7 }
          }}
          className="hidden lg:block absolute right-[-5%] top-[15%] w-[40vw] h-[55vh] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(20,17,98,0.4)] border border-white/5"
        >
           <div className="absolute inset-0 bg-[#141162]/10 mix-blend-overlay z-10" />
           <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Kitchen Preview" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30, y: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut", delay: 0.5 },
            x: { duration: 1.5, ease: "easeOut", delay: 0.5 },
            y: { duration: 8, ease: "easeInOut", repeat: Infinity, delay: 2 }
          }}
          className="hidden lg:block absolute right-[25%] bottom-[10%] w-[25vw] h-[35vh] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(20,17,98,0.5)] border border-white/10"
        >
           <div className="absolute inset-0 bg-[#141162]/20 mix-blend-overlay z-10" />
           <img 
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop" 
            alt="Material Details" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
                QuinnHaven Design
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 font-light">
              Luxury Kitchen & <br />
              <span className="italic text-gold-light">Bathroom Design</span> <br />
              in Connecticut.
            </h1>
            
            <p className="text-lg text-white/80 font-light max-w-lg mb-10 leading-relaxed">
              Experience the pinnacle of custom cabinetry and spatial planning. From master bathrooms to culinary-grade kitchens, we bring your ultimate vision to life with complete end-to-end service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="bg-gold text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-charcoal transition-all duration-300 text-center"
              >
                Book a Consultation
              </Link>
              <Link 
                to="/showroom" 
                className="border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                Visit Showroom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-charcoal py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10 text-center">
             <div className="px-4 flex items-center justify-center">
                <span className="uppercase tracking-[0.2em] text-white/90 text-xs font-medium">Custom Design Experts</span>
             </div>
             <div className="px-4 flex items-center justify-center">
                <span className="uppercase tracking-[0.2em] text-white/90 text-xs font-medium">Premium Materials</span>
             </div>
             <div className="px-4 flex items-center justify-center">
                <span className="uppercase tracking-[0.2em] text-white/90 text-xs font-medium">Connecticut-Based</span>
             </div>
             <div className="px-4 flex items-center justify-center">
                <span className="uppercase tracking-[0.2em] text-white/90 text-xs font-medium">End-to-End Service</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Who We Are</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#141162] leading-tight mb-6">
                Uncompromising Craftsmanship & Personalized Design
              </h2>
              <p className="text-charcoal/70 leading-relaxed text-lg mb-6 font-light">
                At QuinnHaven Kitchen Cabinets & Bathroom Design, we believe your environment dictates your peace of mind. We don't just supply cabinets; we listen to how you actually live, executing expertly tailored spatial planning alongside a curated selection of premium materials.
              </p>
              <p className="text-charcoal/70 leading-relaxed text-lg mb-8 font-light">
                By pairing elite components with meticulous attention to detail, our passionate team ensures your home not only looks breathtaking but functions flawlessly.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold text-[#141162] hover:text-gold transition-colors pb-1 border-b border-[#141162]/20 hover:border-gold">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 translate-x-4 translate-y-4 rounded-sm -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="QuinnHaven Craftsmanship" 
                className="w-full h-[500px] object-cover shadow-xl rounded-sm" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#141162] leading-tight mb-6">
              Comprehensive Design & Remodeling Services
            </h2>
            <p className="text-charcoal/70 font-light text-lg">
              We specialize in transforming every corner of your home with precision logistics, from bespoke design to full-scale kitchen and bathroom renovations and remodeling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`} className="group block bg-cream p-8 border border-charcoal/5 hover:border-gold transition-all duration-300">
                <h3 className="font-serif text-xl text-charcoal mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-charcoal/60 text-sm font-light leading-relaxed mb-6">
                  {service.desc}
                </p>
                <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
            
            {/* Hardcoded Entryway Storage to complete the requested robust list */}
            <Link to="/services/entryway-storage" className="group block bg-cream p-8 border border-charcoal/5 hover:border-gold transition-all duration-300">
              <h3 className="font-serif text-xl text-charcoal mb-3 group-hover:text-gold transition-colors">Entryway Storage</h3>
              <p className="text-charcoal/60 text-sm font-light leading-relaxed mb-6">
                Custom mudroom built-ins and elegant entryway organization logic.
              </p>
              <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ChevronRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTS / MATERIALS SECTION */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
               <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Premium Components</span>
               <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                 A Curated Material Selection
               </h2>
            </div>
            <Link to="/showroom" className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold text-gold hover:text-white transition-colors">
              Visit Showroom <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
             {[
               { name: "Cabinetry", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
               { name: "Countertops", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop" },
               { name: "Vanities", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop" },
               { name: "Premium Tile", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop" },
               { name: "Shower Doors", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2074&auto=format&fit=crop" },
               { name: "Hardware", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop" },
             ].map((product, idx) => (
                <div key={idx} className="group relative h-48 md:h-64 overflow-hidden rounded-sm cursor-pointer">
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                   <div className="absolute inset-x-0 bottom-0 p-4 z-20 bg-gradient-to-t from-black/80 to-transparent">
                     <span className="font-serif text-lg text-white">{product.name}</span>
                   </div>
                   <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO / PROJECTS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Signature Work</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#141162] leading-tight mb-8">
                Recent Transformations
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-sm">
                 <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                 <img src={SERVICES[0].img} alt="Kitchen Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-6 left-6 z-20 bg-white px-6 py-3">
                    <span className="text-gold text-xs uppercase tracking-widest font-bold block mb-1">Kitchen Remodel</span>
                    <h4 className="font-serif text-xl text-charcoal">The Avon Culinary Estate</h4>
                 </div>
              </div>
              <div className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-sm">
                 <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                 <img src={SERVICES[2].img} alt="Bathroom Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-6 left-6 z-20 bg-white px-6 py-3">
                    <span className="text-gold text-xs uppercase tracking-widest font-bold block mb-1">Bathroom Retreat</span>
                    <h4 className="font-serif text-xl text-charcoal">Wallingford Master Bath</h4>
                 </div>
              </div>
           </div>
           
           <div className="text-center">
              <Link to="/portfolio" className="inline-block border border-[#141162] text-[#141162] px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-[#141162] hover:text-white transition-all duration-300">
                View Full Portfolio
              </Link>
           </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-24 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Our Methodology</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#141162] leading-tight">
                A Seamless 5-Step Process
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { icon: Phone, title: "1. Consultation", text: "We discuss your vision, layout needs, and initial budget." },
                { icon: PenTool, title: "2. Design Planning", text: "Expert 3D modeling to perfect your highly functional layout." },
                { icon: LayoutDashboard, title: "3. Material Selection", text: "Curating premium stone, custom cabinetry, and hardware." },
                { icon: Hammer, title: "4. Build & Installation", text: "Professional project management and flawless installation." },
                { icon: Sparkles, title: "5. Final Reveal", text: "A comprehensive walkthrough ensuring total perfection." }
              ].map((step, i) => (
                <div key={i} className="text-center">
                   <div className="w-16 h-16 mx-auto bg-cream rounded-full flex items-center justify-center mb-6">
                      <step.icon className="w-6 h-6 text-gold" />
                   </div>
                   <h4 className="font-serif text-lg text-charcoal mb-3">{step.title}</h4>
                   <p className="text-sm text-charcoal/60 font-light leading-relaxed px-2">{step.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. LOCATION SEO SECTION */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-12 md:p-16 border border-charcoal/5 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-sm">
             <div>
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Local Expertise</span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#141162] leading-tight mb-6">
                  Serving Connecticut's Premier Neighborhoods
                </h2>
                <p className="text-charcoal/70 font-light leading-relaxed mb-6">
                  QuinnHaven proudly delivers exceptional kitchen remodeling and custom bath design across <strong>Connecticut</strong>. Our fully licensed installers and design experts understand the unique architectural logic and luxury real estate standards of the region.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="flex items-center gap-2 text-sm font-medium text-charcoal/80"><MapPin className="w-4 h-4 text-gold" /> Wallingford</div>
                   <div className="flex items-center gap-2 text-sm font-medium text-charcoal/80"><MapPin className="w-4 h-4 text-gold" /> New Haven</div>
                   <div className="flex items-center gap-2 text-sm font-medium text-charcoal/80"><MapPin className="w-4 h-4 text-gold" /> Hartford</div>
                   <div className="flex items-center gap-2 text-sm font-medium text-charcoal/80"><MapPin className="w-4 h-4 text-gold" /> Avon</div>
                   <div className="flex items-center gap-2 text-sm font-medium text-charcoal/80"><MapPin className="w-4 h-4 text-gold" /> Norwalk</div>
                </div>
             </div>
             <div className="relative h-[400px]">
                <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2070&auto=format&fit=crop" alt="Connecticut Architecture" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* 9. SHOWROOM SECTION */}
      <section className="py-24 bg-white border-y border-charcoal/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-charcoal text-white rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl">
               <div className="w-full md:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                  <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Experience the Quality</span>
                  <h2 className="font-serif text-4xl text-white leading-tight mb-6">
                    Visit Our Design Studio
                  </h2>
                  <p className="text-white/70 font-light leading-relaxed mb-8">
                    Step off the screen and into reality. Run your hands over our solid birch cabinetry, examine thick-cut marble, and sit down with our designers to map out your dream space over a cup of coffee.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-4">
                      <Box className="w-6 h-6 text-gold shrink-0 mt-1" />
                      <div>
                        <span className="block font-bold text-sm tracking-wide">Wallingford Headquarters</span>
                        <span className="block text-white/60 text-sm mt-1">{BRAND.address}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                     <Link to="/showroom" className="inline-block bg-gold text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all duration-300">
                       Schedule a Visit
                     </Link>
                  </div>
               </div>
               <div className="w-full md:w-1/2 h-[400px] md:h-auto">
                  <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" alt="Showroom Selection Center" className="w-full h-full object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* 10. BLOG / INSIGHTS SECTION */}
      <section className="py-24 bg-cream">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                 <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Design Journal</span>
                 <h2 className="font-serif text-4xl md:text-5xl text-[#141162] leading-tight">
                   Insights & Inspiration
                 </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop", cat: "Trends", title: "The Return of Warm Woods in Modern Kitchens" },
                 { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop", cat: "Planning", title: "Maximizing Storage in a Master En-Suite" },
                 { img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop", cat: "Materials", title: "Quartzite vs. Marble: Choosing Your Countertop" }
               ].map((post, i) => (
                  <div key={i} className="group cursor-pointer">
                     <div className="h-[250px] overflow-hidden rounded-sm mb-6">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     </div>
                     <span className="text-gold uppercase tracking-widest text-[10px] font-bold block mb-2">{post.cat}</span>
                     <h4 className="font-serif text-xl text-charcoal leading-snug group-hover:text-gold transition-colors">{post.title}</h4>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10.5. GOOGLE REVIEWS SECTION */}
      <section className="py-24 bg-white border-y border-charcoal/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex flex-col items-center justify-center mb-12">
               <div className="flex items-center gap-1 mb-2">
                 {[1,2,3,4,5].map(star => (
                   <svg key={star} className="w-6 h-6 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
               <span className="font-serif text-3xl text-charcoal">5.0 Star Rating</span>
               <a href="https://share.google/WM2fwolZH2GQJx4nr" target="_blank" rel="noreferrer" className="text-sm font-semibold uppercase tracking-widest text-gold hover:text-charcoal transition-colors mt-2">
                 Read All Google Reviews
               </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
               {[
                 { name: "Sarah M.", review: "QuinnHaven absolutely transformed our outdated kitchen into a culinary dream. The 3D modeling process made it so easy to visualize, and the installation team was incredibly respectful of our home. We couldn't be happier!", location: "Avon, CT" },
                 { name: "Michael R.", review: "From the initial consultation in their beautiful Wallingford showroom to the final walkthrough, the experience was flawless. Our master bathroom now feels like a high-end spa. Highly recommend their bespoke cabinetry.", location: "Norwalk, CT" },
                 { name: "Jessica T.", review: "The attention to detail and craftsmanship is unparalleled. They designed a custom closet system and a basement bar for us. The quality of the materials and the hardware is simply phenomenal. Worth every penny.", location: "New Haven, CT" }
               ].map((review, i) => (
                  <div key={i} className="bg-cream p-8 border border-charcoal/5 shadow-sm rounded-sm">
                     <div className="flex items-center gap-1 mb-4">
                       {[1,2,3,4,5].map(star => (
                         <svg key={star} className="w-4 h-4 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                         </svg>
                       ))}
                     </div>
                     <p className="text-charcoal/80 font-light leading-relaxed italic mb-6">"{review.review}"</p>
                     <div className="flex items-center gap-3 border-t border-charcoal/10 pt-4">
                        <div className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center font-serif text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                           <span className="block font-bold text-sm text-charcoal">{review.name}</span>
                           <span className="block text-xs uppercase tracking-widest text-charcoal/50">{review.location}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
        
        <div className="relative z-10 text-center max-w-3xl px-6">
           <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">Ready to Transform Your Space?</h2>
           <p className="text-white/80 font-light text-lg mb-10 max-w-xl mx-auto">
             Whether you're planning a complete kitchen overhaul or a bespoke closet addition, our team is ready to bring your vision to reality.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                Book Consultation
              </Link>
              <a 
                href={`tel:${BRAND.phone}`}
                className="border border-white/30 text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
           </div>
        </div>
      </section>

    </div>
  );
}
