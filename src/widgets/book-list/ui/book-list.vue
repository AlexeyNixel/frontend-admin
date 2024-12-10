<script setup lang="ts">
import { ListHeader } from '@/entities/list-header';
import { ListItem } from '@/entities/list-item';
import { type BookResponseType, useBookStore } from '@/entities/book';

const bookStore = useBookStore();
const route = useRoute();
const books = ref<BookResponseType>();
const page = ref(Number(route.query.page) || 1);

onBeforeMount(() => {
  fetchBooks();
});

const fetchBooks = async () => {
  books.value = await bookStore.getBooks({
    pageSize: 30,
    page: page.value,
    orderBy: '-createdAt',
    isDeleted: true,
  });
};

const handleNavigate = () => {
  navigateTo({ path: '/book', query: { page: page.value } });
  fetchBooks();
};
</script>

<template>
  <div>
    <list-header title="Книги" create-link="/book/create" />
    <div class="wrapper" v-if="books">
      <list-item
        v-for="item in books.data"
        :title="item.title"
        model="book"
        :slug="item.id"
        :date="item.createdAt"
        v-model:is-deleted="item.isDeleted"
        :storage-place="item.storagePlace"
      />
      <UPagination
        class="pagination"
        v-model="page"
        @update:model-value="handleNavigate"
        :total="+books.meta.total"
        :page-count="+books.meta.pageSize"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  @apply p-2;
}

.pagination {
  @apply sticky bottom-0 z-50 flex items-center justify-center;
}
</style>
