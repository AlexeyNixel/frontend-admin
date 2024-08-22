<script setup lang="ts">
import dayjs from 'dayjs';
import { deleteModel } from '@/shared/api/delete-model';

const props = defineProps<{
  model: string;
  title: string;
  slug: string;
  date?: string;
  menuItemType?: string;
  storagePlace?: string;
  isCollection?: boolean;
  deleteEvent?: Function;
}>();

const isDeleted = defineModel<boolean>('isDeleted');

const hideElement = async () => {
  if (isDeleted.value !== undefined) {
    return deleteModel(`/api${props.slug}`, isDeleted.value);
  }
};
</script>

<template>
  <div class="list-item">
    <div class="list-item__field list-item__field--long">{{ title }}</div>
    <div class="list-item__field list-item__field--font" v-if="date">
      {{ dayjs(date).format('DD.MM.YYYY') }}
    </div>
    <div class="list-item__field" v-if="menuItemType">
      {{ menuItemType }}
    </div>
    <div class="list-item__field" v-if="storagePlace">
      {{ storagePlace }}
    </div>
    <div class="list-item__field" v-if="isCollection">
      {{ isCollection }}
    </div>
    <div class="list-item__field" v-if="isDeleted !== null">
      <UCheckbox
        @change="hideElement"
        color="red"
        label="скрыт"
        v-model="isDeleted"
      />
    </div>
    <nuxt-link
      class="list-item__field"
      v-if="slug"
      :to="`http://dev.infomania.ru` + slug"
      external
      target="_blank"
    >
      <icon class="icon" name="i-heroicons-link" />
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
.list-item {
  @apply flex bg-white dark:bg-slate-800 p-2 mb-2 rounded-md;

  &__field {
    @apply w-1/6 flex items-center justify-center;

    &--long {
      @apply w-full text-left justify-start;
    }

    &--font {
      font-family: Roboto;
    }

    .icon {
      @apply text-xl;
    }
  }
}
</style>
