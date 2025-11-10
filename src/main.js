import { refs } from './js/refs.js';
import { initModal } from './js/modal.js';
import { initOrderForm } from './js/order-form.js';
import { initSectionFaq } from "./js/faq";

initModal(refs.orderModal);
initOrderForm();
initSectionFaq();
