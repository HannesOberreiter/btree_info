<template>
  <div class="pt-16">
    <Navbar />
    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <aside
          class="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 dark:bg-transparent"
          :class="{ 'block': menu, 'hidden': !menu }"
        >
          <div class="lg:sticky lg:top-0 lg:pt-16 lg:-mt-16 overflow-y-auto h-full">
            <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8">
              <li v-for="(docs, category) in categories" :key="category" class="mb-4">
                <h3
                  class="mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"
                >{{ category }}</h3>
                <ul>
                  <li v-for="doc of docs" :key="doc.slug" class="text-gray-600 dark:text-gray-500">
                    <NuxtLink
                      :to="toLink(doc.slug)"
                      class="px-2 rounded font-medium py-1 block hover:text-gray-700 dark-hover:text-gray-100"
                      exact-active-class="text-green-500 bg-green-100 hover:text-green-500 dark:text-white dark:bg-green-700 dark-hover:text-white"
                    >{{ doc.title }}</NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="mb-4 lg:hidden">
                <h3
                  class="mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"
                >More</h3>

                <Socialicons socialclass="flex items-center ml-2" />
              </li>
            </ul>
          </div>
        </aside>

        <Nuxt class="w-full lg:w-4/5" />
      </div>
    </main>
    <client-only>
      <go-top aria-label="Back To Top" :size=40 :max-width=20 :right=15 :bottom=15></go-top>
    </client-only>
    <TheFooter />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import TheFooter from "@/components/TheFooter";
import SearchInput from "@/components/SearchInput";

const GoTop = process.client ? require('@inotom/vue-go-top').default : null;

export default {
  components: {
    GoTop,
    Navbar,
    TheFooter,
    SearchInput,
  },
  computed: {
    bodyClass() {
      return this.$store.state.menu.open
        ? ["h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto"]
        : [];
    },
    menu: {
      get() {
        return this.$store.state.menu.open;
      },
      set(val) {
        this.$store.commit("menu/toggle", val);
      },
    },
    categories() {
      return this.$store.state.categories[this.$i18n.locale];
    },
  },
  methods: {
    toLink(slug) {
      if (slug === "index") {
        return this.localePath("slug");
      }
      return this.localePath({ name: "slug", params: { slug } });
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo();

    return {
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          "antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100",
        ],
      },
      ...i18nSeo,
    };
  },
};
</script>
