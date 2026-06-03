import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Change text-white/70 QuinnHaven Design to text-white
content = content.replace(/text-white\/70 uppercase tracking-\[0.3em\] text-xs font-semibold/, 'text-brand-accent uppercase tracking-[0.3em] text-xs font-semibold');
content = content.replace(/bg-white\/70/g, 'bg-brand-accent'); // line next to it

// Change italic text-white Bathroom Design to italic text-brand-accent
content = content.replace(/<span className="italic text-white">Bathroom Design<\/span>/, '<span className="italic text-brand-accent">Bathroom Design</span>');

// Change the "Book a Consultation" button in final CTA
content = content.replace(/hover:bg-white hover:text-charcoal/g, 'hover:bg-charcoal hover:text-white');

fs.writeFileSync('src/pages/Home.tsx', content);

console.log('Fixed Home Hero text');
