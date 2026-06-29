/* AHA Engineering Landing Page - Scripts */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sidebar Drawer Navigation Toggle ---
  const sidebar = document.getElementById('sidebar-drawer');
  const menuToggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('sidebar-overlay');
  const closeButton = document.getElementById('sidebar-close');

  if (menuToggle && sidebar && overlay) {
    const openSidebar = () => {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeSidebar = () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    };

    menuToggle.addEventListener('click', openSidebar);
    overlay.addEventListener('click', closeSidebar);
    if (closeButton) {
      closeButton.addEventListener('click', closeSidebar);
    }
  }

  // --- 2. Parallax Scroll Effect for Hero Backgrounds ---
  const parallaxBgs = document.querySelectorAll('.hero-parallax-bg');
  if (parallaxBgs.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      // Shift background slightly to create depth (0.25 multiplier to avoid extreme moves)
      parallaxBgs.forEach((bg) => {
        bg.style.transform = `translateY(${scrolled * 0.25}px)`;
      });
    });
  }

  // --- 3. Scroll Intersection Observer (Slide-in animations) ---
  const animatedElements = document.querySelectorAll('.scroll-animate');
  if (animatedElements.length > 0) {
    const observerOptions = {
      root: null, // Viewport
      threshold: 0.08, // Trigger when 8% is visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits bottom of screen
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Once animated, stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  }

  // --- 4. Form Submission Simulation (Contact page) ---
  const contactForm = document.getElementById('project-inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.btn-submit');
      if (!submitBtn) return;

      const originalBtnContent = submitBtn.innerHTML;
      
      // Stage 1: PROCESSING
      submitBtn.innerHTML = 'PROCESSING... <span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">sync</span>';
      submitBtn.style.opacity = '0.6';
      submitBtn.disabled = true;

      // Add a CSS keyframe animation for spinning icon dynamically if not in CSS
      if (!document.getElementById('spin-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'spin-animation-styles';
        style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
      }

      // Simulate network request (1500ms delay)
      setTimeout(() => {
        // Stage 2: SUCCESS
        submitBtn.innerHTML = 'SUCCESSFULLY SENT <span class="material-symbols-outlined">check_circle</span>';
        submitBtn.style.backgroundColor = '#16a34a'; // green-600 color
        submitBtn.style.borderColor = '#15803d'; // green-700
        submitBtn.style.opacity = '1';

        // Stage 3: Restore state (3000ms delay)
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.style.backgroundColor = ''; // Restore CSS default
          submitBtn.style.borderColor = '';
          submitBtn.style.opacity = '';
          submitBtn.disabled = false;
          contactForm.reset(); // Clear form values
        }, 3000);

      }, 1500);
    });
  }

  // --- 5. Hero Carousel Slider Logic ---
  const carouselContainer = document.getElementById('home-hero');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval = null;
    const intervalTime = 5000; // 5 seconds

    const showSlide = (index) => {
      // Handle index wrapping
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }

      // Toggle active classes on slides
      slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      // Toggle active classes on indicator dots
      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };

    // Auto-play controls
    const startAutoplay = () => {
      if (!slideInterval) {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    };

    const stopAutoplay = () => {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
    };

    // Button Event Listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        // Reset autoplay interval on user interaction
        stopAutoplay();
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        // Reset autoplay interval on user interaction
        stopAutoplay();
        startAutoplay();
      });
    }

    // Dot Indicators Event Listeners
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const slideIndex = parseInt(e.target.getAttribute('data-slide'), 10);
        showSlide(slideIndex);
        // Reset autoplay interval on user interaction
        stopAutoplay();
        startAutoplay();
      });
    });

    // Pause on hover
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', stopAutoplay);
      carouselContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Initialize Autoplay
    startAutoplay();
  }
});
