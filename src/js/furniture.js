import { refs } from './refs';
import { getCategories, chooseCategory, hendlerClickBtn } from './handlers';

export async function initFurnitureSection() {
  try {
    await getCategories();
    // await getFurnitureCard(currentCategory, currentPage, limit);
  } catch (error) {
    util.toastMessage('Не вдалося завантажити меблі або категорії');
  }
}

// refs.categoriesList.addEventListener('click', chooseCategory);
// refs.loadMoreBtn.addEventListener('click', hendlerClickBtn);

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
