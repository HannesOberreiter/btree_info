<script setup lang="ts">
import GitHub from './icon/Github.vue';
import LinkedIn from './icon/LinkedIn.vue';
import YouTube from './icon/YouTube.vue';

defineProps({
  socialclass: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <ul :class="socialclass" style="list-style: none">
    <li class="mr-4">
      <a
        href="https://www.linkedin.com/in/hannes-oberreiter-214a30265/" target="_blank" rel="noopener noreferrer"
        title="LinkedIn" name="LinkedIn" class="block hover:text-green-500 mr-2"
      >
        <LinkedIn class="w-6 h-6" />
      </a>
    </li>
    <li class="mr-4">
      <a
        href="https://github.com/HannesOberreiter" target="_blank" rel="noopener noreferrer" title="Github" name="Github"
        class="block hover:text-green-500 mr-4"
      >
        <GitHub class="w-6 h-6" />
      </a>
    </li>

    <li class="mr-4">
      <a
        href="https://www.youtube.com/c/HannesOberreiter" target="_blank" rel="noopener noreferrer" title="YouTube"
        name="YoTube" class="block hover:text-green-500 mr-4"
      >
        <YouTube class="w-6 h-6" />
      </a>
    </li>
  </ul>
</template>
