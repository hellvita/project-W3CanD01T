import { refs } from './refs';

export function renderCategories(categories) {
  const markup = categories
    .map(category => `<li class="category-item">${category.name}</li>`)
    .join('');
  refs.furnitureList.innerHTML = markup;
}

function createColorMarkup(colors) {
  if (!colors || colors.length === 0) {
    return '';
  }

  const mainColor = colors[0];

  function hexToRgb(hex) {
    hex = hex.replace('#', '');

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
  }

  return `
    <ul class="furniture-color-list" data-color="${mainColor}">
      ${colors
        .map((color, index) => {
          const rgbColor = hexToRgb(color);
          return `
            <li
              class="color-circle ${index === 0 ? 'active' : ''}"
              style="background-color: ${rgbColor};"
              title="${rgbColor}">
            </li>
          `;
        })
        .join('')}
    </ul>
  `;
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
         ${colorMarkup}
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
