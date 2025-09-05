import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AG Health Pro | Digital Health Platform",
  description:
    "Modern healthcare technology platform for clinics and patients: scheduling, telehealth, and analytics.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "AG Health Pro",
    description:
      "Modern healthcare technology platform for clinics and patients: scheduling, telehealth, and analytics.",
    url: "https://example.com",
    siteName: "AG Health Pro",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "AG Health Pro",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-brand focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
