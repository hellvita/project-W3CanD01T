import{A as s}from"./assets/vendor-BSq3Nu46.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a={faqSection:{accordion:document.querySelector(".accordion-container")}},d="/project-W3CanD01T/assets/icons-BpZPQaBd.svg";function u(i){const o=i.map(({q:n,a:r})=>`
            <div class="ac">
                <h3 class="ac-header">
                    <button type="button" class="ac-trigger">${n}<svg class="svg-sprite-arrow-down" width="17" height="10">
                                <use href="${d}#arrow-down"></use>
                            </svg>
                        </button>
                    </h3>
                    <div class="ac-panel">
                        <p class="faq-block-answer">${r}</p>
                    </div>
                </div>
    `).join("");a.faqSection.accordion.innerHTML=o}const f=[{q:"Як здійснюється доставка меблів?",a:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону."},{q:"Чи є можливість вибрати колір або матеріал?",a:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{q:"Чи можна повернути товар, якщо він не підійшов?",a:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{q:"Чи надаєте ви послугу збирання меблів?",a:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{q:"Як здійснити оплату?",a:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}];function l(){new s(".accordion-container")}function p(){u(f),l()}p();
//# sourceMappingURL=index.js.map
