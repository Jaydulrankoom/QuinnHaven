import { useParams, Link } from "react-router-dom";
import { Check, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { SERVICES } from "../data";

export default function Service() {
  const { serviceId } = useParams();
  const [data, setData] = useState(SERVICES[0]);

  useEffect(() => {
    if (serviceId) {
      const found = SERVICES.find(s => s.id === serviceId);
      if (found) {
        setData(found);
      } else {
        setData(SERVICES[0]); // fallback
      }
    }
  }, [serviceId]);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{data.title}</h1>
          <p className="text-xl font-light opacity-90 max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
      </section>

      {/* TWO COL TEXT / BENEFITS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6 text-charcoal">The QuinnHaven Approach to {data.title}</h2>
              <div className="mb-8">
                {Array.isArray(data.pageCopy) ? (
                  data.pageCopy.map((para: string, idx: number) => (
                    <p key={idx} className="font-light text-charcoal/70 mb-6 leading-relaxed text-lg">{para}</p>
                  ))
                ) : (
                  <p className="font-light text-charcoal/70 mb-8 leading-relaxed text-lg">{data.pageCopy}</p>
                )}
              </div>
              <div className="space-y-4">
                {data.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 border border-charcoal/5 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="font-semibold text-sm uppercase tracking-wider text-charcoal hidden sm:block">{benefit}</span>
                    <span className="font-semibold text-sm tracking-wider text-charcoal sm:hidden">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl border border-charcoal/5">
               <img src={data.img} alt="Detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS BLOCKS */}
      <section className="py-24 bg-white border-y border-charcoal/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-charcoal mb-16">The Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {data.process.map((step: string, i: number) => (
                 <div key={i} className="p-8 border border-charcoal/10 hover:border-gold transition-colors text-center bg-cream">
                    <span className="text-gold font-serif text-4xl mb-4 block">0{i + 1}</span>
                    <h3 className="uppercase tracking-widest text-xs font-bold text-charcoal">{step}</h3>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* MATERIALS SHOWCASE */}
      <section className="py-24 bg-charcoal text-white text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/80 to-charcoal/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <Quote className="w-12 h-12 text-gold/50 mx-auto mb-6" />
          <h3 className="font-serif text-3xl mb-6 text-gold">Premium Materials</h3>
          <p className="font-light text-2xl leading-relaxed text-white/90">
            {data.materials}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="font-light text-charcoal/60">Common questions about our {data.title.toLowerCase()} service.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How long does the design process take?", a: "Typically 2-4 weeks, depending on the complexity of your project and revisions." },
              { q: "Do you handle installation?", a: "Yes, we coordinate with our trusted network of master builders to ensure flawless execution." },
              { q: "Can I bring my own contractor?", a: "Absolutely. We are happy to supply the design and materials directly to your chosen professional." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-charcoal/10 p-8">
                <h4 className="font-semibold text-lg mb-3 text-gold">{faq.q}</h4>
                <p className="font-light text-charcoal/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-8">Ready to transform your space?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link 
              to="/contact" 
              className="bg-charcoal text-cream px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-gold transition-all duration-300 shadow-xl"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/portfolio" 
              className="border border-charcoal/30 text-charcoal px-10 py-5 uppercase tracking-widest text-sm font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 bg-transparent"
            >
              View Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
