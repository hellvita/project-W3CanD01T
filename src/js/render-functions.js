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
      }) => `<li class="category-item ${_id === 'all' ? 'active' : ''}">
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
