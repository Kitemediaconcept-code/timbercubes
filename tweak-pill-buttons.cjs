const fs = require('fs');
let content = fs.readFileSync('src/style.css', 'utf8');

// Change base border-radius and padding for the pill
content = content.replace(
  /\.btn-layered-pill \{\s*display: inline-flex;\s*align-items: center;\s*background-color: #f2f2f2;\s*border-radius: 50px;\s*padding: 4px 16px 4px 4px;/,
  `.btn-layered-pill {\n  display: inline-flex;\n  align-items: center;\n  background-color: #f2f2f2;\n  border-radius: 30px;\n  padding: 4px 12px 4px 4px;`
);

content = content.replace(
  /\.btn-text-pill \{\s*background-color: #ffffff;\s*padding: 8px 20px;\s*border-radius: 40px;\s*font-weight: 600;\s*font-size: 0\.95rem;/,
  `.btn-text-pill {\n  background-color: #ffffff;\n  padding: 6px 16px;\n  border-radius: 24px;\n  font-weight: 600;\n  font-size: 0.85rem;`
);

// Check if .cat-card has block display and pointer cursor
if (!content.includes('cursor: pointer;') && content.includes('.cat-card {')) {
  content = content.replace(
    /\.cat-card \{\s*position: relative;/,
    `.cat-card {\n  position: relative;\n  cursor: pointer;`
  );
}

// Mobile specific overrides update
content = content.replace(
  /\.btn-layered-pill \{\s*padding: 3px 10px 3px 3px;\s*\}/,
  `.btn-layered-pill {\n    padding: 2px 8px 2px 2px;\n  }`
);

content = content.replace(
  /\.btn-text-pill \{\s*padding: 6px 12px;\s*font-size: 0\.75rem;\s*margin-right: 8px;\s*\}/,
  `.btn-text-pill {\n    padding: 4px 10px;\n    font-size: 0.7rem;\n    margin-right: 6px;\n  }`
);

fs.writeFileSync('src/style.css', content);
