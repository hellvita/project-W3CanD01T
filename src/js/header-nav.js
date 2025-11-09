import { refs } from './refs';
import * as handler from './handlers';
import * as util from './helpers';

export function initHeaderNav() {
  refs.headerSection.burgerBtn.addEventListener('click', handler.onBurgerClick);
  addEventListener('resize', toggleModalVisibility);
}

function toggleModalVisibility() {
  if (util.isDesktopView()) {
    handler.onCloseNavClick();
    util.hideBtn(refs.headerSection.burgerBtn);
  } else {
    if (!util.btnIsVisible(refs.headerSection.closeBtn)) {
      util.showBtn(refs.headerSection.burgerBtn);
    }
  }
}

function updateModalPosition() {
  const headerHeight =
    refs.headerSection.header.getBoundingClientRect().height - 0.5;

  util.addStyle(refs.headerSection.menuModal, `top: ${headerHeight}px`);
}

export function openNavMenu() {
  refs.headerSection.menuModal.classList.remove('is-hidden');

  updateModalPosition();

  addEventListener('resize', updateModalPosition);
}

export function closeNavMenu() {
  removeEventListener('resize', updateModalPosition);

  util.removeStyles(refs.headerSection.menuModal);

  refs.headerSection.menuModal.classList.add('is-hidden');
}
