import { MenuApi, type MenuParams } from '@/entities/menu';

export const useMenuStore = defineStore('menu', () => {
  const getMenu = async (slug: string, params?: MenuParams) => {
    const { data } = await MenuApi.findMenu(slug, params);
    return { data };
  };

  const getMenus = async (params?: MenuParams) => {
    return await MenuApi.findMenus(params);
  };

  const updateMenu = async (id: string, data: any) => {
    return await MenuApi.putMenu(id, data);
  };

  return {
    getMenu,
    getMenus,
    updateMenu,
  };
});
