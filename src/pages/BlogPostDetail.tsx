import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPostDetail() {
  const { postId } = useParams();
  
  const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-cream">
       <article className="max-w-3xl mx-auto px-6 w-full">
         <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/50 hover:text-gold font-bold mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
         </Link>

         <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-charcoal/20"></span>
                <span className="text-charcoal/50 uppercase tracking-widest text-xs font-bold">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-8 leading-tight">{post.title}</h1>
            <p className="text-xl text-charcoal/70 font-light leading-relaxed italic border-l-4 border-gold pl-6">
                {post.excerpt}
            </p>
         </header>

         <figure className="relative w-full aspect-[21/9] overflow-hidden mb-16 shadow-xl border border-charcoal/5">
             <img src={post.img} alt={post.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
         </figure>

         <div className="markdown-body prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-headings:font-normal prose-p:font-light prose-p:text-charcoal/80 prose-p:leading-relaxed max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>
               {post.content}
            </Markdown>
         </div>
       </article>
    </div>
  );
}
