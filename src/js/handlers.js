// import { refs } from './refs';
import * as util from './helpers';
import { fetchFurnitureCategory, fetchFurnitureCard } from './furniture-api';
import { renderCategories, renderCard } from './render-functions';

export async function getCategories() {
  try {
    const dataCategory = await fetchFurnitureCategory();

    renderCategories(dataCategory);
  } catch (error) {
    console.error('Помилка при завантаженні категорій:', error);
    util.toastMessage('Не вдалося завантажити категорії', 'error');
  }
}

export async function getFurnitureCard() {
  try {
    const dataCard = await fetchFurnitureCard();
    const cardsFromServer = Array.isArray(dataCard)
      ? dataCard
      : dataCard.furnitures || [];

    const cards = ['Всі товари', ...cardsFromServer];

    renderCard(cards);
    renderCard(cards);
  } catch (error) {
    console.error('Помилка завантаженні картки товарів:', error);
    util.toastMessage('Не вдалося завантажити картки товарів', 'error');
  }
}
