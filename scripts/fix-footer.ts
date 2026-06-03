import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Replace hover:text-brand with hover:text-brand-accent
content = content.replace(/hover:text-brand/g, 'hover:text-brand-accent');

// Replace text-brand on icons with text-brand-accent (ArrowRight, MapPin, Phone, Mail)
content = content.replace(/text-brand"/g, 'text-brand-accent"');

// Save back
fs.writeFileSync('src/components/Footer.tsx', content);

console.log('Fixed Footer.tsx');
