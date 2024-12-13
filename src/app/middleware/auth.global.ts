import { useAuthorizationStore } from '@/features/authorization';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthorizationStore();
  if (to.path !== '/login' && !localStorage.getItem('token')) {
    return navigateTo('/login');
  }
});
