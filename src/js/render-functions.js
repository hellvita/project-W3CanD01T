import { refs } from './refs';
import icons from '../img/icons.svg';

export function renderFAQ(faqData) {
  const markupFaq = faqData
    .map(
      ({ q, a }) => `
            <div class="ac">
                <h3 class="ac-header">
                    <button type="button" class="ac-trigger">${q}<svg class="svg-sprite-arrow-down" width="17" height="10">
                                <use href="${icons}#arrow-down"></use>
                            </svg>
                        </button>
                    </h3>
                    <div class="ac-panel">
                        <p class="faq-block-answer">${a}</p>
                    </div>
                </div>
    `
    )
    .join('');

  refs.faqSection.accordion.innerHTML = markupFaq;
}

export function showFaqLoader() {
  refs.faqSection.faqLoader.classList.replace('hidden', 'faq-loader');
  refs.faqSection.faqBlock.classList.add('no-active');
}

export function hideFaqLoader() {
  refs.faqSection.faqLoader.classList.replace('faq-loader', 'hidden');
  refs.faqSection.faqBlock.classList.remove('no-active');
}
