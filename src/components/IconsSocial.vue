<template>
  <ul :class="socialclass" style="list-style: none">
    <li class="mr-4">
      <a
        href="https://twitter.com/btree_hannes"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        name="Twitter"
        class="block hover:text-green-500 mr-2"
      >
        <Twitter class="w-6 h-6" />
      </a>
    </li>
    <li class="mr-4">
      <a
        href="https://github.com/HannesOberreiter"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        name="Github"
        class="block hover:text-green-500 mr-4"
      >
        <GitHub class="w-6 h-6" />
      </a>
    </li>

    <li class="mr-4">
      <a
        href="https://www.youtube.com/c/HannesOberreiter"
        target="_blank"
        rel="noopener noreferrer"
        title="YouTube"
        name="YoTube"
        class="block hover:text-green-500 mr-4"
      >
        <YouTube class="w-6 h-6" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Twitter from "./icon/Twitter.vue";
import YouTube from "./icon/YouTube.vue";
import GitHub from "./icon/Github.vue";

defineProps({
  socialclass: {
    type: String,
    required: true,
  },
});
</script>
