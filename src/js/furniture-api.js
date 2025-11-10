import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants.js';

export async function fetchFeedback() {
  const { data } = await axios(`${BASE_URL}${ENDPOINTS.FEEDBACK}`, {
    params: { limit: 10 },
  });
  return data;
}


