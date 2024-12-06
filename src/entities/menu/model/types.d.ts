export interface MenuType {
  id: string;
  oldId: number;
  title: string;
  isDeleted: boolean;
  menuType: string;
}

export interface MenuParams {
  isDeleted?: boolean;
  pageSize?: number;
  include?: string;
}

export interface MenuResponseType {
  data: MenuType[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
}
