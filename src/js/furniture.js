import { getCategories, getFurnitureCard } from './handlers';

export function initFurnitureSection() {
  getCategories();
  getFurnitureCard();
}
