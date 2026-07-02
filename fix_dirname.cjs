const fs = require('fs');
const path = require('path');

function replaceDirname(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace path.join(__dirname, '../../data') with path.join(process.cwd(), 'data')
  content = content.replace(/path\.join\(__dirname,\s*['"]\.\.\/\.\.\/data['"]\)/g, "path.join(process.cwd(), 'data')");
  
  // Replace path.join(__dirname, '../../admin/uploads') with path.join(process.cwd(), 'public/uploads')
  content = content.replace(/path\.join\(__dirname,\s*['"]\.\.\/\.\.\/admin\/uploads['"]\)/g, "path.join(process.cwd(), 'public/uploads')");

  fs.writeFileSync(filePath, content);
}

const routesDir = path.join(__dirname, 'server', 'routes');
const utilsDir = path.join(__dirname, 'server', 'utils');

fs.readdirSync(routesDir).forEach(file => {
  if (file.endsWith('.js')) replaceDirname(path.join(routesDir, file));
});

fs.readdirSync(utilsDir).forEach(file => {
  if (file.endsWith('.js')) replaceDirname(path.join(utilsDir, file));
});
