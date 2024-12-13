import React from "react";

const FormSubmitBtn = ({ children, bgColor, ...props }) => {
  return (
    <button
      type="submit"
      {...props}
      className={`form-submit-btn ${
        bgColor === "blue"
          ? "bg-BluePrimary hover:bg-BluePrimary/80 active:bg-BluePrimaryDark"
          : bgColor === "yellow"
          ? "bg-YellowPrimary hover:bg-YellowPrimary/80 active:bg-YellowPrimaryDark"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

const FormPreviousBtn = ({ children, disabled, ...props }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={`form-prev-btn form-btn-gap ${
        disabled
          ? "opacity-50"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

const FormNextBtn = ({ children, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      type="button"
      {...props}
      className={`form-next-btn form-btn-gap ${
        disabled
          ? "opacity-50"
          : "bg-BluePrimary hover:bg-BluePrimary/80 active:bg-BluePrimaryDark"
      }`}
    >
      {children}
    </button>
  );
};

export { FormSubmitBtn, FormPreviousBtn, FormNextBtn };
