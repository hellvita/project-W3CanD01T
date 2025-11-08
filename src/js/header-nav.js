import { refs } from './refs';
import * as handler from './handlers';

export function initHeaderNav() {
  // add no scroll
  refs.headerMenuBtn.addEventListener('click', handler.onBurgerClick);
  window.addEventListener('resize', updateModalPosition);
}

function updateModalPosition() {
  const headerHeight = refs.header.getBoundingClientRect().height - 0.5;

  refs.headerModal.style.top = `${headerHeight}px`;
}
