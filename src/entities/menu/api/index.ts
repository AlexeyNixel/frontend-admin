import { mainApi } from '@/shared/api';
import { Routes } from '@/shared/api/routes';
import type { MenuParams } from '@/entities/menu';

const { MENU_ROUTE } = Routes;

export const findMenu = async (slug: string, params?: MenuParams) => {
  return await mainApi.get(`${MENU_ROUTE}${slug}`, { params });
};

export const findMenus = async (params?: MenuParams) => {
  const { data } = await mainApi.get(MENU_ROUTE, { params });
  return data;
};

export const putMenu = async (id: string, data: any) => {
  return await mainApi.patch(`${MENU_ROUTE}${id}`, data);
};
