export const refs = {
  furnitureList: document.querySelector('[data-furniture-list]'),

  orderModal: {
    backdrop: document.querySelector('[data-modal-order]'),
    openBtn: document.querySelector('[data-modal-order-open]'),
    closeBtn: document.querySelector('[data-modal-order-close]'),
    form: document.querySelector('[data-order-form]'),
  },

  modalDetails: {
    backdrop: document.querySelector('[data-modal-details]'),
    modalContent: document.querySelector('[data-modal-details-content]'),
    closeBtn: document.querySelector('[data-modal-details-close]'),
    openBtn: null,
  },

  faqSection: {
    accordion: document.querySelector('.accordion-container'),
  },
};
