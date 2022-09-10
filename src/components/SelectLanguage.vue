<template>
  <div class="language-select-wrapper">
    <svg
      width="1.25em"
      height="1.25em"
      viewBox="0 0 88.6 77.3"
      focusable="false"
      aria-hidden="true"
      role="img"
    >
      <path
        fill="currentColor"
        d="M61 24.6h7.9l18.7 51.6h-7.7l-5.4-15.5H54.3l-5.6 15.5h-7.2L61 24.6zM72.6 55l-8-22.8L56.3 55h16.3z"
      />
      <path
        fill="currentColor"
        d="M53.6 60.6c-10-4-16-9-22-14 0 0 1.3 1.3 0 0-6 5-20 13-20 13l-4-6c8-5 10-6 19-13-2.1-1.9-12-13-13-19h8c4 9 10 14 10 14 10-8 10-19 10-19h8s-1 13-12 24c5 5 10 9 19 13l-3 7zm-52-44h56v-8h-23v-7h-9v7h-24v8z"
      />
    </svg>
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
  color: var(--theme-text-light);
  position: relative;
}

.language-select-wrapper > svg {
  position: absolute;
  top: 0;
  height: 100%;
  inset-inline-start: 0.8rem;
  pointer-events: none;
}

.language-select {
  width: 100%;
  flex-grow: 1;
  padding: 0.15em 1.75rem;
  line-height: inherit;
  /* Add dropdown arrow */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: 97%;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  -webkit-appearance: none;
}

@media (hover: hover) {
  .language-select-wrapper > svg {
    inset-inline-start: 0.6rem;
  }
  .language-select {
    padding: 0.33em 1.75rem;
  }
}

/* On narrow viewports, hide the selected option text inside the header  */
@media not screen and (min-width: 37.75em) {
  /* Make header text transparent and limit width */
  .language-select {
    color: transparent;
    width: 65px;
    background-position: 90%;
  }

  /* Assign a fixed color to options to keep them visible in the dropdown in Firefox */
  .language-select option {
    color: var(--theme-text-light);
  }
}

@media (min-width: 37.75em) {
  .language-select {
    padding-inline-start: 2.25rem;
    padding-inline-end: 1.5rem;
  }
}
</style>
