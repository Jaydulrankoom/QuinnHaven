import { useState } from "react";
import { Search, Filter, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../data";
import { Link } from "react-router-dom";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.title)))];

  const displayProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.title === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream">
      {/* HEADER */}
      <section className="bg-white border-b border-charcoal/5 py-16 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold/5 -skew-x-12 translate-x-16" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Materials & Supply</span>
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal">Premium Products</h1>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
               <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
               <input type="text" placeholder="Search products..." className="pl-10 pr-4 py-3 bg-cream border border-charcoal/10 focus:outline-none focus:border-gold w-64 text-sm font-medium" />
             </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12">
        {/* SIDEBAR FILTER */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="flex items-center gap-2 font-serif text-xl text-gold mb-6 border-b border-charcoal/10 pb-4">
             <Filter className="w-5 h-5" /> Categories
          </div>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat}>
                <button 
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm uppercase tracking-widest w-full text-left py-2 px-3 transition-colors ${activeCategory === cat ? 'bg-charcoal text-gold font-bold' : 'text-charcoal/60 hover:text-gold hover:bg-gold/5'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {displayProducts.map(product => (
               <Link to={`/products/${product.id}`} key={product.id} className="group bg-white p-4 border border-charcoal/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="relative aspect-square overflow-hidden mb-4 bg-cream">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-charcoal/90 p-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-gold">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal group-hover:text-gold transition-colors mb-2">{product.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Premium Selection</p>
               </Link>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
