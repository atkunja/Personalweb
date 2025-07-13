import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ayushkunjadia.dev'),
  title: "Ayush Kunjadia - Software Engineer Portfolio",
  description: "Passionate software engineer skilled in TypeScript, Python, React, and full-stack development. Explore projects like Manga Animator and CodeCollab.",
  keywords: [
    "Ayush Kunjadia",
    "Software Engineer",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer"
  ],
  authors: [{ name: "Ayush Kunjadia" }],
  creator: "Ayush Kunjadia",
  publisher: "Ayush Kunjadia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ayush Kunjadia - Software Engineer Portfolio",
    description: "Passionate software engineer skilled in TypeScript, Python, React, and full-stack development. Explore projects like Manga Animator and CodeCollab.",
    url: "https://ayushkunjadia.dev",
    siteName: "Ayush Kunjadia Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Kunjadia - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kunjadia - Software Engineer Portfolio",
    description: "Passionate software engineer skilled in TypeScript, Python, React, and full-stack development.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://ayushkunjadia.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111827" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
