import fs from 'fs';
import path from 'path';

function fixDir(dir: string) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      content = content.replace(/text-brand-light/g, 'text-brand-accent');
      
      fs.writeFileSync(filePath, content);
    }
  }
}

fixDir('src/pages');
fixDir('src/components');

console.log('Fixed text-brand-light text hovers to text-brand-accent globally');
