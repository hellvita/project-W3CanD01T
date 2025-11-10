import { refs } from './refs';
import icons from '../img/icons.svg';
import StarRating from 'star-rating.js';
import 'star-rating.js/dist/star-rating.min.css';


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


export function getModalMarkup(product) {
  const {
    name,
    category,
    price,
    rate,
    color = [],
    description = '',
    sizes,
    images = []
  } = product;

  const mainImage = images[0] || '../img/modal/Image container.png';
  const subGallery = images.slice(1).map((img, index) => `
    <img src="${img}" alt="Вид ${index + 1}" class="modal-details-small-image">
  `).join('') || `
    <img src="../img/modal/Placeholder Image.png" alt="Вид 1" class="modal-details-small-image">
    <img src="../img/modal/Placeholder Image (1).png" alt="Вид 2" class="modal-details-small-image">
  `;

  const colorOptions = color.map((c, index) => `
    <label>
      <input type="radio" name="color" class="color" style="background-color: ${c}" ${index === 0 ? 'checked' : ''}/>
    </label>
  `).join('') || `
    <label><input type="radio" name="color" class="color" style="background-color: #d2cdc5" checked/></label>
    <label><input type="radio" name="color" class="color" style="background-color: #c8a879"/></label>
    <label><input type="radio" name="color" class="color" style="background-color: #1e1817"/></label>
  `;

  return `
  <div class="modal-details-gallery">
    <img src="${mainImage}" alt="${name}" class="modal-details-big-image" />
    <div class="modal-details-subgallery">
      ${subGallery}
    </div>
  </div>

  <div class="modal-details-info">
    <h2 class="modal-details-title">${name}</h2>
    <p class="modal-details-category">${category?.name || 'Невідомо'}</p>
    <p class="modal-details-price">${price} грн</p>

   <div class="modal-details-rating" data-modal-details-rating data-rating="${rate}"></div>

    <div class="modal-details-colors">
      <p class="modal-detail-color-title">Колір</p>
      <div class="modal-detail-color-options">
        ${colorOptions}
      </div>
    </div>

    <p class="modal-details-description">${description}</p>
    <p class="modal-details-dimensions">Розміри: ${sizes || 'Невідомі'}</p>

    <button class="modal-details-order-btn button-main btn--red" data-modal-details-order-btn>
      Перейти до замовлення
    </button>
  </div>
  `;
}
