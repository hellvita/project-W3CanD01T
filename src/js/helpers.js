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