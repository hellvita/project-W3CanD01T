import { refs } from './refs.js';

export function showLoader() {
  refs.feedback.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.feedback.loader.classList.add('is-hidden');
}