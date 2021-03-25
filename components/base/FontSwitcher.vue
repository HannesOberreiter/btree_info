<template>
  <button
    class="rounded-md hover:text-green-500 focus:outline-none transition ease-in-out duration-150"
    aria-label="Font Size Mode"
    @click="toggle()"
  >
    <IconFont />
  </button>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      fontSize: (state) => state.font,
    }),
  },
  methods: {
    ...mapMutations({
      toggle: "font/toggle",
    }),
  },
};
</script>
