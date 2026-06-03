import fs from 'fs';
import path from 'path';

function fixDir(dir: string) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      content = content.replace(/hover:border-\[\#2821b3\]/g, 'hover:border-brand');
      content = content.replace(/group-hover:border-\[\#2821b3\]/g, 'group-hover:border-brand');
      
      fs.writeFileSync(filePath, content);
    }
  }
}

fixDir('src/pages');
fixDir('src/components');

console.log('Fixed border #2821b3 hovers');
