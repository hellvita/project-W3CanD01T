import { refs } from './refs';
// import { getFurnitureCard } from './handlers';
import { chooseCategory, hendlerClickBtn } from './handlers';
import icons from '../img/icons.svg';
import { categoriesImg } from './constants';

function createCategoryMarkup({ name }) {
  return `
    <li class="category-item" data-id="${name === 'Всі товари' ? 'all' : name}">
      <div class="category-wrapper">
        <picture>
          <source
            srcset="
              ${categoriesImg[name]} 1x,
              ${categoriesImg[name].replace('.webp', '@2x.webp')} 2x
            "
          />
          <img
            src="${categoriesImg[name]}"
            alt="${name}"
            class="category-img"
            onerror="this.src='/img/furniture/furniture-categories/default.webp'"
          />
        </picture>
        <p class="category-name">${name}</p>
      </div>
    </li>`;
}

export function renderCategories(categories) {
  refs.categoriesList.innerHTML = categories.map(createCategoryMarkup).join('');
}

function renderColor(colors) {
  return colors
    .map(
      color =>
        `<li class="color-circle" style="background-color: ${color};"></li>`
    )
    .join('');
}

// export function renderCard(furnitures) {
//   if (!Array.isArray(furnitures) || furnitures.length === 0) return;

//   const markup = furnitures
//     .map(({ _id, name, images, price, color }) => {
//       const colorMarkup = Array.isArray(color)
//         ? renderColor(color)
//         : renderColor([color]);

//       return `
//         <li class="furniture-list-item" data-id="${_id}">
//           <img class="furniture-img" src="${images?.[0]}" alt="${name}" />
//           <h3 class="furniture-title">${name}</h3>
//           <ul class="furniture-color-list">${colorMarkup}</ul>
//           <p class="furniture-price">${price} грн</p>
//           <button type="button" class="furniture-more-btn button-main btn--grey">
//             Детальніше
//           </button>
//         </li>`;
//     })
//     .join('');

//   refs.furnitureContainer.insertAdjacentHTML('beforeend', markup);
// }

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
