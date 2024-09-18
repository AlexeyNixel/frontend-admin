import { mainApi } from '@/shared/api';
import type { DocumentParamsType } from '@/entities/document';
import { Routes } from '@/shared/api/routes';

const { DOCUMENT_ROUTE } = Routes;

export const findDocuments = async (params?: DocumentParamsType) => {
  const { data } = await mainApi.get(DOCUMENT_ROUTE, { params });
  return data;
};
