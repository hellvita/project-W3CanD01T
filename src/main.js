import { initFeedback } from './js/feedback.js';
import { initSectionFaq } from './js/faq';
import { refs } from './js/refs.js';
import { initHeaderNav } from './js/header-nav';
import { initPagination } from './js/paginator.js';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';

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

  initFeedback();
  initSectionFaq();
  initModal(refs.orderModal);
  initOrderForm();
  initPagination();
  initHeaderNav();
});







