import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dune 971 | Luxury Real Estate",
  description: "Curating exceptional real estate opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} ${lora.variable} antialiased font-body bg-cream text-dark`}
      >
        <Header />
        <main className="min-h-screen pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
