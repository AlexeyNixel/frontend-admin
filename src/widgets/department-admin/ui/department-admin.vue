<script setup lang="ts">
import { useDepartmentStore } from '@/entities/department';
import { UploadImage } from '@/widgets/upload-image';

const route = useRoute();
const departmentStore = useDepartmentStore();
const toast = useToast();
const { slug } = route.params;

const department = ref<any>();

const newDepartment = reactive({
  title: '',
  slug: '',
  fileId: '',
  isDeleted: false,
});

const preview = ref('');

onMounted(async () => {
  await fetchDepartment();
  assigmentObject();
});

const assigmentObject = () => {
  Object.keys(newDepartment).forEach((key) => {
    newDepartment[key] = department.value[key];
  });
};

const fetchDepartment = async () => {
  const { data } = await departmentStore.getDepartment(slug as string, {
    include: 'preview',
  });
  preview.value = data.preview.path;
  department.value = data;
};

const updateDepartment = async () => {
  console.log(newDepartment);
  await departmentStore.updateDepartment(slug as string, newDepartment);
  toast.add({
    title: 'Запись обнавлена',
  });
};
</script>

<template>
  <div class="department">
    <upload-image class="department__preview" :image="preview" />
    <div class="department__body">
      <UInput
        v-model="newDepartment.title"
        class="department__field"
        placeholder="Название"
      />
      <UInput
        v-model="newDepartment.slug"
        class="department__field"
        placeholder="Слаг"
      />
      <UCheckbox label="скрыт" v-model="newDepartment.isDeleted" />
      <UButton
        @click="updateDepartment"
        v-if="slug"
        class="department__field"
        label="Обновить"
      />
      <UButton v-else class="department__field" label="Создать" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.department {
  @apply flex w-1/2;

  &__preview {
    @apply w-1/2;
  }

  &__body {
    @apply ml-2 w-1/2;
  }
  &__field {
    @apply mb-3;
  }
}
</style>
