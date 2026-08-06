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

  // --- 6. Megastructures Horizontal Slider Scroll Progress ---
  const sectorWrapper = document.querySelector('.megastructures-cards-wrapper');
  const sectorProgressTrack = document.querySelector('.slider-progress-bar');
  const sectorProgressHandle = document.querySelector('.slider-progress-indicator');

  if (sectorWrapper && sectorProgressTrack && sectorProgressHandle) {
    const updateSectorProgress = () => {
      const maxScroll = sectorWrapper.scrollWidth - sectorWrapper.clientWidth;
      if (maxScroll <= 0) {
        sectorProgressHandle.style.transform = 'translateX(0px)';
        return;
      }
      const scrollRatio = sectorWrapper.scrollLeft / maxScroll;
      const trackWidth = sectorProgressTrack.clientWidth;
      const handleWidth = sectorProgressHandle.clientWidth;
      const maxTranslation = trackWidth - handleWidth;
      const translation = scrollRatio * maxTranslation;
      sectorProgressHandle.style.transform = `translateX(${translation}px)`;
    };

    sectorWrapper.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateSectorProgress);
    });

    window.addEventListener('resize', updateSectorProgress);
    updateSectorProgress();
  }

  // --- 7. Businesses Page Tab Navigation Routing ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabButtons.length > 0 && tabPanes.length > 0) {
    const validTabs = ['construction', 'energy', 'manufacturing', 'services', 'allied'];
    
    const switchTab = (tabId) => {
      tabButtons.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
          btn.classList.add('active');
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          btn.classList.remove('active');
        }
      });
      
      tabPanes.forEach(pane => {
        if (pane.id === `pane-${tabId}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    };

    const handleHash = () => {
      const hash = window.location.hash.slice(1).toLowerCase();
      if (validTabs.includes(hash)) {
        switchTab(hash);
      } else {
        switchTab('construction');
      }
    };

    // Click event listeners on tab buttons
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        window.location.hash = tabId;
      });
    });

    // Hash change event listener
    window.addEventListener('hashchange', handleHash);

    // Initial load check
    handleHash();
  }

  // --- 8. Careers Application Form Simulation & File Input ---
  const careerForm = document.getElementById('career-application-form');
  const fileInput = document.getElementById('input-resume');
  const fileWrapper = document.querySelector('.file-upload-wrapper');
  const fileNameDisplay = document.querySelector('.file-upload-name');
  const fileHintDisplay = document.querySelector('.file-upload-hint');
  const fileIcon = document.querySelector('.file-upload-icon');

  if (fileInput && fileWrapper && fileNameDisplay) {
    // Update filename display on selection
    fileInput.addEventListener('change', (e) => {
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileNameDisplay.textContent = `Selected File: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
        fileNameDisplay.style.display = 'block';
        if (fileHintDisplay) fileHintDisplay.style.display = 'none';
        if (fileIcon) {
          fileIcon.textContent = 'description';
          fileIcon.style.color = 'var(--color-primary-container)';
        }
      } else {
        fileNameDisplay.style.display = 'none';
        if (fileHintDisplay) fileHintDisplay.style.display = 'block';
        if (fileIcon) {
          fileIcon.textContent = 'upload_file';
          fileIcon.style.color = '';
        }
      }
    });

    // Drag over styling
    ['dragenter', 'dragover'].forEach(eventName => {
      fileInput.addEventListener(eventName, () => {
        fileWrapper.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      fileInput.addEventListener(eventName, () => {
        fileWrapper.classList.remove('dragover');
      });
    });
  }

  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = careerForm.querySelector('.btn-submit');
      if (!submitBtn) return;

      const originalBtnContent = submitBtn.innerHTML;
      
      // Stage 1: UPLOADING & PROCESSING
      submitBtn.innerHTML = 'SUBMITTING APPLICATION... <span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">sync</span>';
      submitBtn.style.opacity = '0.6';
      submitBtn.disabled = true;

      // Add a CSS keyframe animation for spinning icon dynamically if not in CSS
      if (!document.getElementById('spin-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'spin-animation-styles';
        style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
        document.head.appendChild(style);
      }

      // Simulate network request (2000ms delay for upload + processing)
      setTimeout(() => {
        // Stage 2: SUCCESS
        submitBtn.innerHTML = 'APPLICATION SUBMITTED <span class="material-symbols-outlined">check_circle</span>';
        submitBtn.style.backgroundColor = '#16a34a'; // green-600 color
        submitBtn.style.borderColor = '#15803d'; // green-700
        submitBtn.style.opacity = '1';

        // Stage 3: Restore state (3500ms delay)
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.style.backgroundColor = ''; // Restore CSS default
          submitBtn.style.borderColor = '';
          submitBtn.style.opacity = '';
          submitBtn.disabled = false;
          
          // Reset form and file display
          careerForm.reset();
          if (fileNameDisplay) fileNameDisplay.style.display = 'none';
          if (fileHintDisplay) fileHintDisplay.style.display = 'block';
          if (fileIcon) {
            fileIcon.textContent = 'upload_file';
            fileIcon.style.color = '';
          }
        }, 3500);

      }, 2000);
    });
  }

  // --- 9. Products Page Category Tab Switching ---
  const productsNavItems = document.querySelectorAll('.products-sidebar-item');
  const mobileCatBtns = document.querySelectorAll('.mobile-category-btn');
  const productSections = document.querySelectorAll('.products-section');

  if (productSections.length > 0) {
    const switchCategory = (catId) => {
      const cleanId = (catId || '').replace('#', '');
      if (!cleanId) return;

      // 1. Update desktop sidebar items active class
      productsNavItems.forEach(item => {
        const href = item.getAttribute('href') || '';
        if (href.replace('#', '') === cleanId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      // 2. Update mobile slider buttons active class & smooth scroll button into center view
      mobileCatBtns.forEach(btn => {
        const btnCat = btn.getAttribute('data-cat') || '';
        if (btnCat.replace('#', '') === cleanId) {
          btn.classList.add('active');
          const container = btn.parentElement;
          if (container) {
            const btnLeft = btn.offsetLeft;
            const btnWidth = btn.offsetWidth;
            const containerWidth = container.offsetWidth;
            container.scrollTo({
              left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
              behavior: 'smooth'
            });
          }
        } else {
          btn.classList.remove('active');
        }
      });

      // 3. Toggle visible category section pane
      productSections.forEach(section => {
        if (section.id === cleanId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      // 4. Update URL hash without page jump
      history.pushState(null, null, `#${cleanId}`);
    };

    // Click event handler for desktop sidebar links
    productsNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (item.getAttribute('href') || '').replace('#', '');
        switchCategory(targetId);
      });
    });

    // Click event handler for mobile category buttons
    mobileCatBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = (btn.getAttribute('data-cat') || '').replace('#', '');
        switchCategory(targetId);
      });
    });

    // Initial load check if hash is present in URL
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && document.getElementById(initialHash)) {
      switchCategory(initialHash);
    } else {
      if (productSections[0]) {
        switchCategory(productSections[0].id);
      }
    }
  }
});
