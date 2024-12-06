import { mainApi } from '@/shared/api';
import { Routes } from '@/shared/api/routes';

const { FILE_ROUTE } = Routes;

export const findFiles = async (params?: any) => {
  return (
    await mainApi.get(FILE_ROUTE, {
      params: { searchByField: 'type=EXHIBITION' },
    })
  ).data;
};
