// Adds a tiny parallax response to the illustrated hero without requiring a framework.
const art = document.querySelector('.hero-art');
if (art && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 6;
    const y = (event.clientY / window.innerHeight - 0.5) * 6;
    art.style.transform = `translate(${x}px, ${y}px)`;
  }, { passive: true });
}
