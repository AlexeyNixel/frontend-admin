<script lang="ts" setup>
import { TransitionPresets, useTransition } from '@vueuse/core';

const source = ref(0);

const output = useTransition(source, {
  duration: 1000,
  transition: TransitionPresets.easeInOutCubic,
});
</script>

<template>
  <div>
    <Icon name="i-heroicons-hand-raised"></Icon>
    Hello world
    <UButton @click="source = 1000">Транишн</UButton>
    {{ output.toFixed(0) }}
  </div>
</template>
