<template>
  <h2 class="heading">Index</h2>
  <ul>
    <li
      v-for="(item, index) in headings.filter(
        (o) => o.depth > 1 && o.depth < 4
      )"
      :class="`depth-${item.depth} ${
        isActive(item.slug) ? 'text-amber-500' : ''
      }`"
      class="heading-link"
      :key="index"
    >
      <a :href="`#${item.slug}`">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

defineProps({
  headings: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const current = ref("");

const isActive = (slug: string) => current.value === `#${slug}`;

onMounted(() => {
  current.value = location.hash;
  onhashchange = () => {
    current.value = location.hash;
  };
});
</script>
