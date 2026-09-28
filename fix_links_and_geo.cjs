const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const geoTags = `
    <!-- Local SEO Geo-Tags -->
    <meta name="geo.region" content="IN-KL" />
    <meta name="geo.placename" content="Kerala" />
`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add Geo tags before </head> if not already there
    if (!content.includes('geo.region')) {
        content = content.replace('</head>', geoTags + '\n</head>');
    }

    // Fix broken links
    content = content.replace(/href="modular-kitchen\.html"/g, 'href="service-acrylic-kitchen.html"');
    content = content.replace(/href="wardrobes\.html"/g, 'href="service-wardrobes.html"');
    content = content.replace(/href="bedroom-designing\.html"/g, 'href="services.html"');
    content = content.replace(/href="commercial-interior\.html"/g, 'href="services.html"');
    content = content.replace(/href="consoles-crockery\.html"/g, 'href="services.html"');
    content = content.replace(/href="cots-side-tables\.html"/g, 'href="services.html"');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
}
