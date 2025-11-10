import { initFeedback } from './js/feedback.js';
import { initSectionFaq } from './js/faq.js';

document.addEventListener('DOMContentLoaded', onPageLoad);

function onPageLoad() {
  initFeedback();
  initSectionFaq();
}
