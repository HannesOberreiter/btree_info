<template>
  <a :href="url" @click.prevent="onClick(url)">🐝 {{ text }}</a>
</template>

<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    default: "https://app.btree.at",
  },
  text: {
    Type: String,
    default: "",
  },
});
</script>

<script lang="ts">
function onClick(url: string) {
  if (confirm(`Redirect to ${url}`)) {
    window.location.replace(url);
  }
}
</script>
