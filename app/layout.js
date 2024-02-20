import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lupleg - up your Tech career Journey",
  description: "Young African developers, launch with #LupLeg!  Master #OpenSource with projects & expert mentors. ‍ Build your skills, join the community, code your future!  #AfricaTech #TechCareers"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
