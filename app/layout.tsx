import type { Metadata } from "next";
import { Orbitron, Roboto_Slab } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { ReactLenis } from "@/utils/lenis";

import Navbar from "@/components/global/navbar/Navbar";
import Footer from "@/components/global/footer/Footer";
import ScrollHelper from "@/components/global/ScrollHelper";
import Provider from "@/lib/Provider";
import Script from "next/script";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nogatronik",
  description:
    "A place where science, technology, and innovation are invoked to inspired the future.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple_touch_icon.png",
  },
};

/**
 *
 * This component displays the entire current page
 *
 * @returns JSX
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`relative ${orbitron.variable} ${robotoSlab.variable} antialiased`}
        >
          <Script
            strategy="beforeInteractive"
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          ></Script>
          <Provider>
            <Navbar />
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer />
            <ScrollHelper />
          </Provider>
        </body>
      </ReactLenis>
    </html>
  );
}
