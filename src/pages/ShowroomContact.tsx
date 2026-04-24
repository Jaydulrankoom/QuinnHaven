import { ShieldCheck, ArrowRight, MapPin, Clock } from "lucide-react";
import { BRAND } from "../data";

export default function ShowroomContact() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row gap-16 xl:gap-24">
        
        {/* INFO COLUMN */}
        <div className="lg:w-1/3">
           <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Experience Our Products</span>
           <h1 className="text-5xl lg:text-6xl font-serif mb-8 text-charcoal">Book Showroom<br/>Visit</h1>
           <p className="font-light text-charcoal/70 leading-relaxed mb-12 text-lg">
             Ready to feel the quality of our premium materials firsthand? Schedule a visit to our showroom to explore custom cabinetry, stone, tile, and hardware with a design specialist.
           </p>

           <div className="space-y-8 border-t border-charcoal/10 pt-12">
             <div>
                <h4 className="font-serif text-2xl mb-3 text-charcoal flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" /> Location
                </h4>
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

             <div className="pt-4 border-t border-charcoal/10">
                <h4 className="font-serif text-2xl mb-3 text-charcoal flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" /> Hours
                </h4>
                <ul className="text-charcoal/80 space-y-2 mt-4 font-light">
                  <li className="flex justify-between w-full max-w-[200px]"><span>Monday - Friday</span> <span>9:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between w-full max-w-[200px]"><span>Saturday</span> <span>10:00 AM - 3:00 PM</span></li>
                  <li className="flex justify-between w-full max-w-[200px]"><span className="text-charcoal/50">Sunday</span> <span className="italic text-charcoal/50">Closed</span></li>
                </ul>
             </div>
           </div>

           <div className="mt-12 bg-white border border-charcoal/10 p-6 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
              <div>
                 <h5 className="font-serif text-lg font-semibold text-charcoal mb-1">VIP Attention</h5>
                 <p className="text-xs text-charcoal/60 font-light leading-relaxed">Booking your visit ensures one of our senior specialists is completely dedicated to reviewing your project needs uninterrupted.</p>
              </div>
           </div>
        </div>

        {/* FORM COLUMN */}
        <div className="lg:w-2/3 bg-white p-10 md:p-16 border border-charcoal/5 shadow-2xl relative">
           <div className="absolute top-0 left-0 w-full h-[4px] bg-gold" />
           <h3 className="font-serif text-3xl mb-10 text-charcoal">Schedule Your Visit</h3>
           <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">First Name</label>
                  <input type="text" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Last Name</label>
                  <input type="text" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Phone Number</label>
                  <input type="tel" className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal" />
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Primary Interest</label>
                  <div className="relative">
                    <select className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal appearance-none">
                      <option value="">Select a product category</option>
                      <option value="cabinetry">Cabinetry</option>
                      <option value="countertops">Countertops & Stone</option>
                      <option value="closets">Closet Systems</option>
                      <option value="vanities">Bathroom Vanities</option>
                      <option value="tile">Tile & Flooring</option>
                      <option value="hardware">Hardware</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                    <ArrowRight className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Preferred Visit Day</label>
                  <div className="relative">
                    <select className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal appearance-none">
                      <option value="">Select day</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                    </select>
                    <ArrowRight className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-charcoal/30 pointer-events-none" />
                  </div>
                </div>
             </div>

             <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-bold mb-2">Additional Information or Questions</label>
                <textarea rows={4} className="w-full border-b border-charcoal/20 bg-transparent py-3 focus:outline-none focus:border-gold transition-colors text-charcoal resize-none"></textarea>
             </div>

             <button type="button" className="w-full bg-charcoal text-white py-5 uppercase tracking-widest text-sm font-bold hover:bg-gold transition-colors mt-8 shadow-lg">
               Confirm Showroom Appointment
             </button>
           </form>
        </div>

      </div>
    </div>
  );
}
