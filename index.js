import{A as s}from"./assets/vendor-BSq3Nu46.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a={faqSection:{accordion:document.querySelector(".accordion-container")}};function d(i){const t=i.map(({q:n,a:o})=>`
            <div class="ac">
                <h3 class="ac-header">
                    <button type="button" class="ac-trigger">${n}<svg class="svg-sprite-arrow-down" width="17" height="10">
                                <use href="../img/icons.svg#arrow-down"></use>
                            </svg>
                        </button>
                    </h3>
                    <div class="ac-panel">
                        <p class="faq-block-answer">${o}</p>
                    </div>
                </div>
    `).join("");a.faqSection.accordion.innerHTML=t}const u=[{q:"Як здійснюється доставка меблів?",a:"Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону."},{q:"Чи є можливість вибрати колір або матеріал?",a:"Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару."},{q:"Чи можна повернути товар, якщо він не підійшов?",a:"Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді."},{q:"Чи надаєте ви послугу збирання меблів?",a:"Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час."},{q:"Як здійснити оплату?",a:"Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні."}];function f(){new s(".accordion-container")}function l(){d(u),f()}l();
//# sourceMappingURL=index.js.map
