<template>
  <div class="flex flex-wrap-reverse">
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r"
    >
      <article
        class="prose max-w-none lg:px-8 dark:text-gray-100 dark:prose-dark"
        :style="{ fontSize: this.$store.state.font.value + 'rem' }"
      >
        <h1>Patch Notes</h1>
        <client-only>
          <ReleaseDatatable v-if="isQueryLoaded && isDataTableLoaded" />
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
    };
  },
  head() {
    return {
      title: "Patch Notes",
      // datatables CDN Source
      // https://datatables.net/download/index
      // DataTables Styling, jQuery3, DataTables
      link: [
        {
          hid: "ex-dt-styles",
          rel: "stylesheet",
          href:
            "//cdn.datatables.net/v/dt/jq-3.3.1/dt-1.10.22/datatables.min.css",
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
          src: "//cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js",
          skip: this.skipDT,
          defer: true,
          callback: () => {
            this.isDataTableLoaded = true;
          },
        },
      ],
    };
  },
};
</script>
