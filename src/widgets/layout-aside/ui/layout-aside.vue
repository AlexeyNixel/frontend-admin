<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { AsideGroup } from '@/entities/aside-group';
import { useRouter } from 'vue-router';
import { useAuthorizationStore } from '@/features/authorization';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const authStore = useAuthorizationStore();

const metricGroupChild = [
  {
    icon: 'heroicons:arrow-trending-up',
    text: 'Основные метрики',
    type: 'link',
    event: '/metrics',
  },
];
const themeGroupChild = [
  {
    icon: 'heroicons:moon-20-solid',
    text: 'Сменить тему',
    event: () => toggleDark(),
  },
];
const recordsGroupChild = [
  {
    icon: 'heroicons:newspaper',
    text: 'Новости',
    event: () => navigateTo('/entry'),
  },
  {
    icon: 'heroicons:document-text',
    text: 'Документы',
    event: () => navigateTo('/document'),
  },
  {
    icon: 'heroicons:building-office-2',
    text: 'Отделы',
    event: () => navigateTo('/department'),
  },
  {
    icon: 'heroicons:photo',
    text: 'Слайды',
    event: () => navigateTo('/slide'),
  },
  {
    icon: 'heroicons:bars-arrow-down',
    text: 'Меню',
    event: () => undefined,
  },
  {
    icon: 'heroicons:book-open',
    text: 'Книги',
    event: () => undefined,
  },
  {
    icon: 'heroicons:view-columns',
    text: 'Подборки книг',
    event: () => undefined,
  },
  {
    icon: 'heroicons:calendar-date-range',
    text: 'Афиша',
    event: () => undefined,
  },
  {
    icon: 'heroicons:film',
    text: 'Видео',
    event: () => undefined,
  },
  {
    icon: 'heroicons:presentation-chart-bar',
    text: 'Выставки',
    event: () => undefined,
  },
];

onMounted(() => {
  // user.value = localStorage.getItem('username') || undefined;
});
</script>

<template>
  <aside class="aside">
    <router-link to="/" class="logo"> INFOMANIA </router-link>
    <aside-group title="Метрики" :buttons="metricGroupChild" />
    <aside-group title="Тема" :buttons="themeGroupChild" />
    <aside-group title="Записи" :buttons="recordsGroupChild" />
    <div class="username" v-if="authStore.username">
      Привет, {{ authStore.username }}!
    </div>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  @apply bg-[#202531] w-[300px] h-screen flex flex-col;

  .logo {
    @apply text-4xl font-bold text-white mt-4 w-full text-center pb-4 border-b-2 border-[#272E3B];
  }

  .username {
    @apply text-white mr-4 mb-4 flex self-end items-end absolute bottom-0;
  }
}
</style>
