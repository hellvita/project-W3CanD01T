import { fetchFeedback } from './furniture-api.js';
import {
  createFeedbackCard,
  renderStars,
  renderDetailModal,
} from './render-functions.js';
import {
  showLoader,
  hideLoader,
  hideFurnitureLoader,
  showFurnitureLoader,
} from './ui-loader.js';
import { refs } from './refs.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import * as util from './helpers';
import { openNavMenu, closeNavMenu } from './header-nav';
import { openModal } from './modal.js';
import {
  fetchFurnitureCategory,
  fetchFurnitureCard,
  fetchFurnitureById,
} from './furniture-api';
import { renderCategories, renderCard } from './render-functions';
import { setActiveCategory } from './categories.js';
import { hideCategoryLoader, showCategoryLoader } from './ui-loader.js';
import { initPagination } from './paginator.js';
import { initModal } from './modal.js';
import { initOrderForm } from './order-form.js';

export async function onCategoryClick(event) {
  const categoryEl = event.target.closest('.category-item');

  if (!categoryEl || categoryEl.classList.contains('active')) return;

  setActiveCategory(categoryEl);

  const categoryID = categoryEl.dataset.id;
  await getFurnitureCard(categoryID);
  const top =
    refs.furnitureSection.categoriesList.getBoundingClientRect().bottom +
    window.scrollY -
    40;
  window.scrollTo({ top, behavior: 'smooth' });

  initModal(refs.modalDetails);
}

export async function getCategories() {
  try {
    showCategoryLoader();

    const categories = await fetchFurnitureCategory();

    const allCategories = [
      { _id: 'all', name: 'Всі категорії' },
      ...categories,
    ];

    renderCategories(allCategories);
  } catch (error) {
    throw new Error('Не вдалося завантажити категорії');
  } finally {
    hideCategoryLoader();
  }
}

export async function getFurnitureCard(category = 'all', page = 1, limit = 8) {
  try {
    showFurnitureLoader();

    const data = await fetchFurnitureCard(category, page, limit);

    const furnitures = data.furnitures;

    if (!Array.isArray(furnitures) || furnitures.length === 0) {
      util.toastMessage('Більше товарів немає');
      // refs.furnitureSection.loadMoreBtn?.classList.add('hidden');
      return;
    }

    renderCard(furnitures);
    initPagination(data.totalItems, data.limit, 'all', page);

    initModal(refs.modalDetails);

    // if (furnitures.length < limit) {
    //   refs.furnitureSection.loadMoreBtn?.classList.add('hidden');
    // } else {
    //   refs.furnitureSection.loadMoreBtn?.classList.remove('hidden');
    // }
  } catch (error) {
    console.error('Помилка при отриманні товарів:', error);
    util.toastMessage('Сервер не відповідає або категорія недоступна');
    refs.loadMoreBtn?.classList.add('visually-hidden');
    throw new Error('Не вдалося завантажити товар');
  } finally {
    hideFurnitureLoader();
  }
}

export async function getFurnitureInfo(id) {
  try {
    const data = await fetchFurnitureById(id);
    renderDetailModal(data);
    refs.modalDetails.closeBtn = document.getElementById('closeModalBtn');
    initModal(refs.modalDetails);

    initModal(refs.orderModal);
    initOrderForm();
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
    refs.feedback.btnPrev.disabled = true;
    refs.feedback.btnNext.disabled = true;
    util.toastMessage('Не вдалося завантажити відгуки');
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
