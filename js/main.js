document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.navbar-links');
  const menuToggle = document.querySelector('.menu-toggle');
  const backToTop = document.querySelector('.back-to-top');
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar-links a');
  const cursorGlow = document.querySelector('.cursor-glow');

  // Cursor glow follow
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!cursorGlow.classList.contains('active')) {
      cursorGlow.classList.add('active');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('active');
  });

  function updateCursor() {
    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  // Scroll animations via IntersectionObserver
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const children = entry.target.querySelectorAll('.stagger');
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 80}ms`;
          child.classList.add('visible');
        });
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el));

  // Navbar scroll behavior
  function onScroll() {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link
    const navHeight = navbar.offsetHeight;
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - navHeight - 100;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = navbar.offsetHeight;
        window.scrollTo({
          top: target.offsetTop - navHeight,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close mobile menu on clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });

  // Back to top
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
