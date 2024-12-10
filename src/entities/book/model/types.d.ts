export interface BookType {
  id: string;
  title: string;
  desc: string;
  content: string;
  category: string;
  storagePlace: string;
  link: string;
  dateOfReceipt: string;
  isDeleted: false;
  createdAt: string;
  fileId: string;
  oldId: 5;
  preview: PreviewType;
}

export interface BookResponseType {
  data: BookType[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
  };
}
