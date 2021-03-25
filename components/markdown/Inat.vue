<template>
  <div class>
    <client-only>
      <base-content-loading
        slot="placeholder"
        :height="loadingContainer"
        :text="loadingText"
      ></base-content-loading>
      <div class="grid md:grid-cols-2 grid-cols-1">
        <div v-for="item in this.items" :key="item.id" class="m-5 flex">
          <a :href="item.uri">
            <img
              :src="item.photos[0].url"
              :alt="item.taxon.name"
              class="rounded flex-none text-center"
              style="margin: 0"
            />
          </a>
          <div class="flex-1 pt-5 ml-5 mr-5">
            <a :href="item.uri">
              <i>{{ item.taxon.name }}</i>
            </a>,
            <small>
              <br />
              {{ formatDate(item.observed_on) }}
            </small>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "Inat",
  data() {
    return {
      items: {},
      loadingText: "iNat Images Loading ...",
      loadingContainer: 364,
    };
  },
  async mounted() {
    const res = await this.$http.get(
      "https://api.inaturalist.org/v1/observations?user_id=787970&locale=en_GB&per_page=4&order=desc&order_by=created_at&only_id=false"
    );
    const results = await res.json();
    this.items = results.results;
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(this.$i18n.locale, options);
    },
  },
};
</script>
