import type { Metadata, Viewport } from "next";
import "./globals.css";
import PWARegister from "@/components/PWARegister";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#6d28d9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "The Future of AI Is Dead | AiAscended",
  description:
    "Exposing the Myth, the Hype, and the Buzzwords. A practical guide for CEOs, managers, and business owners on what AI can—and cannot—do, and how real systems outperform the hype.",
  keywords: [
    "AI book", "artificial intelligence", "machine learning", "business automation",
    "CEO guide", "AI strategy", "AiAscended", "AscendStack", "hybrid AI",
  ],
  authors: [{ name: "AiAscended Technologies", url: "https://aiascended.com" }],
  creator: "AiAscended Technologies",
  publisher: "AscendStack Systems",
  metadataBase: new URL("https://thefutureofaiisdead.com"),
  openGraph: {
    type: "book",
    title: "The Future of AI Is Dead",
    description: "Exposing the Myth, the Hype, and the Buzzwords. A practical CEO guide.",
    siteName: "AiAscended",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Future of AI Is Dead",
    description: "Exposing the Myth, the Hype, and the Buzzwords.",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AI Is Dead",
  },
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col" style={{ paddingTop: '56px' }}>
          {children}
        </main>
        <Footer />
        <PWARegister />
      </body>
    </html>
  );
}
