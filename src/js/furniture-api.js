import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchFurniture() {
  const { data } = await axios(`${ENDPOINTS.FURNITURE}`, {
    params: {
      page: 1,
      limit: 8,
    },
  });
  return data;
}

export async function sendOrder(orderData) {
  try {
    const { data } = await axios.post(ENDPOINTS.ORDER, orderData);
    return data;
  } catch (error) {
    console.error('❌ Order submission error:', error);
    throw error;
  }
}
export async function fetchFurnitureById(id = '682f9bbf8acbdf505592ac36') {
  try {
    const { data } = await axios.get(`${ENDPOINTS.FURNITURE}/${id}`);
    return data;
  } catch (error) {
    console.error(`❌ Error fetching furniture by ID ${id}:`, error);
    throw error;
  }
}

