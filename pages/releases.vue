<template>
  <div class="flex flex-wrap-reverse">
    <div class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r">
      <article
        class="prose max-w-none lg:px-8 dark:text-gray-100 dark:prose-dark"
        v-bind:style="{ fontSize:  this.$store.state.font.value + 'rem' }"
      >
        <h1>Patch Notes</h1>
        <client-only>
          <ReleaseDatatable
            v-if="(isDataTableLoaded&&isQueryLoaded&&isMarkLoaded&&isMarkDTLoaded)"
          />
        </client-only>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isQueryLoaded: true,
      skipDT: true,
      isDataTableLoaded: false,
      isMarkLoaded: false,
      isMarkDTLoaded: false,
    };
  },
  head() {
    return {
      title: "Patch Notes",
      link: [
        {
          hid: "ex-dt-styles",
          rel: "stylesheet",
          href: "//cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css",
        },
        {
          hid: "ex-dt-mark-styles",
          rel: "stylesheet",
          href:
            "https://cdn.datatables.net/plug-ins/1.10.13/features/mark.js/datatables.mark.min.css",
        },
      ],
      script: [
        {
          hid: "ex-jquery",
          src: "//code.jquery.com/jquery-3.5.1.min.js",
          integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
          crossorigin: "anonymous",
          defer: true,
          callback: () => {
            this.isQueryLoaded = true;
            this.skipDT = false;
          },
        },
        {
          hid: "ex-dt",
          src: "//cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js",
          skip: this.skipDT,
          defer: true,
          callback: () => {
            this.isDataTableLoaded = true;
          },
        },
        {
          hid: "ex-mark",
          src: "https://cdn.jsdelivr.net/g/mark.js(jquery.mark.min.js)",
          defer: true,
          skip: this.skipDT,
          callback: () => {
            this.isMarkLoaded = true;
          },
        },
        {
          hid: "ex-dt-mark",

          src:
            "https://cdn.datatables.net/plug-ins/1.10.13/features/mark.js/datatables.mark.js",
          defer: true,
          skip: this.skipDT,

          callback: () => {
            this.isMarkDTLoaded = true;
          },
        },
      ],
    };
  },
};
</script>