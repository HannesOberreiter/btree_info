<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="mt-3 flex">
      <IconCheck class="h-6 w-6 mt-px mr-3 flex-shrink-0" :class="iconColor" />
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  iconColor: {
    type: String,
    default: "text-yellow-500",
  },
});
</script>
