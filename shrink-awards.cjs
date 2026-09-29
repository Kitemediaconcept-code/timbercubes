const fs = require('fs');
let content = fs.readFileSync('src/style.css', 'utf8');

// Add awards-wrapper for desktop to constrain width significantly
if (!content.includes('.awards-wrapper {')) {
  content = content.replace(
    /\.award-box \{/,
    `.awards-wrapper {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.award-box {`
  );
}

// Decrease image sizes on mobile and desktop
// Desktop: 
// Maybe just change .award-text h3 size a bit
content = content.replace(
  /font-size: 2\.2rem;/,
  `font-size: 1.8rem;`
);

// Mobile overrides
const mobileOverrides = `
  .awards-wrapper {
    max-width: 100%;
  }
  .award-img {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .award-img img {
    width: 75% !important;
  }
  .award-text {
    text-align: center;
  }
  .award-text h3 {
    font-size: 1.3rem !important;
    align-items: center;
  }
  .award-text p {
    font-size: 0.75rem !important;
    line-height: 1.4;
  }
  .award-signature {
    font-size: 0.8rem !important;
  }
`;

content = content.replace(
  /\.award-box \{\s*flex-direction: column;\s*padding: 20px;\s*gap: 20px;\s*\}\s*\.award-img \{\s*flex: 0 0 auto;\s*width: 100%;\s*\}\s*\.award-text \{\s*text-align: center;\s*\}\s*\.award-text h3 \{\s*align-items: center;\s*\}\s*\.award-text p \{\s*font-size: 0\.8rem;\s*line-height: 1\.5;\s*\}\s*\.award-signature \{\s*font-size: 0\.85rem;\s*\}/,
  `.award-box {
    flex-direction: column;
    padding: 20px;
    gap: 15px;
  }
  ${mobileOverrides}`
);

fs.writeFileSync('src/style.css', content);
