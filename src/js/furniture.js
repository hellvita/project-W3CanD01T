import { getCategories, getFurnitureCard } from './handlers';

export async function initFurnitureSection() {
  try {
    await getCategories();
    await getFurnitureCard('all', 1, 8);
  } catch (error) {
    util.toastMessage('Не вдалося завантажити меблі або категорії');
  }
}
