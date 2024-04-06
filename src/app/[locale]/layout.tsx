import type { Metadata } from "next";
import "./globals.css";
import {LocaleSwitcher} from "@/features/LocaleSwitcher";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "SuperBol 2024",
  description: "SuperBol 2024",
};

export default function RootLayout({
  children,
  params: {locale},
}: Readonly<{
  children: ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={locale}>
      <body>
        <LocaleSwitcher>
          {children}
        </LocaleSwitcher>
      </body>
    </html>
  );
}
