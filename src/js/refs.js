export const refs = {
  feedback: {
    list: null,
    loader: null,
    btnNext: null,
    btnPrev: null,
  },
  faqSection: {
    accordion: document.querySelector('.accordion-container')
  }
};

export function setFeedbackRefs() {
  refs.feedback.list = document.getElementById('feedback-list');
  refs.feedback.loader = document.getElementById('feedback-loader');
  refs.feedback.btnNext = document.querySelector('.feedback-btn-next');
  refs.feedback.btnPrev = document.querySelector('.feedback-btn-prev');
}
