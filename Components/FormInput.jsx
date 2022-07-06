import React from "react";

const FormInput = (props) => {
  return (
    <div className="form-input">
      <input type="text" {...props} />
    </div>
  );
};

export default FormInput;
