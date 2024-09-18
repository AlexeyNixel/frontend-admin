<template>
  <div>
    <div class="main-container">
      <div
        class="editor-container editor-container_classic-editor"
        ref="editorContainerElement"
      >
        <div class="editor-container__editor">
          <div ref="editorElement">
            <ckeditor
              v-if="isLayoutReady"
              :editor="editor"
              :config="config"
              v-model="content"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import translations from 'ckeditor5/translations/ru.js';
import {
  ClassicEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  Autosave,
  BlockQuote,
  Bold,
  CloudServices,
  Essentials,
  GeneralHtmlSupport,
  Heading,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Paragraph,
  SelectAll,
  SimpleUploadAdapter,
  SourceEditing,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  Undo,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import { uploadAdapter } from '@/widgets/rich-editor/lib/uploadAdapter';

const content = defineModel();
const isLayoutReady = true;
const config = {
  extraPlugins: [uploadAdapter],
  theme: 'lark',
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'sourceEditing',
      'selectAll',
      '|',
      'heading',
      '|',
      'outdent',
      'indent',
      'alignment',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'link',
      'insertImage',
      'insertTable',
      'blockQuote',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',

      '|',
      'accessibilityHelp',
    ],
    shouldNotGroupWhenFull: false,
  },
  plugins: [
    AccessibilityHelp,
    Alignment,
    Autoformat,
    AutoImage,
    Autosave,
    BlockQuote,
    Bold,
    CloudServices,
    Essentials,
    GeneralHtmlSupport,
    Heading,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Paragraph,
    SelectAll,
    SimpleUploadAdapter,
    SourceEditing,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline,
    Undo,
  ],
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5',
      },
      {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6',
      },
    ],
  },
  htmlSupport: {
    allow: [
      {
        name: /^.*$/,
        styles: true,
        attributes: true,
        classes: true,
      },
    ],
  },
  image: {
    resizeOptions: [
      {
        name: 'resizeImage:original',
        value: null,
        label: 'Original',
      },
      {
        name: 'resizeImage:20',
        value: '20',
        label: '20%',
      },
      {
        name: 'resizeImage:33',
        value: '33',
        label: '33%',
      },
      {
        name: 'resizeImage:40',
        value: '40',
        label: '40%',
      },
      {
        name: 'resizeImage:60',
        value: '60',
        label: '60%',
      },
      {
        name: 'resizeImage:80',
        value: '80',
        label: '80%',
      },
    ],
    toolbar: [
      'toggleImageCaption',
      'imageTextAlternative',
      '|',
      'imageStyle:inline',
      'imageStyle:wrapText',
      'imageStyle:breakText',
      '|',
      'resizeImage',
    ],
  },
  language: 'ru',
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'http://',
    decorators: {
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file',
        },
      },
    },
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  placeholder: 'Контент новости',
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
    ],
  },
  translations: [translations],
};
const editor = ClassicEditor;
</script>

<style scoped>
:deep(.ck.ck-editor__main > .ck-editor__editable) {
  @apply bg-white dark:bg-neutral-900;
}

:deep(.ck.ck-toolbar > .ck-toolbar__items) {
  @apply bg-white dark:bg-neutral-900;
}

:deep(
    .ck.ck-toolbar > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
    .ck.ck-toolbar > .ck.ck-toolbar__grouped-dropdown
  ) {
  @apply text-black dark:text-white;
}

:deep(
    .ck.ck-button:not(.ck-button_with-text),
    a.ck.ck-button:not(.ck-button_with-text)
  ) {
  @apply text-black dark:text-white;
}

:deep(.ck.ck-dropdown .ck-button.ck-dropdown__button) {
  @apply text-black dark:text-white;
}
</style>
