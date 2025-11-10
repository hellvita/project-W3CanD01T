import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchFurnitureCategory() {
  const { data } = await axios(ENDPOINTS.CATEGORY);
  console.log('Категорії отримано:', data);
  return data;
}

export async function fetchFurnitureCard(
  category = 'all',
  page = 1,
  limit = 8
) {
  const params = { page, limit };
  if (category && category !== 'all') {
    params.category = category;
  }
  const { data } = await axios.get(ENDPOINTS.FURNITURE, { params });
  console.log('Відповідь з бекенду:', data);
  return data;
}

// export async function fetchFurnitureDetails(id) {
//   const { data } = await axios(`${ENDPOINTS.FURNITURE}/${id}`);
//   console.log('API- Деталі товару отримано:', data);

//   if (!data || !data._id) {
//     util.toastMessage('Отримали не вірні дані:');
//   }

//   return data;
// }

export async function sendOrder(orderData) {
  try {
    const { data } = await axios.post(ENDPOINTS.ORDER, orderData);
    return data;
  } catch (error) {
    console.error('❌ Order submission error:', error);
    throw error;
  }
}
