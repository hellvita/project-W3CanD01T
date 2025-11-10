import { refs } from './refs';
import { refs } from './refs.js';
import { openModal } from './modal.js';

function onOrderButtonClick(modelId, color) {
  refs.orderModal.form.dataset.modelId = modelId;
  refs.orderModal.form.dataset.color = color;
  openModal(refs.orderModal);
}
