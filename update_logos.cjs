const fs = require('fs');

['index.html', 'about.html'].forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf-8');
    
    const newLogos = `
              <div class="partner-cell"><img src="client logo/kaff-removebg-preview.png" alt="KAFF"></div>
              <div class="partner-cell"><img src="client logo/kessebohmer-removebg-preview.png" alt="Kessebohmer"></div>
              <div class="partner-cell"><img src="client logo/rehau-removebg-preview.png" alt="Rehau"></div>
              <div class="partner-cell"><img src="client logo/sleek-removebg-preview.png" alt="Sleek"></div>
              <div class="partner-cell"><img src="client logo/virgo-removebg-preview.png" alt="Virgo"></div>
            </div>`;
    
    // Replace the closing div of partners-grid
    content = content.replace(/<div class="partner-cell"><img src="partner8\.png" alt="Partner 8"><\/div>\s*<\/div>/, `<div class="partner-cell"><img src="partner8.png" alt="Partner 8"></div>${newLogos}`);
    
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log('Updated ' + filepath);
});
