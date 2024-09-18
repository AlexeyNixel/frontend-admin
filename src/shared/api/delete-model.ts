import { mainApi } from '@/shared/api/index';

export const deleteModel = async (url: string, isDeleted: boolean) => {
  const toast = useToast();
  toast.add({
    title: isDeleted ? 'Скрыт' : 'Восстановлен',
    color: isDeleted ? 'red' : 'green',
  });
  return await mainApi.patch(url, { isDeleted });
};
