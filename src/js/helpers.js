import { refs } from './refs';
import iziToast from 'izitoast';

iziToast.settings({
  timeout: 4000,
  theme: 'dark',
  position: 'topRight',
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});

export const toastMessage = message => iziToast.show({ message: [message] });

export function hideBtn(button) {
  button.classList.remove('visible');
}

export function showBtn(button) {
  button.classList.add('visible');
}
