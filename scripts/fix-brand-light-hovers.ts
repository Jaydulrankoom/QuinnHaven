import fs from 'fs';
import path from 'path';

function fixDir(dir: string) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      content = content.replace(/group-hover:text-brand-light/g, 'group-hover:text-brand-accent');
      content = content.replace(/hover:text-brand-light/g, 'hover:text-brand-accent');
      
      fs.writeFileSync(filePath, content);
    }
  }
}

fixDir('src/pages');
fixDir('src/components');

console.log('Fixed brand-light text hovers to brand-accent');
