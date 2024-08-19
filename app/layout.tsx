import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { Navbar } from "@/components/layout/NavBar";
import { getMessages } from "next-intl/server";
import { nunito } from "@/fonts";
import "@/styles/globals.css";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export const metadata: Metadata = {
  title: "Sleepi",
  description: "Optimize your sleep for better life",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="p-0 m-0 box-border bg-[#20163b] text-white">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <ShootingStars />
          <StarsBackground />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
