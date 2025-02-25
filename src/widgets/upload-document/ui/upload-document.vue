<script setup lang="ts">
import { uploadImage } from '@/shared/api/upload-image';

const props = defineProps<{
  image?: any;
}>();

const uploadedImage = ref(props.image);

const model = defineModel();

const uploadDocumentUrl = ref('');

const openFileDialog = () => {
  const input = document.createElement('input');
  input.type = 'file';

  input.onchange = async (e: any) => {
    const image = e.target.files[0];
    const file = new FormData();
    file.set('file', image);
    const { data } = await uploadImage(file);
    uploadDocumentUrl.value = data.path;
    uploadedImage.value = data.path;
    model.value = data.id;
  };

  input.click();
};
</script>

<template>
  <div>
    <div class="my-2" @click="openFileDialog">
      <UButton class="w-full">Загрузить документ</UButton>
    </div>
    <UInput
      class="my-2"
      v-if="uploadDocumentUrl"
      v-model="uploadDocumentUrl"
    ></UInput>
  </div>
</template>

<style scoped lang="scss">
.image-uploader {
  @apply w-full  bg-neutral-300 dark:bg-slate-800  hover:dark:bg-slate-900;
}
</style>
