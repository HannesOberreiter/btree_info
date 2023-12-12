<template>
  <a
    :href="url"
    @click.prevent="onClick(url)"
    aria-label="Link to beekeeping app"
    >
    {{ text }}
  </a>
</template>

<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    default: "https://app.btree.at",
  },
  text: {
    Type: String,
    default: "🐝",
  },
});
</script>

<script lang="ts">
function onClick(url: string) {
  if (confirm(`Redirect to ${url}`)) {
    window.location.href = url;
  }
}
</script>
