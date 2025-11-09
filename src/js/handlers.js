import * as util from './helpers';
import { fetchFurnitureCategory, fetchFurnitureCard } from './furniture-api';
import { renderCategories, renderCard } from './render-functions';

export async function getCategories() {
  try {
    const data = await fetchFurnitureCategory();
    const categories = ({ name: 'Всі товари' }, [...data]);
    renderCategories(categories);
  } catch (error) {
    util.toastMessage('Не вдалося завантажити категорії');
  }
}

export async function getFurnitureCard() {
  try {
    const data = await fetchFurnitureCard();
    const furnitures = Array.isArray(data) ? data : data.furnitures || [];
    renderCard(furnitures);
  } catch (error) {
    util.toastMessage('Не вдалося завантажити картки товарів');
  }
}
