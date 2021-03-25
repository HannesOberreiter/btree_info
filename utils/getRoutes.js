// https://redfern.dev/articles/adding-a-sitemap-using-nuxt-content/
// future releases may solve this manual workaround
// https://github.com/nuxt-community/sitemap-module/issues/143
export default async () => {
    const { $content } = require("@nuxt/content");
    const files = await $content({ deep: true }).fetch();

    const routes = files
        .filter(file => file.dir === '/de')
        .map(function(file){
            let filePath = file.path.replace("/de", "");
            filePath = filePath === "/index" ? "/" : filePath;

            const result = {
                url: filePath,
                links: ['en', 'de'].map((lang) => ({ lang, url: lang+filePath })),
                lastmod: file.updatedAt,
            }
            return result;
        });

    return routes;
};