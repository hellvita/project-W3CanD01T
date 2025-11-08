import { refs } from './refs.js';
import { sendOrder } from './furniture-api.js';
import { showSuccessToast, showErrorToast } from './helpers.js';
import { closeModal } from './modal.js';

const { form } = refs.orderModal;

if (form) {
  form.addEventListener('submit', handleOrderSubmit);
}

async function handleOrderSubmit(e) {
  e.preventDefault();

  const name = e.target.elements.name.value.trim();
  const rawPhone = e.target.elements.phone.value.trim();
  const comment = e.target.elements.comment.value.trim();
  const phone = rawPhone.replace(/\D/g, '');
  const modelId = e.target.dataset.modelId;
  const color = e.target.dataset.color;
  const submitBtn = e.target.querySelector('[data-form-submit]');

  if (!name || !phone) {
    showErrorToast('Будь ласка, заповніть обов’язкові поля.');
    return;
  }

  const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’\-\s]+$/u;
  if (!nameRegex.test(name)) {
    showErrorToast('Ім’я може містити лише літери.');
    e.target.elements.name.classList.add('error');
    return;
  } else {
    e.target.elements.name.classList.remove('error');
  }

  const phoneRegex = /^[0-9]{12}$/;
  if (!phoneRegex.test(phone)) {
    showErrorToast('Номер має містити 12 цифр, без знаку "+".');
    e.target.elements.phone.classList.add('error');
    return;
  } else {
    e.target.elements.phone.classList.remove('error');
  }

  const orderData = {
    name,
    phone,
    comment,
    modelId,
    color,
  };

  try {
    submitBtn.classList.add('on-load');
    submitBtn.disabled = true;           

    const response = await sendOrder(orderData);
    console.log('✅ Order response:', response);

    showSuccessToast(`✅ Дякуємо, ${name}! Ми скоро зв’яжемось із вами.`);
    e.target.reset();
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
