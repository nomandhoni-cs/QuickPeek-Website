export const siteConfig = {
  name: "QuickPeek",
  description: "QuickPeek is a powerful Chrome extension for searching tabs, history, bookmarks, and downloaded files.",
  url: "https://quickpeek.app",
  ogImage: "https://quickpeek.app/og.png",
  links: {
    github: "https://github.com/nomandhoni-cs/QuickPeek",
    chromeStore: "https://chrome.google.com/webstore/detail/quickpeek",
  },
} as const

export const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/docs", label: "Documentation" },
  { href: "/download", label: "Download" },
] as const