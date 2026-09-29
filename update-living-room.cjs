const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const targetRegex = /<a href="services\.html" class="cat-card">\s*<img src="https:\/\/images\.unsplash\.com\/photo-1616594039964-ae9021a400a0\?auto=format&fit=crop&q=80&w=600" alt="Bedroom Designing">\s*<div class="cat-info-pill btn-layered-pill">\s*<span class="btn-text-pill">Bedroom Designing<\/span>\s*<i class="ph ph-arrow-right btn-arrow"><\/i>\s*<\/div>\s*<\/a>/;

const replacement = `<a href="service-living-room-interiors.html" class="cat-card">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600" alt="Living Room Interiors">
              <div class="cat-info-pill btn-layered-pill">
                <span class="btn-text-pill">Living Room Interiors</span>
                <i class="ph ph-arrow-right btn-arrow"></i>
              </div>
            </a>`;

content = content.replace(targetRegex, replacement);
fs.writeFileSync('index.html', content);
