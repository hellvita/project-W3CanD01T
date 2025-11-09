import { faqData } from "./js/constants.js";
import { initAccordion } from "./js/faq.js";
import { createFAQ } from "./js/render-functions.js";

createFAQ(faqData);
initAccordion();