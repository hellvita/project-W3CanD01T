import { refs } from './refs';
import * as util from './helpers';
import { openNavMenu, closeNavMenu } from './header-nav';
import { openModal } from './modal.js';

export function onBurgerClick() {
  util.hideBtn(refs.headerSection.burgerBtn);
  refs.headerSection.burgerBtn.removeEventListener('click', onBurgerClick);

  util.showBtn(refs.headerSection.closeBtn);
  refs.headerSection.closeBtn.addEventListener('click', onCloseNavClick);

  refs.headerSection.menuModal.addEventListener('click', onMenuLinkClick);

  openNavMenu();
  util.preventScrolling();
}

export function onCloseNavClick() {
  util.hideBtn(refs.headerSection.closeBtn);
  refs.headerSection.closeBtn.removeEventListener('click', onCloseNavClick);

  util.showBtn(refs.headerSection.burgerBtn);
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

function onOrderButtonClick(modelId, color) {
  refs.orderModal.form.dataset.modelId = modelId;
  refs.orderModal.form.dataset.color = color;
  openModal(refs.orderModal);
}
