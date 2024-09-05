// src/services/api.ts
import axios from 'axios';

export const fetchSalesData = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts'); // Use correct API endpoint
};
