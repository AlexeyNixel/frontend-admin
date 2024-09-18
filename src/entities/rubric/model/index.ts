import { rubricApi, type RubricParamsType } from '@/entities/rubric';

export const useRubricStore = defineStore('rubric', () => {
  const getRubrics = async (params?: RubricParamsType) => {
    return await rubricApi.findRubrics(params);
  };

  return {
    getRubrics,
  };
});
