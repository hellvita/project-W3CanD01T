import { refs } from './refs';

const accordion = document.querySelector('.accordion-container');

export function createFAQ(faqData) {
    
    const markupFaq = faqData.map(({ q, a }) => `
            <div class="ac">
                <h3 class="ac-header">
                    <button type="button" class="ac-trigger">${q}<svg class="svg-sprite-arrow-down" width="17" height="10">
                                <use href="../img/icons.svg#arrow-down"></use>
                            </svg>
                        </button>
                    </h3>
                    <div class="ac-panel">
                        <p class="faq-block-answer">${a}</p>
                    </div>
                </div>
    `).join('');

    accordion.innerHTML = markupFaq;
}
    