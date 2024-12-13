import React, { useEffect } from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { FormSubmitBtn } from "../components/buttons/form/FormBtns";
import { useForm, Controller } from "react-hook-form";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Form, Input } from "antd";
import "../components/buttons/form/antDform.css"

import { Link, useParams } from "react-router-dom";
const formIconDefault = { opacity: "0.5" };
const formIconPassword = { opacity: "0.5", cursor: "pointer" };

export default function LoginPage() {
  const { role } = useParams();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="mt-[80px]">
      <div className="w-full max-w-[440px] mx-auto space-y-6 p-8 sm:p-0">

        <div className="form-heading space-y-2 pb-4 border-b-2 border-GreyPrimary/20">
          <p className="text-[1.6rem] sm:text-[1.8rem] xl:text-[2rem] font-semibold text-BluePrimary">
            <span className="text-YellowPrimaryDark">
              {location.pathname === "/login/visitor"
                ? "Visitor "
                : location.pathname === "/login/vendor"
                ? "Vendor "
                : "User "}
            </span>
            Log in
          </p>
          <p>
            New?{" "}
            <a href="">
              <Link
                to={`/register/${role}`}
                className="text-BluePrimary font-semibold"
              >
                Register as a
                {location.pathname === "/login/visitor"
                  ? " Visitor"
                  : location.pathname === "/login/vendor"
                  ? " Vendor"
                  : ""}
              </Link>
            </a>
          </p>
        </div>

        <div className="space-y-8 pb-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-y-4"
            autoComplete="off"
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState }) => (
                <Form.Item
                  className="mb-0"
                  validateStatus={fieldState?.error ? "error" : ""}
                  help={fieldState?.error ? "email is required" : null}
                >
                  <Input
                    {...field}
                    prefix={<EmailOutlinedIcon sx={formIconDefault} />}
                    placeholder="Email"
                  />
                </Form.Item>
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field, fieldState }) => (
                <Form.Item
                  className="mb-0"
                  validateStatus={fieldState?.error ? "error" : ""}
                  help={fieldState?.error ? "Password is required" : null}
                >
                  <Input.Password
                    {...field}
                    prefix={<LockOutlinedIcon sx={formIconDefault} />}
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? (
                        <VisibilityIcon sx={formIconPassword} />
                      ) : (
                        <VisibilityOffIcon sx={formIconPassword} />
                      )
                    }
                  />
                </Form.Item>
              )}
            />

            <FormSubmitBtn bgColor={"blue"}>Sign in</FormSubmitBtn>
          </form>

          <p className="text-BluePrimary/60">
            By registering you agree to the Helios Tech Solutions{" "}
            <a href="" className="text-link">
              Terms of Service
            </a>{" "}
            and to occasionally receive emails from us. Please read our{" "}
            <a href="" className="text-link">
              Privacy Policy
            </a>{" "}
            to learn how we use your personal data.
          </p>
        </div>
      </div>
    </div>
  );
}
