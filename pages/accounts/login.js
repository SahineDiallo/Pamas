import { useState } from "react";
import FormInput from "../../Components/FormInput";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="d-flex align-items-center justify-content-center login">
      <form className="">
        <FormInput placeholder="placeholder" />
        <FormInput />
        <FormInput />
        <FormInput />
      </form>
    </div>
  );
};

export default Login;
