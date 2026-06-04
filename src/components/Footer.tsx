import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { BRAND, SERVICES, LOCATIONS } from "../data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-24 pb-12 border-t border-charcoal-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-3 space-y-8">
            <Link to="/" className="inline-block">
              <img loading="lazy" 
                src={BRAND.logo} 
                alt="QuinnHaven Design" 
                width="240"
                height="40"
                className="h-10 w-auto brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }} 
              />
            </Link>
            <p className="opacity-80 text-sm leading-relaxed max-w-xs font-light">
              Elevating homes with premium kitchen and bathroom designs. Crafted with precision, designed for life.
            </p>
            <div className="flex space-x-5">
              <a href={BRAND.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={BRAND.socials.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={BRAND.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-2xl mb-6 text-white border-b border-white/10 pb-4 inline-block">Services</h4>
            <ul className="space-y-4 text-sm font-light opacity-80">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                     <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                     {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
             <h4 className="font-serif text-2xl mb-6 text-white border-b border-white/10 pb-4 inline-block">Company</h4>
             <ul className="space-y-4 text-sm font-light opacity-80">
               <li>
                 <Link to="/about" className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                    About Us
                 </Link>
               </li>
               <li>
                 <Link to="/meet-our-designer" className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                    Meet Our Designer
                 </Link>
               </li>
               <li>
                 <Link to="/project-management" className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                    Project Management
                 </Link>
               </li>
               <li>
                 <Link to="/builder-supply" className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                    Builder Supply
                 </Link>
               </li>
               <li>
                 <Link to="/multifamily-projects" className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                    Multifamily Projects
                 </Link>
               </li>
               <li>
                 <Link to="/showroom" className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                    Showroom
                 </Link>
               </li>
            </ul>
          </div>
             
          {/* Locations */}
          <div className="lg:col-span-2">
             <h4 className="font-serif text-2xl mb-6 text-white border-b border-white/10 pb-4 inline-block">Locations</h4>
             <ul className="space-y-4 text-sm font-light opacity-80">
              {LOCATIONS.map(l => (
                <li key={l.id}>
                  <Link to={`/locations/${l.id}`} className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                     <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-brand-accent" />
                     {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 md:col-span-2 space-y-8">
            <div>
              <h4 className="font-serif text-2xl mb-6 text-white border-b border-white/10 pb-4 inline-block">Contact Us</h4>
              <ul className="space-y-4 text-sm font-light opacity-80">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <a href="https://maps.app.goo.gl/7EudUhLDBgbzo6B46" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">{BRAND.address}</a>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                  <a href={`tel:${BRAND.phone}`} className="hover:text-brand-accent transition-colors">{BRAND.phone}</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                  <a href={`mailto:${BRAND.email}`} className="hover:text-brand-accent transition-colors">{BRAND.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-light tracking-widest uppercase opacity-50">
          <p>&copy; {new Date().getFullYear()} QuinnHaven. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
