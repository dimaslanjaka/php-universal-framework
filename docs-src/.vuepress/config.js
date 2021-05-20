/**
 * @typedef {import("vuepress-types").SiteConfig}
 */
var config = {
  // Directory where will be generated the HTML files by VuePress
  dest: "docs/",

  // Base URL. Useful for GitHub pages.
  base: "/universal-framework/docs/",

  // Title of your project
  title: "Universal Framework Documentation",

  // Description of your project
  description: "Usages, Tutorials, And Documentation of all php codes in universal framework phpjs",

  // no cache
  cache: false,

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }], // Custom favicon
  ],

  // Plugins config
  plugins: {
    "@vuepress/google-analytics": {
      ga: "UA-58599811-1", // GoogleAnalytics ID (optional. use your own ga)
    },
    "@vuepress/back-to-top": {},
    //"vuepress-plugin-typescript": {},
  },

  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "PHP", link: "/php/" },
      { text: "JS", link: "/js/" },
    ],

    sidebar: {
      "/guide/": [
        // Normal documentation sidebar
        {
          title: "Guide",
          collapsable: true,
          children: [
            // Normal pages
            "",
            "getting-started",
            "configuration",
          ],
        },
      ],

      // Your API documentation sidebar
      // Here is where will be generated your files (`docs/demo/` in this case).
      // This is the directory you configured in your `phpdoc.dist.xml` as target
      // directory (or `-t` option of phpdoc)
      "/php/": [
        {
          title: "PHP API Documentation",
          collapsable: true,
          children: [
            //
            "", // Ref. to the `README.md` file
            "classes", // Ref. to the `classes.md` file
            "interfaces", // Ref. to the `interfaces.md` file
            "traits", // Ref. to the `traits.md` file
            "functions", // Ref. to the `functions.md` file
            "constants", // Ref. to the `constants.md` file
          ],
        },
      ],
      "/": [""],
    },

    // You can ignore the following optional customizations --------------------

    markdown: {
      lineNumbers: false,
      toc: { includeLevel: [1, 2, 3] },
    },

    sidebarDepth: 3,

    lastUpdated: true,

    evergreen: true,

    // Repository configurations
    repo: "dimaslanjaka/universal-framework",
    docsDir: "docs-src",
    editLinks: false,
  },

  // custom webpack configuration
  configureWebpack: {
    resolve: {
      alias: {
        // Aliases
        "@github": "../../docs-src/.vuepress/public",
      },
    },
  },
};
module.exports = config;

//node --max_old_space_size=6096 ./node_modules/vuepress/cli.js dev docs-src
//node --max-old-space-size=4096 ./node_modules/vuepress/cli.js dev docs-src
