import Raty from 'raty-js';
import starOn from '../img/feedback/starOn.png';
import starOff from '../img/feedback/starOff.png';
import starHalf from '../img/feedback/starHalf.png';
import { roundRating } from './helpers.js';
import icons from '../img/icons.svg';
import { refs } from './refs';

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
    const raty = new Raty(el, { number: 5, score, readOnly: true, starType: 'img', starOn, starOff, starHalf });
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
