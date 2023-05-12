import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Logo from "./components/allegro";
// import { Discord, Github } from "./components/social";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  sidebar: {
    defaultMenuCollapseLevel: 3,
  },
  project: {
    link: "https://github.com/yomorun/presencejs",
  },
  docsRepositoryBase: "https://github.com/yomorun/presence.js.org/tree/gh-pages",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Presencejs",
    };
  },
  toc: {
    float: true,
    title: "On this page",
  },
  search: {
    placeholder: "Search documentation ...",
  },
  editLink: {
    text: "edit this page",
  },
  feedback: {
    content: "feedback",
  },
  chat: {
    link: 'https://discord.gg/Ugam5qAvHy',
  },
  navbar: {
    // extraContent: (
    //   <>
    //     <Github />
    //     <Discord />
    //   </>
    // ),
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  faviconGlyph: "🌎",
  logo: () => {
    return (
      <>
        <Logo height={24} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title="Allegro Cloud"
        >
          Presencejs
        </span>
      </>
    );
  },
  head: () => {
    const { route } = useRouter();
    const { frontMatter, title } = useConfig();
    const titleSuffix = "Tutorials";
    const description = "Edge Infra for realtime web applications with Geo-distributed architecture"

    const imageUrl = new URL("https://presence-doc.yomo.run/api/og"); // TODO

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title || titleSuffix);
    }

    const ogTitle = title ? `${title} – Presencejs` : `Presencejs: ${titleSuffix}`;
    const ogDescription = frontMatter.description || description;
    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        {/* Favicons, meta */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta httpEquiv="Content-Language" content="en-US" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="SWR" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="msvalidate.01" content="140AFD0B895CB35AF8974E14726A11BC" />
        <meta name="google-site-verification" content="vyCEWFzpKJ1zic0RiOREYpWWFtMKfqfFxcOYK64njrg" />
        <script async src="https://analytics.umami.is/script.js" data-website-id="af578941-ecba-48dc-8935-8935ba8ca0ff"></script>
      </>
    );
  },
  footer: {
    text: () => {
      return (
        <a
          href={`https://allegrocloud.io/?utm_source=presencejs-doc`}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center no-underline text-current font-semibold"
        >
          <span>
            <Logo height={20} />
          </span>
        </a>
      );
    },
  },
};

export default themeConfig;
