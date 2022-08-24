<template>
  <button
    type="button"
    :aria-pressed="sidebarShown ? 'true' : 'false'"
    id="menu-toggle"
    @click="sidebarShown = !sidebarShown"
    style="cursor: pointer"
  >
    <icon-menu v-if="!sidebarShown" class="w-6 h-6"></icon-menu>
    <icon-close v-else class="w-6 h-6"></icon-close>
  </button>
</template>

<script setup lang="ts">
import IconMenu from "./icon/Menu.vue";
import IconClose from "./icon/X.vue";
import { ref, watch } from "vue";

const sidebarShown = ref(false);

watch(sidebarShown, () => {
  const body = document.getElementsByTagName("body")[0];
  if (sidebarShown.value) {
    body.classList.add("mobile-sidebar-toggle");
  } else {
    body.classList.remove("mobile-sidebar-toggle");
  }
});
</script>
