import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND, SERVICES, PRODUCTS, LOCATIONS } from "../data";
import LocationsMegaMenu from "./LocationsMegaMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  // On home, header text is white before scroll due to dark hero.
  const textClass = isHome && !isScrolled && !mobileMenuOpen ? "text-white" : "text-charcoal";
  const bgClass =
    isScrolled || !isHome || mobileMenuOpen
      ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-charcoal/5"
      : "bg-transparent";

  // Check if we need to invert the logo
  const useLightLogo = isHome && !isScrolled && !mobileMenuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} ${textClass}`}>
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* LOGO CONTAINER */}
        <div className="flex-1 flex items-center justify-start">
          <Link to="/" className="flex items-center gap-2 z-50 relative shrink-0 -translate-y-1">
            <img 
              src={BRAND.logo} 
              alt="QuinnHaven Design" 
              width="240"
              height="40"
              fetchPriority="high"
              decoding="async"
              className="h-10 w-auto transition-all duration-300" 
              style={{ 
                filter: useLightLogo 
                  ? "brightness(0) invert(1)" 
                  : "brightness(0) invert(0.1)"
              }} 
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 px-2 shrink-0">
          <Link to="/" className="text-[10px] xl:text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-brand transition-colors">Home</Link>
          <Link to="/blog" className="text-[10px] xl:text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-brand transition-colors">Blog</Link>
          {/* About Menu */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")} className="flex items-center gap-1 text-[10px] xl:text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-brand transition-colors">
              About <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <AnimatePresence>
              {activeDropdown === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-charcoal/5 shadow-2xl py-6 flex flex-col gap-2 rounded-sm"
                >
                  <Link
                    to="/about"
                    onClick={() => setActiveDropdown(null)}
                    className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/meet-our-designer"
                    onClick={() => setActiveDropdown(null)}
                    className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors"
                  >
                    Meet Our Designer
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Services Menu */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")} className="flex items-center gap-1 text-[10px] xl:text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-brand transition-colors">
              Services <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] xl:w-[700px] bg-white border border-charcoal/5 shadow-2xl p-8 flex gap-12 rounded-sm"
                >
                  <div className="flex-1 space-y-4 border-r border-charcoal/5 pr-8">
                     <span className="text-xl font-serif text-charcoal mb-4 block border-b border-charcoal/5 pb-2">Design</span>
                     <Link to="/services/kitchen-design" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Kitchen Design</Link>
                     <Link to="/services/bathroom-design" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Bathroom Design</Link>
                     <Link to="/services/closet-design" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Closet Design</Link>
                     <Link to="/services/basement-bar-design" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Basement Bar Design</Link>
                     <Link to="/services/home-office-design" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Home Office Design</Link>
                     <Link to="/services/entryway-storage-design" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Entryway Storage Design</Link>
                  </div>
                  <div className="flex-1 space-y-4">
                     <span className="text-xl font-serif text-charcoal mb-4 block border-b border-charcoal/5 pb-2">Renovation</span>
                     <Link to="/services/bathroom-remodeling" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Bathroom Remodeling</Link>
                     <Link to="/services/kitchen-remodeling" className="text-sm font-medium text-charcoal/70 hover:text-brand transition-colors block">Kitchen Remodeling</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Mega Menu */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")} className="flex items-center gap-1 text-[10px] xl:text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-brand transition-colors">
              Products <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] xl:w-[750px] bg-white border border-charcoal/5 shadow-2xl p-6 xl:p-8 rounded-sm"
                >
                  <div className="grid grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                    {PRODUCTS.map((p) => (
                      <Link
                        key={p.id}
                        to={`/products`}
                        className="group flex flex-col items-center"
                      >
                         <div className="w-full h-24 xl:h-28 rounded-sm overflow-hidden mb-3 relative">
                           <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                           <img loading="lazy" 
                             src={p.img} 
                             alt={p.title} 
                             referrerPolicy="no-referrer" 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                           />
                         </div>
                         <span className="font-serif text-sm text-charcoal group-hover:text-brand transition-colors text-center">{p.title}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio & Projects Menu */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setActiveDropdown("portfolio")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => setActiveDropdown(activeDropdown === "portfolio" ? null : "portfolio")} className="flex items-center gap-1 text-[10px] xl:text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-brand transition-colors">
              Portfolio <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <AnimatePresence>
              {activeDropdown === "portfolio" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-charcoal/5 shadow-2xl py-4 flex flex-col gap-2 rounded-sm"
                >
                  <Link to="/portfolio" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">All Projects</Link>
                  <Link to="/portfolio?category=Kitchen" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">Kitchen</Link>
                  <Link to="/portfolio?category=Bathroom" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">Bathroom</Link>
                  <Link to="/portfolio?category=Closet" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">Closet</Link>
                  <Link to="/portfolio?category=Basement Bar" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">Basement Bar</Link>
                  <Link to="/portfolio?category=Laundry" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">Laundry</Link>
                  <Link to="/portfolio?category=Home Office" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">Home Office</Link>
                  <Link to="/portfolio?category=Entryway" className="px-6 py-2 text-sm text-charcoal hover:bg-brand/10 hover:text-brand transition-colors">Entryway</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Locations Menu */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setActiveDropdown("locations")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => setActiveDropdown(activeDropdown === "locations" ? null : "locations")} className="flex items-center gap-1 text-[10px] xl:text-[11px] font-semibold tracking-[0.1em] uppercase hover:text-brand transition-colors">
              Locations <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <AnimatePresence>
              {activeDropdown === "locations" && (
                <LocationsMegaMenu onLinkClick={() => setActiveDropdown(null)} />
              )}
            </AnimatePresence>
          </div>

        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-3 xl:gap-6 z-50">
          <a href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-xs xl:text-sm font-medium hover:text-brand transition-colors shrink-0">
            <Phone className="w-4 h-4" />
            <span className="tracking-wide inline-block">{BRAND.phone}</span>
          </a>
          <Link
            to="/contact"
            className="bg-brand text-white hover:bg-charcoal hover:text-white border border-brand hover:border-charcoal px-4 py-3 xl:px-6 tracking-[0.1em] text-[10px] xl:text-[11px] font-semibold uppercase transition-all duration-300 shrink-0"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden flex-1 justify-end items-center gap-4 z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X className="w-7 h-7 text-charcoal" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 w-full h-[100dvh] bg-cream z-40 pt-28 px-6 pb-24 overflow-y-auto"
          >
             <nav className="flex flex-col gap-6 text-charcoal">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-charcoal hover:text-brand border-b border-charcoal/5 pb-2">Home</Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-charcoal hover:text-brand border-b border-charcoal/5 pb-2">Blog</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-charcoal hover:text-brand border-b border-charcoal/5 pb-2">About</Link>
              
              <div>
                <span className="text-xl font-serif text-charcoal mb-4 block border-b border-charcoal/5 pb-2">Services</span>
                
                <div className="mb-4">
                  <span className="text-sm font-bold text-charcoal mb-3 block">Design</span>
                  <div className="flex flex-col gap-3 pl-4 border-l border-brand/20">
                    <Link to="/services/kitchen-design" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Kitchen Design</Link>
                    <Link to="/services/bathroom-design" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Bathroom Design</Link>
                    <Link to="/services/closet-design" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Closet Design</Link>
                    <Link to="/services/basement-bar-design" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Basement Bar Design</Link>
                    <Link to="/services/home-office-design" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Home Office Design</Link>
                    <Link to="/services/entryway-storage-design" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Entryway Storage Design</Link>
                  </div>
                </div>

                <div>
                  <span className="text-sm font-bold text-charcoal mb-3 block">Renovation</span>
                  <div className="flex flex-col gap-3 pl-4 border-l border-brand/20">
                    <Link to="/services/bathroom-remodeling" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Bathroom Remodeling</Link>
                    <Link to="/services/kitchen-remodeling" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-charcoal/70 hover:text-brand">Kitchen Remodeling</Link>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xl font-serif text-charcoal mb-4 block border-b border-charcoal/5 pb-2">Products</span>
                <div className="flex flex-col gap-3 pl-4 border-l border-brand/20">
                  {PRODUCTS.map(p => <Link key={p.id} to={`/products`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">{p.title}</Link>)}
                </div>
              </div>

              <div>
                <span className="text-xl font-serif text-charcoal mb-4 block border-b border-charcoal/5 pb-2">Portfolio</span>
                <div className="flex flex-col gap-3 pl-4 border-l border-brand/20">
                  <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">All Projects</Link>
                  <Link to="/portfolio?category=Kitchen" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">Kitchen</Link>
                  <Link to="/portfolio?category=Bathroom" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">Bathroom</Link>
                  <Link to="/portfolio?category=Closet" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">Closet</Link>
                  <Link to="/portfolio?category=Basement Bar" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">Basement Bar</Link>
                  <Link to="/portfolio?category=Laundry" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">Laundry</Link>
                  <Link to="/portfolio?category=Home Office" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">Home Office</Link>
                  <Link to="/portfolio?category=Entryway" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">Entryway</Link>
                </div>
              </div>

              <div>
                <span className="text-xl font-serif text-charcoal mb-4 block border-b border-charcoal/5 pb-2">Locations</span>
                <div className="flex flex-col gap-3 pl-4 border-l border-brand/20">
                  {LOCATIONS.map(l => <Link key={l.id} to={`/locations/${l.id}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium uppercase tracking-widest text-charcoal/70 hover:text-brand">{l.name}</Link>)}
                </div>
              </div>

              <Link to="/showroom" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-charcoal hover:text-brand border-b border-charcoal/5 pb-2">Showroom</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-charcoal hover:text-brand border-b border-charcoal/5 pb-2">Contact</Link>
              
              <div className="mt-8">
                <a href={`tel:${BRAND.phone}`} className="flex items-center justify-center gap-3 text-brand font-medium mb-6">
                  <Phone className="w-5 h-5"/> {BRAND.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
