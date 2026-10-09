import re

with open('g:/Timbercubes/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacement = """            <!-- Testimonial 1 (Sharafudheen) -->
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
            </div>"""

new_content = re.sub(r'            <!-- Testimonial 1 -->.*?            <!-- Testimonial 12 -->.*?</div>\s+</div>', replacement, content, flags=re.DOTALL)

with open('g:/Timbercubes/index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced successfully")
