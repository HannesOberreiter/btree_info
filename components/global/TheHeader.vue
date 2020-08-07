<template>
  <nav class="fixed w-full z-30 top-0 top-color">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-1"
    >
      <div class="pl-4 flex items-center">
        <logo />
      </div>

      <div
        class=" mx-auto flex-grow flex items-center mt-0 text-white p-0 z-20"
      >
        <ul class="list-reset flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block py-2 px-4 text-white font-bold no-underline"
              href="#"
              >Active</a
            >
          </li>
                    <li class="mr-3">
            <a
              class="inline-block py-2 px-4 text-white font-bold no-underline"
              href="https://www.btree.at/app/"
              >Login</a
            >
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import Logo from '@/components/global/Logo'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo
  },
  data () {
    return {
      scrollY: 0
    }
  },
  methods: {
    onScroll () {
      this.scrollY = window.scrollY
    }
  },
  mounted () {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>
