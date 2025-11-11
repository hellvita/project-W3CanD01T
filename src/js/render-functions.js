import Raty from 'raty-js';
import starOn from '../img/feedback/starOn.png';
import starOff from '../img/feedback/starOff.png';
import starHalf from '../img/feedback/starHalf.png';
import { customRound, roundRating } from './helpers.js';
import { getCategoriesImages } from './category-img.js';
import icons from '../img/icons.svg';
import { refs } from './refs';

export function renderCategories(categories) {
  const images = getCategoriesImages(categories);

  const markup = categories
    .map(
      ({
        _id,
        name,
      }) => `<li class="category-item ${_id === 'all' ? 'active' : ''}" data-id="${_id}">
          <div class="category-wrapper">
            <picture>
              <source
                srcset="
                  ${images[name].one}    1x,
                  ${images[name].two} 2x
                "
              />
              <img
                src="${images[name].one}"
                alt="${name}"
                class="category-img ${_id === 'all' ? 'active' : ''}"
              />
            </picture>
            <div class="frame"></div>

            <p class="category-name">${name}</p>
            <div class="categories-loader"></div>
          </div>
        </li>`
    )
    .join('');

  refs.furnitureSection.categoriesList.innerHTML = markup;
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
        <li class="furniture-list-item">
          <img class="furniture-img" src="${imageSrc}" alt="${name}" />
          <h3 class="furniture-title">${name}</h3>
          <ul class="furniture-color-list">${colorMarkup}</ul>
          <p class="furniture-price">${price} грн</p>
          <button type="button" class="furniture-more-btn button-main btn--grey js-furniture-more-btn" data-id="${_id}">
            Детальніше
          </button>
        </li>`;
    })
    .join('');

  refs.furnitureSection.furnitureContainer.innerHTML = markup;
}

export function renderFurnitureLoader() {
  const markup = `
          <li class="furniture-loader"></li>
        <li class="furniture-loader"></li>
        <li class="furniture-loader"></li>
        <li class="furniture-loader"></li>
        <li class="furniture-loader"></li>
        <li class="furniture-loader"></li>
        <li class="furniture-loader"></li>
        <li class="furniture-loader"></li>
  `;

  refs.furnitureSection.furnitureContainer.innerHTML = markup;
}

export function createFeedbackCard(feedback) {
  const rating = roundRating(feedback.rate);
  const card = document.createElement('div');
  card.classList.add('swiper-slide');
  card.innerHTML = `
    <article class="feedback-card" aria-label="Відгук клієнта">
      <div class="feedback-card__stars" data-rating="${rating}"></div>
      <p class="feedback-card__text">${feedback.descr}</p>
      <p class="feedback-card__author">${feedback.name}</p>
    </article>
  `;
  return card;
}

export function renderStars() {
  const feedbackStars = document.querySelectorAll('.feedback-card__stars');
  feedbackStars.forEach(el => {
    const score = el.dataset.rating || 0;
    const raty = new Raty(el, {
      number: 5,
      score,
      readOnly: true,
      starType: 'img',
      starOn,
      starOff,
      starHalf,
    });
    raty.init();
  });
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

export function showFaqLoader() {
  refs.faqSection.faqLoader.classList.add('faq-loader');
  refs.faqSection.faqBlock.classList.add('no-active');
}

export function hideFaqLoader() {
  refs.faqSection.faqLoader.classList.remove('faq-loader');
  refs.faqSection.faqBlock.classList.remove('no-active');
}

export function renderDetailModal(furniture) {
  const markup = `
      <button
      type="button"
      class="modal-details-close"
      id="closeModalBtn"
      data-modal-details-close
    >
      <svg width="16" height="16">
        <use href="${icons}#close-icon"></use>
      </svg>
    </button>

   <div class="modal-details-gallery">
        <img src="${furniture.images[0]}" alt="${furniture.name}" class="modal-details-big-image" />
        <div class="modal-details-subgallery">
          <img src="${furniture.images[1]}" alt="${furniture.name}" class="modal-details-small-image" />
          <img src="${furniture.images[2]}" alt="${furniture.name}" class="modal-details-small-image" />
        </div>
      </div>

      <div class="modal-details-info">
        <h2 class="modal-details-title">${furniture.name}</h2>
        <p class="modal-details-category">${furniture.category.name}</p>
        <p class="modal-details-price">${furniture.price} грн</p>

        <div class="modal-details-rating">${renderRating(furniture.rate)}</div>

        <div class="modal-details-colors">
          <p class="modal-detail-color-title">Колір</p>
          <div class="modal-detail-color-options">
            ${renderColorModal(furniture.color)}
          </div>
          <p class="modal-details-description">
            ${furniture.description}.
          </p>

          <p class="modal-details-dimensions">Розміри: ${furniture.sizes}</p>

          <button class="modal-details-order-btn button-main btn--red js-modal-details-order-btn" data-id="${furniture._id}">
            Перейти до замовлення
          </button>
        </div>
      </div>
  `;

  refs.modalDetails.modalContent.innerHTML = markup;
}

function renderColorModal(colors) {
  const markup = colors
    .map(
      (color, id) => `
     <label>
              <input
                type="radio"
                name="color"
                class="color"
                style="background-color: ${color}"
                ${id === 0 ? 'checked' : ''}
              />
            </label>
    `
    )
    .join('');

  return markup;
}

function renderRating(rating) {
  const r = customRound(rating);
  const markup = '★'.repeat(r);
  return markup;
}
