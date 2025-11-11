import { fetchFeedback } from './furniture-api.js';
import { createFeedbackCard, renderStars } from './render-functions.js';
import { showLoader, hideLoader } from './ui-loader.js';
import { refs } from './refs.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as util from './helpers';
import { openNavMenu, closeNavMenu } from './header-nav';
import { openModal } from './modal.js';
import { fetchFurnitureCategory } from './furniture-api';
import { renderCategories } from './render-functions';

export async function getCategories() {
  try {
    const categories = await fetchFurnitureCategory();

    const allCategories = [
      { _id: 'all', name: 'Всі категорії' },
      ...categories,
    ];

    renderCategories(allCategories);
  } catch (error) {
    throw error;
  }
}

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

export function onBurgerClick() {
  util.hideElement(refs.headerSection.burgerBtn);
  refs.headerSection.burgerBtn.removeEventListener('click', onBurgerClick);

  util.showElement(refs.headerSection.closeBtn);
  refs.headerSection.closeBtn.addEventListener('click', onCloseNavClick);

  refs.headerSection.menuModal.addEventListener('click', onMenuLinkClick);

  openNavMenu();
  util.toggleScroll();
}

export function onCloseNavClick() {
  util.hideElement(refs.headerSection.closeBtn);
  refs.headerSection.closeBtn.removeEventListener('click', onCloseNavClick);

  util.showElement(refs.headerSection.burgerBtn);
  refs.headerSection.burgerBtn.addEventListener('click', onBurgerClick);

  refs.headerSection.menuModal.removeEventListener('click', onMenuLinkClick);

  closeNavMenu();
  util.allowScrolling();
}

function onMenuLinkClick(e) {
  const isNavLink = e.target.classList.contains('header-modal__link');
  const isNavBtn = e.target.classList.contains('header-modal__button');
  if (isNavLink || isNavBtn) onCloseNavClick();
}

export function onPageClick(e) {
  const clickOnMenu =
    e.target === refs.headerSection.menuModal ||
    refs.headerSection.menuModal.contains(e.target) ||
    refs.headerSection.burgerBtn.contains(e.target);
  if (!clickOnMenu) {
    onCloseNavClick();
  }
}

function onOrderButtonClick(modelId, color) {
  refs.orderModal.form.dataset.modelId = modelId;
  refs.orderModal.form.dataset.color = color;
  openModal(refs.orderModal);
}
