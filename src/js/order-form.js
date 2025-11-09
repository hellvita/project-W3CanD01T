

/*import { refs } from './refs.js';
import { sendOrder } from './furniture-api.js';
import { showSuccessToast, showErrorToast } from './helpers.js';
import { closeModal } from './modal.js';

function getFormData(form) {
  const { name, phone, comment } = form.elements;

  return {
    name: name.value.trim(),
    phone: phone.value.trim(),
    comment: comment.value.trim(),
    modelId: form.dataset.modelId,
    color: form.dataset.color,
  };
}

async function handleOrderSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('[data-form-submit]');
  const { name, phone, comment, modelId, color } = getFormData(form);

  if (!name || !phone) {
    showErrorToast('Будь ласка, заповніть обов’язкові поля.');
    return;
  }

  const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’\-\s]+$/u;
  if (!nameRegex.test(name)) {
    showErrorToast('Ім’я може містити лише літери.');
    form.elements.name.classList.add('error');
    return;
  } else {
    form.elements.name.classList.remove('error');
  }

  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    showErrorToast('Номер має бути у форматі +380XXXXXXXXX.');
    form.elements.phone.classList.add('error');
    return;
  } else {
    form.elements.phone.classList.remove('error');
  }

  const orderData = { name, phone, comment, modelId, color };

  try {
    submitBtn.classList.add('on-load');
    submitBtn.disabled = true;

    await sendOrder(orderData);
    showSuccessToast(`✅ Дякуємо, ${name}! Ми скоро зв’яжемось із вами.`);
    form.reset();
    closeModal(refs.orderModal);
  } catch (error) {
    console.error('❌ Order submission error:', error.response?.data || error);
    showErrorToast(
      error.response?.data?.message ||
        '❌ Виникла помилка. Спробуйте пізніше.'
    );
  } finally {
    submitBtn.classList.remove('on-load');
    submitBtn.disabled = false;
  }
}

export function initOrderForm() {
  const { form } = refs.orderModal;
  if (!form) return;
  form.addEventListener('submit', handleOrderSubmit);
}*/
import { refs } from './refs.js';
import { sendOrder } from './furniture-api.js';
import { showSuccessToast, showErrorToast } from './helpers.js';
import { closeModal } from './modal.js';


function getFormData(form) {
  const { name, phone, comment } = form.elements;

  return {
    name: name.value.trim(),
    phone: phone.value.trim(),
    comment: comment.value.trim(),
    modelId: form.dataset.modelId,
    color: form.dataset.color,
  };
}


async function handleOrderSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('[data-form-submit]');
  const { name, phone, comment, modelId, color } = getFormData(form);

  
  const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’\-\s]+$/u;
  if (!nameRegex.test(name)) {
    showErrorToast('Ім’я може містити лише літери.');
    form.elements.name.classList.add('error');
    return;
  } else {
    form.elements.name.classList.remove('error');
  }

  
  const cleanPhone = phone.replace(/[()\s-]/g, '');

  const phoneRegex = /^\+?(?:[0-9] ?){6,14}[0-9]$/;
  if (!phoneRegex.test(cleanPhone)) {
    showErrorToast(
      'Будь ласка, введіть номер у форматі +380XXXXXXXXX або 380XXXXXXXXX.'
    );
    form.elements.phone.classList.add('error');
    return;
  } else {
    form.elements.phone.classList.remove('error');
  }

  const normalizedPhone = cleanPhone.replace('+', '');

  const orderData = {
    name,
    phone: normalizedPhone,
    comment,
    modelId,
    color,
  };

  try {
    submitBtn.classList.add('on-load');
    submitBtn.disabled = true;

    await sendOrder(orderData);

    showSuccessToast(`✅ Дякуємо, ${name}! Ми скоро зв’яжемось із вами.`);
    form.reset();
    closeModal(refs.orderModal);
  } catch (error) {
    console.error('❌ Order submission error:', error.response?.data || error);
    showErrorToast(
      error.response?.data?.message ||
        '❌ Виникла помилка. Спробуйте пізніше.'
    );
  } finally {
    submitBtn.classList.remove('on-load');
    submitBtn.disabled = false;
  }
}

export function initOrderForm() {
  const { form } = refs.orderModal;
  if (!form) return;
  form.addEventListener('submit', handleOrderSubmit);
}






