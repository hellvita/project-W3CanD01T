import { getCategories, getFurnitureCard } from './handlers';
import * as util from './helpers';
import { initCategories } from './categories.js';

export async function initFurnitureSection() {
  try {
    await getFurnitureCard();
    initModal(refs.modalDetails);
    await getCategories();
    initCategories();
    

  } catch (error) {
    util.toastMessage('Не вдалося завантажити меблі або категорії');
    console.log(error.message);
  }
}