import * as util from './helpers';
import { fetchFurnitureCategory, fetchFurnitureCard } from './furniture-api';
import { renderCategories, renderCard } from './render-functions';

export async function getCategories() {
  try {
    const data = await fetchFurnitureCategory();
    const categories = [['Всі товари'], ...data];
    renderCategories(categories);
  } catch (error) {
    console.error('Помилка при завантаженні категорій:', error);
    util.toastMessage('Не вдалося завантажити категорії', 'error');
  }
}

export async function getFurnitureCard() {
  try {
    const data = await fetchFurnitureCard();
    const furnitures = Array.isArray(data) ? data : data.furnitures || [];
    renderCard(furnitures);
  } catch (error) {
    console.error('Помилка при завантаженні картки товарів:', error);
    util.toastMessage('Не вдалося завантажити картки товарів', 'error');
  }
}
