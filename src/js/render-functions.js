import { refs } from './refs';
import { getFurnitureCard, getCategories } from './handlers';

let currentPage = 1;
const limit = 8;
let currentCategory = 'all';

getFurnitureCard(currentCategory, currentPage, limit);

refs.categoriesList.addEventListener('click', chooseCategory);

refs.loadMoreBtn.addEventListener('click', hendlerClickBtn);

function hendlerClickBtn(event) {
  const btn = event.currentTarget;

  btn.disabled = true;
  btn.textContent = 'Завантаження...';

  currentPage += 1;

  getFurnitureCard(currentCategory, currentPage, limit).finally(() => {
    btn.disabled = false;
    btn.textContent = 'Показати ще';
  });
}

function chooseCategory(event) {
  const categoryItem = event.target.closest('.category-item');
  if (!categoryItem) return;

  document
    .querySelectorAll('.category-item')
    .forEach(it => it.classList.remove('active'));
  categoryItem.classList.add('active');

  const categoryId = categoryItem.dataset.id || 'all';

  currentPage = 1;
  currentCategory = categoryId;

  refs.furnitureContainer.innerHTML = '';
  getFurnitureCard(categoryId, currentPage, limit);
}

document.addEventListener('DOMContentLoaded', () => {
  const categoriesList = refs.categoriesList;
  if (categoriesList) {
    categoriesList.addEventListener('click', chooseCategory);
  }
});
export function renderCategories(categories) {
  const markup = [
    `<li class="category-item active" data-id="all">
      <div class="category-wrapper">
        <picture>
          <source
            srcset="
              /img/furniture/furniture-categories/all-products.webp 1x,
              /img/furniture/furniture-categories/all-products@2x.webp 2x
            "
          />
          <img
            src="/img/furniture/furniture-categories/all-products.webp"
            alt="Всі товари"
            class="category-img"
          />
        </picture>
        <p class="category-name">Всі товари</p>
      </div>
    </li>`,
    ...categories.map(({ _id, name }) => {
      return `
        <li class="category-item" data-id="${_id}">
          <div class="category-wrapper">
            <picture>
              <source
                srcset="
                  /img/furniture/furniture-categories/${_id}.webp 1x,
                  /img/furniture/furniture-categories/${_id}@2x.webp 2x
                "
              />
              <img
                src="/img/furniture/furniture-categories/${_id}.webp"
                alt="${name}"
                class="category-img"
                onerror="this.src='/img/furniture/furniture-categories/default.webp'"
              />
            </picture>
            <p class="category-name">${name}</p>
          </div>
        </li>`;
    }),
  ].join('');

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

      return `
        <li class="furniture-list-item" data-id="${_id}">
          <img class="furniture-img" src="${images?.[0]}" alt="${name}" />
          <h3 class="furniture-title">${name}</h3>
          <ul class="furniture-color-list">${colorMarkup}</ul>
          <p class="furniture-price">${price} грн</p>
          <button type="button" class="furniture-more-btn button-main btn--grey">
            Детальніше
          </button>
        </li>`;
    })
    .join('');

  refs.furnitureContainer.insertAdjacentHTML('beforeend', markup);
}

import icons from '../img/icons.svg';

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
