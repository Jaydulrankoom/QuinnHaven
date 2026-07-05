import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;
      try {
        const docRef = doc(db, "portfolio", projectId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  const nextSlide = () => {
    if (project?.gallery) {
      setActiveSlide((prev) =>
        prev === project.gallery.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevSlide = () => {
    if (project?.gallery) {
      setActiveSlide((prev) =>
        prev === 0 ? project.gallery.length - 1 : prev - 1,
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="text-charcoal/60 uppercase tracking-widest text-sm font-bold">
          Loading case study...
        </p>
      </div>
    );
  }

  if (notFound || !project) return <Navigate to="/portfolio" replace />;

  return (
    <div className="flex flex-col min-h-screen pt-32 bg-cream text-charcoal">
      {/* HEADER SECTION */}
      <section className="pb-16 px-6 max-w-7xl mx-auto w-full">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <div className="flex justify-between items-end flex-wrap gap-8">
          <div>
            <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Case Study
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand mb-4">
              {project.title}
            </h1>
            <p className="text-sm font-bold uppercase tracking-widest text-charcoal/60">
              {project.category} • {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto h-[50vh] md:h-[70vh] rounded-sm overflow-hidden border border-charcoal/5 shadow-2xl">
          <img
            loading="lazy"
            src={
              project.gallery?.[0] ||
              "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            }
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2-COLUMN DETAILS */}
      <section className="py-16 bg-white border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Left: Overview */}
            <div className="md:col-span-7">
              <h2 className="font-serif text-3xl text-brand mb-6">
                Project Overview
              </h2>
              {project.content ? (
                <div
                  className="prose prose-charcoal max-w-none text-lg font-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              ) : (
                <p className="text-lg font-light leading-relaxed text-charcoal/80 mb-8">
                  {project.overview || "No overview available."}
                </p>
              )}
            </div>

            {/* Right: Key Details / Features */}
            <div className="md:col-span-5 bg-cream p-8 md:p-12 border border-charcoal/5 rounded-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Key Specifications
              </h3>
              <ul className="space-y-4">
                {(
                  project.details || ["Custom Design", "Premium Materials"]
                ).map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 font-light leading-relaxed text-sm">
                      {detail}
                    </span>
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
              <h2 className="font-serif text-3xl md:text-4xl text-brand">
                Project Gallery
              </h2>
            </div>

            {/* Main Slider View */}
            <div className="relative h-[50vh] md:h-[75vh] w-full rounded-sm overflow-hidden shadow-2xl group border border-charcoal/5 bg-charcoal/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  loading="lazy"
                  src={project.gallery[activeSlide]}
                  alt={`${project.title} view ${activeSlide + 1}`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                />
              </AnimatePresence>

              {project.gallery.length > 1 && (
                <>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Nav Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0 z-20 border border-white/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 z-20 border border-white/20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                    {project.gallery.map((_: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`transition-all duration-500 rounded-full ${
                          idx === activeSlide
                            ? "w-10 h-1.5 bg-white"
                            : "w-1.5 h-1.5 bg-white/50 hover:bg-white/90"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Zoom Hint */}
                  <div className="absolute top-6 right-6 px-4 py-2 flex items-center gap-2 bg-charcoal/40 backdrop-blur-md text-white/90 text-xs tracking-widest uppercase font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-white/10 z-20">
                    <ZoomIn className="w-4 h-4" /> Click to Zoom
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="flex gap-4 mt-8 overflow-x-auto pb-4 hide-scrollbar justify-start md:justify-center">
                {project.gallery.map((imgUrl: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative shrink-0 w-32 h-24 rounded-sm overflow-hidden transition-all duration-300 ${
                      idx === activeSlide
                        ? "ring-2 ring-brand ring-offset-4 ring-offset-cream"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && project.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={project.gallery[activeSlide]}
                alt={`${project.title} view ${activeSlide + 1}`}
                referrerPolicy="no-referrer"
                className="max-h-[90vh] max-w-[90vw] object-contain select-none shadow-2xl"
              />
            </AnimatePresence>

            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-50"
                >
                  <ChevronLeft className="w-12 h-12" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-50"
                >
                  <ChevronRight className="w-12 h-12" />
                </button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm tracking-widest bg-charcoal/50 px-4 py-2 rounded-full backdrop-blur-md">
                  {activeSlide + 1} / {project.gallery.length}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL PROJECT CTA */}
      <section className="py-24 bg-charcoal text-white text-center px-6">
        <h3 className="font-serif text-3xl md:text-4xl mb-6">
          Ready to Start Your Project?
        </h3>
        <p className="text-white/70 font-light mb-10 max-w-xl mx-auto">
          Contact our structural design experts today to discuss how we can
          transform your home into a sophisticated sanctuary.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-brand text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-charcoal hover:text-white transition-all duration-300"
        >
          Book a Consultation
        </Link>
      </section>
    </div>
  );
}
