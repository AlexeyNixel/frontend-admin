import { DocumentApi, type DocumentParamsType } from '@/entities/document';

export const useDocumentStore = defineStore('document', () => {
  const getDocuments = async (params?: DocumentParamsType) => {
    return await DocumentApi.findDocuments(params);
  };

  return { getDocuments };
});
