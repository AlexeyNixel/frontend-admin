import { mainApi } from '@/shared/api';
import { Routes } from '@/shared/api/routes';
import type { MenuItemParamsType } from '@/entities/menu-item';

const { MENU_ITEM_ROUTE } = Routes;

export const findMenuItems = async (params?: MenuItemParamsType) => {
  const { data } = await mainApi.get(MENU_ITEM_ROUTE, { params });
  return data;
};

export const findMenuItem = async (
  slug: string,
  params?: MenuItemParamsType
) => {
  return await mainApi.get(`${MENU_ITEM_ROUTE}${slug}`, { params });
};
