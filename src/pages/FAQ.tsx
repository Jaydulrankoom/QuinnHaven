import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    category: "Process & Timelines",
    questions: [
      { q: "How long does a full kitchen remodel typically take?", a: "From initial design sign-off to final white-glove cleaning, a full luxury kitchen remodel typically takes 6 to 12 weeks. This heavily depends on the scope of architectural changes (like moving load-bearing walls) and the lead times for imported exotic stone or custom cabinetry." },
      { q: "What should I expect during the 3D rendering phase?", a: "We utilize advanced architectural software to create photorealistic images of your proposed space. You'll be able to see the exact veining of the marble, the glint of the lighting fixtures, and the layout flow before we ever swing a hammer. We include up to two major revision rounds in our standard contract." },
      { q: "Do I need to hire my own General Contractor?", a: "No. QuinnHaven provides comprehensive 'turn-key' service. However, if you already have a builder or general contractor you prefer, we are perfectly equipped to act strictly as your Design & Material Supply partner." }
    ]
  },
  {
    category: "Budgets & Pricing",
    questions: [
      { q: "What is your typical project minimum?", a: "Because we specialize in bespoke millwork, imported materials, and highly technical installations, our kitchen remodels typically start at $45,000, and comprehensive master bath renovations start at $25,000. We focus solely on the high-end luxury sector." },
      { q: "Do you offer financing?", a: "While we do not finance directly, we partner with premier regional lenders who specialize in high-value home equity and renovation loan products. We are happy to provide an introduction during your consultation." },
      { q: "Are quotes fixed or estimates?", a: "Following the final design and material sign-off, we provide a Fixed-Price Agreement for the scope of work detailed. The only scenarios where costs change are if you request a Change Order (new materials/additions), or if hidden foundational/structural damage is discovered behind drywall during demolition." }
    ]
  },
  {
    category: "Materials & Showroom",
    questions: [
      { q: "Can I visit a showroom to see the cabinetry in person?", a: "Yes. Our elegant showroom in Wallingford, CT operates by appointment only to ensure we dedicate our full attention to your project during your visit. You can physically touch our custom European hinges, wood finishes, and stone samples." },
      { q: "Do you only install what you sell?", a: "To guarantee our exacting standards of quality and honor our extended warranties, we exclusively install millwork, cabinetry, and countertops procured through our direct design network. We do not install 'box-store' client-provided materials." }
    ]
  }
];

export default function FAQ() {
  const [openQ, setOpenQ] = useState<string | null>(null);

  const toggleQ = (q: string) => {
    setOpenQ(openQ === q ? null : q);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream">
       <section className="bg-charcoal text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Knowledge Base</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Frequently Asked Questions</h1>
          <p className="text-xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            Transparent answers regarding our processes, materials, and pricing to help you make an informed decision for your luxury renovation.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto w-full">
         {FAQS.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-16 last:mb-0">
               <h2 className="text-3xl font-serif text-charcoal mb-8 pb-4 border-b border-charcoal/10">{group.category}</h2>
               <div className="flex flex-col gap-4">
                  {group.questions.map((faq, idx) => (
                     <div key={idx} className="bg-white border border-charcoal/10 shadow-sm overflow-hidden">
                        <button 
                           onClick={() => toggleQ(faq.q)}
                           className="w-full flex items-center justify-between p-6 text-left hover:bg-gold/5 transition-colors focus:outline-none"
                        >
                           <span className={`text-lg font-medium pr-8 ${openQ === faq.q ? 'text-gold' : 'text-charcoal'}`}>
                              {faq.q}
                           </span>
                           <span className="text-charcoal/40 shrink-0">
                              {openQ === faq.q ? <Minus className="w-5 h-5 text-gold" /> : <Plus className="w-5 h-5" />}
                           </span>
                        </button>
                        <div 
                           className={`transition-all duration-300 overflow-hidden ${openQ === faq.q ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                           <p className="p-6 pt-0 text-charcoal/70 font-light leading-relaxed border-t border-charcoal/5 mt-4 mx-6">
                              {faq.a}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         ))}
      </section>
      
      {/* DIRECT CONTACT MODULE */}
      <section className="bg-white py-24 border-t border-charcoal/5">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Still have a question?</h2>
           <p className="text-lg text-charcoal/60 font-light mb-10">
              Our design team is standing by to discuss the specific technical or aesthetic parameters of your project.
           </p>
          <Link to="/contact" className="inline-flex bg-charcoal text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-gold transition-colors">
             Contact Our Studio
          </Link>
        </div>
      </section>
    </div>
  );
}
