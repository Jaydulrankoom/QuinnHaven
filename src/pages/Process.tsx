import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Discovery & Consultation",
      desc: "We begin with a deep exploration of your lifestyle, aesthetic preferences, and the architectural limitations of your current space. We establish a clear budget framework and timeline expectations.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Sub-Millimeter Site Measurement",
      desc: "Our engineering team conducts an exhaustive on-site laser measurement. In luxury millwork, precision is everything. We map plumbing stacks, electrical loads, and structural load-bearing pathways.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Photorealistic 3D Architecture",
      desc: "Our design architects produce hyper-realistic 3D environmental renders. You will walk through your new kitchen or bathroom digitally, allowing us to tweak flow, lighting, and materiality before execution.",
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Global Material Procurement",
      desc: "Once the design is locked, we leverage our direct-to-quarry and boutique factory relationships to source your custom cabinetry, exotic stone slabs, and architectural hardware.",
      img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Master Installation & Reveal",
      desc: "Our vetted master craftsmen execute the build. We act as your project coordinator, managing trades and ensuring the execution perfectly matches the 3D vision. We finish with a white-glove site cleaning and final reveal.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream">
      {/* HEADER */}
      <section className="bg-charcoal text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">How It Works</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Our Proven Process</h1>
          <p className="text-xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            Eliminating the anxiety of high-end remodeling through transparency, advanced 3D technology, and rigorous project management.
          </p>
        </div>
      </section>

      {/* STEPS LIST */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full">
         <div className="space-y-24">
            {steps.map((step, idx) => (
               <div key={idx} className={`flex flex-col gap-12 lg:items-center ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  <div className="w-full lg:w-1/2 relative">
                     <span className="absolute -top-10 -left-6 text-[8rem] font-serif font-bold text-charcoal/5 select-none leading-none z-0">
                        0{idx + 1}
                     </span>
                     <div className="relative z-10 w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-charcoal/5">
                        <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                     </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-serif text-xl shrink-0">
                           {idx + 1}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-serif text-charcoal">{step.title}</h2>
                     </div>
                     <p className="text-lg text-charcoal/70 font-light leading-relaxed pl-14 border-l-2 border-charcoal/10 ml-5 py-2">
                        {step.desc}
                     </p>
                  </div>

               </div>
            ))}
         </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-white py-24 border-t border-charcoal/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl text-charcoal mb-8">Ready to begin Step 1?</h2>
          <Link to="/contact" className="inline-flex bg-charcoal text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-gold transition-colors">
             Book Your Initial Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
