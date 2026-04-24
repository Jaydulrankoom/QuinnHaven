import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "../data";

export default function ProductDetail() {
  const { productId } = useParams();
  
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
       <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
         <Link to="/products" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/50 hover:text-gold font-bold mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to Products
         </Link>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-6 border border-charcoal/5 shadow-xl">
               <div className="aspect-square relative overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
               </div>
               <div className="grid grid-cols-3 gap-4 mt-4">
                 {[1,2,3].map(i => (
                    <div key={i} className="aspect-square bg-cream overflow-hidden opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                       <img src={product.img} alt="Thumbnail" className="w-full h-full object-cover grayscale" />
                    </div>
                 ))}
               </div>
            </div>

            <div className="flex flex-col justify-center">
               <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Product Category</span>
               <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">{product.title} Design</h1>
               <p className="text-lg text-charcoal/70 font-light leading-relaxed mb-8">
                 Elevate your {product.title.toLowerCase()} project with our curated selection of premium materials. Each piece is selected for its superior durability, aesthetic quality, and timeless appeal.
               </p>

               <ul className="space-y-4 mb-12">
                 {["High-end Finish Options", "Custom Sizing Available", "Manufacturer Warranty", "Professional Installation Support"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold" />
                      <span className="text-sm font-semibold tracking-wide text-charcoal">{feat}</span>
                    </li>
                 ))}
               </ul>

               <div className="bg-gold/5 p-8 border border-gold/20 mb-8">
                 <h4 className="font-serif text-2xl text-gold mb-2">Request Material Samples</h4>
                 <p className="text-sm text-charcoal/70 mb-6">Visit our showroom to feel the quality of our {product.title.toLowerCase()} selections firsthand.</p>
                 <Link to="/book-showroom" className="inline-block bg-charcoal text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors">
                    Book Showroom Visit
                 </Link>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
}
