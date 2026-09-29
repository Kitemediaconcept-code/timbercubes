const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const replacement = `      <!-- 7.5 FAQ Section -->
      <section class="faq-section" style="padding: 80px 0; background-color: #FAFAFA;">
        <style>
          .faq-wrapper { width: 100%; max-width: 900px; margin: 0 auto; }
          .faq-title { font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-family: var(--font-display); font-weight: 600; text-align: center; margin-bottom: 50px; color: #111; letter-spacing: -0.02em; }
          .faq-item { background: #fff; border: 1px solid #EAEAEA; border-radius: 8px; margin-bottom: 15px; overflow: hidden; transition: box-shadow 0.3s ease; }
          .faq-item:hover { box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
          .faq-q { padding: 22px 25px; font-weight: 500; font-size: 1rem; color: #111; cursor: pointer; display: flex; justify-content: space-between; align-items: center; transition: color 0.3s; }
          .faq-q:hover { color: #C2633C; }
          .faq-a { padding: 0 25px; max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; color: #666; font-size: 0.9rem; line-height: 1.6; }
          .faq-item.active .faq-a { padding: 0 25px 25px 25px; max-height: 500px; }
          .faq-icon { transition: transform 0.3s ease; color: #888; font-size: 1.2rem; display: flex; align-items: center; justify-content: center;}
          .faq-item.active .faq-icon { transform: rotate(45deg); color: #111; }
          .faq-highlight { color: #D32F2F; font-weight: 600; }
          .faq-cta-box { margin-top: 40px; text-align: center; }
          .faq-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: #25D366; color: #fff; padding: 12px 24px; border-radius: 30px; font-weight: 600; text-decoration: none; transition: 0.3s; }
          .faq-cta-btn:hover { background: #1ebd5a; transform: translateY(-2px); }
          @media (max-width: 600px) {
            .faq-q { font-size: 0.95rem; padding: 18px 20px; }
            .faq-a { font-size: 0.85rem; }
            .faq-item.active .faq-a { padding: 0 20px 20px 20px; }
          }
        </style>
        <div class="container">
          <div class="faq-wrapper">
            <h2 class="faq-title">Frequently Asked Questions</h2>
            <div class="faq-list">
              <div class="faq-item active">
                <div class="faq-q">How long does it take to design and install a modular kitchen? <i class="ph ph-plus faq-icon"></i></div>
                <div class="faq-a">From design approval to installation, most modular kitchen projects at Timbercubes take about 3 to 5 weeks. Larger kitchens or projects with a high level of customisation can run longer, and the exact timeline is confirmed once the design and material selection are finalised.</div>
              </div>
              <div class="faq-item">
                <div class="faq-q">Can I customise my modular kitchen design? <i class="ph ph-plus faq-icon"></i></div>
                <div class="faq-a">Yes. Layout, materials, finishes, hardware and storage are all planned around the kitchen's dimensions and the customer's requirements during the design and material-selection stages, rather than fitted to a standard template.</div>
              </div>
              <div class="faq-item">
                <div class="faq-q">Which materials are available for modular kitchen cabinets? <i class="ph ph-plus faq-icon"></i></div>
                <div class="faq-a">Shutters are available in acrylic, PU-coated, laminate and lacquered glass finishes, with <span class="faq-highlight">BWP 710 Full Gurjan marine ply, WPC, PVC foam board, HDHMR or solid wood</span> used for the core structure depending on moisture exposure and expected lifespan. Hardware is sourced from brand partners including <span class="faq-highlight">Hettich, Hafele, Ebco, Sleek, Kesseböhmer etc.</span></div>
              </div>
              <div class="faq-item">
                <div class="faq-q">Do you provide modular kitchen installation? <i class="ph ph-plus faq-icon"></i></div>
                <div class="faq-a">Yes. Installation is carried out by Timbercubes own team after the kitchen is manufactured at its own facility in Kerala, so the same company that designs and builds the kitchen also fits it on-site.</div>
              </div>
              <div class="faq-item">
                <div class="faq-q">Do you provide modular kitchens outside Thrissur? <i class="ph ph-plus faq-icon"></i></div>
                <div class="faq-a">Yes. Timbercubes is based in Thrissur and also serves Kochi, Kozhikode (Calicut), Malappuram and Palakkad, with a site visit arranged in each area before design work begins.</div>
              </div>
              <div class="faq-item">
                <div class="faq-q">Can you plan a modular kitchen for a small apartment? <i class="ph ph-plus faq-icon"></i></div>
                <div class="faq-a">Yes. Space-saving layouts such as corner units, pull-out baskets and tall units are used to add storage in smaller kitchens without crowding the space, based on the apartment's actual dimensions.</div>
              </div>
              <div class="faq-item">
                <div class="faq-q">Can I get a wardrobe designed along with my kitchen, or separately? <i class="ph ph-plus faq-icon"></i></div>
                <div class="faq-a">Both. Wardrobes are designed and quoted independently of the kitchen - customers can order one, the other, or both together as part of a single project.</div>
              </div>
            </div>
            <div class="faq-cta-box">
              <a href="https://wa.me/918129188188" class="faq-cta-btn">Still Have Questions? Chat on WhatsApp <i class="ph-fill ph-whatsapp-logo"></i></a>
            </div>
          </div>
        </div>
        <script>
          document.querySelectorAll(".faq-q").forEach(q => {
            q.addEventListener("click", () => {
              const item = q.parentElement;
              const isActive = item.classList.contains("active");
              document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
              if(!isActive) item.classList.add("active");
            });
            // Add hover behavior for desktop (as requested: "മൗസ് സ്കോർ കൊടുക്കുമ്പോഴും" which means mouse hover/scroll)
            q.addEventListener("mouseenter", () => {
              if (window.innerWidth > 768) {
                const item = q.parentElement;
                document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
                item.classList.add("active");
              }
            });
          });
        </script>
      </section>`;

const targetRegex = /<!-- 7\.5 FAQ Section -->[\s\S]*?<\/section>/;
content = content.replace(targetRegex, replacement);
fs.writeFileSync('index.html', content);
