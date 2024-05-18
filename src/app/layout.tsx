import type { Metadata } from "next";
// import Script from 'next/script'

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "House Cafe",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        {/* <Script src="http://localhost:8097"></Script> */}
      </head>
      <body className={inter.className}>

        {children}

      </body>

    </html>
  );
}
