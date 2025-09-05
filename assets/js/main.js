// Mobile menu
document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.getElementById('nav')?.classList.toggle('open');
});

// Filters (Projects)
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const type = chip.getAttribute('data-filter');
    document.querySelectorAll('.project').forEach(card => {
      const show = type === 'all' || card.getAttribute('data-type') === type;
      card.style.display = show ? '' : 'none';
    });
  });
});

// Lightbox (shared)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lbClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || 'Expanded image';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

lbClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

document.querySelectorAll('.gallery a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const img = link.querySelector('img');
    openLightbox(link.href, img?.alt || '');
  });
});


