import { initFeedback } from './js/feedback.js';
import { initSectionFaq } from './js/faq';

async function loadPartials() {
  const loads = document.querySelectorAll('load');
  for (const el of loads) {
    const src = el.getAttribute('src');
    if (src) {
      const resp = await fetch(src);
      if (resp.ok) {
        el.outerHTML = await resp.text();
      } else {
        console.error('Не вдалося завантажити:', src);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadPartials();  

  // Ініціалізація обох секцій
  initFeedback();
  initSectionFaq();
});
