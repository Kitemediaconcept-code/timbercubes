const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
const insertHTML = `
<style>
  .materials-section {
    padding: 60px 0;
    background: #fff;
  }
  .mat-header {
    text-align: center;
    margin-bottom: 40px;
  }
  .mat-title {
    font-size: 1.8rem;
    font-family: var(--font-display);
    font-weight: 700;
    color: #111;
    margin-bottom: 10px;
  }
  .mat-subtitle {
    font-size: 0.9rem;
    color: #555;
    max-width: 600px;
    margin: 0 auto;
  }
  .mat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .mat-card {
    background: #fcf9f5;
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #fcede5;
    transition: all 0.3s ease;
  }
  .mat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.05);
  }
  .mat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #fff;
    color: #c2633c;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 16px;
    border: 1px solid #f0f0f0;
  }
  .mat-card h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #fcede5;
  }
  .mat-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .mat-list li {
    font-size: 0.8rem;
    color: #555;
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.4;
  }
  .mat-list li::before {
    content: '\\u2022';
    color: #c2633c;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1;
    margin-top: -2px;
  }
  @media (max-width: 1024px) {
    .mat-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    .mat-grid {
      grid-template-columns: 1fr;
    }
    .mat-card {
      padding: 20px;
    }
    .mat-title {
      font-size: 1.5rem;
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
      <div class="mat-card">
        <div class="mat-icon"><i class="ph ph-stack"></i></div>
        <h3>Board & Core Materials</h3>
        <ul class="mat-list">
          <li>WPC</li>
          <li>PVC foam board</li>
          <li>BWP 710 Full Gurjan marine plywood</li>
          <li>HDHMR</li>
          <li>HDF and other engineered boards</li>
          <li>Honeycomb sandwich panels</li>
        </ul>
      </div>
      <div class="mat-card">
        <div class="mat-icon"><i class="ph ph-paint-brush"></i></div>
        <h3>Shutter & Surface Finishes</h3>
        <ul class="mat-list">
          <li>Laminates</li>
          <li>Acrylic finishes</li>
          <li>PU finishes</li>
          <li>Membrane finishes</li>
          <li>WPC laminate shutters</li>
          <li>Lacquered glass and aluminium profile-frame shutters</li>
          <li>Matt, gloss, wood-grain and textured options</li>
        </ul>
      </div>
      <div class="mat-card">
        <div class="mat-icon"><i class="ph ph-nut"></i></div>
        <h3>Hardware & Fittings</h3>
        <ul class="mat-list">
          <li>Soft-close hinges</li>
          <li>Drawer channels</li>
          <li>Tandem and hidden-drawer systems</li>
          <li>Lift-up and tall-unit mechanisms</li>
          <li>Pull-out baskets</li>
          <li>Corner-unit solutions</li>
          <li>Sliding wardrobe systems</li>
        </ul>
      </div>
      <div class="mat-card">
        <div class="mat-icon"><i class="ph ph-magic-wand"></i></div>
        <h3>Accessories & Features</h3>
        <ul class="mat-list">
          <li>Cutlery and utensil organizers</li>
          <li>Pantry and bottle pull-outs</li>
          <li>Magic corners</li>
          <li>Waste-bin systems</li>
          <li>Wardrobe organizers</li>
          <li>Mirrors and glass</li>
          <li>LED and profile lighting with concealed wiring</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- 6.5 How It Works Section -->
`;
c = c.replace(/<!-- 6\.5 How It Works Section -->/, insertHTML);
fs.writeFileSync('index.html', c);
