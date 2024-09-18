<script setup lang="ts">
import { ListHeader } from '@/entities/list-header';
import { DepartmentList } from '@/widgets/department-list';
import { useDepartmentStore } from '@/entities/department';
import type { DepartmentType } from '@/entities/department/model/types';

const departmentStore = useDepartmentStore();
const departments = ref<DepartmentType>();

onBeforeMount(() => {
  fetchDepartments();
});

const fetchDepartments = async () => {
  const { data } = await departmentStore.getDepartments({
    isDeleted: true,
    pageSize: 20,
  });
  departments.value = data;
};
</script>

<template>
  <div>
    <list-header title="Отделы" create-link="/department/create" />
    <div class="wrapper">
      <department-list :departments="departments" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply p-2;
}
</style>
