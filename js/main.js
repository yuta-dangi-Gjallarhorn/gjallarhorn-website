/**
 * Gjallarhorn Corporate Website
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initSmoothScroll();
  initHeaderScroll();
  initCopyButtons();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  if (!toggle || !navList) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-active');
    navList.classList.toggle('is-open');
    document.body.style.overflow = navList.classList.contains('is-open') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  const navLinks = navList.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-active');
      navList.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      toggle.classList.remove('is-active');
      navList.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Scroll Reveal Animation
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  reveals.forEach(el => observer.observe(el));
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/**
 * Header Background on Scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add shadow when scrolled
    if (currentScroll > 50) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
}

/**
 * Copy to Clipboard Buttons
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');

  if (!copyButtons.length) return;

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const textToCopy = button.getAttribute('data-copy');

      try {
        await navigator.clipboard.writeText(textToCopy);
        button.classList.add('is-copied');

        setTimeout(() => {
          button.classList.remove('is-copied');
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        button.classList.add('is-copied');
        setTimeout(() => {
          button.classList.remove('is-copied');
        }, 2000);
      }
    });
  });
}
