const weddingDate = new Date('2026-09-07T16:00:00+05:30').getTime();
const fields = ['days', 'hours', 'minutes', 'seconds'];

setTimeout(() => document.body.classList.add('hero-revealed'), 3000);

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
