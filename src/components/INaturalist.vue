<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

const items = ref(null);
const loadingText = 'iNat Images Loading ...';
const loadingContainer = 364;
const fetchError = ref(false);

onMounted(() => load());

async function load() {
  fetch(
    'https://api.inaturalist.org/v2/observations?user_id=787970&locale=de&per_page=6&order=desc&order_by=created_at&fields=(id:!t,uri:!t,taxon:(name:!t,preferred_common_name:!t),observed_on:!t,photos:(url:!t))',
  )
    .then(result => result.json())
    .then(data => (items.value = data.results))
    .catch((e) => {
      fetchError.value = true;
      console.error(e);
    });
}
</script>

<template>
  <div>
    <div v-if="fetchError" class="text-red-500 text-lg text-center p-5">
      Error while loading iNaturalist data. 😱
    </div>
    <div v-else>
      <LoadingSpinner
        v-if="!items"
        :height="loadingContainer"
        :text="loadingText"
      />
      <div v-else class="grid md:grid-cols-2 grid-cols-1">
        <div v-for="item in items" :key="item.id" class="m-1 flex">
          <a :href="item.uri">
            <img
              :src="item.photos[0].url"
              :alt="item.taxon.name"
              class="rounded-sm flex-none text-center"
              style="margin: 0"
            >
          </a>
          <div class="pt-1 pl-1">
            <a :href="item.uri">
              <i>{{ item.taxon.name }}</i> </a>,
            <small>
              <br>
              <b>{{ item.taxon?.preferred_common_name }}</b>
              <br>
              {{ item.observed_on }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
