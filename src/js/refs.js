export const refs = {
body: document.body,

  feedback: {
    list: null,
    loader: null,
    btnNext: null,
    btnPrev: null,

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
  },
  paginationContainer: document.getElementById('furniture-pagination'),
};

export function setFeedbackRefs() {
  refs.feedback.list = document.getElementById('feedback-list');
  refs.feedback.loader = document.getElementById('feedback-loader');
  refs.feedback.btnNext = document.querySelector('.feedback-btn-next');
  refs.feedback.btnPrev = document.querySelector('.feedback-btn-prev');
}
