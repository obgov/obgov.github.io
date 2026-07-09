(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  document.documentElement.classList.add('js-ready');

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const progressBar = document.querySelector('.progress span');
  const updateProgress = () => {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${clamp(progress, 0, 100)}%`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -60px 0px' });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
      revealObserver.observe(item);
    });
  }

  const counters = Array.from(document.querySelectorAll('.counter'));
  const formatCounter = (value) => new Intl.NumberFormat('ru-RU').format(Math.round(value));

  const animateCounter = (node) => {
    if (node.dataset.done) return;
    node.dataset.done = 'true';

    const target = Number(node.dataset.target || '0');
    const duration = prefersReducedMotion ? 0 : 1100;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = duration === 0 ? 1 : clamp((now - startedAt) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      node.textContent = formatCounter(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setActiveLink = () => {
    let current = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 170) current = section;
    }
    navLinks.forEach((link) => {
      link.classList.toggle('active', current && link.getAttribute('href') === `#${current.id}`);
    });
  };
  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });

  const copyButton = document.querySelector('.copy-email');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const value = copyButton.dataset.copy || '';
      try {
        await navigator.clipboard.writeText(value);
        const original = copyButton.textContent;
        copyButton.textContent = 'Email скопирован';
        copyButton.classList.add('copied');
        window.setTimeout(() => {
          copyButton.textContent = original;
          copyButton.classList.remove('copied');
        }, 1500);
      } catch {
        window.location.href = `mailto:${value}`;
      }
    });
  }

  const glow = document.querySelector('.cursor-glow');
  if (glow && !prefersReducedMotion && window.matchMedia('(pointer:fine)').matches) {
    let visible = false;
    window.addEventListener('pointermove', (event) => {
      if (!visible) {
        glow.style.opacity = '1';
        visible = true;
      }
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
      visible = false;
    });
  }

  const magneticCards = Array.from(document.querySelectorAll('.magnetic'));
  if (!prefersReducedMotion && window.matchMedia('(pointer:fine)').matches) {
    magneticCards.forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
        card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-2px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
})();
