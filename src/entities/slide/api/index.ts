import { mainApi } from '@/shared/api';
import { Routes } from '@/shared/api/routes';

const { MAIN_SLIDER_ROUTE } = Routes;
export const findSlides = async (params?: any) => {
  return await mainApi.get(MAIN_SLIDER_ROUTE, { params });
};

export const findSlide = async (slug: string, params?: any) => {
  return await mainApi.get(`${MAIN_SLIDER_ROUTE}${slug}`, { params });
};

export const putSlide = async (slug: string, data: object) => {
  return await mainApi.put(`${MAIN_SLIDER_ROUTE}${slug}`, data);
};

export const postSlides = async (data: any) => {
  return await mainApi.post(MAIN_SLIDER_ROUTE, data);
};
