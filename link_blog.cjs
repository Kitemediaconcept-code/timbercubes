const fs = require('fs');
const path = require('path');
const dir = 'g:/Timbercubes';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace <a href="#">Blog</a> with <a href="blog.html">Blog</a>
        content = content.replace(/<a href="#">Blog<\/a>/g, '<a href="blog.html">Blog</a>');
        // Also if there's <a href="blog.html">Blog</a> already we don't need to do anything.
        fs.writeFileSync(filePath, content);
    }
});
console.log('Replaced in all html files.');
