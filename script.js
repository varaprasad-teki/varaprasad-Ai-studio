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
    rootMargin: '0px 0px -20px 0px'
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
    nav.style.background = 'rgba(8, 12, 24, 0.7)';
    nav.style.borderBottom = '1px solid rgba(125, 211, 252, 0.22)';
    nav.style.boxShadow = '0 0 20px rgba(125, 211, 252, 0.12)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.03)';
    nav.style.borderBottom = '1px solid rgba(125, 211, 252, 0.15)';
    nav.style.boxShadow = 'none';
  }
});
