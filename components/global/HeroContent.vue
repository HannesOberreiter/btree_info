<template>
  <div class="pt-0">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row hero-background"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase w-full text-black dark:text-white">{{ $t('text.subtitle') }}</p>
        <p class="text-5xl text-center w-full font-bold text-black dark:text-white">b.tree</p>
        <p class="leading-normal text-2xl mb-8 text-black dark:text-white">{{ $t('text.title') }}</p>
        <a href="https://www.btree.at/app">
          <button
            class="mx-auto lg:mx-0 hover:underline bg-orange-400 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >Login / Register</button>
        </a>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-2 text-center">
        <img class="w-full z-50" src="~/assets/img/mockup.png" alt="App Mockup" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroContent",
};
</script>
