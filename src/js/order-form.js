import { refs } from './refs.js';
import { sendOrder } from './furniture-api.js';
import {
  showSuccessToast,
  showErrorToast,
  getCheckedColor,
} from './helpers.js';
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

function validateName(name, form) {
  const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’\-\s]+$/u;
  if (!nameRegex.test(name)) {
    form.elements.name.classList.add('error');
    showErrorToast('Ім’я може містити лише літери.');
    return false;
  }
  form.elements.name.classList.remove('error');
  return true;
}

function validatePhone(phone, form) {
  const cleanPhone = phone.replace(/[()\s-]/g, '');
  const phoneRegex = /^\+?(?:[0-9] ?){6,14}[0-9]$/;

  if (!phoneRegex.test(cleanPhone)) {
    form.elements.phone.classList.add('error');
    showErrorToast(
      'Будь ласка, введіть номер у форматі +380XXXXXXXXX або 380XXXXXXXXX.'
    );
    return false;
  }

  form.elements.phone.classList.remove('error');
  return true;
}

function prepareOrderData(formData) {
  const cleanPhone = formData.phone.replace(/[()\s-]/g, '');
  const normalizedPhone = cleanPhone.replace('+', '');

  const data = formData.comment
    ? {
        name: formData.name,
        phone: normalizedPhone,
        comment: formData.comment,
        modelId: refs.orderModal.furnitureId,
        color: getCheckedColor(),
      }
    : {
        name: formData.name,
        phone: normalizedPhone,
        modelId: refs.orderModal.furnitureId,
        color: getCheckedColor(),
      };

  return data;
}

async function submitOrder(orderData) {
  return await sendOrder(orderData);
}

function setLoadingState(button, isLoading) {
  if (isLoading) {
    button.classList.add('on-load');
    button.disabled = true;
  } else {
    button.classList.remove('on-load');
    button.disabled = false;
  }
}

async function handleOrderSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('[data-form-submit]');

  const formData = getFormData(form);

  const isNameValid = validateName(formData.name, form);
  const isPhoneValid = validatePhone(formData.phone, form);
  if (!isNameValid || !isPhoneValid) return;

  const orderData = prepareOrderData(formData);

  setLoadingState(submitBtn, true);

  try {
    await submitOrder(orderData);

    showSuccessToast(
      `✅ Дякуємо, ${formData.name}! Ми скоро зв’яжемось із вами.`
    );

    form.reset();
    refs.orderModal.successOrder = true;
    closeModal(refs.orderModal);
    closeModal(refs.modalDetails);
  } catch (error) {
    refs.orderModal.successOrder = false;
    console.error('❌ Order submission error:', error.response?.data || error);
    showErrorToast(
      error.response?.data?.message || '❌ Виникла помилка. Спробуйте пізніше.'
    );
  } finally {
    setLoadingState(submitBtn, false);
  }
}

export function initOrderForm() {
  const { form } = refs.orderModal;
  if (!form) return;
  form.addEventListener('submit', handleOrderSubmit);
}
