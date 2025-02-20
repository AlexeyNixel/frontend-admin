<script setup lang="ts">
import { uploadImage } from '@/shared/api/upload-image';

const props = defineProps<{
  image?: any;
}>();

const uploadedImage = ref(props.image);

const model = defineModel();
const staticUrl = ref(import.meta.env['VITE_STATIC_URL']);
const openFileDialog = () => {
  const input = document.createElement('input');
  input.type = 'file';

  input.onchange = async (e: any) => {
    const image = e.target.files[0];
    const file = new FormData();
    file.set('file', image);
    const { data } = await uploadImage(file);
    uploadedImage.value = data.path;
    model.value = data.id;
  };

  input.click();
};
</script>

<template>
  <div class="image-uploader" @click="openFileDialog">
    <img
      class="image"
      v-if="uploadedImage || image"
      :src="staticUrl + uploadedImage || image"
      alt=""
    />
    <Icon v-else class="icon" name="i-heroicons-photo" />
  </div>
</template>

<style scoped lang="scss">
.image-uploader {
  @apply w-full  bg-neutral-300 dark:bg-slate-800  hover:dark:bg-slate-900;
  @apply items-center justify-center flex transition;
  @apply rounded-lg mb-2  hover:opacity-80 hover:cursor-pointer;

  .icon {
    @apply text-6xl text-red-500;
  }

  .image {
    @apply object-cover h-full w-full rounded-lg;
  }
}
</style>
