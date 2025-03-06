import axios from 'axios';

export const mainApi = axios.create({
  baseURL:  import.meta.env['VITE_BASE_URL'],
  timeout: 0,
});

mainApi.defaults.headers.common['Authorization'] =
  `Bearer ${localStorage.getItem('token')!}`;
