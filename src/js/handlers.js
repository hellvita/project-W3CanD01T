import { refs } from './refs';
import * as util from './helpers';
import { openNavMenu, closeNavMenu } from './header-nav';

export function onBurgerClick() {
  util.hideBtn(refs.headerSection.burgerBtn);
  refs.headerSection.burgerBtn.removeEventListener('click', onBurgerClick);

  util.showBtn(refs.headerSection.closeBtn);
  refs.headerSection.closeBtn.addEventListener('click', onCloseNavClick);

  openNavMenu();
  util.preventScrolling();
}

function onCloseNavClick() {
  util.hideBtn(refs.headerSection.closeBtn);
  refs.headerSection.closeBtn.removeEventListener('click', onCloseNavClick);

  util.showBtn(refs.headerSection.burgerBtn);
  refs.headerSection.burgerBtn.addEventListener('click', onBurgerClick);

  closeNavMenu();
  util.allowScrolling();
}

function onMenuLinkClick(e) { 
  console.dir(e.target);
}