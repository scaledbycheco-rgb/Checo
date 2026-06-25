import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://checomarketing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Checo Marketing — Brand Scaling Agency",
    template: "%s | Checo Marketing",
  },
  description:
    "Checo Marketing helps ambitious founders and creators scale their brand through sharp positioning, high-converting content, and proven growth systems. 50+ brands scaled. $2M+ in client revenue generated.",
  keywords: [
    "brand scaling agency",
    "freelance marketing agency",
    "brand strategy",
    "content strategy",
    "digital marketing",
    "brand positioning",
    "growth marketing",
    "social media growth",
    "Checo Marketing",
    "brand consultant",
  ],
  authors: [{ name: "Checo Marketing", url: siteUrl }],
  creator: "Checo Marketing",
  publisher: "Checo Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Checo Marketing",
    title: "Checo Marketing — Brand Scaling Agency",
    description:
      "Scale your brand with proven positioning, content strategy, and growth systems. 50+ brands scaled. $2M+ in client revenue generated.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Checo Marketing — Brand Scaling Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checo Marketing — Brand Scaling Agency",
    description:
      "Scale your brand with proven positioning, content strategy, and growth systems. 50+ brands scaled. $2M+ in client revenue generated.",
    images: ["/og-image.png"],
    creator: "@checoscale",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "ycRAP1gcVr-CwE33rq70EH0X6xyykEpacPQ1UgJ2lLY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
