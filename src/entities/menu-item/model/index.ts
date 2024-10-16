import { MenuItemApi, type MenuItemParamsType } from '@/entities/menu-item';

export const useMenuItemStore = defineStore('menu-item', () => {
  const getMenuItems = async (params?: MenuItemParamsType) => {
    return await MenuItemApi.findMenuItems(params);
  };

  return {
    getMenuItems,
  };
});
