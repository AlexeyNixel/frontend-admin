<script lang="ts" setup>
import { UploadImage } from '@/widgets/upload-image';
import { useEntryStore } from '@/entities/entry';
import { useSliderStore } from '@/entities/slide';

const route = useRoute();
const { slug } = route.params;

const entryStore = useEntryStore();
const slideStore = useSliderStore();
const entries = ref();
const slide = ref();
const preview = ref<string>('');

const newSlide = reactive<any>({
  title: '',
  url: '',
  desc: '0',
  fileId: '',
  entryId: '',
  isDeleted: false,
});

onBeforeMount(async () => {
  await getEntries();

  if (slug) {
    await getSlide();

    if (slide) {
      preview.value = slide.value.image.preview;
    }

    Object.keys(newSlide).forEach((key) => {
      newSlide[key] = slide.value[key];
    });
  }
});

const createSlide = async () => {
  await slideStore.createSlide(newSlide);
};

const updateSlide = async () => {
  await slideStore.updateSlide(slug as string, newSlide);
};

const getSlide = async () => {
  slide.value = await slideStore.getSlide(slug as string, {
    include: 'image',
  });
};

const getEntries = async () => {
  await entryStore.getAllEntries({
    orderBy: '-publishedAt',
    pageSize: 30,
  });
  if (entryStore.entries) {
    entries.value = entryStore?.entries.data;
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="aside">
      <UInput
        class="aside__item"
        placeholder="Название"
        v-model="newSlide.title"
        color="red"
      />
      <UInput class="aside__item" placeholder="Ссылка" v-model="newSlide.url"
      color="red"/>
      <USelect
        class="aside__item"
        v-model="newSlide.entryId"
        :options="entries"
        option-attribute="title"
        valueAttribute="id"
        placeholder="Выбрать новость"
        color="red"
      />
      <UCheckbox
        class="aside__item"
        label="Удален"
        v-model="newSlide.isDeleted"
        color="red"
      />
      <UButton
        class="aside__item"
        label="Обновить"
        v-if="slug"
        @click="updateSlide"
        color="red"
      />
      <UButton
        class="aside__item"
        label="Создать"
        v-else
        @click="createSlide"
      />
    </div>
    <div class="main">
      <upload-image :image="preview" v-model="newSlide.fileId" class="w-full" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply flex p-2;

  .aside {
    @apply w-3/12;

    &__item {
      @apply mb-2 w-full;
    }
  }

  .main {
    @apply w-full ml-2;
  }
}
</style>
