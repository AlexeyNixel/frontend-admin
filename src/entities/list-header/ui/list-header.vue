<script setup lang="ts">
const props = defineProps<{
  title: string;
  createLink: string;
}>();

const search = defineModel();
</script>

<template>
  <div class="header">
    <div class="header__title">{{ title }}</div>
    <UButton
      class="header__create-link"
      label="Создать"
      color="red"
      @click="navigateTo(props.createLink)"
    />
    <UInput
      class="header__search-input"
      icon="i-heroicons-magnifying-glass-20-solid"
      v-if="search !== undefined"
      v-model="search"
      placeholder="Поиск..."
    />
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply bg-[#202531] z-20 flex h-[73px] px-2 text-white border-l-2 sticky top-0 border-[#272E3B] items-center;

  &__title {
    @apply text-2xl font-bold;
  }

  &__create-link {
    @apply ml-4;
  }

  &__search-input {
    @apply w-full ml-4 text-white;
  }
}
</style>
