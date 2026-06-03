import fs from 'fs';
import path from 'path';

function fixDir(dir: string) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Specifically target hover:bg-[#2821b3] and fix it up based on its context
      
      // Let's replace the whole classes depending on what they contain.
      // But it's easier to just do regex to find what kind of button it is.
      // E.g., if it has `bg-brand text-white`
      content = content.replace(/bg-brand(.*?)hover:bg-\[\#2821b3\]/g, 'bg-brand$1hover:bg-charcoal');
      
      // If it's a charcoal button hovering to 2821b3 (used to be gold) -> hover:bg-brand
      content = content.replace(/bg-charcoal(.*?)hover:bg-\[\#2821b3\]/g, 'bg-charcoal$1hover:bg-brand');
      
      // If it's an outline button: border-brand text-brand -> hover:bg-brand
      content = content.replace(/border-brand(.*?)hover:bg-\[\#2821b3\]/g, 'border-brand$1hover:bg-brand');

      // What if the button is bg-white text-charcoal ? (Like Location.tsx)
      content = content.replace(/bg-white text-charcoal(.*?)hover:bg-\[\#2821b3\]/g, 'bg-white text-charcoal$1hover:bg-brand');

      // Catch any remaining hover:bg-[#2821b3] that we missed and turn them to hover:bg-brand
      content = content.replace(/hover:bg-\[\#2821b3\]/g, 'hover:bg-brand');

      fs.writeFileSync(filePath, content);
    }
  }
}

fixDir('src/pages');
fixDir('src/components');

console.log('Fixed #2821b3 hovers');
