import { fetchFeedback } from './furniture-api.js';
import { createFeedbackCard, renderStars } from './render-functions.js';
import { showLoader, hideLoader } from './ui-loader.js';
import { refs } from './refs.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function handleLoadFeedbacks() {
  showLoader();

  try {
    const data = await fetchFeedback();
    const feedbacks = data.feedbacks; 

    refs.feedback.list.innerHTML = '';

    feedbacks.forEach(feedback => {
    const card = createFeedbackCard(feedback);
    refs.feedback.list.appendChild(card);
    });


    const swiper = new Swiper('.feedback-slider', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: { el: '.feedback-pagination', clickable: true },
      navigation: {
        nextEl: '.feedback-btn-next',
        prevEl: '.feedback-btn-prev',
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1440: { slidesPerView: 3 },
      },
    });

    renderStars();

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') {
        refs.feedback.btnNext.click();
      }
      if (e.key === 'ArrowLeft') {
        refs.feedback.btnPrev.click();
      }
    });
  } catch (error) {
    console.error('Помилка завантаження відгуків:', error);
  } finally {
    hideLoader();
  }
}
