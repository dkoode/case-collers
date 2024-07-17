import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/foooter";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
});

export const metadata: Metadata = {
  title: "Collers",
  description: "Collectible Sneakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
