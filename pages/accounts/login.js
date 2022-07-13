import React from "react";
import { useState } from "react";
import FormInput from "../../Components/FormInput";
import Navbar from "../../Components/Navbar";
import { getProviders } from "next-auth/react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const login = ({ providers }) => {
  const { data: session } = useSession();
  console.log("session data", session);
  if (session) {
    console.log(session);
    console.log("ok there is a session");
  }
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
        <div className="d-grid gap-2">
          {Object.values(providers).map((provider) => (
            <button
              className="btn btn-primary btn-outline"
              type="button"
              key={provider.id}
              onClick={() => {
                signIn(provider.id, {
                  callbackUrl: `${window.location.origin}`,
                });
              }}
            >
              {provider.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default login;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
