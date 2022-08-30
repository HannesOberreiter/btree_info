<template>
  <div v-if="fetchError" class="text-red-500 text-lg text-center p-5">
    Error while loading Changelog data. 😱
  </div>
  <div v-else>
    <LoadingSpinner
      v-if="!items"
      slot="placeholder"
      :height="loadingContainer"
      :text="loadingText"
    ></LoadingSpinner>
    <div v-else="items">
      <div class="flex-1 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-700 dark:text-gray-100"></p>
        </div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            href="#"
            :class="page <= 0 ? 'link-disabled' : ''"
            @click.prevent="page = 0"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: mini/chevron-double-left -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            :class="page <= 0 ? 'link-disabled' : ''"
            @click.prevent="page = page - 5"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: mini/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            :class="page + 5 >= items.length ? 'link-disabled' : ''"
            @click.prevent="page = page + 5"
            class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: mini/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            :class="page + 5 >= items.length ? 'link-disabled' : ''"
            @click.prevent="page = pages * 5"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Last</span>
            <!-- Heroicon name: mini/chevron-double-right -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>

      <ol v-if="items.length > 0">
        <li v-for="(item, index) in items.slice(page, page + 5)" :key="index">
          {{ item.date }}
          <ol>
            <li v-html="formatNews(item.news.toString())"></li>
          </ol>
        </li>
      </ol>

      <div class="flex-1 flex items-center justify-between">
        <div>
          <p class="text-sm text-gray-700 dark:text-gray-100">
            Page {{ page / 5 + 1 }} from {{ pages + 1 }}
          </p>
        </div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            href="#"
            :class="page <= 0 ? 'link-disabled' : ''"
            @click.prevent="page = 0"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: mini/chevron-double-left -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            :class="page <= 0 ? 'link-disabled' : ''"
            @click.prevent="page = page - 5"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: mini/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            :class="page + 5 >= items.length ? 'link-disabled' : ''"
            @click.prevent="page = page + 5"
            class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: mini/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            :class="page + 5 >= items.length ? 'link-disabled' : ''"
            @click.prevent="page = pages * 5"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-50"
          >
            <span class="sr-only">Last</span>
            <!-- Heroicon name: mini/chevron-double-right -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LoadingSpinner from "./LoadingSpinner.vue";

const loadingText = "Changelog is loading ...";
const loadingContainer = 800;
const pages = ref(0);
const page = ref(0);
const fetchError = ref(false);

const items = ref(null);

onMounted(() => load());

async function load() {
  fetch(`https://www.btree.at/app/news.json?cache=${Date.now()}`)
    .then((result) => result.json())
    .then((data) => {
      if (data) {
        items.value = data.aaData;
        pages.value = Math.floor(items.value.length / 5);
      }
    })
    .catch((e) => {
      fetchError.value = true;
      console.error(e);
    });
}

function formatNews(news: string) {
  let value = news.replace(/- /g, "");
  value = value.replace(/<br\/>/g, "");
  value = value.replace(/(,(?=\S)|:)/g, "<br/>");
  value = value.replace(/VISUAL/g, "<b>VISUAL</b>");
  value = value.replace(/BUGFIX/g, "<b>BUGFIX</b>");
  value = value.replace(/UPDATE/g, "<b>UPDATE</b>");
  value = value.replace(/FEATURE/g, "<b>FEATURE</b>");
  value = value.replace(/CHANGE/g, "<b>CHANGE</b>");
  value = value.replace(/LANGUAGE/g, "<b>LANGUAGE</b>");
  return value;
}
</script>

<style scoped>
.link-disabled,
.link-disabled[disabled] {
  opacity: 0.4;
  cursor: default !important;
  pointer-events: none;
}
</style>
