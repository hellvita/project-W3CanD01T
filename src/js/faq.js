import Accordion from "accordion-js";
import { hideFaqLoader, messageSomethingWrong, renderFAQ, showFaqLoader } from "./render-functions.js";
import { faqData } from "./constants.js";

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
            messageSomethingWrong();
        }
    } catch (error) {
        messageSomethingWrong();
    } finally {
        hideFaqLoader();        
    }
}

async function getFaqData() {
    const data = faqData;
    return data;
}