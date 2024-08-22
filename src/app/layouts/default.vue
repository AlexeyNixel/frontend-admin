<script setup lang="ts">

</script>

<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<style scoped>
.default-layout {
  @apply flex items-center w-full justify-center h-screen;
}
</style>