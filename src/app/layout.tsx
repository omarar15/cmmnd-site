import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import logo from "@/app/cmmnd_logo.png";
import { ContentfulProv } from "./context";

export const metadata: Metadata = {
  title: "CMMND",
  description: "CMMND online experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main-container">
          <div className="home-icon">
            <Link href="/">
              <Image src={logo} width={130} alt="CMMND logo" />
            </Link>
          </div>
          <div className="main-nav">
            <div className="sub-nav">
              <TopNav />
            </div>
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
