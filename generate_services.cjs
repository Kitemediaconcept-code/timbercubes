const fs = require('fs');

const template = fs.readFileSync('service-wardrobes.html', 'utf8');

const services = [
  {
    file: 'service-modular-kitchen.html',
    title: 'Modular Kitchen Designers in Kerala | Timbercubés',
    heroBadge: 'KITCHEN SERVICES',
    heroTitle: 'Modular Kitchens',
    heroDesc: 'Custom-designed modular kitchens for modern homes.',
    img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80&w=900',
    content: `
            <h2 style="font-size: 1.8rem; margin-top: 20px; font-weight: 700; color: #d9381e;">Modular Kitchen</h2>
            <h3 style="color: #617f4b; font-size: 1.3rem; margin-top: 20px; font-weight: 600;">Kitchen Finishes</h3>
            <ul style="font-size: 1.1rem; color: #333; line-height: 1.8; margin-bottom: 30px; padding-left: 20px;">
              <li>Laminate &ndash; Solid Colour Kitchens</li>
              <li>Laminate &ndash; Solid Colour + Wood Grain Kitchens</li>
              <li>Acrylic Kitchens</li>
              <li>Polyurethane (PU) Coated Kitchens</li>
              <li>Lacquered Glass + Laminate Kitchens</li>
            </ul>
    `
  },
  {
    file: 'service-bedroom-interiors.html',
    title: 'Bedroom Interior Designers in Kerala | Timbercubés',
    heroBadge: 'BEDROOM SERVICES',
    heroTitle: 'Bedroom Interiors',
    heroDesc: 'Complete bedroom interior solutions including wardrobes, beds, and side tables.',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=900',
    content: `
            <h2 style="font-size: 1.8rem; margin-top: 20px; font-weight: 700; color: #d9381e;">Bedroom Interiors</h2>
            <ul style="font-size: 1.1rem; color: #333; line-height: 1.8; margin-bottom: 30px; padding-left: 20px;">
              <li>Wardrobes & Dressing Units</li>
              <li>Beds / Cots & Side Tables</li>
            </ul>
    `
  },
  {
    file: 'service-living-room-interiors.html',
    title: 'Living Room Interior Designers in Kerala | Timbercubés',
    heroBadge: 'LIVING ROOM SERVICES',
    heroTitle: 'Living Room Interiors',
    heroDesc: 'Elegant living room setups including TV units, sofas, and consoles.',
    img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=900',
    content: `
            <h2 style="font-size: 1.8rem; margin-top: 20px; font-weight: 700; color: #d9381e;">Living Room Interiors</h2>
            <ul style="font-size: 1.1rem; color: #333; line-height: 1.8; margin-bottom: 30px; padding-left: 20px;">
              <li>TV Units</li>
              <li>Sofas</li>
              <li>Consoles</li>
              <li>Study Tables & Workstations</li>
            </ul>
    `
  },
  {
    file: 'service-commercial-interiors.html',
    title: 'Commercial Interior Designers in Kerala | Timbercubés',
    heroBadge: 'COMMERCIAL SERVICES',
    heroTitle: 'Commercial Interiors',
    heroDesc: 'Professional commercial interiors for offices, retail stores, and restaurants.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900',
    content: `
            <h2 style="font-size: 1.8rem; margin-top: 20px; font-weight: 700; color: #d9381e;">Commercial Interiors</h2>
            <ul style="font-size: 1.1rem; color: #333; line-height: 1.8; margin-bottom: 30px; padding-left: 20px;">
              <li>Office Interiors</li>
              <li>Retail & Store Interiors</li>
              <li>Restaurant & Café Interiors</li>
              <li>Reception & Waiting Areas</li>
            </ul>
    `
  }
];

services.forEach(srv => {
  let newHtml = template;
  // Replace title
  newHtml = newHtml.replace(/<title>.*<\/title>/, "<title>" + srv.title + "</title>");
  
  // Replace Hero
  newHtml = newHtml.replace(/<span class="badge-outline">.*?<\/span>/, '<span class="badge-outline">' + srv.heroBadge + '</span>');
  newHtml = newHtml.replace(/<h1>.*?<\/h1>/, "<h1>" + srv.heroTitle + "</h1>");
  newHtml = newHtml.replace(/<p style="font-size: 1.2rem; color: #666; max-width: 700px; margin: 0 auto;">.*?<\/p>/s, '<p style="font-size: 1.2rem; color: #666; max-width: 700px; margin: 0 auto;">' + srv.heroDesc + '</p>');
  
  // Replace Content section
  const contentRegex = /<img src="\/wardrobes_card\.png".*?<div style="text-align: center; margin-top: 50px;">/s;
  
  const newContent = 
    '<img src="' + srv.img + '" alt="' + srv.heroTitle + '" class="service-img">\\n' +
    srv.content +
    '\\n<div style="text-align: center; margin-top: 50px;">';
  
  newHtml = newHtml.replace(contentRegex, newContent);
  
  fs.writeFileSync(srv.file, newHtml, 'utf8');
  console.log('Created: ' + srv.file);
});
