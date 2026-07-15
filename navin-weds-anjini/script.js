const weddingDate = new Date('2026-09-07T16:00:00+05:30').getTime();
const fields = ['days', 'hours', 'minutes', 'seconds'];

setTimeout(() => document.body.classList.add('hero-revealed'), 3000);

const hero = document.querySelector('.hero');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const parallaxSections = document.querySelectorAll('.section, footer');
let parallaxFrame;

function updateParallax() {
  const heroScroll = Math.min(window.scrollY, hero.offsetHeight);
  hero.style.setProperty('--parallax-y', `${heroScroll * 0.28}px`);

  const viewportCenter = window.innerHeight / 2;
  parallaxSections.forEach((section) => {
    const bounds = section.getBoundingClientRect();
    const sectionCenter = bounds.top + bounds.height / 2;
    const shift = Math.max(-24, Math.min(24, (viewportCenter - sectionCenter) * 0.055));
    section.style.setProperty('--section-parallax-y', `${shift}px`);
  });
  parallaxFrame = undefined;
}

if (!reduceMotion) {
  updateParallax();
  window.addEventListener('scroll', () => {
    if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
  }, { passive: true });
}

function updateCountdown() {
  let remaining = Math.max(0, weddingDate - Date.now());
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor((remaining % 86400000) / 3600000),
    Math.floor((remaining % 3600000) / 60000),
    Math.floor((remaining % 60000) / 1000)
  ];
  fields.forEach((field, index) => {
    const counter = document.getElementById(field);
    const nextValue = String(values[index]).padStart(2, '0');
    const currentValue = counter.dataset.value;

    if (!currentValue) {
      counter.dataset.value = nextValue;
      counter.dataset.previous = nextValue;
      return;
    }
    if (currentValue === nextValue) return;

    counter.dataset.previous = currentValue;
    counter.dataset.value = nextValue;
    counter.classList.remove('rolling');
    void counter.offsetWidth;
    counter.classList.add('rolling');
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelectorAll('.countdown strong').forEach((counter) => {
  counter.addEventListener('animationend', () => counter.classList.remove('rolling'));
});
