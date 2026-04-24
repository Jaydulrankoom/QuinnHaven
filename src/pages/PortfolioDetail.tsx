import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PORTFOLIO } from "../data";

export default function PortfolioDetail() {
  const { projectId } = useParams();
  
  const project = PORTFOLIO.find(p => p.id === projectId);
  
  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <div className="flex flex-col min-h-screen pt-32 bg-cream text-charcoal">
      
      {/* HEADER SECTION */}
      <section className="pb-16 px-6 max-w-7xl mx-auto w-full">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#141162] hover:text-gold transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <div className="flex justify-between items-end flex-wrap gap-8">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Case Study</span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#141162] mb-4">{project.title}</h1>
            <p className="text-sm font-bold uppercase tracking-widest text-charcoal/60">{project.category} • {project.location}</p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto h-[50vh] md:h-[70vh] rounded-sm overflow-hidden border border-charcoal/5 shadow-2xl">
          <img src={project.img} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 2-COLUMN DETAILS */}
      <section className="py-16 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            
            {/* Left: Overview */}
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl text-[#141162] mb-6">Project Overview</h2>
              <p className="text-lg font-light leading-relaxed text-charcoal/80 mb-8">
                {project.overview}
              </p>
            </div>
            
            {/* Right: Key Details / Features */}
            <div className="md:col-span-5 bg-cream p-8 md:p-12 border border-charcoal/5 rounded-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-6">Key Specifications</h3>
              <ul className="space-y-4">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECONDARY GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-[#141162]">Project Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="h-[400px] md:h-[600px] overflow-hidden rounded-sm shadow-xl border border-charcoal/5">
                  <img src={imgUrl} alt={`${project.title} view ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL PROJECT CTA */}
      <section className="py-24 bg-charcoal text-white text-center px-6">
        <h3 className="font-serif text-3xl md:text-4xl mb-6">Ready to Start Your Project?</h3>
        <p className="text-white/70 font-light mb-10 max-w-xl mx-auto">
          Contact our structural design experts today to discuss how we can transform your home into a sophisticated sanctuary.
        </p>
        <Link to="/contact" className="inline-block bg-gold text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all duration-300">
          Book a Consultation
        </Link>
      </section>

    </div>
  );
}
