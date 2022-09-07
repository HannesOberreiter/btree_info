<template>
  <div v-if="error" class="text-red-500 text-lg text-center p-5">
    Error while loading Changelog data. 😱 <br />
    <small>{{ error }}</small>
  </div>
  <div v-else>
    <LoadingSpinner
      v-if="isFetching"
      slot="placeholder"
      :height="loadingContainer"
      :text="loadingText"
    ></LoadingSpinner>
    <div v-if="data && !isFetching">
      <ButtonPaging v-model="page" :length="data.length"></ButtonPaging>
      <ol v-if="data.length > 0">
        <ul>
          <li v-for="(item, index) in data.slice(page, page + 5)" :key="index">
            <span>{{ item.version }} [{{ item.date }}]</span>
            <ul class="py-2">
              <li v-for="(news, index) in item.news" :key="index">
                <b>{{ news.substring(0, news.indexOf(" ")) }}</b>
                {{ news.substring(news.indexOf(" ") + 1) }}
              </li>
            </ul>
          </li>
        </ul>
      </ol>

      <ButtonPaging v-model="page" :length="data.length"></ButtonPaging>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import { useFetch } from "@vueuse/core";
import ButtonPaging from "./ButtonPaging.vue";

const { isFetching, error, data, execute }: any = useFetch(
  "https://beta.btree.at/news.json",
  {
    immediate: false,
  }
)
  .get()
  .json();

const loadingText = "Changelog is loading ...";
const loadingContainer = 800;
const page = ref(0);

onMounted(() => execute());
</script>
