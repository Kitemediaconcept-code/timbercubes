const fs = require('fs');

['index.html', 'about.html'].forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf-8');
    
    const newLogo = `
              <div class="partner-cell"><img src="client-logo/CENTURY.png" alt="Century Laminates"></div>
            </div>`;
    
    // Replace the closing div of partners-grid
    content = content.replace(/<div class="partner-cell"><img src="client-logo\/virgo-removebg-preview\.png" alt="Virgo"><\/div>\s*<\/div>/, `<div class="partner-cell"><img src="client-logo/virgo-removebg-preview.png" alt="Virgo"></div>${newLogo}`);
    
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log('Updated ' + filepath);
});
