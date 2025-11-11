import Raty from 'raty-js';
import starOn from '../img/feedback/starOn.png';
import starOff from '../img/feedback/starOff.png';
import starHalf from '../img/feedback/starHalf.png';
import { roundRating, getCategoriesImages } from './helpers.js';
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
                  /img/furniture/furniture-categories/${images[name]}.webp    1x,
                  /img/furniture/furniture-categories/${images[name]}@2x.webp 2x
                "
              />
              <img
                src="/img/furniture/furniture-categories/${images[name]}.webp"
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
