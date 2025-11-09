import { refs } from './refs';
import * as handler from './handlers';
import { addStyle, removeStyles } from './helpers';

export function initHeaderNav() {
  // add no scroll
  refs.headerSection.burgerBtn.addEventListener('click', handler.onBurgerClick);
  
}

function updateModalPosition() {
  const headerHeight = refs.headerSection.header.getBoundingClientRect().height - 0.5;

  addStyle(refs.headerSection.menuModal, `top: ${headerHeight}px`);
}

export function openNavMenu() { 
  refs.headerSection.menuModal.classList.remove('is-hidden');

  updateModalPosition();

  addEventListener('resize', updateModalPosition);
}

export function closeNavMenu() {  
  removeEventListener('resize', updateModalPosition);

  removeStyles(refs.headerSection.menuModal);

  refs.headerSection.menuModal.classList.add('is-hidden');
}