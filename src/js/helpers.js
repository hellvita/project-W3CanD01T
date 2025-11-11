import { BREAKPOINTS } from './constants';
import { menuIsClosed } from './header-nav';
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

export function roundRating(value) {
  const decimal = value % 1;
  let result = Math.floor(value);
  if (decimal >= 0.3 && decimal <= 0.7) result += 0.5;
  if (decimal >= 0.8) result += 1;
  return result;
}

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

export function toggleScroll() {
  if (isMobileView()) preventScrolling();
  if (menuIsClosed) allowScrolling();
}

export function isDesktopView() {
  return window.innerWidth >= BREAKPOINTS.desktop;
}

export function isMobileView() {
  return window.innerWidth < BREAKPOINTS.tablet;
}

export function getCategoriesImages(categories) {
  const images = {
    [categories[0].name]: 'all-products',
    [categories[1].name]: 'hallway-furniture',
    [categories[2].name]: 'kitchens',
    [categories[3].name]: 'garden-furniture', //
    [categories[4].name]: 'tables',
    [categories[5].name]: 'upholstered-furniture',
    [categories[6].name]: 'furniture-nursery',
    [categories[7].name]: 'decor-accessories',
    [categories[8].name]: 'bathroom-furniture',
    [categories[9].name]: 'office-furniture',
    [categories[10].name]: 'cabinets-storage-systems',
    [categories[11].name]: 'beds-mattresses',
    [categories[12].name]: 'chairs-stools',
  };

  return images;
}
