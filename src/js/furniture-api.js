import axios from 'axios';

axios.defaults.baseURL = 'https://furniture-store-v2.b.goit.study/api';

export async function fetchFeedback() {
  const response = await axios.get('/feedbacks');
  return response.data.feedbacks;
}
