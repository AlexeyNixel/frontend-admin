import { BookApi } from '@/entities/book';

export const useBookStore = defineStore('book', () => {
  const getBooks = async (params?: any) => {
    const { data } = await BookApi.findBooks(params);
    return data;
  };

  const getBook = async (id: string) => {
    return await BookApi.findBook(id);
  };

  const createBook = async (book: any) => {
    return await BookApi.postBook(book);
  };

  const updateBook = async (id: string, book: any) => {
    return await BookApi.putBook(id, book);
  };

  return {
    getBooks,
    getBook,
    createBook,
    updateBook,
  };
});
