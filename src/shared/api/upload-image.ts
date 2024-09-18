import { mainApi } from '@/shared/api/index';

export const uploadImage = async (file: any) => {
  return await mainApi.post('/api/upload', file);
};
