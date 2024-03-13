import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "../../../styles/globals.css";

import { Providers } from "./providers";
import clsx from "clsx";
import Head from "next/head";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";

export const playfair = Playfair({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riad Oueida - Official Website",
  description:
    "Riad Oueida is a visual artist specializing in painting, sculpture, engraving, ceramics, tapestry, mosaic and restoration.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${playfair.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="relative">
              <div>
                <Navbar />
              </div>
              <div
                className="surfacePrimary h-full
            max-w-[1440px]  mx-auto
            "
              >
                {children}
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
