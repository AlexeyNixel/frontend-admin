import type { UserType } from '@/features/authorization';
import { mainApi } from '@/shared/api';
import { Routes } from '@/shared/api/routes';

const { LOGIN_ROUTE } = Routes;

export const authorization = async (
  user: UserType
): Promise<{ data: { access_token: string; username: string } }> => {
  return await mainApi.post(LOGIN_ROUTE, user);
};

export const hwoAmI = async () => {
  return await mainApi.post('/api/entry', {});
};
