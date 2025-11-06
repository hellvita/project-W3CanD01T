import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';
import iziToast from 'izitoast';

axios.defaults.baseURL = BASE_URL;

export async function fetchFurnitureCategory() {
  try {
    const { data } = await axios.get(ENDPOINTS.CATEGORY);
    console.log(data);

    return data;
  } catch (error) {
    iziToast.warning({
      title: 'Помилка',
      message:
        'Помилка при завантаженні категорій: ' +
        (error?.message || String(error)),
      position: 'topRight',
      timeout: 5000,
    });
  }
}

export async function fetchFurnitureCard() {
  try {
    const { data } = await axios.get(ENDPOINTS.FURNITURE, {
      params: {
        page: 1,
        limit: 8,
      },
    });
    console.log(data.furnitures);
    return data.furnitures;
  } catch (error) {
    iziToast.warning({
      title: 'Помилка',
      message:
        'Помилка при відображенні карток: ' + (error?.message || String(error)),
      position: 'topRight',
      timeout: 5000,
    });
  }
}
