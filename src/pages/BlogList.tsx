import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blog";

export default function BlogList() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream">
       <section className="bg-white py-16 px-6 border-b border-charcoal/5 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gold/5 skew-x-12 -translate-x-16" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Journal & Insights</span>
            <h1 className="text-4xl md:text-6xl font-serif text-charcoal">Design Blog</h1>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-3 bg-cream border border-charcoal/10 focus:outline-none focus:border-gold w-72 text-sm" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map(post => (
               <Link to={`/blog/${post.id}`} key={post.id} className="group cursor-pointer flex flex-col bg-white border border-charcoal/5 shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-[250px] overflow-hidden">
                     <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors z-10" />
                     <img src={post.img} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute top-4 left-4 z-20 bg-charcoal px-3 py-1 text-[0.65rem] uppercase tracking-widest font-bold text-gold">
                        {post.category}
                     </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                     <span className="text-charcoal/40 text-[0.7rem] uppercase tracking-[0.2em] font-bold mb-4 block">{post.date}</span>
                     <h2 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h2>
                     <p className="font-light text-sm text-charcoal/70 leading-relaxed mb-8 flex-1 line-clamp-3">{post.excerpt}</p>
                     <span className="text-gold text-xs uppercase tracking-widest font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        Read Article &rarr;
                     </span>
                  </div>
               </Link>
            ))}
         </div>
      </section>
    </div>
  );
}
