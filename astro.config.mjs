// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://wiki.grew-development.de"
    : "http://localhost:4321",
  base: process.env.CI ? "/wiki" : undefined,
  integrations: [
    starlight({
      title: "Wiki - Grew Development",
      favicon: "./src/assets/pics/favicon.ico",
      social: {
        github: "https://github.com/grew-development/wiki",
        email: "mailto:info@grew-development.de",
      },
      customCss: ["./src/assets/css/main.css"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
      },
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: "About us",
          items: [
            { label: "Information", slug: "about-us/information" },
            { label: "FAQ", slug: "about-us/faq" },
          ],
        },
      ],
    }),
  ],
});
