<script lang="ts" setup>
import { useAuthorizationStore } from '@/features/authorization';

const authStore = useAuthorizationStore();

onMounted(async () => {
  await authStore.checkAuth();
});
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
