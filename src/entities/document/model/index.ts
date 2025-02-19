import {
  DocumentApi,
  type DocumentType,
  type DocumentParamsType,
  type DocumentResponseType,
} from '@/entities/document';

interface State {
  documents: DocumentResponseType | null;
  document: DocumentType | null;
}

export const useDocumentStore = defineStore('document', {
  state: (): State => {
    return {
      documents: null,
      document: null,
    };
  },

  actions: {
    async getDocuments(params?: DocumentParamsType) {
      this.documents = await DocumentApi.findDocuments(params);
    },

    async getDocumentById(id: string, params?: DocumentParamsType) {
      this.document = await DocumentApi.findDocument(id, params);
    },

    async updateDocument(id: string, data: any) {
      await DocumentApi.putDocument(id, data);
    },

    async createDocument(data: any) {
      await DocumentApi.postDocument(data);
    },
  },
});
