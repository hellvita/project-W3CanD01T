import { refs } from './refs';

export function renderCategories(categories) {
  const markup = categories
    .map(category => `<li class="category-item">${category.name}</li>`)
    .join('');
  refs.furnitureList.innerHTML = markup;
}

function renderColor(colors) {
  const markup = colors
    .map(color => {
      `<li class="color-circle style="background-color: ${color}";
              </li>`;
    })
    .join('');

  return markup;
}

export function renderCard(furnitures) {
  const markup = furnitures
    .map(({ _id, name, images, price, color }) => {
      const colorMarkup = Array.isArray(color)
        ? createColorMarkup(color)
        : createColorMarkup([color]);
      return `
      <li class="furniture-list-item" data-id="${_id}">
        <img class="furniture-img" src="${images?.[0]}" alt="${name}" />
        <h3 class="furniture-title">${name}</h3>
         <ul class="furniture-color-list">${renderColor(colors)}</ul>
        <p class="furniture-price">${price} грн</p>
         <button
            type="button"
            class="furniture-more-btn button-main btn--grey"
          >
            Детальніше
          </button>
      </li>`;
    })
    .join('');
  console.log(furnitures);

  refs.furnitureContainer.innerHTML = markup;
}
