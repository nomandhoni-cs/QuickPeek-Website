import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickPeek - Spotlight and Alfred like Search for Browsers",
  description:
    "QuickPeek is a powerful Chrome extension for searching tabs, history, bookmarks, and downloaded files.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    locale: "en",
    title: "QuickPeek - Spotlight and Alfred like Search for Browsers",
    description:
      "QuickPeek is a powerful Chrome extension for searching tabs, history, bookmarks, and downloaded files.",
    url: "https://quickpeek.vercel.app/",
    type: "website",
    videos: "https://www.youtube.com/watch?v=wszHM7OWOqI",
    images: [
      {
        url: "https://utfs.io/f/93hqarYp4cDdclyWhETMkT6pOqw0Iv1bCoQNrsReJ4itUMan",
        width: 1280,
        height: 800,
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
