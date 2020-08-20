<template>
  <div class="pt-0">
        <p class="leading-normal text-2xl mb-0 text-black dark:text-white">{{ $t('text.title') }}</p>
                <p class="uppercase w-full text-black dark:text-white">b.tree - {{ $t('text.subtitle') }}</p>
    <div class="container px-0 mx-auto flex flex-wrap flex-col md:flex-row">
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/4 justify-center items-start text-center md:text-left"
      >
        <p class="text-2xl text-center w-full font-bold text-black dark:text-white">
          <a href="https://www.btree.at/app">
            <button
              class="mx-auto lg:mx-0 hover:underline bg-orange-600 text-white font-bold rounded-full my-0 py-4 px-8 shadow-lg"
            >Login / Register</button>
          </a>
        </p>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-2/4 py-2 text-center">
        <cloud-image custom="w-full z-50" url="btree-info/img/mockup" alt="b.tree App Mockup"></cloud-image>
        <!--<img class="w-full z-50" src="~/assets/img/mockup.png" alt="App Mockup" />-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroContent",
};
</script>
