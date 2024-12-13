import React from "react";
import { Link } from "react-router-dom";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PrimaryButton from "../components/buttons/PrimaryButton";

const productInfoList = [
  "Over 600 categories",
  "Pay per project, not per hour",
  "Access to talent and businesses across the globe",
];

export default function HomePage() {
  return (
    <div className="grid-layout-home">
      <div className="left-section items-center">
        <div className="left-info-section">
          <p className="large-heading text-center">
            Secure Visitor Management for Everyone.
          </p>

          <ul className="space-y-[2rem]">
            {productInfoList.map((item, index) => (
              <div className="flex items-center gap-[0.6rem]" key={index}>
                <CheckRoundedIcon />
                <li key={index} className="medium-heading">
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className={`right-section`}>
        <div className="mob-left-section-home">
          <p className="large-heading text-center">
            Secure Visitor Management for Everyone.
          </p>

          <ul className="space-y-[1rem]">
            {productInfoList.map((item, index) => (
              <div className="flex items-center gap-[0.6rem]" key={index}>
                <CheckRoundedIcon />
                <li key={index} className="medium-heading">
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="right-section-content">
          <p className="xl-heading text-BluePrimary pb-2 border-b-2 border-GreyPrimary/20">
            Choose your role
          </p>
          <Link to={"/login/visitor"}>
            Login
          </Link>
          <div className="selection-btns flex flex-col mt-6 gap-4">
            <PrimaryButton bgColor={"yellow"} href={"/register/visitor"}>
              I'm a Visitor
            </PrimaryButton>
            <PrimaryButton bgColor={"blue"} href={"/register/vendor"}>
              I'm a Vendor
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
