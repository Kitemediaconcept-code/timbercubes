const fs = require('fs');

let content = fs.readFileSync('g:/Timbercubes/index.html', 'utf-8');

const replacement = `            <!-- Testimonial 1 (Sharafudheen) -->
            <div class="testimonial-card">
              <div class="testimonial-img-wrapper">
                <img src="/testimonial_sharafudheen.png" alt="Mr. Sharafudheen & Family">
                <div class="testimonial-img-overlay"></div>
              </div>
              <div class="testimonial-card-body">
                <div>
                  <div class="testimonial-quote-icon">“</div>
                  <p class="testimonial-quote-text">The attention to detail was impressive. Every aspect of the project was carefully planned and perfectly executed.</p>
                </div>
                <div class="testimonial-author">— Mr. Sharafudheen & Family, Changaramkulam</div>
              </div>
            </div>

            <!-- Testimonial 2 (Faizal) -->
            <div class="testimonial-card">
              <div class="testimonial-img-wrapper">
                <img src="/testimonial_faizal.png" alt="Mr. Faizal & Family">
                <div class="testimonial-img-overlay"></div>
              </div>
              <div class="testimonial-card-body">
                <div>
                  <div class="testimonial-quote-icon">“</div>
                  <p class="testimonial-quote-text">We are extremely happy with the quality and design. Timbercubes transformed our space into something both stylish and functional.</p>
                </div>
                <div class="testimonial-author">— Mr. Faizal & Family, Chalissery</div>
              </div>
            </div>`;

content = content.replace(/            <!-- Testimonial 1 -->[\s\S]*?            <!-- Testimonial 12 -->[\s\S]*?Changaramkulam<\/div>\s*<\/div>\s*<\/div>/, replacement);

fs.writeFileSync('g:/Timbercubes/index.html', content, 'utf-8');
console.log('Replaced successfully');
