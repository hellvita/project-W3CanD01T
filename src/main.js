import { refs } from './js/refs.js';
import { initHeaderNav } from './js/header-nav';
import { initFurnitureSection } from './js/furniture';
import { initPagination } from './js/paginator.js';
import { initSectionFaq } from './js/faq.js';
import { initFeedback } from './js/feedback.js';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';

async function onPageLoad() {
  if (typeof loadPartials === 'function') {
    await loadPartials();
  }

  initHeaderNav();

  initFurnitureSection();
  initPagination();

  await initSectionFaq();
  initFeedback();

  initModal(refs.orderModal);
  initOrderForm();
}

document.addEventListener('DOMContentLoaded', onPageLoad);
