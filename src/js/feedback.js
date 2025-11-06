
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function roundRating(value) {
  const decimal = value % 1;
  let result = Math.floor(value);
  if (decimal >= 0.3 && decimal <= 0.7) result += 0.5;
  if (decimal >= 0.8) result += 1;
  return result;
}


function createStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 === 0.5;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<svg width="20" height="20" fill="var(--color-primary)">
      <use href="./img/icons.svg#icon-star"></use>
    </svg>`;
  }
  if (halfStar) {
    starsHTML += `<svg width="20" height="20" fill="var(--color-primary)">
      <use href="./img/icons.svg#icon-star-half"></use>
    </svg>`;
  }
  return starsHTML;
}


function createFeedbackCard(feedback) {
  const rating = roundRating(feedback.rating);
  const card = document.createElement('div');
  card.classList.add('swiper-slide');
  card.innerHTML = `
    <article class="feedback-card" aria-label="Відгук клієнта">
      <div class="feedback-card__rating">
        <div class="feedback-card__stars">
          ${createStars(rating)}
        </div>
        <span class="feedback-card__score">${rating}</span>
      </div>
      <p class="feedback-card__text">${feedback.text}</p>
      <p class="feedback-card__author">${feedback.author}</p>
    </article>
  `;
  return card;
}


export function loadFeedbacks() {
  const feedbackList = document.getElementById('feedback-list');
  const loader = document.getElementById('feedback-loader');

  loader.classList.remove('is-hidden'); // показати лоадер

  fetch('https://furniture-store-v2.b.goit.study/api/feedbacks')
    .then(response => {
      if (!response.ok) throw new Error('Помилка завантаження відгуків');
      return response.json();
    })
    .then(data => {
      feedbackList.innerHTML = '';
      data.slice(0, 10).forEach(feedback => {
        const card = createFeedbackCard(feedback);
        feedbackList.appendChild(card);
      });


      new Swiper('.feedback-slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.feedback-btn-next',
          prevEl: '.feedback-btn-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        },
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
