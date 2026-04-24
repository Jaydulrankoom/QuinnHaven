import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail, ChevronRight, Check } from "lucide-react";
import { BRAND, LOCATIONS } from "../data";
import Spline from '@splinetool/react-spline';
import { motion } from "motion/react";

export default function Location() {
  const { locationId } = useParams();
  
  const locationObj = LOCATIONS.find(l => l.id === locationId) || LOCATIONS[0];

  return (
    <div className="flex flex-col min-h-screen bg-cream font-sans text-charcoal">
      {/* 3D ANIMATED HERO */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-charcoal/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center text-white mt-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-gold uppercase tracking-[0.2em] text-sm font-bold mb-6"
          >
            <MapPin className="w-4 h-4" /> QuinnHaven in {locationObj.name}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-white tracking-tight leading-tight"
          >
            {locationObj.seoTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto mb-10"
          >
            Bringing unparalleled luxury, state-of-the-art materials, and meticulous craftsmanship directly to your doorstep in {locationObj.name}.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="inline-block bg-gold text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all shadow-xl"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-widest block font-bold">Scroll</span>
        </motion.div>
      </section>

      {/* SEO CONTENT + LOCAL SERVICES */}
      <section className="py-24 bg-cream relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            <div className="lg:col-span-3">
              <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Design Excellence</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 text-charcoal leading-tight">Elevating Homes in {locationObj.name}</h2>
              <div className="prose prose-lg text-charcoal/70 font-light font-sans mb-12 max-w-none">
                {Array.isArray(locationObj.seoCopy) ? (
                  locationObj.seoCopy.map((para: string, idx: number) => (
                    <p key={idx} className="mb-6 leading-relaxed">{para}</p>
                  ))
                ) : (
                  <p className="mb-6 leading-relaxed">{locationObj.seoCopy}</p>
                )}
              </div>

              {/* SERVICES Grid Specific to Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {[
                  { title: "Bespoke Kitchens", desc: `Culinary design tailored for ${locationObj.name} architecture and family life.` },
                  { title: "Custom Cabinets", desc: "Hand-milled storage maximizing space, seamlessly fitting your interior." },
                  { title: "Luxury Bathrooms", desc: "Spa-like sanctuaries featuring radiant heat and zero-entry wet rooms." },
                  { title: "Premium Closets", desc: "Boutique-style wardrobes that elegantly display and protect your garments." }
                ].map((service, idx) => (
                  <div key={idx} className="border border-charcoal/10 bg-white p-8 group hover:border-gold transition-colors duration-300">
                    <h3 className="font-serif text-2xl mb-3 text-charcoal group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-sm font-light text-charcoal/70 mb-6">{service.desc}</p>
                    <Link to="/services" className="text-xs uppercase tracking-widest font-bold text-charcoal group-hover:text-gold flex items-center gap-1 transition-colors">
                      Learn More <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* BENEFITS LIST */}
              <div className="mt-16 bg-white border border-charcoal/10 p-8 lg:p-12">
                 <h3 className="font-serif text-3xl mb-8 text-charcoal">Why Choose Us in {locationObj.name}?</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    {[
                      "Locally Managed Projects",
                      "Exquisite Material Selection",
                      "Turnkey Installation Services",
                      "Dedicated Design Concierge",
                      "Advanced 3D Renderings",
                      "Flawless Communication"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-charcoal/80 font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* SHOWROOM / CONTACT SIDEBAR */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="bg-charcoal text-white p-8 md:p-12 shadow-2xl relative overflow-hidden border-t-[4px] border-gold">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <MapPin className="w-64 h-64 -mr-10 -mt-10" />
                  </div>
                  <h3 className="relative z-10 font-serif text-3xl mb-2">Visit Our Showroom</h3>
                  <p className="relative z-10 text-white/60 font-light mb-10 text-sm">Experience our premium materials and craftsmanship in person.</p>
                  
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-gold w-6 h-6 shrink-0 mt-1" />
                        <div>
                          <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Address</strong>
                          <span className="font-light opacity-90 text-base leading-relaxed block">{BRAND.address}</span>
                          <a href="https://maps.app.goo.gl/7EudUhLDBgbzo6B46" target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-bold tracking-widest uppercase hover:text-white transition-colors mt-3 inline-flex items-center gap-1">
                            Get Directions <ChevronRight className="w-3 h-3" />
                          </a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <Phone className="text-gold w-6 h-6 shrink-0 mt-1" />
                        <div>
                          <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Phone</strong>
                          <a href={`tel:${BRAND.phone}`} className="font-light opacity-90 text-base hover:text-gold transition-colors">{BRAND.phone}</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Mail className="text-gold w-6 h-6 shrink-0 mt-1" />
                        <div>
                          <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Email</strong>
                          <a href={`mailto:${BRAND.email}`} className="font-light opacity-90 text-base hover:text-gold transition-colors">{BRAND.email}</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="text-gold w-6 h-6 shrink-0 mt-1" />
                        <div>
                          <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Hours</strong>
                          <span className="font-light opacity-90 text-base leading-relaxed block">Mon-Fri: 9am - 5pm<br/>Sat: By Appointment<br/>Sun: Closed</span>
                        </div>
                    </div>
                  </div>

                  <Link to="/contact" className="relative z-10 block text-center w-full mt-12 bg-white text-charcoal py-5 uppercase tracking-widest text-sm font-bold hover:bg-gold hover:text-white transition-colors duration-300">
                    Schedule an Appointment
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-[600px] w-full bg-charcoal relative">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.8926019310617!2d-72.8252277!3d41.488057999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e652edaa021c33%3A0xc6cb1dc2f4be3888!2s121%20N%20Plains%20Industrial%20Rd%20unit%20c%2C%20Wallingford%2C%20CT%2006492!5e0!3m2!1sen!2sus!4v1714400000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="QuinnHaven Showroom Location"
            className="absolute inset-0 grayscale contrast-125 opacity-90 mix-blend-luminosity"
         />
         {/* Map Overlay to integrate it better with the design */}
         <div className="absolute inset-0 pointer-events-none border-t border-b border-charcoal/20 shadow-[inset_0_0_100px_rgba(20,17,98,0.3)]"></div>
      </section>

    </div>
  );
}
