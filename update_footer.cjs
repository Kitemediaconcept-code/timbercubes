const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(file => file.endsWith('.html'));

let count = 0;
files.forEach(file => {
    const filepath = path.join(dir, file);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Original replacements
    content = content.replace(/\s*<li><a href="#">Shop<\/a><\/li>/g, '');
    content = content.replace(/\s*<li><a href="#">Product<\/a><\/li>/g, '');
    content = content.replace(/info@timbercubes\.in/g, 'timbercubes@gmail.com');
    content = content.replace(/Calicut, Kerala, India/g, 'Calicut and Kochi');
    content = content.replace(/9:00 AM - 7:00 PM/g, '9:00 AM - 10:00 PM');
    
    fs.writeFileSync(filepath, content, 'utf-8');
    count++;
});
console.log(`Updated ${count} files.`);
