import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollHelpers from "@/components/ScrollHelpers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "R.K Trading — Pure Water. Smarter Living.",
  description:
    "R.K Trading offers advanced B.Nova water purifiers — RO, UV, UF, Active Copper & Alkaline technology for homes, offices, and commercial spaces in Surat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ScrollHelpers />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}