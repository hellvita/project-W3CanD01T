import { getCategories, getFurnitureCard } from './handlers';
import * as util from './helpers';
import { initCategories } from './categories.js';
import { initModal } from './modal.js';
import { refs } from './refs.js';
export async function initFurnitureSection() {
  try {
    
await getCategories();
    initCategories();
    await getFurnitureCard();
initModal(refs.modalDetails);
    

  } catch (error) {
    util.toastMessage('Не вдалося завантажити меблі або категорії');
    console.log(error.message);
  }
}