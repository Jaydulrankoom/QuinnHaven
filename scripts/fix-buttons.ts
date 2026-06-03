import fs from 'fs';
import path from 'path';

function fixButtonsDir(dir: string) {
  for (const file of fs.readdirSync(dir)) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fixButtonsDir(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Specifically target buttons with:
      // bg-brand ... hover:bg-brand -> 
      // let's just replace `hover:bg-brand` with `hover:bg-[#2a24b0]` (a lighter shade of brand)
      // wait, let's replace `hover:bg-brand` with `hover:bg-brand-light`
      // Wait, is there any button that starts with bg-white hover:bg-brand? 
      // The user issue: "the button hover color needs to be improved for better visibility"
      // If we replace `hover:bg-brand` with `hover:bg-charcoal`, it gives a dark contrasting hover.
      // But we had buttons that are outlined: hover:bg-brand hover:text-white. Becoming hover:bg-charcoal is fine too.
      // We also had buttons bg-brand hover:bg-white hover:text-brand. The user said:
      // "For example, the *Book a Consultation* button looks good in its normal state, but the hover color does not look good and should be improved."
      // The "Book a Consultation" in Home was `bg-brand ... hover:bg-white hover:text-brand`. So the bright white hover flashes too much. Changing it to `hover:bg-charcoal hover:text-white` makes more sense.
      // Let's globally replace:
      // "hover:bg-white hover:text-brand" -> "hover:bg-[#201b94] hover:text-white"
      // "hover:bg-brand hover:text-white" -> "hover:bg-charcoal hover:text-white"  // if it was an outlined button initially
      // "bg-brand text-white ... hover:bg-brand" -> the ones I replaced earlier
      
      // So let's do:
      content = content.replace(/hover:bg-white hover:text-brand/g, 'hover:bg-charcoal hover:text-white');
      
      // Also fix the ones that got messed up from the previous replace
      content = content.replace(/hover:bg-brand hover:text-white/g, 'hover:bg-[#2821b3] hover:text-white');
      content = content.replace(/hover:bg-brand transition-all/g, 'hover:bg-[#2821b3] transition-all');
      content = content.replace(/hover:bg-brand transition-colors/g, 'hover:bg-[#2821b3] transition-colors');
      content = content.replace(/hover:border-brand/g, 'hover:border-[#2821b3]');
      
      fs.writeFileSync(filePath, content);
    }
  }
}

fixButtonsDir('src/pages');
fixButtonsDir('src/components');

console.log('Fixed Button hovers');
