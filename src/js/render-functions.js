const furnitureList = document.querySelector('.furniture-list');
const furnitureContainer = document.querySelector('.furniture-container');

export function renderCategories(categories) {
  const markup = categories
    .map(category => `<li class="category-item">${category.name}</li>`)
    .join('');
  furnitureList.innerHTML = markup;
}

export function renderCard(furnitures) {
  const markup = furnitures
    .map(({ _id, name, images, price, color }) => {
      return `
      <li class="furniture-item" data-id="${_id}">
        <h3 class="furniture-name">${name}</h3>
        <img class="furniture-img" src="${images}" alt="${name}" />
        <p class="furniture-price">${price} грн</p>
        <p class="furniture-color">${color}</p>
      </li>
    `;
    })
    .join('');
  console.log(furnitures);

  furnitureContainer.innerHTML = markup;
}
