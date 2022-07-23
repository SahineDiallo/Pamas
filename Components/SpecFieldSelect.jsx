import React from "react";
import { Field } from "formik";

const SpecFieldSelect = ({ errors, _id, touched, options, index }) => {
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
        type="text"
        as="select"
        name={`specifications.${index}._value`}
        id={_id}
        className={condition ? "form-select is-invalid" : "form-select"}
        placeholder={`enter the ${_id} device`}
      >
        {options.map((option, idx) => (
          <option value={option} key={idx}>
            {option}
          </option>
        ))}
      </Field>
      {condition ? (
        <div className="invalid-feedback">
          <small>{errors.specifications[index]._value}</small>
        </div>
      ) : null}
    </div>
  );
};

export default SpecFieldSelect;
