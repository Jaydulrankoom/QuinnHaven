import fs from 'fs';
import path from 'path';

const baseUrl = 'https://quinnhavendesign.com';
const routes = [
  '/', '/about', '/meet-our-designer', '/showroom', '/book-showroom', 
  '/services', '/products', '/portfolio', '/blog', '/contact',
  '/project-management', '/builder-supply', '/multifamily-projects',
  '/process', '/faq', '/privacy-policy', '/terms-of-use'
];

const services = [
  'kitchen-design', 'custom-kitchen-cabinets', 'bathroom-design',
  'closet-design', 'basement-bar-design', 'home-office-design', 'entryway-storage-design'
];

const cities = ['wallingford-ct', 'new-haven-ct', 'hartford-ct', 'avon-ct', 'norwalk-ct'];

// Add base service routes
for (const s of services) {
  routes.push(`/services/${s}`);
}

// Add dynamic location service routes
for (const s of services) {
  for (const c of cities) {
    routes.push(`/services/${s}-${c}`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.mkdirSync(path.join(process.cwd(), 'public'), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap, 'utf-8');
console.log('Generated public/sitemap.xml successfully!');

const robots = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robots, 'utf-8');
console.log('Generated public/robots.txt successfully!');
