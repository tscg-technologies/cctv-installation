/**
 * CCTV & SECURITY CAMERA SOLUTIONS — CORE INTERACTION ENGINE
 * Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initBackToTop();
  initFaqAccordion();
  initProjectFilter();
  initProjectModal();
  initLightbox();
  initSurveyForm();
  initScrollAnimations();
});

/* -------------------------------------------------------------------------
   1. STICKY HEADER & SCROLL BEHAVIOR
   ------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* -------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   ------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-nav__overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  if (!hamburger || !mobileNav) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileNav.classList.contains('is-open');
    hamburger.classList.toggle('is-active', isOpen);
    mobileNav.classList.toggle('is-open', isOpen);
    if (overlay) overlay.classList.toggle('is-visible', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', isOpen.toString());
  };

  hamburger.addEventListener('click', () => toggleMenu());

  if (overlay) {
    overlay.addEventListener('click', () => toggleMenu(false));
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Mobile submenu links
  const mobileSublinks = document.querySelectorAll('.mobile-nav__sublink');
  mobileSublinks.forEach(sub => {
    sub.addEventListener('click', () => toggleMenu(false));
  });

  // Mobile Dropdown accordion toggle
  const mobileDropdownBtns = document.querySelectorAll('.mobile-nav__dropdown-btn');
  mobileDropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parentDropdown = btn.closest('.mobile-nav__dropdown');
      if (parentDropdown) {
        const isOpen = parentDropdown.classList.contains('is-open');
        parentDropdown.classList.toggle('is-open', !isOpen);
        btn.setAttribute('aria-expanded', (!isOpen).toString());
      }
    });
  });

  // Desktop click / touch dropdown handler
  const desktopDropdowns = document.querySelectorAll('.nav__dropdown');
  desktopDropdowns.forEach(drop => {
    const toggle = drop.querySelector('.nav__dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        // Toggle on touch devices
        if ('ontouchstart' in window || window.innerWidth <= 1024) {
          e.preventDefault();
          const isOpen = drop.classList.contains('is-open');
          drop.classList.toggle('is-open', !isOpen);
          toggle.setAttribute('aria-expanded', (!isOpen).toString());
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    desktopDropdowns.forEach(drop => {
      if (!drop.contains(e.target)) {
        drop.classList.remove('is-open');
        const toggle = drop.querySelector('.nav__dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileNav.classList.contains('is-open')) {
        toggleMenu(false);
      }
      desktopDropdowns.forEach(drop => drop.classList.remove('is-open'));
    }
  });
}

/* -------------------------------------------------------------------------
   3. BACK TO TOP BUTTON
   ------------------------------------------------------------------------- */
function initBackToTop() {
  const backBtn = document.querySelector('.back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backBtn.classList.add('is-visible');
    } else {
      backBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* -------------------------------------------------------------------------
   4. FAQ ACCORDION
   ------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all other accordion items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          const btn = other.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('is-open', !isOpen);
      questionBtn.setAttribute('aria-expanded', (!isOpen).toString());
    });
  });
}

/* -------------------------------------------------------------------------
   5. PROJECT CATEGORY FILTER (PROJECTS PAGE)
   ------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------
   6. PROJECT DETAIL MODAL
   ------------------------------------------------------------------------- */
const demoProjectDetails = {
  'project-residential': {
    title: 'Modern Residential CCTV Setup',
    category: 'Residential CCTV',
    property: 'Independent Villa / G+1 Residence',
    systemType: 'High-Definition IP PoE Architecture',
    scope: 'Illustrative demonstration concept featuring 6 perimeter dome and bullet cameras, network video recorder with local storage enclosure, and secure mobile streaming configuration. Demonstrates privacy masking for perimeter boundaries.',
    image: 'images/cctv-project-residential.jpg'
  },
  'project-apartment': {
    title: 'Apartment Entrance Camera Concept',
    category: 'Residential CCTV',
    property: 'Multi-Tenant Residential Community',
    systemType: 'Wired Commercial IP Surveillance System',
    scope: 'Illustrative access gate and lobby coverage model designed with wide dynamic range (WDR) sensors for variable daylight and vehicle headlight transitions. Local management console review illustration.',
    image: 'images/cctv-project-apartment.jpg'
  },
  'project-retail': {
    title: 'Retail Store Surveillance Concept',
    category: 'Commercial CCTV',
    property: 'Commercial Retail Boutique & Cash Counter',
    systemType: 'High-Resolution Low-Light Dome Array',
    scope: 'Demo layout highlighting discreet 4K indoor domes positioned across transaction zones, display aisles, and rear inventory storage. Focuses on balanced coverage without obtrusive cabling.',
    image: 'images/cctv-project-retail.jpg'
  },
  'project-office': {
    title: 'Commercial Office Camera System',
    category: 'Commercial CCTV',
    property: 'Corporate Office Floor / IT Workspace',
    systemType: 'Enterprise NVR & Ceiling Dome Network',
    scope: 'Demonstration configuration showing reception monitoring, server room access point cameras, and corridor visibility, planned strictly respecting employee desk privacy and conference room confidentiality.',
    image: 'images/cctv-project-office.jpg'
  },
  'project-warehouse': {
    title: 'Warehouse Surveillance Concept',
    category: 'Commercial CCTV',
    property: 'Logistics Center & Loading Bay Facility',
    systemType: 'Long-Range Weatherproof Bullet Cameras & PTZ',
    scope: 'High-ceiling industrial camera arrangement showcasing long-range infrared illumination, wide loading dock coverage, and heavy-duty cabling conduits for robust mechanical protection.',
    image: 'images/cctv-project-warehouse.jpg'
  },
  'project-ip-camera': {
    title: 'IP Camera Installation Showcase',
    category: 'IP Camera Systems',
    property: 'Multi-Branch Commercial Establishment',
    systemType: 'Digital PoE Camera Infrastructure',
    scope: 'Illustrative structured cabling deployment detailing Cat6 shielded wiring, Gigabit PoE switch termination, clean rack patch panels, and centralized multi-camera stream testing.',
    image: 'images/cctv-project-ip-camera.jpg'
  },
  'project-recorder': {
    title: 'DVR / NVR Recording Setup',
    category: 'DVR / NVR Installation',
    property: 'Secured Utility & Server Closet',
    systemType: 'Rack-Mounted 16-Channel NVR Setup',
    scope: 'Technical demo showcase of rack-mounted recording hardware with continuous surveillance-grade hard drives, dedicated uninterrupted power supply (UPS), and ventilation maintenance planning.',
    image: 'images/cctv-project-recorder.jpg'
  },
  'project-outdoor': {
    title: 'Outdoor Camera Installation Concept',
    category: 'Wireless CCTV',
    property: 'Open Perimeter & Parking Area',
    systemType: 'Weather-Resistant Wireless & Wired Mesh Cameras',
    scope: 'Demonstrates environmental protection concepts for exposed building exteriors, elevated pole mounts, surge protection grounding, and night-time infrared surveillance testing.',
    image: 'images/cctv-project-outdoor.jpg'
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const viewButtons = document.querySelectorAll('[data-project-id]');
  if (!modal || !viewButtons.length) return;

  const modalImg = modal.querySelector('#modalImage');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalCategory = modal.querySelector('#modalCategory');
  const modalProperty = modal.querySelector('#modalProperty');
  const modalSystem = modal.querySelector('#modalSystem');
  const modalScope = modal.querySelector('#modalScope');
  const closeBtn = modal.querySelector('.modal__close');

  const openModal = (id) => {
    const data = demoProjectDetails[id];
    if (!data) return;

    if (modalImg) modalImg.src = data.image;
    if (modalImg) modalImg.alt = data.title;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalProperty) modalProperty.textContent = data.property;
    if (modalSystem) modalSystem.textContent = data.systemType;
    if (modalScope) modalScope.textContent = data.scope;

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  viewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------------
   7. LIGHTBOX MODAL
   ------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const triggers = document.querySelectorAll('[data-lightbox]');
  if (!lightbox || !triggers.length) return;

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.modal__close');

  const openLightbox = (src, alt) => {
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || 'Preview';
    }
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const src = trigger.getAttribute('data-lightbox') || trigger.getAttribute('src');
      const alt = trigger.getAttribute('alt') || 'CCTV Demonstration Asset';
      openLightbox(src, alt);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}

/* -------------------------------------------------------------------------
   8. SITE SURVEY ENQUIRY FORM VALIDATION & SIMULATION
   ------------------------------------------------------------------------- */
function initSurveyForm() {
  const form = document.getElementById('siteSurveyForm');
  const cameraSlider = document.getElementById('cameraCountSlider');
  const cameraBadge = document.getElementById('cameraCountBadge');
  const successModal = document.getElementById('surveySuccessModal');

  // Sync Camera Range Slider
  if (cameraSlider && cameraBadge) {
    cameraSlider.addEventListener('input', () => {
      cameraBadge.textContent = cameraSlider.value;
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Name Validation
    const nameInput = document.getElementById('fullName');
    const nameFeedback = document.getElementById('nameFeedback');
    if (nameInput) {
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, nameFeedback, 'Please enter your name.');
        isValid = false;
      } else {
        clearError(nameInput, nameFeedback);
      }
    }

    // Phone Validation
    const phoneInput = document.getElementById('phoneNumber');
    const phoneFeedback = document.getElementById('phoneFeedback');
    if (phoneInput) {
      const phoneRegex = /^[0-9+\s-]{8,15}$/;
      if (!phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, phoneFeedback, 'Please enter a valid contact phone number.');
        isValid = false;
      } else {
        clearError(phoneInput, phoneFeedback);
      }
    }

    // Email Validation
    const emailInput = document.getElementById('emailAddress');
    const emailFeedback = document.getElementById('emailFeedback');
    if (emailInput) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, emailFeedback, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, emailFeedback);
      }
    }

    // Property Type
    const propertyType = document.getElementById('propertyType');
    const propertyFeedback = document.getElementById('propertyFeedback');
    if (propertyType) {
      if (!propertyType.value) {
        showError(propertyType, propertyFeedback, 'Please select a property type.');
        isValid = false;
      } else {
        clearError(propertyType, propertyFeedback);
      }
    }

    if (!isValid) return;

    // Simulate Demo Submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span style="display:inline-block; animation: spin 1s linear infinite;">⟳</span>
        Simulating Enquiry Submission...
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      form.reset();
      if (cameraBadge && cameraSlider) {
        cameraBadge.textContent = cameraSlider.value;
      }
      if (successModal) {
        successModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }, 1200);
  });

  const showError = (input, feedback, message) => {
    input.classList.add('is-invalid');
    if (feedback) feedback.textContent = message;
  };

  const clearError = (input, feedback) => {
    input.classList.remove('is-invalid');
    if (feedback) feedback.textContent = '';
  };

  // Close Success Modal
  if (successModal) {
    const closeBtn = successModal.querySelector('.modal__close');
    const okBtn = successModal.querySelector('#closeSuccessModalBtn');

    const closeSuccess = () => {
      successModal.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeSuccess);
    if (okBtn) okBtn.addEventListener('click', closeSuccess);
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeSuccess();
    });
  }
}

/* -------------------------------------------------------------------------
   9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ------------------------------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.solution-card, .highlight-card, .diagram-step, .sector-panel, .feature-box, .service-box, .project-card, .timeline-content');
  if (!elements.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
