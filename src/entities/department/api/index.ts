import { mainApi } from '@/shared/api';
import { Routes } from '@/shared/api/routes';
import type { DepartmentParams } from '@/entities/department/model/types';

const { DEPARTMENT_ROUTE } = Routes;

export const findDepartments = async (params?: DepartmentParams) => {
  const { data } = await mainApi.get(DEPARTMENT_ROUTE, { params });
  return data;
};

export const findDepartment = async (
  slug: string,
  params?: DepartmentParams
) => {
  return await mainApi.get(`${DEPARTMENT_ROUTE}${slug}`, { params });
};

export const putDepartment = async (slug: string, data: object) => {
  return await mainApi.patch(`${DEPARTMENT_ROUTE}${slug}`, data);
};

export const postDepartment = async (data: any) => {
  return await mainApi.post(DEPARTMENT_ROUTE, data);
};
