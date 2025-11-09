import { refs } from './refs';

import Raty from 'raty-js';
import starOn from '../img/feedback/starOn.png';
import starOff from '../img/feedback/starOff.png';
import starHalf from '../img/feedback/starHalf.png';
import { roundRating } from './helpers.js';

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