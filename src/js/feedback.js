import { handleLoadFeedbacks } from './handlers.js';

async function loadPartials() {
  const loads = document.querySelectorAll('load');
  for (const el of loads) {
    const src = el.getAttribute('src');
    if (src) {
      const resp = await fetch(src);
      if (resp.ok) {
        el.outerHTML = await resp.text();
      } else {
        console.error('Не вдалося завантажити:', src);
      }
    }
  }
}

export async function initFeedback() {
  try {
    await loadPartials();
    handleLoadFeedbacks();
  } catch (error) {
    throw new Error('Не вдалося завантажити відгуки');
  }
}
