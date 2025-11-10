import { refs } from './refs';
import * as util from './helpers';

import {
  getCategories,
  getFurnitureCard,
  chooseCategory,
  hendlerClickBtn,
} from './handlers';

export async function initFurnitureSection() {
  try {
    console.log('getFurnitureCard викликано');
    await getCategories();
    // await getFurnitureCard(currentCategory, currentPage, limit);
    await getFurnitureCard('all', 1, 8);
  } catch (error) {
    util.toastMessage('Не вдалося завантажити меблі або категорії');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initFurnitureSection();

  const categoriesList = refs.categoriesList;
  const loadMoreBtn = refs.loadMoreBtn;

  if (categoriesList) {
    categoriesList.addEventListener('click', chooseCategory);
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', hendlerClickBtn);
  }
});
