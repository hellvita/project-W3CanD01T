import { getCategories } from './handlers';
import * as util from './helpers';

export async function initFurnitureSection() {
  try {
    await getCategories();
  } catch (error) {
    util.toastMessage('Не вдалося завантажити меблі або категорії');
  }
}
