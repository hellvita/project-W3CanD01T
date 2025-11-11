import { refs } from './refs';
import { getFurnitureInfo } from './handlers';
import { modalIsClosed } from './helpers';

export async function openModal(modalRef) {
  if (!modalRef?.backdrop) return;

  if (modalRef === refs.modalDetails) {
    try {
      await getFurnitureInfo(modalRef.furnitureId);
    } catch (error) {
      console.log(error);
      throw new Error('Не вдалося завантажити дані');
    }
  }

  modalRef.backdrop.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');

  window.activeModalRef = modalRef;
  window.addEventListener('keydown', handleEsc);
}

export function closeModal(modalRef) {
  if (!modalRef?.backdrop) return;

  modalRef.backdrop.classList.add('is-hidden');

  if (modalIsClosed(refs.modalDetails)) {
    refs.body.classList.remove('no-scroll');
  }

  window.removeEventListener('keydown', handleEsc);
  window.activeModalRef = null;
}

function handleEsc(e) {
  if (e.key === 'Escape' && window.activeModalRef) {
    closeModal(window.activeModalRef);
  }
}

export function initModal(modalRef) {
  if (modalRef === refs.modalDetails)
    modalRef.openBtn = document.querySelectorAll('.js-furniture-more-btn');
  if (modalRef === refs.orderModal)
    modalRef.openBtn = document.querySelectorAll('.js-modal-details-order-btn');

  modalRef.openBtn?.forEach(button =>
    button.addEventListener('click', () => {
      modalRef.furnitureId = button.dataset.id;
      openModal(modalRef);
    })
  );
  modalRef.closeBtn?.addEventListener('click', () => closeModal(modalRef));
  modalRef.backdrop?.addEventListener('click', e => {
    if (e.target === modalRef.backdrop) closeModal(modalRef);
  });
}
