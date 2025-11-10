import * as util from './helpers';
import { refs } from './refs';
import { openModal } from './modal.js';
import { fetchFurnitureCategory, fetchFurnitureCard } from './furniture-api';
import { renderCategories, renderCard } from './render-functions';

let currentPage = 1;
const limit = 8;
let currentCategory = 'all';

export function chooseCategory(event) {
  const categoryItem = event.target.closest('.category-item');
  if (!categoryItem) return;

  document
    .querySelectorAll('.category-item')
    .forEach(it => it.classList.remove('active'));
  categoryItem.classList.add('active');

  const categoryId = categoryItem.dataset.id || 'all';

  currentPage = 1;
  currentCategory = categoryId;

  refs.furnitureContainer.innerHTML = '';
  getFurnitureCard(categoryId, currentPage, limit);
}

document.addEventListener('DOMContentLoaded', () => {
  const categoriesList = refs.categoriesList;
  if (categoriesList) {
    categoriesList.addEventListener('click', chooseCategory);
  }
});

export function hendlerClickBtn(event) {
  const btn = event.currentTarget;

  btn.disabled = true;
  btn.textContent = 'Завантаження...';

  currentPage += 1;

  getFurnitureCard(currentCategory, currentPage, limit).finally(() => {
    btn.disabled = false;
    btn.textContent = 'Показати ще';
  });
}

export async function getCategories() {
  try {
    const categories = await fetchFurnitureCategory();

    const allCategories = [
      { _id: 'all', name: 'Всі категорії' },
      ...categories,
    ];

    renderCategories(allCategories);
  } catch (error) {
    throw error;
  }
}
export async function getFurnitureCard(category = 'all', page = 1, limit = 8) {
  try {
    const data = await fetchFurnitureCard(category, page, limit);
    const furnitures = data.furnitures || data;

    if (!Array.isArray(furnitures) || furnitures.length === 0) {
      util.toastMessage('Більше товарів немає');
      refs.loadMoreBtn?.classList.add('visually-hidden');
      return;
    }

    if (page === 1) {
      refs.furnitureContainer.innerHTML = '';
    }

    renderCard(furnitures);

    if (furnitures.length < limit) {
      refs.loadMoreBtn?.classList.add('visually-hidden');
    } else {
      refs.loadMoreBtn?.classList.remove('visually-hidden');
    }
  } catch (error) {
    console.error('Помилка при отриманні товарів:', error);
    util.toastMessage('Сервер не відповідає або категорія недоступна');
    refs.loadMoreBtn?.classList.add('visually-hidden');
  }
}

function onOrderButtonClick(modelId, color) {
  refs.orderModal.form.dataset.modelId = modelId;
  refs.orderModal.form.dataset.color = color;
  openModal(refs.orderModal);
}
