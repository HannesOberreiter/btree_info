<template>
  <div>
    <div v-if="fetchError" class="text-red-500 text-lg text-center p-5">
      Error while loading iNaturalist data. 😱
    </div>
    <div v-else>
      <LoadingSpinner
        v-if="!items"
        slot="placeholder"
        :height="loadingContainer"
        :text="loadingText"
      ></LoadingSpinner>
      <div v-else class="grid md:grid-cols-2 grid-cols-1">
        <div v-for="item in items" :key="item.id" class="m-5 flex">
          <a :href="item.uri">
            <img
              :src="item.photos[0].url"
              :alt="item.taxon.name"
              class="rounded flex-none text-center"
              style="margin: 0"
            />
          </a>
          <div class="flex-1 pt-5 ml-5 mr-5">
            <a :href="item.uri">
              <i>{{ item.taxon.name }}</i> </a
            >,
            <small>
              <br />
              {{ item.observed_on }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from "./LoadingSpinner.vue";
import { onMounted, ref } from "vue";

const items = ref(null);
const loadingText = "iNat Images Loading ...";
const loadingContainer = 364;
const fetchError = ref(false);

onMounted(() => load());

async function load() {
  fetch(
    "https://api.inaturalist.org/v1/observations?user_id=787970&locale=en_GB&per_page=4&order=desc&order_by=created_at&only_id=false"
  )
    .then((result) => result.json())
    .then((data) => (items.value = data.results))
    .catch((e) => {
      fetchError.value = true;
      console.error(e);
    });
}
</script>
