import { ExhibitionApi } from '@/entities/exhibition/';

export const useExhibitionStore = defineStore('exhibition', () => {
  const getExhibitions = async () => {
    return await ExhibitionApi.findFiles();
  };
  return { getExhibitions };
});
