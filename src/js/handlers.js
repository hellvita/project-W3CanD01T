import * as util from './helpers';
import { refs } from './refs';
import { fetchFurnitureCategory, fetchFurnitureCard } from './furniture-api';
import { renderCategories, renderCard } from './render-functions';

export async function getCategories() {
  try {
    const categories = await fetchFurnitureCategory();
    renderCategories(categories);
  } catch (error) {
    util.toastMessage('Не вдалося завантажити категорії');
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
