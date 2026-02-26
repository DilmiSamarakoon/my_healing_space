/* ================================================
   MY HEALING SPACE — script.js
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('stuck', window.scrollY > 50);
    backTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });

  /* ── BACK TO TOP ── */
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── MOBILE MENU ── */
  const ham   = document.getElementById('ham');
  const mob   = document.getElementById('mob');
  const mobX  = document.getElementById('mobX');
  const mLinks = document.querySelectorAll('.mob-link');

  ham.addEventListener('click',  () => { mob.classList.add('open');    document.body.style.overflow = 'hidden'; });
  mobX.addEventListener('click', () => { mob.classList.remove('open'); document.body.style.overflow = ''; });
  mLinks.forEach(l => l.addEventListener('click', () => { mob.classList.remove('open'); document.body.style.overflow = ''; }));

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const t = document.querySelector(href);
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' });
    });
  });

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contact-form');
  const ok   = document.getElementById('form-ok');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      ok.style.display = 'block';
      form.reset();
      setTimeout(() => ok.style.display = 'none', 6000);
    });
  }

  /* ── STAGGER DELAYS ── */
  ['.services__grid .svc', '.audience__list .audience__item', '.philosophy__right .pillar']
    .forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.07}s`;
      });
    });

});