import { mainApi } from '@/shared/api';
import type { RubricParamsType } from '@/entities/rubric';

export const findRubrics = async (params?: RubricParamsType) => {
  const { data } = await mainApi.get('/api/rubric', { params });
  return data;
};
