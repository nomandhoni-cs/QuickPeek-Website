import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "QuickPeek - Spotlight, PowerToys & Alfred like Search for Your Browser",
  description:
    "QuickPeek brings powerful, efficient, and intuitive search functionality to your browser. Manage tabs, find bookmarks, and search history seamlessly.",
  keywords: [
    "browser extension",
    "search",
    "productivity",
    "tab management",
    "bookmarks",
    "browser history",
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    locale: "en",
    title: "QuickPeek - Spotlight, PowerToys & Alfred like Search for Browsers",
    description:
      "QuickPeek is a powerful Chrome extension for searching tabs, history, bookmarks, and downloaded files.",
    url: "https://quickpeek.vercel.app/",
    type: "website",
    videos: "https://www.youtube.com/watch?v=wszHM7OWOqI",
    images: [
      {
        url: "https://utfs.io/f/93hqarYp4cDdclQbV3SMkT6pOqw0Iv1bCoQNrsReJ4itUMan",
        width: 1920,
        height: 1080,
        alt: "QuickPeek is a powerful Chrome extension for searching tabs, history, bookmarks, and downloaded files.",
      },
    ],
    siteName: "QuickPeek",
  },
  twitter: {
    site: "https://quickpeek.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta
        name="google-site-verification"
        content="_ZvWyaBTcsL0xM4Ia6JfjEGeaWH6OSYJTrIQWCKhj7I"
      />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
