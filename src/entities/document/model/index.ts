import { DocumentApi, type DocumentParamsType } from '@/entities/document';

export const useDocumentStore = defineStore('document', () => {
  const getDocuments = async (params?: DocumentParamsType) => {
    return await DocumentApi.findDocuments(params);
  };

  const getDocument = async (slug: string, params?: DocumentParamsType) => {
    const { data } = await DocumentApi.findDocument(slug, params);
    return data;
  };

  const updateDocument = async (id: string, data: any) => {
    return await DocumentApi.putDocument(id, data);
  };

  const createDocument = async (data: any) => {
    return await DocumentApi.postDocument(data);
  };

  return { getDocuments, getDocument, updateDocument, createDocument };
});
