import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
