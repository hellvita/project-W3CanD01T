import iziToast from 'izitoast';
import { fetchFurnitureCategory, fetchFurnitureCard } from './js/furniture-api';
import { renderCategories, renderCard } from './js/render-functions';

window.addEventListener('load', initPage);

async function initPage() {
  await renderCategories();
  await renderCard();
}
