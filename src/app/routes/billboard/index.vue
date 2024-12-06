<script setup lang="ts">
import { Calendar } from '@/widgets/calendar';
import { EventsSlider } from '@/entities/billboard';
</script>

<template>
  <div class="wrapper">
    <Calendar class="w-1/6" />
    <EventsSlider class="w-5/6" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex p-2;
}
</style>
