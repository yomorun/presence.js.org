const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  redirects: () => {
    return [
      {
        source: "/interface",
        destination: "/interface/presence",
        statusCode: 301,
      },
      {
        source: "/prscd",
        destination: "/prscd/introduction",
        statusCode: 301,
      },
      {
        source: "/examples",
        destination: "/examples/basic",
        statusCode: 302,
      },
    ];
  },
  reactStrictMode: false,
});
