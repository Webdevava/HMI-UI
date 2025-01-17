import { Inter } from "next/font/google";
import "./globals.css";
import Statusbar from "@/components/Statusbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="max-h-[480px] w-[800px] overflow-hidden">
          <Statusbar />
          <div className="flex h-full">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <div className="flex-1 ">{children}</div>
       
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
