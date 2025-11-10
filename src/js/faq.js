import Accordion from "accordion-js";
import { hideFaqLoader, renderFAQ, showFaqLoader } from "./render-functions.js";
import { faqData } from "./constants.js";

function initAccordion() {
    new Accordion(".accordion-container");
}

export function initSectionFaq() {
    // showFaqLoader();
    renderFAQ(faqData);
    // hideFaqLoader();
    initAccordion();
}
