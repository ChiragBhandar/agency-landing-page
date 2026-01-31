import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Use font-display: swap for better performance
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['Courier New', 'monospace'],
});

export const metadata = {
  title: "Code&Canvas | Modern Web Development Agency",
  description: "A Web development agency specializing in modern web applications. We build fast, scalable, and beautiful websites.",
  keywords: ["web development", "web design", "agency", "modern websites", "react", "next.js"],
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL('https://codeandcanvas.com'),
  openGraph: {
    title: "Code&Canvas",
    description: "Modern Web Development Agency",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
