export function openModal(modalRef) {
  if (!modalRef?.backdrop) return;

  modalRef.backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown', handleEsc);

  window.activeModalRef = modalRef;
}

export function closeModal(modalRef) {
  if (!modalRef?.backdrop) return;

  modalRef.backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', handleEsc);
  window.activeModalRef = null;
}

function handleEsc(e) {
  if (e.key === 'Escape' && window.activeModalRef) {
    closeModal(window.activeModalRef);
  }
}

export function initModal(modalRef) {
  modalRef.openBtn?.addEventListener('click', () => openModal(modalRef));

  modalRef.closeBtn?.addEventListener('click', () => closeModal(modalRef));

  modalRef.backdrop?.addEventListener('click', e => {
    if (e.target === modalRef.backdrop) closeModal(modalRef);
  });
}



