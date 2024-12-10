import { mainApi } from '@/shared/api';

export const findBooks = async (params?: ParamsType) => {
  return await mainApi.get('/api/book', { params });
};

export const findBook = async (id: string) => {
  return (await mainApi.get(`/api/book/${id}`)).data;
};

export const postBook = async (book: any) => {
  return await mainApi.post('/api/book', book);
};

export const putBook = async (id: string, book: any) => {
  return await mainApi.patch(`/api/book/${id}`, book);
};
