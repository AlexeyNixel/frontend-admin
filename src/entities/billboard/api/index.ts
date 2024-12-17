import { mainApi } from '@/shared/api';
import { Routes } from '@/shared/api/routes';
import { type BillboardParams, type BillboardType } from '@/entities/billboard';

const { AFFICHE_ROUTE } = Routes;

export const findBillboards = async (params?: BillboardParams) => {
  return (await mainApi.get('/api/affiche/', { params })).data;
};

export const findBillboard = async (slug: string, params?: BillboardParams) => {
  return await mainApi.get(`/api/affiche/${slug}`, { params });
};

export const putBillboard = async (slug: string, data: any) => {
  return await mainApi.patch(`${AFFICHE_ROUTE}${slug}`, data);
};

export const postBillboard = async (data: any) => {
  return await mainApi.post(AFFICHE_ROUTE, data);
};
