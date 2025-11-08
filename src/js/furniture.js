import { getCategories, getFurnitureCard } from './handlers';

export async function initFurnitureSection() {
  await getCategories();
  await getFurnitureCard();
}
