<script setup lang="ts">
defineProps({
  height: {
    type: Number,
    default: 180,
  },
  text: {
    type: String,
    default: 'Loading ...',
  },
});
</script>

<template>
  <div
    class="text-center"
    :style="`min-height: ${height}px;max-height: ${height}px;`"
  >
    <span>
      <b>{{ text }}</b>
    </span>
    <div class="loader" />
  </div>
</template>

<style scoped>
.loader {
  border: 16px solid black;
  border-top: 16px solid darkgrey;
  border-right: 16px solid darkgreen;
  border-bottom: 16px solid darkgrey;
  border-left: 16px solid darkgreen;
  border-radius: 20%;
  width: 120px;
  height: 120px;
  animation: spin 5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
