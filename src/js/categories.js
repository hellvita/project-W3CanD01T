import { refs } from './refs.js';
import { onCategoryClick } from './handlers.js';

export function setActiveCategory(categoryEl) {
  removeActiveCategory();
  categoryEl.classList.add('active');
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
