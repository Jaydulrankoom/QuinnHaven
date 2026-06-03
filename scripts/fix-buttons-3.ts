import fs from 'fs';
import path from 'path';

function fixFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix button hover colors
  content = content.replace(/hover:bg-white hover:text-charcoal/g, 'hover:bg-charcoal hover:text-white');

  // Fix "Serving X" text in hero section.
  // In DynamicLocationService.tsx: `text-brand uppercase tracking-[0.2em] text-sm font-bold`
  // In StateLevelService.tsx: `text-brand uppercase tracking-[0.2em] text-sm font-bold`
  // In Location.tsx: `text-brand uppercase tracking-[0.2em] text-sm font-bold`
  // And `<MapPin className="w-4 h-4 text-brand" />` ... wait, the MapPin inherits the color, so changing `text-brand` to `text-brand-accent` or `text-white` on the wrapper is enough.
  // Actually, wait, let's look at the location specifically.
  // `className="flex items-center justify-center gap-2 text-brand uppercase tracking-[0.2em] text-sm font-bold mb-4"`
  
  content = content.replace(/gap-2 text-brand uppercase tracking-\[0.2em\] text-sm font-bold/g, 'gap-2 text-white uppercase tracking-[0.2em] text-sm font-bold');

  fs.writeFileSync(filePath, content);
}

fixFile('src/pages/services/StateLevelService.tsx');
fixFile('src/pages/services/DynamicLocationService.tsx');
fixFile('src/pages/About.tsx');
fixFile('src/pages/PortfolioDetail.tsx');
fixFile('src/pages/Location.tsx');

console.log('Fixed requested issues.');
