import { defineStore } from 'pinia';
import { type SlideParamsType, SlideApi } from '@/entities/slide';

export const useSliderStore = defineStore('slider', () => {
  const getSlides = async (params?: SlideParamsType) => {
    const { data } = await SlideApi.findSlides(params);
    return data;
  };

  const getSlide = async (
    slug: string,
    params?: SlideParamsType
  ): Promise<any> => {
    const { data } = await SlideApi.findSlide(slug, params);
    return data;
  };

  const updateSlide = async (slug: string, data: any) => {
    return await SlideApi.putSlide(slug, data);
  };

  const createSlide = async (data: any) => {
    return await SlideApi.postSlides(data);
  };

  return {
    getSlides,
    getSlide,
    updateSlide,
    createSlide,
  };
});
