const fs = require('fs');
let content = fs.readFileSync('src/style.css', 'utf8');

// Desktop: 3 -> 4
content = content.replace(
  /\.cat-grid \{\s*display: grid;\s*grid-template-columns: repeat\(3, 1fr\);\s*gap: 20px;\s*\}/,
  `.cat-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}`
);

// Mobile: 1fr -> repeat(2, 1fr)
content = content.replace(
  /\.cat-grid \{\s*grid-template-columns: 1fr;\s*\}/,
  `.cat-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }`
);

// We also might want to reduce the height of cat-card on mobile so two cards look good side by side.
content = content.replace(
  /\.cat-card \{\s*height: 320px;\s*\}/,
  `.cat-card {\n    height: 220px;\n  }`
);

fs.writeFileSync('src/style.css', content);
