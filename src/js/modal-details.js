import { refs } from './refs.js';
import { fetchFurnitureById } from './furniture-api.js';
import { getModalMarkup } from './render-functions.js';
import { openModal, closeModal, initModal } from './modal.js';

let currentProductId = null;

export function initModalDetails() {
  initModal(refs.modalDetails);

  refs.modalDetails.furnitureList?.addEventListener('click', onFurnitureClick);

  function onFurnitureClick(event) {
    const card = event.target.closest('[data-furniture-card]');
    if (!card) return;

    const id = card.dataset?.id;
    if (!id) return;

    openModalDetails(id);
  }
}

function createStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 === 0.5;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<svg width="20" height="20" fill="var(--color-primary)">
      <use href="../img/modal/Vector.svg"></use>
    </svg>`;
  }
  if (halfStar) {
    starsHTML += `<svg width="20" height="20" fill="var(--color-primary)">
      <use href="../img/modal/Vector (1).svg"></use>
    </svg>`;
  }
  return starsHTML;
}

export async function openModalDetails(id) {
  try {
    currentProductId = id;

    const product = await fetchFurnitureById(id);

    refs.modalDetails.modalContent.innerHTML = getModalMarkup(product);

    const ratingEl = refs.modalDetails.modalContent.querySelector('[data-modal-details-rating]');
    if (ratingEl) {
      ratingEl.innerHTML = createStars(product.rate || 0);
    }

    const orderButton = refs.modalDetails.modalContent.querySelector('[data-modal-details-order-btn]');
    orderButton?.addEventListener('click', onOrderClick);

    openModal(refs.modalDetails);

  } catch (error) {
    console.error('Помилка при відкритті модалки деталей:', error);
  }
}

function onOrderClick() {
  closeModal(refs.modalDetails);

  const orderModal = refs.orderModal?.backdrop;
  if (orderModal) openModal(refs.orderModal);
}
