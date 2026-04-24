import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { BRAND, LOCATIONS } from "../data";

export default function Location() {
  const { locationId } = useParams();
  
  const locationObj = LOCATIONS.find(l => l.id === locationId) || LOCATIONS[0];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream">
      {/* DYNAMIC HERO */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop" 
            alt={`Luxury Design in ${locationObj.name}`} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Service Areas</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">{locationObj.seoTitle}</h1>
          <p className="text-xl font-light text-white/90 max-w-2xl mx-auto">
            Bringing unparalleled luxury, state-of-the-art materials, and meticulous craftsmanship directly to your doorstep in {locationObj.name}.
          </p>
        </div>
      </section>

      {/* SEO CONTENT + CONTACT INFO */}
      <section className="py-24 bg-cream border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2">
              <h2 className="font-serif text-4xl mb-6 text-charcoal">Design Excellence in {locationObj.name}</h2>
              <div className="prose prose-lg text-charcoal/70 font-light font-sans mb-12 max-w-none">
                {Array.isArray(locationObj.seoCopy) ? (
                  locationObj.seoCopy.map((para: string, idx: number) => (
                    <p key={idx} className="mb-6 leading-relaxed text-lg">{para}</p>
                  ))
                ) : (
                  <p className="mb-6 leading-relaxed text-lg">{locationObj.seoCopy}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="border-t-[3px] border-gold bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-2xl mb-3 text-charcoal">Kitchen Remodeling</h3>
                  <p className="text-sm font-light text-charcoal/70">Full-service culinary design tailored specifically for {locationObj.name} home architecture.</p>
                </div>
                <div className="border-t-[3px] border-gold bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-2xl mb-3 text-charcoal">Custom Cabinets</h3>
                  <p className="text-sm font-light text-charcoal/70">Bespoke storage solutions crafted to exact specifications, maximizing both space and style.</p>
                </div>
              </div>
            </div>

            {/* LOCATION DETAILS BOX */}
            <div className="bg-charcoal text-white p-8 md:p-10 shadow-2xl relative overflow-hidden h-fit border-t-[4px] border-gold">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <MapPin className="w-48 h-48" />
               </div>
               <h3 className="relative z-10 font-serif text-3xl mb-8">Showroom Details</h3>
               
               <div className="relative z-10 space-y-8">
                 <div className="flex items-start gap-4">
                    <MapPin className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Address</strong>
                      <span className="font-light opacity-90 text-sm leading-relaxed block">{BRAND.address}</span>
                      <a href="https://maps.app.goo.gl/7EudUhLDBgbzo6B46" target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-bold tracking-widest uppercase hover:text-white transition-colors mt-2 inline-block">
                        Get Directions & Reviews →
                      </a>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <Phone className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Phone</strong>
                      <span className="font-light opacity-90 text-sm">{BRAND.phone}</span>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <Mail className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Email</strong>
                      <span className="font-light opacity-90 text-sm">{BRAND.email}</span>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <Clock className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <strong className="block text-xs uppercase tracking-widest mb-2 font-bold text-white/50">Hours</strong>
                      <span className="font-light opacity-90 text-sm leading-relaxed">Mon-Fri: 9am - 5pm<br/>Sat: By Appointment<br/>Sun: Closed</span>
                    </div>
                 </div>
               </div>

               <Link to="/contact" className="relative z-10 block text-center w-full mt-12 bg-gold text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-colors">
                 Book Appointment
               </Link>
            </div>

          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-[500px] w-full bg-charcoal relative">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.8926019310617!2d-72.8252277!3d41.488057999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e652edaa021c33%3A0xc6cb1dc2f4be3888!2s121%20N%20Plains%20Industrial%20Rd%20unit%20c%2C%20Wallingford%2C%20CT%2006492!5e0!3m2!1sen!2sus!4v1714400000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="QuinnHaven Showroom Location"
            className="absolute inset-0"
         />
      </section>

    </div>
  );
}
