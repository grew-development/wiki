// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://wiki.grew-solutions.de"
    : "http://localhost:4321",
  base: process.env.CI ? "/wiki" : undefined,
  integrations: [
    starlight({
      title: "Wiki - Grew Solutions",
      favicon: "/img/favicon.ico",
      social: {
        github: "https://github.com/grew-development/wiki",
        email: "mailto:info@grew-solutions.de",
      },
      customCss: [
        './src/assets/css/main.css',
        './src/assets/css/homestyle.css',
        './src/assets/css/pagestyle.css'
      ],
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
            { label: "Install", translations: {'de': 'Installation'},  slug: "grew_versionchecker/install" },
            { label: "Config", translations: {'de': 'Config'},  slug: "grew_versionchecker/config" },
            { label: "License", translations: {'de': 'Lizenz'},  slug: "grew_versionchecker/license" },
          ],
        },
        {
          label: "Grew esxAddon",
          items: [
            { label: "Information", translations: {'de': 'Information'}, slug: "grew_esxaddon/readme" },
            { label: "Required/Optional Scripts", translations: {'de': 'Erforderliche/Optionale Scripts'},  slug: "grew_esxaddon/required" },
            { label: "Install", translations: {'de': 'Installation'},  slug: "grew_esxaddon/install"},
            { label: "Config", translations: {'de': 'Config'},  slug: "grew_esxaddon/config"},
            { label: "Commands / Exports / Events", translations: {'de': 'Befehle / Exports / Events'},  slug: "grew_esxaddon/commands"},
            { label: "License", translations: {'de': 'Lizenz'},  slug: "grew_esxaddon/license" },
          ],
        },
        {
          label: "Grew NPC",
          items: [
            { label: "Information", translations: {'de': 'Information'}, slug: "grew_npc/readme"},
            { label: "Required/Optional Scripts", translations: {'de': 'Erforderliche/Optionale Scripts'},  slug: "grew_npc/required"},
            { label: "Install", translations: {'de': 'Installation'},  slug: "grew_npc/install"},
            { label: "Config", translations: {'de': 'Config'},  slug: "grew_npc/config"},
            //{ label: "Commands / Exports / Events", translations: {'de': 'Befehle / Exports / Events'},  slug: "grew_npc/commands"},
            { label: "License", translations: {'de': 'Lizenz'},  slug: "grew_npc/license" },
          ],
        },
        {
          label: "Grew Plasticsurgeon",
          items: [
            { label: "Information", translations: {'de': 'Information'}, slug: "grew_plasticsurgeon/readme", badge: { text: {en:'New', 'de':'Neu'}, variant: 'tip' }},
            { label: "Required/Optional Scripts", translations: {'de': 'Erforderliche/Optionale Scripts'},  slug: "grew_plasticsurgeon/required", badge: { text: {en:'New', 'de':'Neu'}, variant: 'tip' }},
            { label: "Install", translations: {'de': 'Installation'},  slug: "grew_plasticsurgeon/install", badge: { text: {en:'New', 'de':'Neu'}, variant: 'tip' }},
            { label: "Config", translations: {'de': 'Config'},  slug: "grew_plasticsurgeon/config", badge: { text: {en:'New', 'de':'Neu'}, variant: 'tip' }},
            //{ label: "Commands / Exports / Events", translations: {'de': 'Befehle / Exports / Events'},  slug: "grew_plasticsurgeon/commands"},
            { label: "License", translations: {'de': 'Lizenz'},  slug: "grew_plasticsurgeon/license", badge: { text: {en:'New', 'de':'Neu'}, variant: 'tip' }},
          ],
        },
      ],
    }),
  ],
});
