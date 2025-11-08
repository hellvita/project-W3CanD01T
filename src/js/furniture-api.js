import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchFurnitureCategory() {
  const { data } = await axios.get(ENDPOINTS.CATEGORY);
  console.log(data);

  return data;
}

export async function fetchFurnitureCard() {
  const { data } = await axios.get(ENDPOINTS.FURNITURE, {
    params: {
      page: 1,
      limit: 8,
    },
  });

  console.log(data);
  return data;
}
