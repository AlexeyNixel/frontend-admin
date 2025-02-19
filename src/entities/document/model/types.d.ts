export interface DocumentType {
  id: string;
  oldId: number;
  title: string;
  content: string;
  menuItemId: string;
  fileId: string;
  isDeleted: boolean;
  publishedAt: string;
}

export interface DocumentResponseType {
  data: DocumentType[];
  meta: {
    total: number;
    page: number;
    pageSize: number;
  };
}

export interface DocumentParamsType {
  pageSize?: number;
  page?: number;
  orderBy?: string;
  isDeleted?: boolean;
}
