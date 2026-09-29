const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

// Fix bullet point to use a literal arrow
c = c.replace(/\.mat-list li::before\s*\{[^}]+\}/, `.mat-list li::before {
    content: "→";
    color: #c2633c;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1;
    margin-top: -2px;
  }`);

// Update mobile media query to be 2 columns and very compact
c = c.replace(/@media \(max-width: 600px\)\s*\{[\s\S]*?\}/, `@media (max-width: 600px) {
    .mat-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    .mat-card {
      padding: 12px;
      border-radius: 12px;
    }
    .mat-title {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    .mat-subtitle {
      font-size: 0.75rem;
    }
    .mat-card h3 {
      font-size: 0.8rem;
      margin-bottom: 10px;
      padding-bottom: 8px;
    }
    .mat-list li {
      font-size: 0.65rem;
      margin-bottom: 6px;
      gap: 4px;
    }
    .mat-list li::before {
      font-size: 0.8rem;
    }
    .mat-icon {
      width: 32px;
      height: 32px;
      font-size: 1.1rem;
      margin-bottom: 10px;
      border-radius: 8px;
    }
  }`);

fs.writeFileSync('index.html', c);
