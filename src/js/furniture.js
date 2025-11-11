import { getCategories, getFurnitureCard } from './handlers';
import * as util from './helpers';
import { initCategories } from './categories.js';

export async function initFurnitureSection() {
  try {
    await getCategories();
    initCategories();
    await getFurnitureCard();
  } catch (error) {
    util.toastMessage('Не вдалося завантажити меблі або категорії');
    console.log(error.message);
  }
}
