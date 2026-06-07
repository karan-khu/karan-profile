import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Karan Khumthong",
  tagline: "Software Developer · Full-Stack · Bangkok",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://karan-khu.online",
  baseUrl: "/",

  organizationName: "karan-khu",
  projectName: "karan-profile",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
    localeConfigs: {
      en: { label: "English" },
      th: { label: "ภาษาไทย" },
    },
  },

  markdown: {
    format: "detect",
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "profile",
        path: "docs-profile",
        routeBasePath: "docs",
        sidebarPath: "./sidebars-profile.ts",
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "about",
          editUrl: "https://github.com/karan-khu/karan-profile/tree/main/",
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Activity log",
          blogDescription: "Talks, training, meetings และกิจกรรมต่าง ๆ",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/karan-khu/karan-profile/tree/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Karan",
      logo: {
        alt: "Karan Khumthong",
        src: "img/profile.jpg",
        style: { borderRadius: "50%" },
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "profileSidebar",
          position: "left",
          label: "About",
        },
        {
          to: "/resume",
          label: "Resume",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "docsProfileSidebar",
          docsPluginId: "profile",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Activity", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/karan-khu",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Profile",
          items: [
            { label: "About", to: "/about/intro" },
            { label: "Resume", to: "/resume" },
            { label: "Contact", to: "/about/contact" },
          ],
        },
        {
          title: "Deep Dive",
          items: [
            { label: "Skills", to: "/docs/skills/frontend" },
            { label: "Experience", to: "/docs/experience/dplus-zettasoft" },
            { label: "Teaching", to: "/docs/teaching/" },
          ],
        },
        {
          title: "Activity",
          items: [
            { label: "Activity log", to: "/blog" },
            { label: "Tags", to: "/blog/tags" },
          ],
        },
        {
          title: "Elsewhere",
          items: [{ label: "GitHub", href: "https://github.com/karan-khu" }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Karan Khumthong. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
