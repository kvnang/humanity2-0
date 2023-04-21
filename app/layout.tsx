import { Montserrat, Catamaran } from "next/font/google";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { defaultMetadata } from "@/lib/metadata";
import { Toaster } from "@/components/Toaster";
import { Analytics } from "@vercel/analytics/react";
import { Turnstile } from "@/components/Turnstile";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-catamaran",
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${catamaran.variable}`}>
      <head />
      <body className="antialiased font-sans text-base text-body font-medium">
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Toaster
          toastOptions={{
            duration: 5000,
          }}
        />
        <Analytics />
        <Turnstile />
      </body>
    </html>
  );
}
