import React from "react";
import { Field } from "formik";

// handle file input change
const handleFileInputchange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  // reader.onloadend = () => {
  //   if (e.target.name.endsWith("0")) return setP_img0(reader.result);
  //   if (e.target.name.endsWith("1")) return setP_img1(reader.result);
  //   if (e.target.name.endsWith("2")) return setP_img2(reader.result);
  //   return setP_mainImag(reader.result);
  // };
};

const FieldImage = ({ _id, errors, touched, handleChange, index }) => {
  const condition =
    errors &&
    errors.images &&
    errors.images[index] &&
    errors.images[index]._value &&
    touched &&
    touched.images &&
    touched.images[index] &&
    touched.images[index]._value;

  return (
    <div className="mb-3">
      <label htmlFor="Image" className="form-label">
        Add a product image
      </label>
      <Field
        type="file"
        accept="image/*"
        name={`images.${index}._value`}
        id={_id}
        className={
          condition ? "form-control is-invalid p_img" : "form-control p_img"
        }
        placeholder="choose another image"
        onChange={(e) => {
          handleFileInputchange(e);
          handleChange(e);
        }}
      />
      {condition ? (
        <div className="invalid-feedback">
          <small>{errors.images[index]._value}</small>
        </div>
      ) : null}
    </div>
  );
};

export default FieldImage;
