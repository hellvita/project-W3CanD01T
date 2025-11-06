import { refs } from './refs';
import iziToast from 'izitoast';
import { fetchFurnitureCategory, fetchFurnitureCard } from './furniture-api';

const furnitureList = document.querySelector('.furniture-list');
const furnitureContainer = document.querySelector('.furniture-container');

export async function renderCategories() {
  try {
    const categories = await fetchFurnitureCategory();
    console.log(categories);
    furnitureList.innerHTML = '';

    const markup = categories
      .map(category => `<li class="category-item">${category.name}</li>`)
      .join('');

    furnitureList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити категорії',
      position: 'topRight',
    });
  }
}

export async function renderCard() {
  try {
    const furnitures = await fetchFurnitureCard();

    furnitureContainer.innerHTML = '';

    const markup = furnitures
      .map(({ _id, name, images, price, color }) => {
        return `
          <li class="furniture-item" data-id="${_id}">
            <h3 class="furniture-name">${name}</h3>
            <img class="furniture-img" src="${images[0]}" alt="${name}" />
            <p class="furniture-price">${price} грн</p>
            <p class="furniture-color">${color}</p>
          </li>
        `;
      })
      .join('');
    console.log(furnitures);

    furnitureContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    iziToast.warning({
      title: 'Помилка',
      message: 'Помилка при відображенні карток: ',
      position: 'topRight',
      timeout: 5000,
    });
  }
}
