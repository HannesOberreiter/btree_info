<template>
  <a
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    href="#"
  >
    <img src="~assets/img/btree_logo_vec.svg" alt="b.tree Logo" class="h-12 inline" /> 
    <div class="hidden md:inline">
    b.tree
    </div>
  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  }
}
</script>
