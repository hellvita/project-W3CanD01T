import { refs } from './refs.js';
import { onCategoryClick } from './handlers.js';

export function setActiveCategory(categoryEl) {
  removeActiveCategory();
  categoryEl.classList.add('active');
}

export function showCategoryLoader() {
  refs.furnitureSection.categoriesList.classList.add('loading');
}

export function hideCategoryLoader() {
  refs.furnitureSection.categoriesList.classList.remove('loading');
}

function removeActiveCategory() {
  const categoryCards = document.querySelectorAll('.category-item');
  categoryCards.forEach(item => item.classList.remove('active'));
}

export function initCategories() {
  refs.furnitureSection.categoriesList.addEventListener(
    'click',
    onCategoryClick
  );
}
