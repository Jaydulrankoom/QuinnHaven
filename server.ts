import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

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
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { setHeaders: setCacheHeaders }));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
