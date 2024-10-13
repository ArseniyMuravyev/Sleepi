import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { Navbar } from "@/components/layout/NavBar";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Sleepi",
  description: "Optimize your sleep for better life",
};

export default async function RootLayout({ children }: Readonly<Props>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="p-0 m-0 box-border bg-[#20163b] text-white flex flex-col items-center justify-center">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <ShootingStars />
          <StarsBackground />
          {children}
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
