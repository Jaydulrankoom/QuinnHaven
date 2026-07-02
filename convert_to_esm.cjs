const fs = require('fs');
const path = require('path');

function convertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace const/let/var x = require('y') with import x from 'y'
  content = content.replace(/(const|let|var)\s+([a-zA-Z0-9_]+)\s*=\s*require\((['"])(.*?)\3\);/g, 'import $2 from "$4";');
  
  // Replace const/let/var { x, y } = require('z') with import { x, y } from 'z'
  content = content.replace(/(const|let|var)\s+\{\s*(.*?)\s*\}\s*=\s*require\((['"])(.*?)\3\);/g, 'import { $2 } from "$4";');
  
  // Replace module.exports = x with export default x
  content = content.replace(/module\.exports\s*=\s*([a-zA-Z0-9_]+);/g, 'export default $1;');
  
  // Replace module.exports = { x, y } with export { x, y }
  content = content.replace(/module\.exports\s*=\s*\{([\s\S]*?)\};/g, 'export {$1};');

  // Fix fileHelper imports
  content = content.replace(/from "\.\.\/utils\/fileHelper"/g, 'from "../utils/fileHelper.js"');
  content = content.replace(/from "\.\/fileHelper"/g, 'from "./fileHelper.js"');
  
  // Add `.js` to local imports if missing
  content = content.replace(/from "(\.\.?\/.*?)"/g, (match, p1) => {
    if (!p1.endsWith('.js')) {
      return `from "${p1}.js"`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content);
}

const routesDir = path.join(__dirname, 'server', 'routes');
const utilsDir = path.join(__dirname, 'server', 'utils');

fs.readdirSync(routesDir).forEach(file => {
  if (file.endsWith('.js')) convertFile(path.join(routesDir, file));
});

fs.readdirSync(utilsDir).forEach(file => {
  if (file.endsWith('.js')) convertFile(path.join(utilsDir, file));
});
