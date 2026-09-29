const fs = require('fs');
let content = fs.readFileSync('src/style.css', 'utf8');

const mobileStyles = `.cat-card {
    height: 220px;
  }
  .cat-info-pill {
    bottom: 15px;
    left: 15px;
  }
  .btn-layered-pill {
    padding: 3px 10px 3px 3px;
  }
  .btn-text-pill {
    padding: 6px 12px;
    font-size: 0.75rem;
    margin-right: 8px;
  }
  .btn-arrow {
    font-size: 0.9rem;
  }`;

content = content.replace(
  /\.cat-card \{\s*height: 220px;\s*\}/, 
  mobileStyles
);

fs.writeFileSync('src/style.css', content);
