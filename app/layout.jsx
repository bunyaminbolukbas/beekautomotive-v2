import "./globals.css";
import { Navbar17 } from "@/components/sections/navbar-17";
import { Footer1 } from "@/components/sections/footer-01";
import { FixedContactButtons } from "@/components/sections/fixed-contact-buttons";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Beek Automotive - Premium Occasions",
  description: "Bij Beek Automotive vind je handgeselecteerde premium occasions van de hoogste kwaliteit. Persoonlijke service, transparantie en expertise staan bij ons centraal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <Navbar17 />
        <main>
          {children}
        </main>
        <FixedContactButtons />
        <Footer1 />
      </body>
    </html>
  );
}
