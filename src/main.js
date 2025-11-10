import { refs } from './js/refs.js';
import { initHeaderNav } from './js/header-nav';
import { initPagination } from './js/paginator.js';
import { initSectionFaq } from './js/faq';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';

initHeaderNav();
initPagination();
initSectionFaq();
initModal(refs.orderModal);
initOrderForm();
