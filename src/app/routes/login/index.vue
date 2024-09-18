<script setup lang="ts">
import { Authorization } from '@/features/authorization';
</script>

<template>
  <div class="wrapper">
    <authorization />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex items-center justify-center h-full;
}
</style>
