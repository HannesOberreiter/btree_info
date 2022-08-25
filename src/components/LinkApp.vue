<template>
  <a :href="url" @click.prevent="onClick">🐝 {{ text }}</a>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    default: "https://app.btree.at",
  },
  text: {
    Type: String,
    default: "",
  },
});

function onClick(_e) {
  if (confirm(`Redirect to ${props.url}`)) {
    window.location.replace(props.url);
  }
}
</script>
