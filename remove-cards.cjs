const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const regex1 = /\s*<a href="services\.html" class="cat-card">\s*<img src="https:\/\/images\.unsplash\.com\/photo-1533090481720-856c6e3c1fdc\?auto=format&fit=crop&q=80&w=600" alt="Consoles & Crockery Units">\s*<div class="cat-info-pill btn-layered-pill">\s*<span class="btn-text-pill">Consoles & Crockery Units<\/span>\s*<i class="ph ph-arrow-right btn-arrow"><\/i>\s*<\/div>\s*<\/a>/;

const regex2 = /\s*<a href="services\.html" class="cat-card">\s*<img src="https:\/\/images\.unsplash\.com\/photo-1505693416388-ac5ce068fe85\?auto=format&fit=crop&q=80&w=600" alt="Cots & Side Tables">\s*<div class="cat-info-pill btn-layered-pill">\s*<span class="btn-text-pill">Cots & Side Tables<\/span>\s*<i class="ph ph-arrow-right btn-arrow"><\/i>\s*<\/div>\s*<\/a>/;

content = content.replace(regex1, '');
content = content.replace(regex2, '');

fs.writeFileSync('index.html', content);
