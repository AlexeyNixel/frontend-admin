import { mainApi } from '@/shared/api/index';

export const deleteModel = async (url: string, isDeleted: boolean) => {
  return await mainApi.patch(url, { isDeleted });
};
