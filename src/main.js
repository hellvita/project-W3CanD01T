import { refs } from './js/refs.js';
import { initFeedback } from './js/feedback.js';
import { initSectionFaq } from './js/faq.js';
import { initHeaderNav } from './js/header-nav';
import { initPagination } from './js/paginator.js';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';

async function onPageLoad() {
  if (typeof loadPartials === 'function') {
    await loadPartials();
  }

  initFeedback();
  await initSectionFaq();  
  initModal(refs.orderModal);
  initOrderForm();
  initPagination();
  initHeaderNav();
}

document.addEventListener('DOMContentLoaded', onPageLoad);
