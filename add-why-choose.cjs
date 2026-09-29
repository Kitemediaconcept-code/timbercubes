const fs = require('fs');

const insertHTML = `
<!-- Why Choose Us Section -->
<style>
  .why-choose-section {
    padding: 60px 0;
    background-color: var(--bg-alt);
  }
  .why-choose-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: flex-start;
  }
  .wc-badge {
    display: flex;
    gap: 6px;
    margin-bottom: 15px;
  }
  .wc-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #111;
  }
  .wc-dot-light {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #9CA3AF;
  }
  .wc-title {
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
    font-family: var(--font-display);
    font-weight: 600;
    color: #111;
    line-height: 1.1;
    margin-bottom: 15px;
    letter-spacing: -0.02em;
  }
  .wc-subtitle {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 25px;
    max-width: 90%;
  }
  .wc-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #111;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .wc-btn-primary:hover {
    background: #333;
    transform: translateY(-2px);
  }
  
  .accordion-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .accordion-item {
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
    text-align: left;
  }
  .accordion-title {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: -0.01em;
  }
  .accordion-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255,255,255,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
    color: #111;
  }
  .item-dark .accordion-icon {
    background: rgba(255,255,255,0.15);
    color: #fff;
  }
  
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0 18px;
  }
  .accordion-content p {
    padding-bottom: 18px;
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 0;
    opacity: 0.85;
  }

  /* Colors matching the modern minimal look */
  .item-blue { background-color: #B4C6EA; color: #111; }
  .item-gray { background-color: #D1D5DB; color: #111; }
  .item-green { background-color: #D9F99D; color: #111; }
  .item-dark { background-color: #111; color: #fff; }
  .item-cream { background-color: #FFEDD5; color: #111; }
  .item-light { background-color: #F3F4F6; color: #111; }

  @media (max-width: 1024px) {
    .why-choose-container {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  
  @media (max-width: 600px) {
    .why-choose-section {
      padding: 40px 0;
    }
    .wc-title {
      font-size: 1.6rem;
    }
    .wc-subtitle {
      font-size: 0.8rem;
      max-width: 100%;
    }
    .accordion-header {
      padding: 12px 14px;
    }
    .accordion-title {
      font-size: 0.85rem;
    }
    .accordion-content p {
      font-size: 0.75rem;
      padding-bottom: 14px;
    }
    .accordion-container {
      gap: 6px;
    }
    .accordion-icon {
      width: 20px;
      height: 20px;
      font-size: 0.7rem;
    }
  }
</style>

<section class="why-choose-section">
  <div class="container why-choose-container">
    <div class="why-choose-left">
      <div class="wc-badge">
        <span class="wc-dot"></span><span class="wc-dot-light"></span>
      </div>
      <h2 class="wc-title">Why Choose Timbercubes For Your Home</h2>
      <p class="wc-subtitle">One of the trusted modular kitchen dealers in Thrissur and nearby, having in-house team, from design through installation.</p>
      
      <div class="wc-cta-group">
        <a href="https://wa.me/918129188188" class="wc-btn-primary">Talk to My Design Team <i class="ph ph-arrow-up-right"></i></a>
      </div>
    </div>
    
    <div class="why-choose-right">
      <div class="accordion-container">
        
        <div class="accordion-item item-blue">
          <button class="accordion-header">
            <span class="accordion-title">Precision manufacturing and quality materials</span>
            <span class="accordion-icon"><i class="ph ph-plus"></i></span>
          </button>
          <div class="accordion-content">
            <p>Components are checked at each stage before they leave the facility.</p>
          </div>
        </div>

        <div class="accordion-item item-gray">
          <button class="accordion-header">
            <span class="accordion-title">Personalised service</span>
            <span class="accordion-icon"><i class="ph ph-plus"></i></span>
          </button>
          <div class="accordion-content">
            <p>Each interior is planned around the customer's space, budget and requirements.</p>
          </div>
        </div>

        <div class="accordion-item item-green">
          <button class="accordion-header">
            <span class="accordion-title">Full-service interiors</span>
            <span class="accordion-icon"><i class="ph ph-plus"></i></span>
          </button>
          <div class="accordion-content">
            <p>Complete interior needs for houses, apartments and commercial spaces alike.</p>
          </div>
        </div>

        <div class="accordion-item item-dark">
          <button class="accordion-header">
            <span class="accordion-title">Warranty coverage</span>
            <span class="accordion-icon"><i class="ph ph-plus"></i></span>
          </button>
          <div class="accordion-content">
            <p>From 6 months up to 25 years, depending on the materials and products chosen.</p>
          </div>
        </div>

        <div class="accordion-item item-cream">
          <button class="accordion-header">
            <span class="accordion-title">Updated to changing global trends</span>
            <span class="accordion-icon"><i class="ph ph-plus"></i></span>
          </button>
          <div class="accordion-content">
            <p>Designs, materials and manufacturing methods matched to current industry trends.</p>
          </div>
        </div>

        <div class="accordion-item item-light">
          <button class="accordion-header">
            <span class="accordion-title">End-to-end coordination</span>
            <span class="accordion-icon"><i class="ph ph-plus"></i></span>
          </button>
          <div class="accordion-content">
            <p>Material selection, manufacturing, installation and finishing, handled under one project.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(acc => {
      acc.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.ph');
        
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.classList.replace('ph-minus', 'ph-plus');
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.classList.replace('ph-plus', 'ph-minus');
        } 
      });
    });
  });
</script>
`;

let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/<!-- 6\.5 How It Works Section -->/, insertHTML + '\n<!-- 6.5 How It Works Section -->');
fs.writeFileSync('index.html', content);
