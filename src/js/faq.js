import Accordion from "accordion-js";
import { hideFaqLoader, renderFAQ, showFaqLoader } from "./render-functions.js";
import { faqData } from "./constants.js";
import { toastMessage } from "./helpers.js";

function initAccordion() {
    new Accordion(".accordion-container");
}

export async function initSectionFaq() {
    
    try {
        showFaqLoader();
        const response = await getFaqData();
        
        if (response.length > 0) {
            renderFAQ(faqData);
            initAccordion();
        } else {
            error;
        }
    } catch (error) {
        toastMessage('Не вдалося завантажити дані про часті питання');
    } finally {
        hideFaqLoader();        
    }
}

async function getFaqData() {
    const data = faqData;
    return data;
}