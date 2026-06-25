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

const siteUrl = "https://jncmechanicalservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JNC Mechanical Services — Expert HVAC in Southern California",
    template: "%s | JNC Mechanical Services",
  },
  description:
    "JNC Mechanical Services — Southern California's #1 HVAC company. Expert AC installation, heating, ventilation & 24/7 emergency repairs. Licensed & insured. Free estimates. Serving Long Beach, Torrance, Carson & more.",
  keywords: [
    "HVAC Long Beach",
    "AC repair Southern California",
    "air conditioning installation",
    "furnace repair",
    "HVAC emergency service",
    "JNC Mechanical Services",
    "heating and cooling",
    "AC replacement",
    "HVAC maintenance",
    "commercial HVAC",
    "Torrance HVAC",
    "Carson AC repair",
  ],
  authors: [{ name: "JNC Mechanical Services", url: siteUrl }],
  creator: "JNC Mechanical Services",
  publisher: "JNC Mechanical Services",
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
    siteName: "JNC Mechanical Services",
    title: "JNC Mechanical Services — Expert HVAC in Southern California",
    description:
      "Expert HVAC services for homes and businesses. AC installation, heating, emergency repairs & more. Licensed, insured, 500+ 5-star reviews.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JNC Mechanical Services — Expert HVAC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JNC Mechanical Services — Expert HVAC in Southern California",
    description:
      "Expert HVAC services. AC installation, heating, emergency repairs. Licensed & insured. 500+ 5-star reviews.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
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
