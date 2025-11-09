import { handleLoadFeedbacks } from './handlers.js';
import { setFeedbackRefs } from './refs.js';

export function initFeedback() {
  setFeedbackRefs();
  handleLoadFeedbacks();
}
