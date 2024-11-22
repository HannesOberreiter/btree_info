<script lang="ts" setup>
import { useFetch } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import ButtonPaging from './ButtonPaging.vue';
import LoadingSpinner from './LoadingSpinner.vue';

const { isFetching, error, data, execute }: any = useFetch(
  'https://app.btree.at/news.json',
  {
    immediate: false,
  },
)
  .get()
  .json();

const loadingText = 'Changelog is loading ...';
const loadingContainer = 800;
const page = ref(0);

onMounted(() => execute());
</script>

<template>
  <div v-if="error" class="text-red-500 text-lg text-center p-5">
    Error while loading Changelog data. 😱 <br>
    <small>{{ error }}</small>
  </div>
  <div v-else>
    <LoadingSpinner
      v-if="isFetching"
      :height="loadingContainer"
      :text="loadingText"
    />
    <div v-if="data && !isFetching">
      <ButtonPaging v-model="page" :length="data.length" />
      <ol v-if="data.length > 0">
        <ul>
          <li v-for="(item, index) in data.slice(page, page + 5)" :key="index">
            <span>{{ item.version }} [{{ item.date }}]</span>
            <ul class="py-2">
              <li v-for="(news, i) in item.news" :key="i">
                <b>{{ news.substring(0, news.indexOf(" ")) }}</b>
                {{ news.substring(news.indexOf(" ") + 1) }}
              </li>
            </ul>
          </li>
        </ul>
      </ol>

      <ButtonPaging v-model="page" :length="data.length" />
    </div>
  </div>
</template>
