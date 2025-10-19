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
  title: "Beek Automotive - BMW & MINI Specialist",
  description: "Wij ademen automotive uitmuntendheid. Onze toewijding aan MINI en BMW is meer dan alleen zakelijk - het is een oproep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <Navbar17 />
        {children}
        <FixedContactButtons />
        <Footer1 />
      </body>
    </html>
  );
}
