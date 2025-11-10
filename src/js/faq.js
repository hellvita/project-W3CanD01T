import Accordion from "accordion-js";
import { hideFaqLoader, renderFAQ, showFaqLoader } from "./render-functions.js";
import { faqData } from "./constants.js";

function initAccordion() {
    new Accordion(".accordion-container");
}

export function initSectionFaq() {
    showFaqLoader();
    setTimeout(() => {
        renderFAQ(faqData);
        initAccordion();
        hideFaqLoader();        
    }, 3500); 
}

// async function getFaqData() {
//     try {
//         showFaqLoader();
//         const response = await getFaqData();
//         if (response.data.length) {
//             return response.data;
//         } else {
//             console.log('Error');
//             return [];
//         }
//     } catch (error) {
//         console.log('Error');        
//     } finally {
//         hideFaqLoader();
//     }
// }