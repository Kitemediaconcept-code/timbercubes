// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

// Request animation frame loop
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Optional: Add simple sticky header class on scroll if desired
const header = document.querySelector('.header-container');
if (header) {
  lenis.on('scroll', (e) => {
    if (e.animatedScroll > 50) {
      header.style.transform = 'scale(0.98)';
      header.style.transition = 'transform 0.3s ease';
    } else {
      header.style.transform = 'scale(1)';
    }
  });
}

// Hero slider logic
const slides = document.querySelectorAll('.hero-slide');
const headings = document.querySelectorAll('.hero-heading');
if (slides.length > 0) {
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    if (headings[currentSlide]) headings[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    if (headings[currentSlide]) headings[currentSlide].classList.add('active');
  }, 5000);
}

// Services Tabs Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and panes
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Show corresponding pane
    const targetId = `tab-${btn.getAttribute('data-tab')}`;
    const targetPane = document.getElementById(targetId);
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});

// Mobile Menu Logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileOverlay = document.getElementById('mobileNavOverlay');
const mobileCloseBtn = document.getElementById('mobileNavClose');

if (mobileBtn && mobileOverlay && mobileCloseBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileOverlay.classList.add('open');
    // Disable smooth scrolling when menu is open
    lenis.stop();
  });

  mobileCloseBtn.addEventListener('click', () => {
    mobileOverlay.classList.remove('open');
    // Re-enable smooth scrolling
    lenis.start();
  });
}


