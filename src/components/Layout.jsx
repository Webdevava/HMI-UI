import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Statusbar from "./Statusbar";

const Layout = ({ children }) => (
  <div className="max-h-[480px]">
    <Statusbar />
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1  bg-white">{children}</div>
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
