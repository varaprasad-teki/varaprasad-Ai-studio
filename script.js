const cards = document.querySelectorAll('.card, .glass');

const revealCards = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealCards.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  }
);

cards.forEach((card) => {
  card.classList.add('reveal');
  revealCards.observe(card);
});

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0, 0, 0, 0.55)';
    nav.style.backdropFilter = 'blur(8px)';
    nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.03)';
    nav.style.backdropFilter = 'blur(0px)';
    nav.style.boxShadow = 'none';
  }
});
