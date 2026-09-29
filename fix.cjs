const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
c = c.replace(/content: "[^"]*";/, 'content: "\\\\2022";');
fs.writeFileSync('index.html', c);
