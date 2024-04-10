import type { Metadata } from "next";
import "./globals.css";
import { LocaleSwitcher } from "@/features/LocaleSwitcher";
import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import ToastProvider from "@/shared/ui/ToastProvider";
import { FlashToaster } from "@/features/FlashToaster/FlashToaster";

export const metadata: Metadata = {
  title: "SuperBol 2024",
  description: "SuperBol 2024",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <LocaleSwitcher>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ToastProvider>
              {children}
            </ToastProvider>
            <FlashToaster />
          </NextIntlClientProvider>
        </LocaleSwitcher>
      </body>
    </html>
  );
}
