import fs from 'fs';

let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Replace any leftover text-brand with text-brand-accent in Footer
content = content.replace(/text-brand /g, 'text-brand-accent ');

fs.writeFileSync('src/components/Footer.tsx', content);

console.log('Fixed Footer icons');
