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
        {
          label: "Grew Versionchecker",
          items: [
            { label: "Information", translations: {'de': 'Information'}, slug: "grew_versionchecker/readme"},
            //{ label: "Requirements", translations: {'de': 'Anforderungen'},  slug: "grew_versionchecker/required" },
            { label: "Install", translations: {'de': 'Installation'},  slug: "grew_versionchecker/install", badge: { text: {en:'New', 'de':'Neu'}, variant: 'tip' }},
            { label: "Config", translations: {'de': 'Config'},  slug: "grew_versionchecker/config", badge: { text: {en:'New', 'de':'Neu'}, variant: 'tip' }},
            { label: "License", translations: {'de': 'Lizenz'},  slug: "grew_versionchecker/license" },
          ],
        },
      ],
    }),
  ],
});
