export const refs = {
  body: document.body,

  headerSection: {
    header: document.querySelector('.header'),
    menuModal: document.querySelector('.js-header__modal'),
    burgerBtn: document.querySelector('.js-header__menu-btn'),
    closeBtn: document.querySelector('.js-header__close-btn'),
  },

  furnitureSection: {
    categoriesList: document.querySelector('.categories'),
    furnitureContainer: document.querySelector('.furniture-list'),
    loadMoreBtn: document.getElementById('load-more-btn'),
  },

  paginationContainer: document.getElementById('furniture-pagination'),

  faqSection: {
    accordion: document.querySelector('.accordion-container'),
    faqLoader: document.querySelector('.faq-loader'),
    faqBlock: document.querySelector('.faq-block'),
  },

  feedback: {
    list: document.getElementById('feedback-list'),
    loader: document.getElementById('feedback-loader'),
    btnNext: document.querySelector('.feedback-btn-next'),
    btnPrev: document.querySelector('.feedback-btn-prev'),
  },

  modalDetails: {
    backdrop: document.querySelector('[data-modal-details]'),
    modalContent: document.querySelector('[data-modal-details-content]'),
    closeBtn: null,
    openBtn: null,
    furnitureId: null,
  },

  orderModal: {
    backdrop: document.querySelector('[data-modal-order]'),
    openBtn: null,
    closeBtn: document.querySelector('[data-modal-order-close]'),
    form: document.querySelector('[data-order-form]'),
    furnitureId: null,
    successOrder: false,
  },
};
