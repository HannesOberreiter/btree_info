<script setup lang="ts">
import { ref, watch } from 'vue';
import IconMenu from './icon/Menu.vue';
import IconClose from './icon/X.vue';

const sidebarShown = ref(false);

watch(sidebarShown, () => {
  const body = document.getElementsByTagName('body')[0];
  if (sidebarShown.value) {
    body.classList.add('mobile-sidebar-toggle');
  }
  else {
    body.classList.remove('mobile-sidebar-toggle');
  }
});
</script>

<template>
  <button
    id="menu-toggle"
    type="button"
    :aria-pressed="sidebarShown ? 'true' : 'false'"
    style="cursor: pointer"
    @click="sidebarShown = !sidebarShown"
  >
    <IconMenu v-if="!sidebarShown" class="w-6 h-6" />
    <IconClose v-else class="w-6 h-6" />
  </button>
</template>
