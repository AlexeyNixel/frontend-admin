<script setup lang="ts">
import { LayoutAside } from '@/widgets/layout-aside';
</script>

<template>
  <div class="default-layout">
    <layout-aside />
    <div class="default-layout__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  @apply flex w-full h-screen;

  &__content {
    @apply h-full overflow-y-auto w-full;
  }
}
</style>
