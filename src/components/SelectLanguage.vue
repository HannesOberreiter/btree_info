<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import { KNOWN_LANGUAGES } from '../languages';

const props = defineProps({
  locale: {
    type: String,
    default: 'en',
  },
});

const { locale } = toRefs(props);
const language = ref(locale.value);

watch(locale, (newLocale) => {
  language.value = newLocale;
});

function changeLanguage(lang: string) {
  const [_leadingSlash, oldLang, ...rest]
    = window.location.pathname.split('/');
  if (lang === 'en') {
    const slug = rest.join('/');
    window.location.pathname = `/${slug}`;
    return;
  }
  const slug = [oldLang, ...rest].join('/');
  window.location.pathname = `/${lang}/${slug}`;
}
</script>

<template>
  <select
    v-model="language" className="language-select" class="language-select" :options="KNOWN_LANGUAGES"
    @change="changeLanguage(language)"
  >
    <option v-for="(item, index) in KNOWN_LANGUAGES" :key="index" :value="item">
      {{ index }}
    </option>
  </select>
</template>

<style scoped>
.language-select {
  width: 100%;
  flex-grow: 1;
  line-height: inherit;
  padding: 0.5em 3rem 0.5em 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
}
</style>
