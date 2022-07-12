import React, { useState } from "react";

const FormInput = (props) => {
  const [ focused, setFocused ] = useState(false);
  const  { label, id, onChange, errorMessage, ...rest } = props;
  const handleFocus = () => {
    setFocused(true);
  }
  return (
    <div className="form-group re-input mb-2">
      <label htmlFor={id} className="form-label mb-1">
        {label}
      </label>
      <input {...rest} className="input-sm form-control" onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <span className="text-danger text-small">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
