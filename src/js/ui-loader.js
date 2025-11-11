import { refs } from './refs.js';
import { renderFurnitureLoader } from './render-functions.js';

export function showLoader() {
  refs.feedback.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.feedback.loader.classList.add('is-hidden');
}

export function showCategoryLoader() {
  refs.furnitureSection.categoriesList.classList.add('loading');
}

export function hideCategoryLoader() {
  refs.furnitureSection.categoriesList.classList.remove('loading');
}

export function showFurnitureLoader() {
  renderFurnitureLoader();
}
export function hideFurnitureLoader() {
  const cardList = refs.furnitureSection.furnitureContainer.children;
  [...cardList].forEach(card => card.classList.remove('furniture-loader'));
}

export function setLoadingState(button, isLoading) {
  if (isLoading) {
    button.classList.add('on-load');
    button.disabled = true;
  } else {
    button.classList.remove('on-load');
    button.disabled = false;
  }
}
