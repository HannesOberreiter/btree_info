<template>
  <div class="theme-toggle">
    <label :class="darkMode === 'light' ? 'checked' : ''">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="radio"
        name="theme-toggle"
        @click="isDark = 'light'"
        aria-label="Toggle light theme"
      />
    </label>
    <label :class="darkMode === 'dark' ? 'checked' : ''">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
        />
      </svg>
      <input
        type="radio"
        name="theme-toggle"
        @click="isDark = 'dark'"
        aria-label="Toggle dark theme"
      />
    </label>
    <label :class="darkMode === 'auto' ? 'checked' : ''">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-5 h-5"
      >
        <path
          fill-rule="evenodd"
          d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
          clip-rule="evenodd"
        />
      </svg>

      <input
        type="radio"
        name="theme-toggle"
        @click="isDark = 'auto'"
        aria-label="Use system theme"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { BasicColorSchema, useColorMode } from "@vueuse/core";
import { onMounted, ref, watch } from "vue";
const isDark = useColorMode({
  selector: "html",
  attribute: "class",
  emitAuto: true,
  storageKey: "local-color-scheme",
});
const darkMode = ref<BasicColorSchema>("auto");

onMounted(() => {
  watch(isDark, () => (darkMode.value = isDark.value), { immediate: true });
});
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  padding: 0.33em 0.67em;
  border-radius: 99em;
  background-color: var(--theme-code-inline-bg);
}

.theme-toggle > label:focus-within {
  outline: 2px solid transparent;
  box-shadow: 0 0 0 0.08em var(--theme-accent), 0 0 0 0.12em white;
}

.theme-toggle > label {
  color: var(--theme-code-inline-text);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}

.theme-toggle .checked {
  color: var(--theme-accent);
  opacity: 1;
}

input[name="theme-toggle"] {
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
