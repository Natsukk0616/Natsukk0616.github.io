const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-heading, .project-card, .note').forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(18px)';
  element.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(element);
});

document.querySelectorAll('.is-visible').forEach((element) => {
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
});

document.addEventListener('scroll', () => {
  document.querySelectorAll('.is-visible').forEach((element) => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  });
}, { passive: true });
