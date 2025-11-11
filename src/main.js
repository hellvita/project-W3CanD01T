import { refs } from './js/refs.js';
import { initHeaderNav } from './js/header-nav';
import { initFurnitureSection } from './js/furniture';
import { initSectionFaq } from './js/faq.js';
import { initFeedback } from './js/feedback.js';
import { initModal } from './js/modal.js';
import { toastMessage } from './js/helpers.js';

async function onPageLoad() {
  try {
    if (typeof loadPartials === 'function') {
      await loadPartials();
    }

    initHeaderNav();

    await initFurnitureSection();

    await initSectionFaq();
    initFeedback();

    initModal(refs.modalDetails);
  } catch (error) {
    toastMessage(error.message);
  }
}

document.addEventListener('DOMContentLoaded', onPageLoad);
