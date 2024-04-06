import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SuperBol 2024",
  description: "SuperBol 2024",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
