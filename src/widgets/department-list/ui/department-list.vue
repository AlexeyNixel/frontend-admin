<script setup lang="ts">
import type { DepartmentType } from '@/entities/department';
import { ListItem } from '@/entities/list-item';

const props = defineProps<{
  departments: DepartmentType[];
}>();

const sortDepartments = computed(() => {
  return props.departments.sort((a, b) => {
    return a.isDeleted ? 0 : -1;
  });
});
</script>

<template>
  <div v-if="departments">
    <list-item
      v-for="item in sortDepartments"
      :key="item.id"
      :title="item.title"
      model="department"
      :slug="item.slug ? item.slug : 'ad'"
      v-model:is-deleted="item.isDeleted"
    />
  </div>
</template>

<style scoped lang="scss"></style>
