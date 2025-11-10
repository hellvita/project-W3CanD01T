export const refs = {
  body: document.body,

  feedback: {
    list: document.getElementById('feedback-list'),
    loader: document.getElementById('feedback-loader'),
    btnNext: document.querySelector('.feedback-btn-next'),
    btnPrev: document.querySelector('.feedback-btn-prev'),
  },

  headerSection: {
    header: document.querySelector('.header'),
    menuModal: document.querySelector('.js-header__modal'),
    burgerBtn: document.querySelector('.js-header__menu-btn'),
    closeBtn: document.querySelector('.js-header__close-btn'),
  },

  orderModal: {
    backdrop: document.querySelector('[data-modal-order]'),
    openBtn: document.querySelector('[data-modal-order-open]'),
    closeBtn: document.querySelector('[data-modal-order-close]'),
    form: document.querySelector('[data-order-form]'),
  },

  faqSection: {
    accordion: document.querySelector('.accordion-container'),
    faqLoader: document.querySelector('.faq-loader'),
    faqBlock: document.querySelector('.faq-block'),
  },

  paginationContainer: document.getElementById('furniture-pagination'),
};
