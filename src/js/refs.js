export const refs = {
  orderModal: {
    backdrop: document.querySelector('[data-modal-order]'),
    openBtn: document.querySelector('[data-modal-order-open]'),
    closeBtn: document.querySelector('[data-modal-order-close]'),
    form: document.querySelector('[data-order-form]'),
  },
    faqSection: {
        accordion: document.querySelector('.accordion-container'),
        faqLoader: document.querySelector('.faq-loader'),
        faqBlock: document.querySelector('.faq-block')
    }
};
