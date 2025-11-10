import { refs } from './refs';
import * as handler from './handlers';
import * as util from './helpers';

export function initHeaderNav() {
  refs.headerSection.burgerBtn.addEventListener('click', handler.onBurgerClick);
  toggleModalVisibility();
  addEventListener('resize', toggleModalVisibility);
  addEventListener('resize', util.toggleScroll);
}

function toggleModalVisibility() {
  if (util.isDesktopView()) {
    handler.onCloseNavClick();
    util.hideElement(refs.headerSection.burgerBtn);
  } else {
    if (!util.btnIsVisible(refs.headerSection.closeBtn)) {
      util.showElement(refs.headerSection.burgerBtn);
    }
  }
}

export function menuIsClosed() {
  return refs.headerSection.menuModal.classList.contains('is-hidden');
}

function updateModalPosition() {
  const headerHeight =
    refs.headerSection.header.getBoundingClientRect().height - 0.5;

  util.addStyle(refs.headerSection.menuModal, `top: ${headerHeight}px`);
}

export function openNavMenu() {
  refs.headerSection.menuModal.classList.remove('is-hidden');

  updateModalPosition();

  document.addEventListener('click', handler.onPageClick);

  addEventListener('resize', updateModalPosition);
}

export function closeNavMenu() {
  removeEventListener('resize', updateModalPosition);

  document.removeEventListener('click', handler.onPageClick);

  util.removeStyles(refs.headerSection.menuModal);

  refs.headerSection.menuModal.classList.add('is-hidden');
}
