const fs = require('fs');

const insertHTML = `
<!-- Materials Section -->
<style>
  .materials-section {
    padding: 60px 0;
    background-color: var(--bg-alt);
  }
  .mat-header {
    text-align: center;
    margin-bottom: 40px;
  }
  .mat-title {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 10px;
    letter-spacing: -0.02em;
  }
  .mat-subtitle {
    font-size: 0.9rem;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }
  .mat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .mat-card {
    background: linear-gradient(135deg, #ffffff 0%, #FAF8F5 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .mat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  }
  .mat-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-color);
  }
  .mat-icon-wrap {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: #fff;
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    flex-shrink: 0;
  }
  .mat-card h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-main);
    line-height: 1.3;
    margin: 0;
  }
  .mat-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .mat-list li {
    font-size: 0.8rem;
    color: var(--text-light);
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.4;
  }
  .mat-list li i {
    color: var(--accent);
    font-size: 0.85rem;
    margin-top: 3px;
    flex-shrink: 0;
  }
  
  @media (max-width: 1024px) {
    .mat-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }
  
  @media (max-width: 600px) {
    .materials-section {
      padding: 40px 0;
    }
    .mat-header {
      margin-bottom: 30px;
    }
    .mat-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .mat-card {
      padding: 16px;
      border-radius: 12px;
    }
    .mat-card-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 12px;
      padding-bottom: 10px;
    }
    .mat-icon-wrap {
      width: 32px;
      height: 32px;
      font-size: 1.1rem;
      border-radius: 8px;
    }
    .mat-card h3 {
      font-size: 0.85rem;
    }
    .mat-list {
      gap: 6px;
    }
    .mat-list li {
      font-size: 0.75rem;
      gap: 6px;
    }
    .mat-list li i {
      font-size: 0.8rem;
      margin-top: 2px;
    }
  }
</style>

<section class="materials-section">
  <div class="container">
    <div class="mat-header">
      <h2 class="mat-title">Materials, Hardware & Accessories We Use</h2>
      <p class="mat-subtitle">Board materials, finishes, hardware and brand partners, matched to durability, look and budget.</p>
    </div>
    
    <div class="mat-grid">
      <!-- Card 1 -->
      <div class="mat-card">
        <div class="mat-card-header">
          <div class="mat-icon-wrap"><i class="ph ph-stack"></i></div>
          <h3>Board & Core Materials</h3>
        </div>
        <ul class="mat-list">
          <li><i class="ph ph-arrow-right"></i> <span>WPC</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>PVC foam board</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>BWP 710 Full Gurjan marine plywood</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>HDHMR</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>HDF and other engineered boards</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Honeycomb sandwich panels</span></li>
        </ul>
      </div>

      <!-- Card 2 -->
      <div class="mat-card">
        <div class="mat-card-header">
          <div class="mat-icon-wrap"><i class="ph ph-paint-brush"></i></div>
          <h3>Shutter & Surface Finishes</h3>
        </div>
        <ul class="mat-list">
          <li><i class="ph ph-arrow-right"></i> <span>Laminates</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Acrylic finishes</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>PU finishes</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Membrane finishes</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>WPC laminate shutters</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Lacquered glass and aluminium profile-frame shutters</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Matt, gloss, wood-grain and textured options</span></li>
        </ul>
      </div>

      <!-- Card 3 -->
      <div class="mat-card">
        <div class="mat-card-header">
          <div class="mat-icon-wrap"><i class="ph ph-nut"></i></div>
          <h3>Hardware & Fittings</h3>
        </div>
        <ul class="mat-list">
          <li><i class="ph ph-arrow-right"></i> <span>Soft-close hinges</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Drawer channels</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Tandem and hidden-drawer systems</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Lift-up and tall-unit mechanisms</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Pull-out baskets</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Corner-unit solutions</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Sliding wardrobe systems</span></li>
        </ul>
      </div>

      <!-- Card 4 -->
      <div class="mat-card">
        <div class="mat-card-header">
          <div class="mat-icon-wrap"><i class="ph ph-magic-wand"></i></div>
          <h3>Accessories & Features</h3>
        </div>
        <ul class="mat-list">
          <li><i class="ph ph-arrow-right"></i> <span>Cutlery and utensil organizers</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Pantry and bottle pull-outs</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Magic corners</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Waste-bin systems</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Wardrobe organizers</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>Mirrors and glass</span></li>
          <li><i class="ph ph-arrow-right"></i> <span>LED and profile lighting with concealed wiring</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
`;

let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/<!-- 6\.5 How It Works Section -->/, insertHTML + '\n<!-- 6.5 How It Works Section -->');
fs.writeFileSync('index.html', content);
