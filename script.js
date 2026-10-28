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
  if (typeof IntersectionObserver !== 'undefined') {
    revealCards.observe(card);
  } else {
    card.classList.add('visible');
  }
});

const nav = document.querySelector('nav');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('primaryNav');

const closeMenu = () => {
  if (!navLinks || !menuToggle) return;
  navLinks.classList.remove('active');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
};

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

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    if (window.innerWidth > 768) return;
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}
