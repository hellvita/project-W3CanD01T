import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Raty from 'raty-js'; 
import starOn from 'raty-js/src/images/star-on.png';
import starOff from 'raty-js/src/images/star-off.png';
import starHalf from 'raty-js/src/images/star-half.png';

function roundRating(value) {
  const decimal = value % 1;
  let result = Math.floor(value);
  if (decimal >= 0.3 && decimal <= 0.7) result += 0.5;
  if (decimal >= 0.8) result += 1;
  return result;
}


function createFeedbackCard(feedback) {
  const rating = roundRating(feedback.rate);
  const card = document.createElement('div');
  card.classList.add('swiper-slide');
  card.innerHTML = `
    <article class="feedback-card" aria-label="Відгук клієнта">
      <div class="feedback-card__stars-wrapper">
        <div class="feedback-card__stars" data-rating="${rating}"></div>
      </div>
      <p class="feedback-card__text">${feedback.descr}</p>
      <p class="feedback-card__author">${feedback.name}</p>
    </article>
  `;
  return card;
}


export function loadFeedbacks() {
  const feedbackList = document.getElementById('feedback-list');
  const loader = document.getElementById('feedback-loader');

  loader.classList.remove('is-hidden');

  fetch('https://furniture-store-v2.b.goit.study/api/feedbacks')
    .then(response => {
      if (!response.ok) throw new Error('Помилка завантаження відгуків');
      return response.json();
    })
    .then(data => {
      feedbackList.innerHTML = '';

    
      data.feedbacks.slice(0, 10).forEach(feedback => {
        const card = createFeedbackCard(feedback);
        feedbackList.appendChild(card);
      });

      new Swiper('.feedback-slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        pagination: {
          el: '.feedback-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.feedback-btn-next',
          prevEl: '.feedback-btn-prev',
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        },
      });

     
      const feedbackStars = document.querySelectorAll('.feedback-card__stars');
      feedbackStars.forEach(el => {
        const score = el.dataset.rating || 0;
        const raty = new Raty(el, {
          number: 5,
          score: score,
          readOnly: true,
          starType: 'img',
          starOn: starOn,
          starOff: starOff,
          starHalf: starHalf,
        });
        raty.init(); 
      });
    })
    .catch(error => {
      console.error(error);
      alert('Не вдалося завантажити відгуки. Спробуйте пізніше.');
    })
    .finally(() => {
      loader.classList.add('is-hidden');
    });
}

document.addEventListener('DOMContentLoaded', loadFeedbacks);
