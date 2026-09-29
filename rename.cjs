const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(
  /<span class="btn-text-pill">Wardrobes<\/span>/, 
  '<span class="btn-text-pill">Bedroom Interiors</span>'
);
content = content.replace(
  /alt="Wardrobes"/, 
  'alt="Bedroom Interiors"'
);
fs.writeFileSync('index.html', content);
