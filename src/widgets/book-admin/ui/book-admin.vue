<script setup lang="ts">
import { UploadImage } from '@/widgets/upload-image';
import { useBookStore } from '@/entities/book';

const route = useRoute();
const bookStore = useBookStore();
const toast = useToast();

const { slug } = route.params;
const preview = ref('');
const book = ref();

const storagePlace = [
  'Отдел отраслевой литературы',
  'Отдел литературных программ (детский сектор)',
  'Отдел литературных программ (цоколь)',
  'Центр организации образовательных программ',
];

const newBook = reactive<any>({
  title: '',
  category: '',
  content: '',
  dateOfReceipt: '',
  desc: '',
  fileId: '',
  isDeleted: false,
  isVideo: false,
  link: '',
  storagePlace: '',
});

onBeforeMount(async () => {
  if (slug) {
    await fetchBook();
    preview.value = book.value.preview.path;
    assigmentObject();
  }
});

const fetchBook = async () => {
  book.value = await bookStore.getBook(slug as string);
};

const assigmentObject = () => {
  Object.keys(newBook).forEach((key) => {
    newBook[key] = book.value[key];
  });
};

const updateBook = async () => {
  await bookStore.updateBook(slug as string, newBook);
  toast.add({ title: 'Запись обновлена' });
  navigateTo('/book');
};

const createBook = async () => {
  await bookStore.createBook(newBook);
  toast.add({ title: 'Запись создана' });
  navigateTo('/book');
};
</script>

<template>
  <div class="book-admin">
    <UploadImage :image="preview" v-model="newBook.fileId" class="upload" />
    <div class="body">
      <UInput class="field" placeholder="Название" v-model="newBook.title" />
      <UTextarea
        class="field"
        placeholder="Краткое описание"
        v-model="newBook.desc"
      />
      <UTextarea
        class="field"
        placeholder="Полное описание"
        v-model="newBook.content"
      />
      <UInput
        class="field"
        placeholder="Ссылка на литрес"
        v-model="newBook.link"
      />
      <UInput
        class="field"
        placeholder="Категории"
        v-model="newBook.category"
      />
      <USelect
        class="field"
        :options="storagePlace"
        placeholder="Место хранения"
        v-model="newBook.storagePlace"
      />
      <UButton class="field" v-if="slug" label="Обновить" @click="updateBook" />
      <UButton class="field" v-else label="Создать" @click="createBook" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.upload {
  @apply w-1/2;
}

.book-admin {
  @apply flex w-1/2;
}

.body {
  @apply w-full;

  .field {
    @apply w-full ml-2 mb-2;
  }
}
</style>
