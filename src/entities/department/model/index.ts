import { defineStore } from 'pinia';
import { DepartmentApi } from '@/entities/department';
import type { DepartmentParams } from '@/entities/department/model/types';

export const useDepartmentStore = defineStore('department', () => {
  const getDepartments = async (params?: DepartmentParams) => {
    return await DepartmentApi.findDepartments(params);
  };

  const getDepartment = async (
    slug: string,
    params?: DepartmentParams
  ): Promise<any> => {
    return await DepartmentApi.findDepartment(slug, params);
  };

  const updateDepartment = async (slug: string, data: object) => {
    return await DepartmentApi.putDepartment(slug, data);
  };

  const createDepartment = async (data: object) => {
    return await DepartmentApi.postDepartment(data);
  };

  return {
    getDepartment,
    getDepartments,
    updateDepartment,
    createDepartment,
  };
});
