import { refs } from './refs';
import * as util from './helpers';

export function onBurgerClick() {
  util.hideBtn(refs.headerMenuBtn);
  refs.headerMenuBtn.removeEventListener('click', onBurgerClick);

  util.showBtn(refs.headerCloseBtn);
  refs.headerCloseBtn.addEventListener('click', onCloseNavClick);
}

function onCloseNavClick() {
  util.hideBtn(refs.headerCloseBtn);
  refs.headerCloseBtn.removeEventListener('click', onCloseNavClick);

  util.showBtn(refs.headerMenuBtn);
  refs.headerMenuBtn.addEventListener('click', onBurgerClick);
}
