import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Location from "./pages/Location";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import Contact from "./pages/Contact";
import GenericPage from "./pages/GenericPage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import BlogList from "./pages/BlogList";
import BlogPostDetail from "./pages/BlogPostDetail";
import ServicesOverview from "./pages/ServicesOverview";
import Process from "./pages/Process";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import MeetOurDesigner from "./pages/MeetOurDesigner";
import Showroom from "./pages/Showroom";
import ShowroomContact from "./pages/ShowroomContact";
import ProjectManagement from "./pages/ProjectManagement";
import BuilderSupply from "./pages/BuilderSupply";
import MultifamilyProjects from "./pages/MultifamilyProjects";
import DynamicLocationService from "./pages/services/DynamicLocationService";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import { useSEO } from "./hooks/useSEO";

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
        <Route path="showroom" element={<Showroom />} />
        <Route path="process" element={<Process />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />

        <Route path="contact" element={<Contact />} />
        
        {/* Fallback */}
        <Route path="*" element={<GenericPage title="404 Page Not Found" />} />
      </Route>
    </Routes>
    </>
  );
}
