import { refs } from './refs';
import * as util from './helpers';
import { openNavMenu, closeNavMenu } from './header-nav';
import { openModal } from './modal.js';

export function onBurgerClick() {
  util.hideElement(refs.headerSection.burgerBtn);
  refs.headerSection.burgerBtn.removeEventListener('click', onBurgerClick);

  util.showElement(refs.headerSection.closeBtn);
  refs.headerSection.closeBtn.addEventListener('click', onCloseNavClick);

  refs.headerSection.menuModal.addEventListener('click', onMenuLinkClick);

  openNavMenu();
  util.preventScrolling();
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
    refs.headerSection.menuModal.contains(e.target);
  if (!clickOnMenu) {
    // onCloseNavClick();
  }
}

function onOrderButtonClick(modelId, color) {
  refs.orderModal.form.dataset.modelId = modelId;
  refs.orderModal.form.dataset.color = color;
  openModal(refs.orderModal);
}
