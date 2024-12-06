<script setup lang="ts">
import { useAuthorizationStore, type UserType } from '@/features/authorization';

const user = ref<UserType>({
  username: '',
  password: '',
});

const authStore = useAuthorizationStore();
const toast = useToast();

const showPassword = ref(false);
const isShowMessageNoLogin = ref(false);

const login = async () => {
  const { result } = await authStore.login(user.value);
  if (!result) {
    return (isShowMessageNoLogin.value = true);
  }

  toast.add({ title: `Привет, ${user.value.username}`, color: 'red' });
  navigateTo('/');
};
</script>

<template>
  <form class="login-form" @keydown.enter="login">
    <div class="login-form__title">Авторизация</div>
    <div class="error-login" v-if="isShowMessageNoLogin">
      Не привильный логин или пароль
    </div>
    <UInput
      class="login-form__field"
      placeholder="Логин"
      v-model="user.username"
      color="red"
    />
    <UInput
      class="login-form__field"
      placeholder="Пароль"
      v-model="user.password"
      :type="showPassword ? 'text' : 'password'"
      color="red"
      :ui="{ icon: { trailing: { pointer: '' } } }"
    >
      <template #trailing>
        <UButton
          variant="link"
          class="text-gray-500 dark:text-gray-400 text-xl"
          @click="showPassword = !showPassword"
        >
          <Icon name="i-mdi-eye" />
        </UButton>
      </template>
    </UInput>
    <UButton class="login-form__button" color="red" @click="login">
      Войти
    </UButton>
  </form>
</template>

<style scoped lang="scss">
.login-form {
  @apply bg-white dark:bg-slate-800 p-4 w-[350px] rounded;

  &__title {
    @apply text-xl mb-2 font-bold text-center;
  }

  .error-login {
    @apply text-red-500 text-sm text-center mb-4;
  }

  &__field {
    @apply mb-4;
  }

  &__button {
    @apply w-full;
  }
}
</style>
