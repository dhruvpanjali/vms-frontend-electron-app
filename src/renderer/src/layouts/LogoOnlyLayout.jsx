import React from "react";
import { Link, Outlet } from "react-router-dom";
// const companyLogo = "/companyLogo.png";

export default function LogoOnlyLayout() {
  return (
    <div>
      <Link to={"/"} className="absolute top-5 left-7">
      Home
        {/* <img src={companyLogo} className="nav-logo"></img> */}
      </Link>
      <Outlet />
    </div>
  );
}
