import React from "react";
import { useState } from "react";
import FormInput from "../../Components/FormInput";
import Navbar from "../../Components/Navbar";
import Link from "next/link";

const login = () => {
  const [values, setValues] = useState({
    phone: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      name: "phone",
      placeholder: "Enter a phone number",
      type: "number",
      label: "Phone Number",
      errorMessage: "Please enter a valid number",
    },
    {
      id: 2,
      name: "password",
      placeholder: "Enter a password",
      type: "password",
      label: "Password",
      pattern: "^[A-Za-z0-9]{8,}$",
      errorMessage: "Password  must be more than 8 characters",
    },
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center flex-column login p-3">
        <form className="w-100" onSubmit={onSubmit}>
          {inputs.map((input) => (
            <FormInput
              {...input}
              value={values[input.name]}
              onChange={onChange}
              key={input.id}
            />
          ))}
          <button className="btn btn-success mt-3">Login</button>
        </form>
        <div className="border-top d-flex align-items-center justify-content-between w-100 p-2 mt-3">
          <div className="text-muted small">Need an account?</div>
          <Link href="/accounts/register">
            <button className="btn-outline-success btn">Register Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default login;
