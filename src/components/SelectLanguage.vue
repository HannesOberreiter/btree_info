<template>
  <div class="language-select-wrapper">
    <select
      v-model="language"
      className="language-select"
      class="language-select"
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
}

@media (hover: hover) {
  .language-select {
    padding: 0.33em 1.6rem 0.33em 0.33rem;
  }
}
</style>
