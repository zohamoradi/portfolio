import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoha Moradi — Frontend Developer",
  description:
    "Personal site & portfolio of Zoha Moradi, a frontend developer specialized in React, Next.js, and intelligent software systems.",
  metadataBase: new URL("https://example.com"),
};
const ThemeScript = () => (
  <script
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: `(function(){
        try{
          const ls = localStorage.getItem('theme');
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const theme = ls ?? (systemDark ? 'dark' : 'light');
          if(theme === 'dark'){ document.documentElement.classList.add('dark'); }
          document.documentElement.style.colorScheme = theme;
        }catch(e){}
      })();`,
    }}
  />
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeScript />
        <div className="relative min-h-dvh">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <Header />
          <main className="container-prose py-8">{children}</main>
          <Footer />
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
