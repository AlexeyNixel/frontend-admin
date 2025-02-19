import { mainApi } from '@/shared/api';
import type {
  DocumentParamsType,
  DocumentResponseType,
  DocumentType,
} from '@/entities/document';
import { Routes } from '@/shared/api/routes';

const { DOCUMENT_ROUTE } = Routes;

export const findDocuments = async (
  params?: DocumentParamsType
): Promise<DocumentResponseType> => {
  const { data } = await mainApi.get(DOCUMENT_ROUTE, { params });
  return data;
};

export const findDocument = async (
  id: string,
  params?: DocumentParamsType
): Promise<DocumentType> => {
  const { data } = await mainApi.get(`${DOCUMENT_ROUTE}${id}`, { params });
  return data;
};

export const postDocument = async (data: any) => {
  return await mainApi.post(DOCUMENT_ROUTE, data);
};

export const putDocument = async (id: string, data: object) => {
  return await mainApi.put(`${DOCUMENT_ROUTE}${id}`, data);
};
