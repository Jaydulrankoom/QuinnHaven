import { useSearchParams, Link } from "react-router-dom";
import { PORTFOLIO } from "../data";

const CATEGORIES = ["All", "Kitchen", "Bathroom", "Closet", "Basement Bar", "Laundry", "Home Office", "Entryway"];

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const handleCategoryClick = (cat: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (cat === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    setSearchParams(newParams);
  };

  const filteredProjects = PORTFOLIO.filter(p => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    return matchCategory;
  });

  return (
    <div className="flex flex-col min-h-screen pt-32 bg-cream">
      {/* HEADER */}
      <section className="pb-16 text-center px-6">
        <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Work</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 text-charcoal">Design Portfolio</h1>
        <p className="text-lg font-light text-charcoal/70 max-w-2xl mx-auto">
          Explore a curated selection of our finest kitchen, bathroom, and custom cabinetry projects across Connecticut.
        </p>
      </section>

      {/* FILTER TABS */}
      <section className="pb-12 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 font-bold ${
                  activeCategory === cat 
                    ? "bg-charcoal text-brand shadow-md" 
                    : "border border-charcoal/10 text-charcoal hover:border-brand hover:text-brand bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif text-charcoal mb-4">No projects found.</h3>
              <p className="text-charcoal/60">Try adjusting your filters to see more results.</p>
              <button 
                onClick={() => {
                   const newParams = new URLSearchParams(searchParams);
                   newParams.delete("category");
                   setSearchParams(newParams);
                }}
                className="mt-8 px-8 py-3 bg-charcoal text-white uppercase tracking-widest text-xs font-bold hover:bg-brand transition-colors"
               >
                 Clear Filters
               </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project) => (
                <Link to={`/portfolio/${project.id}`} key={project.id} className="group cursor-pointer block border border-charcoal/5 p-4 bg-cream hover:shadow-xl transition-all duration-500">
                   <div className="relative h-[400px] overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img loading="lazy" 
                        src={project.img} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                         <span className="bg-charcoal text-brand px-6 py-3 uppercase tracking-widest text-xs font-bold shadow-2xl">
                            View Case Study
                         </span>
                      </div>
                   </div>
                   <h2 className="font-serif text-2xl text-charcoal mb-1 group-hover:text-brand transition-colors">{project.title}</h2>
                   <p className="text-charcoal/50 text-xs font-bold uppercase tracking-widest">{project.category} • {project.location}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
