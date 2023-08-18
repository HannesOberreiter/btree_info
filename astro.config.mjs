import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import emoji from "remark-emoji";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [
    vue(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      remarkPlugins: [emoji],
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          de: "de-DE",
        },
      },
    }),
    robotsTxt({
      host: true,
    }),
    compress({
      SVG: false,
      CSS: false,
      JS: false,
      HTML: false,
    }),
  ],
  site: `https://www.btree.at/`,
  markdown: {
    remarkPlugins: [
      // Add a Remark plugin that you want to enable for your project.
      // If you need to provide options for the plugin, you can use an array and put the options as the second item.
      // ['remark-autolink-headings', { behavior: 'prepend'}],
      emoji,
      //remarkGFM,
    ],
  },
});
