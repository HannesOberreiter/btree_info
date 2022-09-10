<template>
  <div class="language-select-wrapper">
    <select
      v-model="language"
      className="language-select"
      :options="KNOWN_LANGUAGES"
      @change="changeLanguage(language)"
    >
      <option v-for="(item, index) in KNOWN_LANGUAGES" :value="item">
        {{ index }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getLanguageFromURL, KNOWN_LANGUAGES } from "../languages";

const language = ref("de");

onMounted(() => {
  language.value = getLanguageFromURL(window.location.pathname);
});

function changeLanguage(lang: string) {
  const [_leadingSlash, _oldLang, ...rest] =
    window.location.pathname.split("/");
  const slug = rest.join("/");
  window.location.pathname = `/${lang}/${slug}`;
}
</script>

<style scoped>
.language-select-wrapper {
  position: relative;
}

.language-select {
  width: 100%;
  flex-grow: 1;
  line-height: inherit;
  /* Add dropdown arrow */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: 97%;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  -webkit-appearance: none;
}

@media (hover: hover) {
  .language-select {
    padding: 0.33em 1.6rem 0.33em 0.33rem;
  }
}
</style>
