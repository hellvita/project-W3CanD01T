import { BREAKPOINTS } from './constants';
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
export function showSuccessToast(message) {
  iziToast.success({
    title: 'Успіх',
    message,
    position: 'topRight',
  });
}

export function showErrorToast(message) {
  iziToast.error({
    title: 'Помилка',
    message,
    position: 'topRight',
  });
}

export function btnIsVisible(button) {
  return button.classList.contains('visible');
}

export function hideElement(element) {
  element.classList.remove('visible');
}

export function showElement(element) {
  element.classList.add('visible');
}

export function addStyle(element, style = '') {
  element.style = style;
}

export function removeStyles(element) {
  element.style = '';
}

export function preventScrolling() {
  refs.body.classList.add('no-scroll');
}

export function allowScrolling() {
  refs.body.classList.remove('no-scroll');
}

export function isDesktopView() {
  return window.innerWidth >= BREAKPOINTS.desktop;
}
