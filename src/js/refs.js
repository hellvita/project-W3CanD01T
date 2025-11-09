
export const refs = {
  feedback: {
    list: null,
    loader: null,
    btnNext: null,
    btnPrev: null,
  },
};

export function setFeedbackRefs() {
  refs.feedback.list = document.getElementById('feedback-list');
  refs.feedback.loader = document.getElementById('feedback-loader');
  refs.feedback.btnNext = document.querySelector('.feedback-btn-next');
  refs.feedback.btnPrev = document.querySelector('.feedback-btn-prev');
}
