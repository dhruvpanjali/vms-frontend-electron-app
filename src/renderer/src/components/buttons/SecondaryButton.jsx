import React from "react";
import { Link } from "react-router-dom";

export default function SecondaryButton({
  children,
  bgColor,
  border,
  textSize,
  ...props
}) {
  return (
    <Link to={props.href} className="w-fit">
      <button
        className={`py-2 w-fit form-btn-gap ${
          textSize === "big" ? "text-[1.25rem]" : "text-[1rem]"
        } font-bold ${bgColor ? "text-Grey3" : "text-BluePrimary"} ${
          bgColor === "blue"
            ? "bg-BluePrimary hover:bg-BluePrimary/80 active:bg-BluePrimaryDark"
            : bgColor === "yellow"
            ? "bg-YellowPrimary hover:bg-YellowPrimary/80 active:bg-YellowPrimaryDark"
            : ""
        } ${border ? "border-2 border-BluePrimary" : ""}`}
      >
        {children}
      </button>
    </Link>
  );
}
