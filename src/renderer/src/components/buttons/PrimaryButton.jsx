import React from "react";
import { Link } from "react-router-dom";

export default function PrimaryButton({ children, bgColor, ...props }) {
  return (
    <Link to={props.href}>
      <button
        className={`text-[1.25rem] w-full font-bold text-Grey3 py-6 px-4 rounded-md ${
          bgColor === "blue"
            ? "bg-BluePrimary hover:bg-BluePrimary/80 active:bg-BluePrimaryDark"
            : bgColor === "yellow"
            ? "bg-YellowPrimary hover:bg-YellowPrimary/80 active:bg-YellowPrimaryDark"
            : ""
        }`}
      >
        {children}
      </button>
    </Link>
  );
}
