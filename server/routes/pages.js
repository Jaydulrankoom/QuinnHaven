import express from "express";
const router = express.Router();
import fs from "fs-extra";
import path from "path";

const dataDir = path.join(process.cwd(), 'data');

const requireAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

router.use(requireAuth);

const pagesList = [
  // Core
  {id:"home", title:"Home", url:"/", dataFile:"homepage.json", editPage:"/homepage-editor.html", type:"core"},
  {id:"about", title:"About", url:"/about.html", dataFile:"about.json", editPage:"/page-editor.html?page=about", type:"core"},
  {id:"contact", title:"Contact", url:"/contact.html", dataFile:"contact.json", editPage:"/page-editor.html?page=contact", type:"core"},
  {id:"showroom", title:"Showroom", url:"/showroom.html", dataFile:"showroom.json", editPage:"/page-editor.html?page=showroom", type:"core"},
  {id:"builder-supply", title:"Builder Supply", url:"/builder-supply.html", dataFile:"builder-supply.json", editPage:"/page-editor.html?page=builder-supply", type:"core"},
  {id:"project-management", title:"Project Management", url:"/project-management.html", dataFile:"project-management.json", editPage:"/page-editor.html?page=project-management", type:"core"},
  
  // Blog
  {id:"blog", title:"Blog", url:"/blog.html", dataFile:"blog-settings.json", editPage:"/blog-posts.html", type:"blog"},
  
  // Portfolio
  {id:"portfolio", title:"Portfolio", url:"/portfolio/", dataFile:"portfolio.json", editPage:"/portfolio.html", type:"portfolio"},
  {id:"case-studies", title:"Case Studies", url:"/case-studies.html", dataFile:"case-studies.json", editPage:"/portfolio.html?type=case-studies", type:"portfolio"},
  {id:"multifamily", title:"Multifamily Projects", url:"/multifamily-projects.html", dataFile:"multifamily.json", editPage:"/portfolio.html?type=multifamily", type:"portfolio"},

  // Services
  {id:"kitchen-design", title:"Kitchen Design", url:"/services/kitchen-design.html", dataFile:"services.json", editPage:"/services.html#kitchen-design", type:"service"},
  {id:"custom-cabinets", title:"Custom Kitchen Cabinets", url:"/services/custom-kitchen-cabinets.html", dataFile:"services.json", editPage:"/services.html#custom-kitchen-cabinets", type:"service"},
  {id:"bathroom-design", title:"Bathroom Design", url:"/services/bathroom-design.html", dataFile:"services.json", editPage:"/services.html#bathroom-design", type:"service"},
  {id:"closet-design", title:"Closet Design", url:"/services/closet-design.html", dataFile:"services.json", editPage:"/services.html#closet-design", type:"service"},
  {id:"basement-bar", title:"Basement Bar", url:"/services/basement-bar.html", dataFile:"services.json", editPage:"/services.html#basement-bar", type:"service"},
  {id:"home-office", title:"Home Office", url:"/services/home-office.html", dataFile:"services.json", editPage:"/services.html#home-office", type:"service"},
  {id:"entryway-storage", title:"Entryway Storage", url:"/services/entryway-storage.html", dataFile:"services.json", editPage:"/services.html#entryway-storage", type:"service"},

  // Products
  {id:"cabinetry", title:"Cabinetry", url:"/products/cabinetry.html", dataFile:"products.json", editPage:"/products.html#cabinetry", type:"product"},
  {id:"countertop", title:"Countertop", url:"/products/countertop.html", dataFile:"products.json", editPage:"/products.html#countertop", type:"product"},
  {id:"closet", title:"Closet", url:"/products/closet.html", dataFile:"products.json", editPage:"/products.html#closet", type:"product"},
  {id:"vanity", title:"Vanity", url:"/products/vanity.html", dataFile:"products.json", editPage:"/products.html#vanity", type:"product"},
  {id:"tile", title:"Tile", url:"/products/tile.html", dataFile:"products.json", editPage:"/products.html#tile", type:"product"},
  {id:"shower-door", title:"Shower Door", url:"/products/shower-door.html", dataFile:"products.json", editPage:"/products.html#shower-door", type:"product"},
  {id:"hardware", title:"Hardware", url:"/products/hardware.html", dataFile:"products.json", editPage:"/products.html#hardware", type:"product"},

  // Locations
  {id:"wallingford", title:"Wallingford", url:"/locations/wallingford.html", dataFile:"locations.json", editPage:"/locations.html#wallingford", type:"location"},
  {id:"new-haven", title:"New Haven", url:"/locations/new-haven.html", dataFile:"locations.json", editPage:"/locations.html#new-haven", type:"location"},
  {id:"hartford", title:"Hartford", url:"/locations/hartford.html", dataFile:"locations.json", editPage:"/locations.html#hartford", type:"location"},
  {id:"avon", title:"Avon", url:"/locations/avon.html", dataFile:"locations.json", editPage:"/locations.html#avon", type:"location"},
  {id:"norwalk", title:"Norwalk", url:"/locations/norwalk.html", dataFile:"locations.json", editPage:"/locations.html#norwalk", type:"location"},
  {id:"connecticut", title:"Connecticut", url:"/locations/connecticut.html", dataFile:"locations.json", editPage:"/locations.html#connecticut", type:"location"}
];

// GET /api/pages
router.get('/', async (req, res) => {
  try {
    const pagesWithFiles = await Promise.all(pagesList.map(async (page) => {
      const filePath = path.join(dataDir, page.dataFile);
      let exists = false;
      let lastModified = null;
      
      try {
        const stats = await fs.stat(filePath);
        exists = true;
        lastModified = stats.mtime;
      } catch (err) {
        // File doesn't exist
      }
      
      return { ...page, exists, lastModified };
    }));
    
    res.json({ success: true, pages: pagesWithFiles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/pages/:id
router.get('/:id', async (req, res) => {
  try {
    const page = pagesList.find(p => p.id === req.params.id);
    if (!page) {
      return res.status(404).json({ success: false, message: "Page not found" });
    }
    
    const filePath = path.join(dataDir, page.dataFile);
    let exists = false;
    let lastModified = null;
    
    try {
      const stats = await fs.stat(filePath);
      exists = true;
      lastModified = stats.mtime;
    } catch (err) {
      // File doesn't exist
    }
    
    res.json({ success: true, page: { ...page, exists, lastModified } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
