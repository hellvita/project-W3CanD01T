import { initHeaderNav } from './js/header-nav';
import { refs } from './js/refs.js';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';
import { initSectionFaq } from './js/faq';

initHeaderNav();
initSectionFaq();
initOrderForm();
initModal(refs.orderModal);
