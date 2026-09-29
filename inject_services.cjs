const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const newContent = `
<!-- SERVICE DETAILS EXPANDED -->
<style>
  .service-details-wrap {
    padding: 60px 0 20px;
    background: #FAFAFA;
  }
  .sd-section {
    max-width: 1000px;
    margin: 0 auto 40px;
    padding: 40px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
    border: 1px solid #f0f0f0;
  }
  .sd-header {
    margin-bottom: 30px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 20px;
  }
  .sd-title {
    font-size: 1.5rem;
    font-family: var(--font-display);
    color: #111;
    margin-bottom: 8px;
    font-weight: 700;
  }
  .sd-intro {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.6;
  }
  .sd-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
    margin-bottom: 30px;
  }
  .sd-item {
    display: flex;
    gap: 15px;
    align-items: flex-start;
  }
  .sd-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    background: #f7f7f7;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 1.2rem;
  }
  .sd-item-content h4 {
    font-size: 0.95rem;
    color: #111;
    margin-bottom: 6px;
    font-weight: 600;
  }
  .sd-item-content p {
    font-size: 0.8rem;
    color: #555;
    line-height: 1.5;
  }
  .sd-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #111;
    text-decoration: none;
    padding: 12px 24px;
    border: 1px solid #e0e0e0;
    border-radius: 50px;
    transition: all 0.3s ease;
  }
  .sd-cta:hover {
    background: #111;
    color: #fff;
    border-color: #111;
  }
  
  /* Mobile Adjustments */
  @media (max-width: 768px) {
    .sd-section {
      padding: 25px;
      margin: 0 15px 30px;
    }
    .sd-title { font-size: 1.25rem; }
    .sd-intro { font-size: 0.85rem; }
    .sd-grid { grid-template-columns: 1fr; gap: 20px; margin-bottom: 25px; }
    .sd-icon { width: 36px; height: 36px; font-size: 1.1rem; }
    .sd-item-content h4 { font-size: 0.85rem; }
    .sd-item-content p { font-size: 0.75rem; }
    .sd-cta { font-size: 0.8rem; width: 100%; justify-content: center; }
  }
</style>

<div class="service-details-wrap">
  <div class="container">
    
    <!-- Section 1 -->
    <div class="sd-section">
      <div class="sd-header">
        <h3 class="sd-title">Modular Kitchen Design Services For You</h3>
        <p class="sd-intro">As a modular kitchen designer in Thrissur, Timbercubes offers four services, from custom layouts to complete installation support.</p>
      </div>
      <div class="sd-grid">
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-ruler"></i></div>
          <div class="sd-item-content">
            <h4>Custom Modular Kitchen Designs</h4>
            <p>Layouts built to the kitchen's exact dimensions, storage needs and budget, with custom-sized cabinets throughout.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-sparkle"></i></div>
          <div class="sd-item-content">
            <h4>Modern Modular Kitchens</h4>
            <p>Contemporary finishes and hardware sourced from brand partners.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-arrows-in"></i></div>
          <div class="sd-item-content">
            <h4>Space-Saving Kitchen Solutions</h4>
            <p>Corner units, pull-out baskets and tall units add kitchen storage in the tighter layouts common to apartments and smaller villas.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-wrench"></i></div>
          <div class="sd-item-content">
            <h4>Design-to-Installation Support</h4>
            <p>Timbercubes designs, manufactures and installs each kitchen at its own facility.</p>
          </div>
        </div>
      </div>
      <a href="https://wa.me/918129188188" class="sd-cta">See a Design for My Kitchen <i class="ph ph-arrow-right"></i></a>
    </div>

    <!-- Section 2 -->
    <div class="sd-section">
      <div class="sd-header">
        <h3 class="sd-title">Modular Kitchen Layouts We Design</h3>
        <p class="sd-intro">Room shape and family size decide which of the five layouts fits best.</p>
      </div>
      <div class="sd-grid">
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-corners-out"></i></div>
          <div class="sd-item-content">
            <h4>L-Shaped Kitchens</h4>
            <p>Fits square or slightly rectangular kitchens, splitting the sink, hob and storage across two adjoining walls.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-magnet"></i></div>
          <div class="sd-item-content">
            <h4>U-Shaped Kitchens</h4>
            <p>Uses three walls for counter and storage space, suited to larger kitchens with more to store.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-minus"></i></div>
          <div class="sd-item-content">
            <h4>Straight Kitchens</h4>
            <p>A single wall of cabinets and appliances, suited to narrow kitchens or open-plan layouts.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-equals"></i></div>
          <div class="sd-item-content">
            <h4>Parallel Kitchens</h4>
            <p>Counters run along two facing walls in a longer room, keeping the cooking and cleaning zones apart.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-cube"></i></div>
          <div class="sd-item-content">
            <h4>Island Kitchens</h4>
            <p>A central island adds extra counter and storage space, suited to open-plan or larger kitchens.</p>
          </div>
        </div>
      </div>
      <a href="https://wa.me/918129188188" class="sd-cta">Find My Kitchen Layout <i class="ph ph-arrow-right"></i></a>
    </div>

    <!-- Section 3 -->
    <div class="sd-section">
      <div class="sd-header">
        <h3 class="sd-title">Custom Wardrobe Designs We Build</h3>
        <p class="sd-intro">Layout and finish are decided by the room, the storage needs, and the customer's daily use.</p>
      </div>
      <div class="sd-grid">
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-columns"></i></div>
          <div class="sd-item-content">
            <h4>Sliding Wardrobes</h4>
            <p>Space-efficient, suited to smaller bedrooms or tighter layouts.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-door"></i></div>
          <div class="sd-item-content">
            <h4>Hinged Wardrobes</h4>
            <p>Traditional swing-door format with full-depth internal access.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-coat-hanger"></i></div>
          <div class="sd-item-content">
            <h4>Walk-in / Dressing Units</h4>
            <p>Combined wardrobe and dressing space for larger rooms.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-package"></i></div>
          <div class="sd-item-content">
            <h4>Loft & Overhead Storage</h4>
            <p>Added storage above the main unit without extra floor space. Internal layout - Drawers, shelves, hanging sections, mirrors, glass and profile-frame shutters, LED lighting - is planned around what's actually being stored.</p>
          </div>
        </div>
      </div>
      <a href="https://wa.me/918129188188" class="sd-cta">Design My Wardrobe <i class="ph ph-arrow-right"></i></a>
    </div>

    <!-- Section 4 -->
    <div class="sd-section">
      <div class="sd-header">
        <h3 class="sd-title">Materials, Finishes & Customization</h3>
        <p class="sd-intro">Seven materials and finishes, chosen for durability, look and budget.</p>
      </div>
      <div class="sd-grid">
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-drop"></i></div>
          <div class="sd-item-content">
            <h4>Acrylic finish</h4>
            <p>Glossy shutter, wipes clean easily and holds its colour over years of daily use.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-paint-brush"></i></div>
          <div class="sd-item-content">
            <h4>PU coating</h4>
            <p>Similar high-gloss look, at a different price point.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-layers-intersect"></i></div>
          <div class="sd-item-content">
            <h4>Laminate finish</h4>
            <p>Durable, cost-effective, in solid colours and wood-grain patterns.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-square-half"></i></div>
          <div class="sd-item-content">
            <h4>Lacquered glass</h4>
            <p>Reflective surface, often paired with LED lighting inside the cabinet.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-tree"></i></div>
          <div class="sd-item-content">
            <h4>Marine ply / solid wood</h4>
            <p>Core structure, chosen by moisture exposure and expected lifespan.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-file-dashed"></i></div>
          <div class="sd-item-content">
            <h4>PVC foil</h4>
            <p>A lighter, moisture-resistant option for the core structure.</p>
          </div>
        </div>
        <div class="sd-item">
          <div class="sd-icon"><i class="ph ph-nut"></i></div>
          <div class="sd-item-content">
            <h4>Kitchen accessories & hardware</h4>
            <p>Hinges, channels and baskets, sourced from brand partners.</p>
          </div>
        </div>
      </div>
      <a href="https://wa.me/918129188188" class="sd-cta">Request My Material Samples <i class="ph ph-arrow-right"></i></a>
    </div>
    
  </div>
</div>
`;

// Insert after the Services We Offer section end
const match = html.match(/<span class="btn-text-pill">Services We Offer<\/span>[\s\S]*?<\/section>/);

if (match) {
  const insertIndex = match.index + match[0].length;
  const newHtml = html.substring(0, insertIndex) + newContent + html.substring(insertIndex);
  fs.writeFileSync('index.html', newHtml);
  console.log('Successfully injected content');
} else {
  console.log('Could not find injection point');
}
