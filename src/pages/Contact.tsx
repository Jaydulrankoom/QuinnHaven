import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "../data";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-16 xl:gap-24">
        
        {/* INFO COLUMN */}
        <div className="lg:w-1/3">
           <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Get in Touch</span>
           <h1 className="text-5xl lg:text-6xl font-serif mb-8 text-charcoal">Design<br/>Consultation</h1>
           <p className="font-light text-charcoal/70 leading-relaxed mb-12 text-lg">
             Ready to transform your home? Fill out the form to schedule a complimentary design consultation at our showroom or via video call.
           </p>

           <div className="space-y-8 border-t border-charcoal/10 pt-12">
             <div>
               <h4 className="font-serif text-2xl mb-3 text-charcoal">General Inquiries</h4>
               <p className="font-light text-charcoal/80 text-lg hover:text-gold transition-colors"><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
               <p className="font-light text-charcoal/80 text-lg hover:text-gold transition-colors"><a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></p>
             </div>
             <div>
               <h4 className="font-serif text-2xl mb-3 text-charcoal">Showroom</h4>
               <p className="font-light text-charcoal/80 text-lg leading-relaxed mb-4">{BRAND.address}</p>
               <div className="h-48 mb-4 border border-charcoal/10 bg-gray-50 relative overflow-hidden rounded-sm shadow-inner">
                  <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(BRAND.address)}&t=m&z=14&output=embed&iwloc=near`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Visit QuinnHaven Showroom"
                    className="absolute inset-0"
                  ></iframe>
               </div>
               <a href="https://maps.app.goo.gl/7EudUhLDBgbzo6B46" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#141162] hover:text-gold transition-colors">
                 Get Directions & Reviews <ArrowRight className="w-4 h-4" />
               </a>
             </div>
           </div>

           <div className="mt-12 bg-white border border-charcoal/10 p-6 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
              <div>
                 <h5 className="font-serif text-lg font-semibold text-charcoal mb-1">Privacy Assured</h5>
                 <p className="text-xs text-charcoal/60 font-light leading-relaxed">Your information is kept strictly confidential. We never share your details with third parties.</p>
              </div>
           </div>
        </div>

        {/* FORM COLUMN */}
        <div className="lg:w-2/3 bg-white p-10 md:p-16 border border-charcoal/5 shadow-2xl relative">
           <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
           <h3 className="font-serif text-3xl mb-10 text-charcoal">Project Details</h3>
           <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Phone Number</label>
                  <input type="tel" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Address</label>
                  <input type="text" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
             </div>

             <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Select Project Type</label>
                <div className="relative">
                  <select className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal appearance-none">
                    <option value="">Select an option...</option>
                    <option value="kitchen">Kitchen Remodel</option>
                    <option value="bathroom">Bathroom Remodel</option>
                    <option value="cabinets">Custom Cabinetry</option>
                    <option value="closet">Closet Design</option>
                    <option value="basement">Basement Bar</option>
                    <option value="office">Home Office</option>
                    <option value="entryway">Entryway Storage</option>
                    <option value="other">Other</option>
                  </select>
                  <ArrowRight className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none" />
                </div>
             </div>

             <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Message</label>
                <textarea rows={5} className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal resize-none"></textarea>
             </div>

             <button type="button" className="w-full bg-charcoal text-white py-5 uppercase tracking-widest text-sm font-bold hover:bg-gold transition-colors mt-8 shadow-lg">
               Submit Request
             </button>
           </form>
        </div>

      </div>
    </div>
  );
}
