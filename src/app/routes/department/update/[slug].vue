<script setup lang="ts">
import { type DepartmentType, useDepartmentStore } from '@/entities/department';
import { DepartmentAdmin } from '@/widgets/department-admin';

const route = useRoute();
const departmentStore = useDepartmentStore();

const department = ref<DepartmentType>();
const { slug } = route.params;

onBeforeMount(() => {
  fetchDepartment();
});

const fetchDepartment = async () => {
  const { data } = await departmentStore.getDepartment(slug as string, {
    include: 'preview',
  });
  department.value = data;
};
</script>

<template>
  <div class="wrapper">
    <department-admin :department="department" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex items-center justify-center h-full;
}
</style>
