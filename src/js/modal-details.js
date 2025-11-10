import { refs } from './refs.js';
import { fetchFurnitureById } from './furniture-api.js';
import { getModalMarkup } from './render-functions.js';
import { openModal, closeModal, initModal } from './modal.js';

let currentProductId = null;

export function initModalDetails() {
  initModal(refs.modalDetails);

 
  refs.furnitureList?.addEventListener('click', onFurnitureClick);
}

function onFurnitureClick(event) {
  const card = event.target.closest('[data-furniture-card]');
  if (!card) return;

  const id = card.dataset?.id;
  if (!id) return;

  openModalDetails(id);
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

    const colorInputs = Array.from(refs.modalDetails.modalContent.querySelectorAll('.color-input'));

    if (colorInputs.length > 0) {
      const first = colorInputs[0];
      first.checked = true;
      first.closest('.color-option')?.classList.add('selected');
      refs.orderModal.form.dataset.color = first.dataset.color;
    }

   
    refs.modalDetails.modalContent.addEventListener('click', (e) => {
      const option = e.target.closest('.color-option');
      if (!option) return;

      const input = option.querySelector('.color-input');
      if (!input) return;

      colorInputs.forEach(i => {
        i.checked = false;
        i.closest('.color-option')?.classList.remove('selected');
      });

      input.checked = true;
      option.classList.add('selected');

      refs.orderModal.form.dataset.color = input.dataset.color;
    });

    const bigImg = refs.modalDetails.modalContent.querySelector('.modal-details-big-image');
    const smallImgs = Array.from(refs.modalDetails.modalContent.querySelectorAll('.modal-details-small-image'));

    smallImgs.forEach(img => {
      img.addEventListener('click', () => {
        bigImg.src = img.src;
      });
    });

    refs.orderModal.form.dataset.modelId = id;

  
    const orderButton = refs.modalDetails.modalContent.querySelector('[data-modal-details-order-btn]');
    if (orderButton) {
      orderButton.addEventListener('click', onOrderClick);
    }

   
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
