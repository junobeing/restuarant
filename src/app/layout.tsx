import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Molly Malone's Bordeaux | Irish Pub & Restaurant in Chartrons",
  description:
    "Book a table at Molly Malone's Irish Pub & Restaurant on Quai des Chartrons in Bordeaux for pub classics, terrace drinks, live music and sports nights.",
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
