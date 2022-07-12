import { useState } from "react";
import FormInput from "../../Components/FormInput";
import Navbar from "../../Components/Navbar";
import Link from "next/link";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    "phone number": "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Enter your username",
      type: "text",
      label: "Username",
      pattern: "^[A-Za-z0-9]{8,}$",
      errorMessage:
        "Username should be more than 8 Characters without spaces or special characters",
    },
    {
      id: 2,
      name: "email",
      placeholder: "Enter your email",
      type: "email",
      label: "Email",
      pattern: `^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$`,
      errorMessage: "Please enter a valid email address",
    },
    {
      id: 3,
      name: "phone number",
      placeholder: "Enter a phone number",
      type: "number",
      label: "Phone Number",
      pattern: "^[A-Za-z0-9]{8,}$",
      errorMessage: "Please enter a valid number",
    },
    {
      id: 4,
      name: "password",
      placeholder: "Enter a password",
      type: "password",
      label: "Password",
      pattern: "^[A-Za-z0-9]{8,}$",
      errorMessage: "Password  must be more than 8 characters",
    },
    {
      id: 5,
      name: "confirm password",
      placeholder: "Re-enter your password",
      type: "password",
      pattern: values.password,
      label: "Confirm Password",
      errorMessage: "Passwords must match",
    },
  ];
  const onSubmit = (e) => {
    e.preventDefault();
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
          <button className="btn btn-success mt-3">Register Now</button>
        </form>
        <div className="border-top d-flex align-items-center justify-content-between w-100 p-2 mt-3">
          <div className="text-muted small">Already have an account</div>
          <Link href="/accounts/login">
            <button className="btn-outline-success btn">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
