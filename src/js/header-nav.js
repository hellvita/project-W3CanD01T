import { refs } from './refs';
import * as handler from './handlers';

export function initHeaderNav() {
  refs.headerMenuBtn.addEventListener('click', handler.onBurgerClick);
}
