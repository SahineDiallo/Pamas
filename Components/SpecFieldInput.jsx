import React from "react";
import { Field } from "formik";

const SpecFieldInput = ({ _id, errors, touched, type, index }) => {
  const condition =
    errors &&
    errors.specifications &&
    errors.specifications[index] &&
    errors.specifications[index]._value &&
    touched &&
    touched.specifications &&
    touched.specifications[index] &&
    touched.specifications[index]._value;

  return (
    <div className="mb-3">
      <label htmlFor={_id} className="form-label">
        {`${_id}`.toLocaleUpperCase()}
      </label>
      <Field
        type={`${type}`}
        name={`specifications.${index}._value`}
        id={_id}
        className={condition ? "form-control is-invalid" : "form-control"}
        placeholder={`Please enter the ${_id} device`}
      />
      {condition ? (
        <div className="invalid-feedback">
          <small>{errors.specifications[index]._value}</small>
        </div>
      ) : null}
    </div>
  );
};

export default SpecFieldInput;
