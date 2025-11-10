import Accordion from "accordion-js";
import { renderFAQ } from "./render-functions.js";
import { faqData } from "./constants.js";

function initAccordion() {
    new Accordion(".accordion-container");
}

export function initSectionFaq() {
    // renderFAQ(faqData);
    initAccordion();
}
