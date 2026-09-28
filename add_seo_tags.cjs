const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const globalSeoBlock = `
    <!-- Global SEO Tags added dynamically -->
    <meta name="google-site-verification" content="_3WxVJqLj3Sbej38fFt8WXdG7LMAXQx3I2erx18jP0w" />
    <meta name="Robots" content="Index,follow,All"/>
    <meta name="YahooSeeker" content="INDEX, FOLLOW, all"/>
    <meta name="msnbot" content="INDEX, FOLLOW, all"/>
    <meta name="googlebot" content="noodp"/>
    <meta name="rating" content="Safe For Kids"/>

    <script type="application/ld+json">
    {
      "@context": "http://schema.org/", 
      "@type": "Product", 
      "name": "modular kitchen",
      "image": "https://timbercubes.com/images/slides/timbercubes5.jpg",
      "description": "Timbercubes is a leading Modular kitchen, Wardrobes and Interior products manufactures in Kerala who deals with a wide range of interior products",
      "brand": "Timbercubes"
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "FurnitureStore",
      "name": "Timbercubes",
      "logo": "https://timbercubes.com/images/main_logo.jpg",
      "url": "https://timbercubes.com",
      "telephone": "08129188188",
      "priceRange": "15000-100000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Valayamkulam",
        "addressLocality": "Thrissur",
        "postalCode": "679591",
        "addressCountry": "IN"
      }
    }
    </script>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add global SEO block before </head> if not already there
    if (!content.includes('google-site-verification')) {
        content = content.replace('</head>', globalSeoBlock + '\n</head>');
    }

    // Add canonical link
    const canonicalUrl = `https://timbercubes.com/${file === 'index.html' ? '' : file}`;
    const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
    if (!content.includes('<link rel="canonical"')) {
        content = content.replace('</head>', `    ${canonicalTag}\n</head>`);
    }

    // Fix H1s
    if (file === 'about.html') {
        content = content.replace(/<h1 class="hsb-title">Bold Brands<br>with Purpose<\/h1>/g, '<h1 class="hsb-title">About<br>Timbercubés</h1>');
    }
    if (file === 'services.html') {
        content = content.replace(/<h1 class="hsb-title">Bold Brands<br>with Purpose<\/h1>/g, '<h1 class="hsb-title">Our<br>Services</h1>');
    }

    // Fix Titles & Meta Descriptions
    if (file === 'index.html') {
        content = content.replace(/<title>.*?<\/title>/, '<title>No1 Modular Kitchens & Wardrobes Designers, Price in Thrissur, Calicut</title>');
        content = content.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="Timbercubes is the best modular kitchen & wardrobe designers in Thrissur Kerala, we also offer kitchen interior designing services in Thrissur, Malappuram and Calicut. We are the leading modular kitchen cabinet manufacturer, Shops, Dealers in Thrissur" />');
    } else if (file === 'about.html') {
        content = content.replace(/<title>.*?<\/title>/, '<title>About Timbercubés | Premium Interior Design & Furniture</title>');
        content = content.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="Learn about Timbercubés, our mission, and our dedication to blending elegance, comfort, and functionality in modern interior design." />');
    } else if (file === 'services.html') {
        content = content.replace(/<title>.*?<\/title>/, '<title>Modular Kitchen & Wardrobe Services | Timbercubés</title>');
        content = content.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="Explore our wide range of services including custom wardrobes, acrylic kitchens, PU coating, and lacquered glass solutions by Timbercubés." />');
    } else if (file === 'wardrobes.html') {
        content = content.replace(/<title>.*?<\/title>/, '<title>Modern Wardrobe Designs | Timbercubés</title>');
        content = content.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="Discover our curated collection of custom wardrobe designs. Optimize your storage with elegance and timeless functionality." />');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
}
