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
