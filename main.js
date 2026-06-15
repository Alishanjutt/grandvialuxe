/* ═══════════════════════════════════════════════
   GRAND VIA LUXE — Main JavaScript
   Single-Page Application with instant navigation
═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── STATE ─── */
  const state = { currentPage: 'home' };

  /* ─── PRELOADER ─── */
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    // Pre-warm all pages
    document.querySelectorAll('.page').forEach(p => {
      p.style.visibility = 'hidden';
      p.style.display = 'block';
    });
    // Small delay so browser renders all pages once
    setTimeout(() => {
      document.querySelectorAll('.page').forEach(p => {
        p.style.visibility = '';
        p.style.display = '';
      });
      document.getElementById('page-home').style.display = 'block';
      document.getElementById('page-home').classList.add('active');
      preloader.classList.add('done');
      initReveal();
    }, 1800);
  }

  /* ─── NAVIGATION ─── */
  function initNavigation() {
    document.addEventListener('click', function (e) {
      const el = e.target.closest('[data-page]');
      if (!el) return;
      e.preventDefault();
      const page = el.dataset.page;
      if (page && page !== state.currentPage) {
        navigateTo(page);
      }
      // Close mobile menu
      closeMobileMenu();
    });
  }

  function navigateTo(page) {
    const currentEl = document.getElementById('page-' + state.currentPage);
    const nextEl = document.getElementById('page-' + page);
    if (!nextEl) return;

    if (currentEl) {
      currentEl.classList.remove('active');
      currentEl.style.display = 'none';
    }

    nextEl.style.display = 'block';
    // Trigger reflow for animation
    void nextEl.offsetWidth;
    nextEl.classList.add('active');

    state.currentPage = page;

    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-menu a').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });

    // Scroll to top instantly
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update URL hash
    history.pushState({ page }, '', '#' + page);

    // Trigger reveal animations for new page
    setTimeout(initReveal, 50);
  }

  /* ─── MOBILE MENU ─── */
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  function closeMobileMenu() {
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobile-menu').classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ─── HEADER SCROLL ─── */
  function initHeaderScroll() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ─── PARTICLES ─── */
  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 35;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      p.style.top = (50 + Math.random() * 50) + '%';
      p.style.width = (Math.random() * 2.5 + 1) + 'px';
      p.style.height = p.style.width;
      p.style.animationDuration = (Math.random() * 8 + 6) + 's';
      p.style.animationDelay = (Math.random() * 8) + 's';
      container.appendChild(p);
    }
  }

  /* ─── SCROLL REVEAL ─── */
  function initReveal() {
    const els = document.querySelectorAll('.page.active .section-header, .page.active .service-card, .page.active .why-item, .page.active .fleet-thumb, .page.active .pricing-card, .page.active .value-card, .page.active .about-stat, .page.active .service-full-card');

    els.forEach((el, i) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 80);
    });
  }

  /* ─── TESTIMONIAL SLIDER ─── */
  function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testi-dots .dot');
    let current = 0;
    let interval;

    function showSlide(n) {
      testimonials.forEach(t => t.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      current = (n + testimonials.length) % testimonials.length;
      testimonials[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function startAutoplay() {
      interval = setInterval(() => showSlide(current + 1), 5000);
    }

    document.getElementById('testi-prev')?.addEventListener('click', () => {
      clearInterval(interval);
      showSlide(current - 1);
      startAutoplay();
    });

    document.getElementById('testi-next')?.addEventListener('click', () => {
      clearInterval(interval);
      showSlide(current + 1);
      startAutoplay();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(interval);
        showSlide(i);
        startAutoplay();
      });
    });

    startAutoplay();
  }

  /* ─── FLEET TABS ─── */
  function initFleetTabs() {
    document.querySelectorAll('.fleet-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const vehicle = tab.dataset.vehicle;
        document.querySelectorAll('.fleet-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.vehicle-detail').forEach(v => v.classList.remove('active'));
        tab.classList.add('active');
        const detail = document.getElementById('vehicle-' + vehicle);
        if (detail) detail.classList.add('active');
      });
    });
  }

  /* ─── FORMS ─── */
  function initForms() {
    document.getElementById('contact-form')?.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('✔ Message sent! Our team will respond shortly.');
      this.reset();
    });

    document.getElementById('booking-form')?.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('✔ Quote request received! We\'ll contact you within 15 minutes.');
      this.reset();
    });
  }

  /* ─── TOAST ─── */
  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
  }

  /* ─── HASH ROUTING ─── */
  function initHashRouting() {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById('page-' + hash)) {
      setTimeout(() => navigateTo(hash), 200);
    }
    window.addEventListener('popstate', (e) => {
      const page = e.state?.page || 'home';
      if (document.getElementById('page-' + page)) {
        const currentEl = document.getElementById('page-' + state.currentPage);
        const nextEl = document.getElementById('page-' + page);
        if (currentEl) { currentEl.classList.remove('active'); currentEl.style.display = 'none'; }
        nextEl.style.display = 'block';
        void nextEl.offsetWidth;
        nextEl.classList.add('active');
        state.currentPage = page;
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
      }
    });
  }

  /* ─── NUMBER COUNT ANIMATION ─── */
  function initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const isFloat = String(target).includes('.');
          const suffix = el.dataset.suffix || '';
          let start = 0;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const val = target * eased;
            el.textContent = (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
  }

  /* ─── SCROLL PROGRESS ─── */
  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,#A07830,#C9A84C,#E8C96A);z-index:9998;width:0;transition:width 0.1s linear;';
    document.body.appendChild(bar);
    window.addEventListener('scroll', () => {
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0';
    }, { passive: true });
  }

  /* ─── CURSOR GLOW (desktop) ─── */
  function initCursorGlow() {
    if (window.matchMedia('(hover: none)').matches) return;
    const glow = document.createElement('div');
    glow.style.cssText = 'position:fixed;width:300px;height:300px;background:radial-gradient(circle,rgba(201,168,76,0.04),transparent 70%);pointer-events:none;z-index:1;transform:translate(-50%,-50%);transition:opacity 0.3s ease;border-radius:50%;';
    document.body.appendChild(glow);
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  /* ─── INIT ─── */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initMobileMenu();
    initHeaderScroll();
    initParticles();
    initTestimonials();
    initFleetTabs();
    initForms();
    initHashRouting();
    initCounters();
    initScrollProgress();
    initCursorGlow();

    // Make service/fleet cards clickable
    document.querySelectorAll('.service-card[data-page], .fleet-thumb[data-page]').forEach(card => {
      card.style.cursor = 'pointer';
    });
  });

})();
