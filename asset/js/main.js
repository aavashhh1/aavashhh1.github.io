(() => {
  'use strict';

  // Sticky nav state + scroll progress
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    iconOpen.style.display = open ? 'none' : '';
    iconClose.style.display = open ? '' : 'none';
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Scroll-reveal
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Contact form → mailto compose (static hosting has no backend)
  const form = document.getElementById('contact-form');
  const err = document.getElementById('form-err');
  const ok = document.getElementById('form-ok');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();
    const valid = name && msg && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    err.classList.toggle('show', !valid);
    if (!valid) return;
    ok.classList.add('show');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:aavashbhandari@gmail.com?subject=${subject}&body=${body}`;
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
