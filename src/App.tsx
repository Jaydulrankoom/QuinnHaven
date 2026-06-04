import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useSEO } from "./hooks/useSEO";

// Lazy load non-critical routes to reduce main bundle size
const About = lazy(() => import("./pages/About"));
const MeetOurDesigner = lazy(() => import("./pages/MeetOurDesigner"));
const Showroom = lazy(() => import("./pages/Showroom"));
const ShowroomContact = lazy(() => import("./pages/ShowroomContact"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));
const DynamicLocationService = lazy(() => import("./pages/services/DynamicLocationService"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Location = lazy(() => import("./pages/Location"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDetail = lazy(() => import("./pages/PortfolioDetail"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPostDetail = lazy(() => import("./pages/BlogPostDetail"));
const ProjectManagement = lazy(() => import("./pages/ProjectManagement"));
const BuilderSupply = lazy(() => import("./pages/BuilderSupply"));
const MultifamilyProjects = lazy(() => import("./pages/MultifamilyProjects"));
const Process = lazy(() => import("./pages/Process"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Contact = lazy(() => import("./pages/Contact"));
const GenericPage = lazy(() => import("./pages/GenericPage"));

function DynamicSEO() {
  const location = useLocation();
  const path = location.pathname;

  let title = "QuinnHaven Design | Luxury Kitchen & Bathroom Remodeling in Connecticut";
  let description = "Experience the pinnacle of custom cabinetry and spatial planning with QuinnHaven Design. Luxury kitchen and bathroom remodeling in Connecticut.";
  
  if (path.includes('/about') || path.includes('/meet-our-designer')) {
    title = "About Us | QuinnHaven Design";
    description = "Learn about QuinnHaven Design, Connecticut's premier experts in luxury kitchen and bathroom design and remodeling.";
  } else if (path.includes('/services')) {
    title = "Our Services | Luxury Kitchen & Bath Remodeling | QuinnHaven Design";
    description = "Explore our comprehensive remodeling services including kitchen design, bathroom retreats, custom cabinetry and spatial planning in CT.";
  } else if (path.includes('/portfolio') || path.includes('/case-studies')) {
    title = "Portfolio & Case Studies | QuinnHaven Design";
    description = "View our recent luxury remodeling projects, showcasing bespoke design and flawless execution across Connecticut.";
  } else if (path.includes('/showroom')) {
    title = "Wallingford Design Showroom | QuinnHaven Design";
    description = "Visit our extensive design showroom in Wallingford, CT. See and feel premium materials, cabinetry, and hardware in person.";
  } else if (path.includes('/contact')) {
    title = "Contact Us | QuinnHaven Design";
    description = "Get in touch with QuinnHaven Design to start planning your luxury kitchen or bathroom remodeling project in Connecticut.";
  } else if (path.includes('/blog')) {
    title = "Design Insights & Blog | QuinnHaven Design";
    description = "Read the latest trends, insights, and inspiration for kitchen and bathroom design from the experts at QuinnHaven.";
  } else if (path.length > 2) {
    // Basic fallback for other pages (capitalize path)
    const formattedPath = path.replace('/', '').replace(/-/g, ' ');
    title = `${formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1)} | QuinnHaven Design`;
  }

  useSEO({
    title,
    description,
    canonical: `https://quinnhavendesign.com${path}`
  });

  return null;
}

export default function App() {
  return (
    <>
      <DynamicSEO />
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="meet-our-designer" element={<MeetOurDesigner />} />
            <Route path="showroom" element={<Showroom />} />
            <Route path="book-showroom" element={<ShowroomContact />} />
            
            {/* Dynamic Service Routes */}
            <Route path="services" element={<ServicesOverview />} />
            <Route path="services/:seoSlug" element={<DynamicLocationService />} />
            
            {/* Products */}
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<ProductDetail />} />
            
            {/* Dynamic Location Routes */}
            <Route path="locations/:locationId" element={<Location />} />
            
            {/* Portfolio */}
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:projectId" element={<PortfolioDetail />} />
            
            {/* Blog & CMS */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:postId" element={<BlogPostDetail />} />
            
            {/* Misc Pages (Case Studies, Project Mgmt, etc.) */}
            <Route path="project-management" element={<ProjectManagement />} />
            <Route path="builder-supply" element={<BuilderSupply />} />
            <Route path="multifamily-projects" element={<MultifamilyProjects />} />
            <Route path="case-studies" element={<Portfolio />} />
            <Route path="process" element={<Process />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />

            <Route path="contact" element={<Contact />} />
            
            {/* Fallback */}
            <Route path="*" element={<GenericPage title="404 Page Not Found" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
