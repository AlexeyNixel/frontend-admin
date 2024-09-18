import type { UserType } from '@/features/authorization';
import { authorization, hwoAmI } from '@/features/authorization/api';

export const useAuthorizationStore = defineStore('auth', () => {
  const token = ref<string>();
  const username = ref<string>(localStorage.getItem('username') || '');
  const isAuth = ref<boolean>(false);

  const login = async (user: UserType) => {
    try {
      const { data } = await authorization(user);
      token.value = data.access_token;
      username.value = data.username;
      localStorage.setItem('token', token.value);
      localStorage.setItem('username', username.value);
      isAuth.value = true;
      return { result: data.access_token, error: null };
    } catch (e) {
      return { result: null, error: e };
    }
  };

  const checkAuth = async () => {
    try {
      await hwoAmI();
    } catch (e: any) {
      if (e.response.status === 401) {
        localStorage.setItem('token', '');
        isAuth.value = false;
        navigateTo('/login');
      } else {
        isAuth.value = true;
      }
    }
  };

  return {
    isAuth,
    token,
    username,
    login,
    checkAuth,
  };
});
