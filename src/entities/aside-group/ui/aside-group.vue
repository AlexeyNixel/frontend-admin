<script setup lang="ts">
const props = defineProps<{
  title: string;
  buttons: [
    {
      type?: 'button' | 'link';
      icon: string;
      text: string;
      event: Function;
    },
  ];
}>();
</script>

<template>
  <div class="aside-group">
    <div class="title">{{ title.toUpperCase() }}</div>
    <template v-for="(item, index) in buttons" :key="index">
      <NuxtLink
        v-if="item.type === 'link'"
        class="aside-group__item"
        :to="item.event"
      >
        <Icon class="icon" :name="item.icon" />
        <span>{{ item.text }}</span>
      </NuxtLink>
      <UButton
        v-else
        @click="item.event"
        class="aside-group__item"
        variant="link"
      >
        <Icon class="icon" :name="item.icon" />
        <span>{{ item.text }}</span>
      </UButton>
    </template>
  </div>
</template>

<style scoped lang="scss">
.aside-group {
  @apply p-3;
  .title {
    @apply text-[10pt] text-neutral-500 font-bold;
  }

  &__item {
    @apply flex items-center ml-3 mt-1 text-white text-[12pt] mb-2 hover:text-green-500;

    .icon {
      @apply mr-2;
    }
  }
}
</style>
