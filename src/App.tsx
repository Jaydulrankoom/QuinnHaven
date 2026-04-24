import { Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
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

        <Route path="contact" element={<Contact />} />
        
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
