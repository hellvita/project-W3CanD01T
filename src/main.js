<<<<<<< HEAD
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
=======
import { refs } from './js/refs.js';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';
import { initSectionFaq } from "./js/faq";

initModal(refs.orderModal);
initOrderForm();
initSectionFaq();
>>>>>>> 520cf6386e160f0b68fb7af55f57714daf01223b
