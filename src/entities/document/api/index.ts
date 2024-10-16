import { mainApi } from '@/shared/api';
import type { DocumentParamsType } from '@/entities/document';
import { Routes } from '@/shared/api/routes';

const { DOCUMENT_ROUTE } = Routes;

export const findDocuments = async (params?: DocumentParamsType) => {
  const { data } = await mainApi.get(DOCUMENT_ROUTE, { params });
  return data;
};

export const findDocument = async (id: string, params?: DocumentParamsType) => {
  return await mainApi.get(`${DOCUMENT_ROUTE}${id}`, { params });
};

export const postDocument = async (data: any) => {
  return await mainApi.post(DOCUMENT_ROUTE, data);
};

export const putDocument = async (id: string, data: object) => {
  return await mainApi.put(`${DOCUMENT_ROUTE}${id}`, data);
};
