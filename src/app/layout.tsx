import type { Metadata } from "next";
import "./globals.css";

const previewImage =
  "https://lemap-bordeaux.com/wp-content/uploads/2017/02/molly-malones-bordeaux-1.jpg";

export const metadata: Metadata = {
  title: "Molly Malone's Bordeaux | Irish Pub & Restaurant in Chartrons",
  description:
    "Book a table at Molly Malone's Irish Pub & Restaurant on Quai des Chartrons in Bordeaux for pub classics, terrace drinks, live music and sports nights.",
  openGraph: {
    title: "Molly Malone's Bordeaux | Irish Pub & Restaurant in Chartrons",
    description:
      "Irish pub on Quai des Chartrons with terrace drinks, pub classics, live music, sports nights and group reservations.",
    type: "website",
    locale: "en_GB",
    siteName: "Molly Malone's Bordeaux",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Molly Malone's Irish Pub & Restaurant in Bordeaux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Molly Malone's Bordeaux",
    description:
      "Terrace drinks, pub classics, live music and sports nights in Chartrons.",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
