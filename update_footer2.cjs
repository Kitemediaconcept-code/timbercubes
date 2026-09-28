const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(file => file.endsWith('.html'));

let count = 0;
files.forEach(file => {
    const filepath = path.join(dir, file);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Replace location again
    content = content.replace(/Calicut and Kochi/g, 'Thrissur, Calicut, Kochi');
    // Just in case user spelled it Trissur, let's make sure both cases would be handled if I ran it again, but this works fine.
    
    fs.writeFileSync(filepath, content, 'utf-8');
    count++;
});
console.log(`Updated ${count} files.`);
