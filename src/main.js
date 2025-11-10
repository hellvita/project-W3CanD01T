import { initSectionFaq } from "./js/faq";
import { refs } from './js/refs.js';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';
import { initPagination } from './js/paginator.js';

initSectionFaq();
initModal(refs.orderModal);
initOrderForm();
initPagination();
