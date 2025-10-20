import "./globals.css";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "@/components/Navbar";
import NavBottom from "@/components/NavBottom";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tex Edge Automation Ltd",
  description:
    "Tex Edge Automation Ltd provides advanced sewing automation solutions to help garment factories enhance productivity, quality, and efficiency.",
  keywords: [
    "Tex Edge Automation",
    "Sewing Automation",
    "Industrial Sewing Machines",
    "Garment Factory Solutions",
    "Textile Automation",
    "Apparel Manufacturing",
    "Automation Systems",
    "Template Machines",
    "Sewing Technology Bangladesh",
    "Garment Production Efficiency"
  ],
  icons: {
    icon: "/src/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <head>
        {/* Favicon */}
        <link rel="icon" href="/src/favicon.ico" type="image/x-icon" />

        {/* Optional: Preload logo if you use it in Navbar/Header */}
        <link rel="preload" as="image" href="/src/favicon.ico" />
      </head>      </head>
      <body className="bg-black min-h-screen">

          {/* <Header /> */}
          <NavBottom></NavBottom>

          <Navbar></Navbar>
          <main className="w-full">{children}</main>
          <Footer></Footer>

      </body>
    </html>
  );
}
