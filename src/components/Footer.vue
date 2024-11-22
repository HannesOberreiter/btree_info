<script setup lang="ts">
import IconsSocial from './IconsSocial.vue';
</script>

<template>
  <footer class="h-20 w-full border-t">
    <div
      class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between"
    >
      <div class="flex items-end">
        <span class="mr-2 text-sm leading-none">
          © 2014-{{ new Date().getFullYear() }} - b.tree by Hannes Oberreiter
        </span>
      </div>
      <IconsSocial socialclass="flex" />
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
  padding: 2rem 0;
  border-top: 3px solid var(--theme-divider);
}
</style>
