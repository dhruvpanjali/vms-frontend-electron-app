import React from "react";
// import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
// import Footer from "../components/Footer";


export default function BlankLayout() {
  return (
    // <div className="flex flex-col min-h-screen">
    //   <Navbar />
    //   <div className="flex-1">
    //     <Outlet />
    //   </div>
    //   <Footer />
    // </div>
    <div>
      <Outlet />
    </div>
  );
}