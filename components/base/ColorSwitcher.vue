<template>
  <button
    class="rounded-md hover:text-green-500 focus:outline-none transition ease-in-out duration-150"
    aria-label="Color Mode"
    @click="toggle"
  >
    <client-only>
      <IconSun v-if="$colorMode.preference === 'light'" class="w-6 h-6" ref="coloricon" value="system" />
      <IconSystem v-else-if="$colorMode.preference === 'system'" class="w-6 h-6" ref="coloricon" value="dark" />
      <IconMoon v-else class="w-6 h-6" ref="coloricon" value="light" />
    </client-only>
  </button>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$colorMode.preference = this.$refs.coloricon.$attrs.value
    },
  },
};
</script>
