<template>
  <div class="language-select-wrapper">
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 88.6 77.3"
      height="1.2em"
      width="1.2em"
    >
      <path
        fill="currentColor"
        d="M61,24.6h7.9l18.7,51.6h-7.7l-5.4-15.5H54.3l-5.6,15.5h-7.2L61,24.6z M72.6,55l-8-22.8L56.3,55H72.6z"
      />
      <path
        fill="currentColor"
        d="M53.6,60.6c-10-4-16-9-22-14c0,0,1.3,1.3,0,0c-6,5-20,13-20,13l-4-6c8-5,10-6,19-13c-2.1-1.9-12-13-13-19h8          c4,9,10,14,10,14c10-8,10-19,10-19h8c0,0-1,13-12,24l0,0c5,5,10,9,19,13L53.6,60.6z M1.6,16.6h56v-8h-23v-7h-9v7h-24V16.6z"
      />
    </svg>
    <select
      v-model="language"
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
import {
  getLanguageFromURL,
  KNOWN_LANGUAGES,
  langPathRegex,
} from "../languages";

const language = ref("de");

onMounted(() => {
  language.value = getLanguageFromURL(window.location.pathname);
});

function changeLanguage(lang: string) {
  let actualDest = window.location.pathname.replace(langPathRegex, "/");
  if (actualDest == "/") actualDest = `/introduction`;
  window.location.pathname = "/" + lang + actualDest;
}
</script>

<style scoped>
.language-select {
  flex-grow: 1;
  width: 48px;
  box-sizing: border-box;
  margin: 0;
  padding: 0.33em 0.5em;
  overflow: visible;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  line-height: inherit;
  background-color: var(--theme-bg);
  border-color: var(--theme-text-lighter);
  color: var(--theme-text-light);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  outline: 0;
  cursor: pointer;
  transition-timing-function: ease-out;
  transition-duration: 0.2s;
  transition-property: border-color, color;
  -webkit-font-smoothing: antialiased;
  padding-left: 30px;
  padding-right: 1rem;
}
.language-select-wrapper .language-select:hover,
.language-select-wrapper .language-select:focus {
  color: var(--theme-text);
  border-color: var(--theme-text-light);
}
.language-select-wrapper {
  color: var(--theme-text-light);
  position: relative;
}
.language-select-wrapper > svg {
  position: absolute;
  top: 7px;
  left: 10px;
  pointer-events: none;
}

@media (min-width: 50em) {
  .language-select {
    width: 100%;
  }
}
</style>
