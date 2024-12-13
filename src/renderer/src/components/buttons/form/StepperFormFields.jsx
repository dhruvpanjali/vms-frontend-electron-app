import { Controller } from "react-hook-form";
import { HookForm } from "../../../pages/RegisterPage";
import { useContext, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select, Space, Upload } from "antd";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import { UploadOutlined } from '@ant-design/icons';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PublicIcon from "@mui/icons-material/Public";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import "./antDForm.css";
import WebcamCapture from "../../webcam/WebcamCapture";

const formIconDefault = { opacity: "0.5" };
const formIconPassword = { opacity: "0.5", cursor: "pointer" };

const FormOneFields = () => {
  const HookFormValues = useContext(HookForm);
  const [fileList, setFileList] = useState([]); // For managing uploaded images


  const options = [
    { value: "indian", label: "Indian" },
    // { value: "strawberry", label: "Strawberry" },
    // { value: "vanilla", label: "Vanilla" },
  ];

  const prefixSelector = (
    <Controller
      name="countryCode"
      control={HookFormValues.control}
      render={({ field, fieldState }) => (
        <Form.Item className="mb-0">
          <Select {...field} defaultValue={"+91"} style={{ width: 90 }}>
            <Select.Option value="+91">+91</Select.Option>
            <Select.Option value="+24">+24</Select.Option>
          </Select>
        </Form.Item>
      )}
    />
  );

  return (
    <>
      <WebcamCapture file={fileList} setfile={setFileList}/>

      {/* <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size="large"
      >
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
        </Upload>
      </Space> */}

      <Controller
        name="fullName"
        control={HookFormValues.control}
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
              prefix={<PersonOutlineOutlinedIcon sx={formIconDefault} />}
              placeholder="Full Name"
            />
          </Form.Item>
        )}
      />
      <Controller
        name="phone"
        control={HookFormValues.control}
        rules={{
          required: "Phone number is required",
          minLength: {
            value: 10,
            message: "Contact number must be at least 10 digits",
          },
          maxLength: {
            value: 11,
            message: "Contact number must be at most 11 digits",
          },
          pattern: {
            value: /^[0-9]{10,11}$/,
            message: "Only numbers are allowed, no symbols like + or -",
          },
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            className="mb-0"
            validateStatus={fieldState?.error ? "error" : ""}
            help={fieldState?.error?.message || null}
          >
            <Input
              {...field}
              type="tel"
              // value={contactValue}
              // onChange={handleContactChange}
              addonBefore={prefixSelector}
              placeholder={"Mobile No."}
              prefix={<LocalPhoneOutlinedIcon sx={formIconDefault} />}
            />
          </Form.Item>
        )}
      />
      <Controller
        name="nationality"
        control={HookFormValues.control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            className="mb-0"
            validateStatus={fieldState?.error ? "error" : ""}
            help={fieldState?.error ? "Nationality is required" : null}
          >
            <Select
              {...field}
              placeholder="Nationality"
              prefix={<PublicIcon sx={formIconDefault} className="me-2" />}
            >
              {options.map((option, index) => (
                <Select.Option key={index} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        )}
      />
      <Controller
        name="email"
        control={HookFormValues.control}
        rules={{
          required: false,
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
              placeholder="Email (optional)"
            />
          </Form.Item>
        )}
      />
      <Controller
        name="consent"
        control={HookFormValues.control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState }) => (
          <Form.Item
            className="mb-0"
            validateStatus={fieldState?.error ? "error" : ""}
            // help={fieldState?.error ? "email is required" : null}
          >
            <Checkbox {...field} checked={field.value}>
              By registering I agree to the Helios Tech Solutions{" "}
              <a href="" className="text-link">
                Terms of Service
              </a>
            </Checkbox>
          </Form.Item>
        )}
      />
    </>
  );
};

export { FormOneFields };
