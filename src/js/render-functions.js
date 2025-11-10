import { refs } from './refs';
import icons from '../img/icons.svg';

export function renderCategories(categories) {
  const images = {
    [categories[0].name]: 'all-products',
    [categories[1].name]: 'upholstered-furniture',
    [categories[2].name]: 'cabinets-storage-systems',
    [categories[3].name]: 'beds-mattresses',
    [categories[4].name]: 'tables',
    [categories[5].name]: 'chairs-stools',
    [categories[6].name]: 'kitchens',
    [categories[7].name]: 'furniture-nursery',
    [categories[8].name]: 'office-furniture',
    [categories[9].name]: 'hallway-furniture',
    [categories[10].name]: 'bathroom-furniture',
    [categories[11].name]: 'garden-furniture',
    [categories[12].name]: 'decor-accessories',
  };
  console.log('images: ', images);

  const markup = categories

    .map(({ _id, name }) => {
      const imageName = images[name] || 'default';
      return `<li
        class="category-item ${_id === 'all' ? 'active' : ''}"
        data-id="${_id}"
      >
        <div class="category-wrapper">
          <picture>
            <source
              srcset="
                  /img/furniture/furniture-categories/${imageName}.webp 1x,
                  /img/furniture/furniture-categories/${imageName}@2x.webp 2x
                "
            />
            <img
              src="/img/furniture/furniture-categories/${imageName}.webp"
              alt="${name}"
              class="category-img"
              onerror="this.src='/img/furniture/furniture-categories/default.webp'"
            />
          </picture>
          <p class="category-name">${name}</p>
        </div>
      </li>`;
    })
    .join('');

  refs.categoriesList.innerHTML = markup;
}

function renderColor(colors) {
  return colors
    .map(
      color =>
        `<li class="color-circle" style="background-color: ${color};"></li>`
    )
    .join('');
}

export function renderCard(furnitures) {
  if (!Array.isArray(furnitures) || furnitures.length === 0) return;

  const markup = furnitures
    .map(({ _id, name, images, price, color }) => {
      const colorMarkup = Array.isArray(color)
        ? renderColor(color)
        : renderColor([color]);
      const imageSrc = images?.[0];
      return `
        <li class="furniture-list-item" data-id="${_id}">
          <img class="furniture-img" src="${imageSrc}" alt="${name}" />
          <h3 class="furniture-title">${name}</h3>
          <ul class="furniture-color-list">${colorMarkup}</ul>
          <p class="furniture-price">${price} грн</p>
          <button type="button" class="furniture-more-btn button-main btn--grey">
            Детальніше
          </button>
        </li>`;
    })
    .join('');
  refs.furnitureContainer.innerHTML = '';
  refs.furnitureContainer.insertAdjacentHTML('beforeend', markup);
}

export function renderFAQ(faqData) {
  const markupFaq = faqData
    .map(
      ({ q, a }) => `
            <div class="ac">
                <h3 class="ac-header">
                    <button type="button" class="ac-trigger">${q}<svg class="svg-sprite-arrow-down" width="17" height="10">
                                <use href="${icons}#arrow-down"></use>
                            </svg>
                        </button>
                    </h3>
                    <div class="ac-panel">
                        <p class="faq-block-answer">${a}</p>
                    </div>
                </div>
    `
    )
    .join('');

  refs.faqSection.accordion.innerHTML = markupFaq;
}
