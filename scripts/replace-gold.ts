import fs from 'fs';
import path from 'path';

function replaceInDir(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceInDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace hardcoded #141162 in some places from earlier
      content = content.replace(/bg-\[\#141162\]/g, 'bg-brand');
      content = content.replace(/text-\[\#141162\]/g, 'text-brand');
      content = content.replace(/border-\[\#141162\]/g, 'border-brand');
      content = content.replace(/hover:bg-\[\#141162\]/g, 'hover:bg-brand');
      content = content.replace(/hover:text-\[\#141162\]/g, 'hover:text-brand');
      
      // Replace gold with brand
      content = content.replace(/bg-gold-light/g, 'bg-brand-light');
      content = content.replace(/bg-gold/g, 'bg-brand');
      content = content.replace(/text-gold-light/g, 'text-brand-light');
      content = content.replace(/text-gold/g, 'text-brand');
      content = content.replace(/border-gold-light/g, 'border-brand-light');
      content = content.replace(/border-gold/g, 'border-brand');
      content = content.replace(/hover:text-gold/g, 'hover:text-brand');
      content = content.replace(/hover:bg-gold/g, 'hover:bg-brand');
      
      fs.writeFileSync(filePath, content);
    }
  }
}

replaceInDir(path.join(process.cwd(), 'src'));
console.log('Replacement complete.');
