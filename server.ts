import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { createRequire } from 'module';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  // Ensure robust caching headers for static assets
  const setCacheHeaders = (res: any, reqPath: string) => {
    if (reqPath.endsWith('.html')) {
      // Don't cache HTML
      res.setHeader('Cache-Control', 'no-cache, max-age=0, must-revalidate');
    } else if (reqPath.match(/\.(js|css|png|jpg|jpeg|gif|webp|ico|svg|woff2|woff|ttf)$/)) {
      // Aggressive caching for static assets
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  };

  // Serve robots.txt dynamically
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send(`User-agent: *\nAllow: /\nSitemap: https://quinnhavendesign.com/sitemap.xml`);
  });

  // Serve sitemap.xml dynamically
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = 'https://quinnhavendesign.com';
    const routes = [
      '/', '/about', '/meet-our-designer', '/showroom', '/book-showroom', 
      '/services', '/products', '/portfolio', '/blog', '/contact',
      '/project-management', '/builder-supply', '/multifamily-projects',
      '/process', '/faq'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
`).join('')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  // Admin API Routes and static files
  
  // Body parsing and session for admin API
  app.set('trust proxy', true);
  app.use('/api', bodyParser.json());
  app.use('/api', bodyParser.urlencoded({ extended: true }));
  app.use('/api', cookieSession({
    name: 'session',
    secret: process.env.SESSION_SECRET || 'quinnhaven_secret_2025',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  }));

  try {
    const authRoutes = require('./server/routes/auth.js');
    app.use('/api/auth', authRoutes);
  } catch (e) { console.log('Auth routes failed or missing', e.message); }

  try {
    const contentRoutes = require('./server/routes/content.js');
    app.use('/api/content', contentRoutes);
  } catch (e) { console.log('Content routes failed or missing', e.message); }

  try {
    const blogRoutes = require('./server/routes/blog.js');
    app.use('/api/blog', blogRoutes);
  } catch (e) {}

  try {
    const portfolioRoutes = require('./server/routes/portfolio.js');
    app.use('/api/portfolio', portfolioRoutes);
  } catch (e) {}

  try {
    const mediaRoutes = require('./server/routes/media.js');
    app.use('/api/media', mediaRoutes);
  } catch (e) {}

  try {
    const settingsRoutes = require('./server/routes/settings.js');
    app.use('/api/settings', settingsRoutes);
  } catch (e) {}

  try {
    const menuRoutes = require('./server/routes/menu.js');
    app.use('/api/menu', menuRoutes);
  } catch (e) {}

  try {
    const pagesRoutes = require('./server/routes/pages.js');
    app.use('/api/pages', pagesRoutes);
  } catch (e) {}

  // Mount Admin panel statically
  app.use('/admin', express.static(path.join(process.cwd(), 'public/admin')));
  app.use('/uploads', express.static(path.join(process.cwd(), 'public/admin/uploads')));

  // Redirect /admin to /admin/login.html if not logged in (handled by static files + client JS)
  // For simplicity, let's just make sure /admin maps to index if we had one.
  app.get('/admin', (req, res) => {
    res.redirect('/admin/dashboard.html');
  });

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    // Fallback for development if Vite middleware doesn't catch it
    app.use('*', async (req, res, next) => {
      try {
        const template = await fs.promises.readFile(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        const html = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { setHeaders: setCacheHeaders, index: false }));
    
    let cachedTemplate: string | null = null;
    app.get('*', async (req, res) => {
      try {
        let template = cachedTemplate;
        if (!template) {
          template = await fs.promises.readFile(path.join(distPath, 'index.html'), 'utf-8');
          if (process.env.NODE_ENV === 'production') {
            cachedTemplate = template;
          }
        }
        
        let title = "QuinnHaven Design | Luxury Kitchen & Bathroom Remodeling in Connecticut";
        let description = "Experience the pinnacle of custom cabinetry and spatial planning with QuinnHaven Design. Luxury kitchen and bathroom remodeling in Connecticut.";
        
        const pathUrl = req.path;
        
        if (pathUrl.includes('/about') || pathUrl.includes('/meet-our-designer')) {
          title = "About Us | QuinnHaven Design";
          description = "Learn about QuinnHaven Design, Connecticut's premier experts in luxury kitchen and bathroom design and remodeling.";
        } else if (pathUrl.startsWith('/services/') && pathUrl.length > 10) {
          const slug = pathUrl.replace('/services/', '');
          const knownServices = ['kitchen-design', 'bathroom-remodeling', 'custom-cabinetry', 'home-renovation', 'kitchen-remodeling', 'bathroom-design', 'custom-kitchen-cabinets', 'closet-design', 'basement-bar-design', 'home-office-design', 'entryway-storage-design'];
          let matchedService = knownServices.find(s => slug.startsWith(s));
          let serviceName = '';
          let locationName = '';
          
          if (matchedService) {
              serviceName = matchedService.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
              let locStr = slug.substring(matchedService.length + 1); // +1 for the dash
              if (locStr.endsWith('-ct')) {
                  locStr = locStr.substring(0, locStr.length - 3);
              }
              locationName = locStr.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          } else {
              const words = slug.split('-');
              let hasCT = words[words.length-1].toLowerCase() === 'ct';
              if (hasCT) words.pop();
              serviceName = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          }

          if (serviceName && locationName) {
              let displayLocation = locationName === 'Connecticut' ? 'Connecticut' : `${locationName}, CT`;
              title = `${serviceName} in ${displayLocation} | Quinn Haven Design`;
              description = `Looking for ${serviceName.toLowerCase()} in ${displayLocation}? Quinn Haven Design offers premier luxury design and remodeling services in your area. Contact us today.`;
          } else {
              title = `${serviceName} | Quinn Haven Design`;
              description = `Learn more about ${serviceName} services from Quinn Haven Design. We bring luxury and expert craftsmanship to every project.`;
          }
        } else if (pathUrl === '/services') {
          title = "Our Services | Luxury Kitchen & Bath Remodeling | Quinn Haven Design";
          description = "Explore our comprehensive remodeling services including kitchen design, bathroom retreats, custom cabinetry and spatial planning in CT.";
        } else if (pathUrl.startsWith('/locations/') && pathUrl.length > 11) {
          const locId = pathUrl.replace('/locations/', '');
          const locationName = locId.replace('-ct', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          let displayLocation = locationName === 'Connecticut' ? 'Connecticut' : `${locationName}, CT`;
          title = `Luxury Kitchen & Bath Remodeling in ${displayLocation} | Quinn Haven Design`;
          description = `Quinn Haven Design provides expert luxury kitchen and bathroom remodeling services in ${displayLocation}. Transform your home with our bespoke design solutions.`;
        } else if (pathUrl.includes('/portfolio') || pathUrl.includes('/case-studies')) {
          title = "Portfolio & Case Studies | QuinnHaven Design";
          description = "View our recent luxury remodeling projects, showcasing bespoke design and flawless execution across Connecticut.";
        } else if (pathUrl.includes('/showroom')) {
          title = "Wallingford Design Showroom | QuinnHaven Design";
          description = "Visit our extensive design showroom in Wallingford, CT. See and feel premium materials, cabinetry, and hardware in person.";
        } else if (pathUrl.includes('/contact')) {
          title = "Contact Us | QuinnHaven Design";
          description = "Get in touch with QuinnHaven Design to start planning your luxury kitchen or bathroom remodeling project in Connecticut.";
        } else if (pathUrl.includes('/blog')) {
          title = "Design Insights & Blog | QuinnHaven Design";
          description = "Read the latest trends, insights, and inspiration for kitchen and bathroom design from the experts at QuinnHaven.";
        } else if (pathUrl.length > 2) {
          const formattedPath = pathUrl.replace('/', '').replace(/-/g, ' ');
          title = `${formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1)} | QuinnHaven Design`;
        }

        template = template.replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`);
        if (template.includes('<meta name="description"')) {
           template = template.replace(/<meta name="description" content="([^"]*)"\s*\/?>/, `<meta name="description" content="${description}" />`);
        } else {
           template = template.replace('</head>', `  <meta name="description" content="${description}" />\n</head>`);
        }
        
        if (template.includes('<meta property="og:title"')) {
            template = template.replace(/<meta property="og:title" content="([^"]*)"\s*\/?>/, `<meta property="og:title" content="${title}" />`);
        }
        if (template.includes('<meta property="og:description"')) {
            template = template.replace(/<meta property="og:description" content="([^"]*)"\s*\/?>/, `<meta property="og:description" content="${description}" />`);
        }
        
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (err) {
        res.sendFile(path.join(distPath, 'index.html'));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
