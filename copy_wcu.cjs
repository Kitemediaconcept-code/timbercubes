const fs = require('fs');
const aboutHtml = fs.readFileSync('g:\\Timbercubes\\about.html', 'utf8');

// Extract the section
const startIndex = aboutHtml.indexOf('<!-- Why Choose Us Section -->');
const endIndex = aboutHtml.indexOf('<!-- Customer Reviews Section -->');
const wcuSection = aboutHtml.substring(startIndex, endIndex);

let indexHtml = fs.readFileSync('g:\\Timbercubes\\index.html', 'utf8');

// The Design Process section ends around "<!-- 6.7 Project Timelines Section -->"
// Let's insert it before "<!-- 6.7 Project Timelines Section -->"
const insertPoint = indexHtml.indexOf('<!-- 6.7 Project Timelines Section -->');

indexHtml = indexHtml.substring(0, insertPoint) + '\n' + wcuSection + '\n' + indexHtml.substring(insertPoint);

fs.writeFileSync('g:\\Timbercubes\\index.html', indexHtml);
