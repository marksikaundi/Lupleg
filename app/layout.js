import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Innovation for a Sustainable Future - Mark Sikaundi",
  description:
    "Join us in shaping the future of technology! Our developer community empowers individuals with the skills, resources, and support needed to tackle challenges, drive innovation, and build a more sustainable future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
         <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5141290108997002"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
