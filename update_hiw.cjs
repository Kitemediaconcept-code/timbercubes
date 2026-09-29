const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newGrid = `          <div class="hiw-grid">
            <!-- Step 1 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">01</div>
                <div class="hiw-text">
                  <h3>Initial Enquiry</h3>
                  <p>Location, scope, style and budget discussed.</p>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">02</div>
                <div class="hiw-text">
                  <h3>Site Visit & Measurements</h3>
                  <p>Room dimensions and site conditions recorded.</p>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">03</div>
                <div class="hiw-text">
                  <h3>Requirement Discussion</h3>
                  <p>Lifestyle, storage and style needs planned.</p>
                </div>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">04</div>
                <div class="hiw-text">
                  <h3>Quotation & Proposal</h3>
                  <p>Detailed quotation with clear terms shared.</p>
                </div>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">05</div>
                <div class="hiw-text">
                  <h3>Design & 3D Visualisation</h3>
                  <p>Layout designed; 3D visual offered as a paid add-on.</p>
                </div>
              </div>
            </div>

            <!-- Step 6 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">06</div>
                <div class="hiw-text">
                  <h3>Design Revisions</h3>
                  <p>Design reviewed, revised and approved.</p>
                </div>
              </div>
            </div>

            <!-- Step 7 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">07</div>
                <div class="hiw-text">
                  <h3>Material Selection</h3>
                  <p>Boards, finishes and hardware confirmed.</p>
                </div>
              </div>
            </div>

            <!-- Step 8 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">08</div>
                <div class="hiw-text">
                  <h3>Precision Manufacturing</h3>
                  <p>Approved design built to exact dimensions.</p>
                </div>
              </div>
            </div>

            <!-- Step 9 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">09</div>
                <div class="hiw-text">
                  <h3>Quality Checking</h3>
                  <p>Components inspected before leaving the facility.</p>
                </div>
              </div>
            </div>

            <!-- Step 10 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1541889812953-e910bd3a067f?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">10</div>
                <div class="hiw-text">
                  <h3>Professional Installation</h3>
                  <p>Units installed and adjusted on-site.</p>
                </div>
              </div>
            </div>

            <!-- Step 11 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">11</div>
                <div class="hiw-text">
                  <h3>Final Inspection</h3>
                  <p>Alignment and finishing checked before handover.</p>
                </div>
              </div>
            </div>

            <!-- Step 12 -->
            <div class="hiw-card" style="background-image: url('https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800');">
              <div class="hiw-overlay"></div>
              <div class="hiw-content">
                <div class="hiw-number">12</div>
                <div class="hiw-text">
                  <h3>Project Handover</h3>
                  <p>Project handed over, with care guidance given.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

// regex replace
const regex = /<div class="hiw-grid">[\s\S]*?<\/section>/m;
if (regex.test(html)) {
  html = html.replace(regex, newGrid);
  html = html.replace('<h2>Get Your Dream Space<br>in Six Steps</h2>', '<h2>Our Modular Kitchen<br>Design Process</h2>');
  fs.writeFileSync('index.html', html);
  console.log('index.html updated successfully');
} else {
  console.error('Could not find hiw-grid using RegExp');
}
