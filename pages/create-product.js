import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Formik, Form, Field, FieldArray } from "formik";
import { getProviders, useSession } from "next-auth/react";
import * as Yup from "yup";
import FieldImage from "../Components/FieldImage";
import SpecFieldInput from "../Components/SpecFieldInput";
import SpecFieldSelect from "../Components/SpecFieldSelect";

const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "The product name should be more than 5 characters!")
    .required("Please enter the name of the product"),
  price: Yup.number("the product price should a positive number")
    .required("Please enter the product price")
    .min(10),
  description: Yup.string().required("Please give the product description"),
  category: Yup.string().required("Please select a category"),
  images: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().trim().required("Please provide the image name"),
        _value: Yup.string().trim().required("Please provide the image value"),
      })
    )
    .min(1, "You should upload at least one image")
    .max(4, "The  max product image is 4"),

  specifications: Yup.mixed().when(["category"], {
    is: (category) => {
      return category === "Computer and Laptop";
    },
    then: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().trim().required("Please provide the image name"),
          _value: Yup.string().trim().required("This field is required"),
        })
      )
      .min(6),
  }),
});
const initialValues = {
  name: "",
  price: "",
  description: "",
  category: "",
  images: [{ name: "p_mainImag", _value: "" }],
  specifications: [
    { name: "processor", _value: "" },
    { name: "battery", _value: "" },
    { name: "ram", _value: "" },
    { name: "system", _value: "" },
    { name: "status", _value: "" },
    { name: "brand", _value: "" },
  ],
};

const selectOptions = {
  status: ["New", "Already used"],
  system: [
    "Windows 7",
    "Windows 8",
    "Windows 10",
    "Windows 11",
    "Lunix",
    "Mac Os",
    "Other",
  ],
  brand: ["Apple Product", "HP", "ACER", "Toshiba", "Other"],
};

const allInputsAndSelects = (divClass) => {
  const div = document.querySelector(`.${divClass}`);
  const inputs = div.getElementsByTagName("input");
  const selects = div.getElementsByTagName("select");
  return Array.prototype.slice
    .call(inputs)
    .concat(Array.prototype.slice.call(selects));
};
const disableAll = (divClass) => {
  const elmts = allInputsAndSelects(divClass);
  elmts.forEach((el) => {
    el.setAttribute("disabled", "");
  });
};
const removeDisable = (divClass) => {
  const elmts = allInputsAndSelects(divClass);
  elmts.forEach((el) => {
    el.removeAttribute("disabled");
  });
};

const addProduct = ({ providers }) => {
  let imageIdx;
  const [showSpecs, setShowSpecs] = useState(false);
  const { data: session } = useSession();
  const subCat = {
    Option1: ["Men", "Women"],
    Option2: ["Computer/Laptop", "phone", "other"],
  };
  const [subCatOptions, setCatOptions] = useState(subCat.Option1);
  const handleCategoryChange = (e) => {
    if (e.target.value === "Clothes" || e.target.value === "Shoes") {
      document.getElementById("subCategory").removeAttribute("disabled");
      setCatOptions(subCat.Option1);
      disableAll("p_specs");
      setShowSpecs(false);
    } else {
      setCatOptions(subCat.Option2);
      document.getElementById("subCategory").removeAttribute("disabled");
      if (e.target.value === "Computer and Laptop") {
        setShowSpecs(true);
        removeDisable("p_specs");
      } else {
        setShowSpecs(false);
        disableAll("p_specs");
      }
    }
    if (e.target.value === "Television" || e.target.value === "Mobile") {
      document.getElementById("subCategory").setAttribute("disabled", "");
    }
  };

  // get the user session id;
  const handleSubmit = async (values) => {
    console.log(values);
    const formdata = new FormData();
    // const fileInputs = document.querySelectorAll(".p_img");
    // fileInputs.forEach((fileInput) => {
    //   console.log(fileInput);
    //   formdata.append(fileInput["name"], fileInput.files[0]);
    // });
    const selectedCat = document.getElementById("category").value;
    const dataSpecs =
      selectedCat === "Computer and Laptop"
        ? {
            processor: document.getElementById("processor").value,
            battery: parseInt(document.getElementById("battery").value),
            status: document.getElementById("status").value,
            system: document.getElementById("system").value,
            ram: parseInt(document.getElementById("ram").value),
            brand: document.getElementById("brand").value,
          }
        : null;
    const subCat =
      selectedCat !== "Mobile" && selectedCat !== "Television"
        ? document.getElementById("subCategory").value
        : "";

    //the product body to send to the backend
    const product_data = {
      name: document.getElementById("name").value.trim(),
      description: document.getElementById("description").value,
      price: parseInt(document.getElementById("price").value),
      category: document.getElementById("category").value,
      color: document.querySelector('input[name="color"]:checked').value,
      specifications: dataSpecs,
      subCategory: subCat,
      user: session.userId,
    };
    formdata.append("data", JSON.stringify(values));
    const config = {
      headers: { "Content-type": "multipart/form-data" },
    };
    const { data } = await axios.post("/api/createProduct", formdata, config);
  };
  return (
    <>
      <div className="container-md">
        <div className="d-flex align-items-md-start mt-3 flex-column flex-md-row">
          <div className="p-md-3 col-md-6 mb-3">
            <div className="bg-white p-md-3 p-2 position-relative">
              <h5>Add a product</h5>
              <Formik
                initialValues={initialValues}
                validationSchema={ProductSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                {({ errors, touched, handleChange, values }) => (
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="category" className="form-label">
                        Select a Category
                      </label>
                      <Field
                        as="select"
                        name="category"
                        className={
                          errors.category && touched.category
                            ? "form-select is-invalid"
                            : "form-select"
                        }
                        id="category"
                        onChange={(e) => {
                          handleCategoryChange(e);
                          handleChange(e);
                        }}
                      >
                        <option value=""> -- </option>
                        <option value="Clothes">Clothes</option>
                        <option value="Computer and Laptop">
                          Computer and Laptop
                        </option>
                        <option value="Shoes">Shoes</option>
                        <option value="Television">Television</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Accessories">Accessories</option>
                      </Field>
                      {errors.category && touched.category ? (
                        <div className="invalid-feedback">
                          <small>{errors.category}</small>
                        </div>
                      ) : null}
                    </div>
                    <div className="subcategories__options">
                      <div className="mb-3">
                        <label htmlFor="subCategory" className="form-label">
                          Select a Subcategory
                        </label>
                        <Field
                          as="select"
                          name="pSubCategory"
                          className="form-select"
                          id="subCategory"
                          aria-label="Default select example"
                        >
                          {subCatOptions.map((opt, optIdx) => (
                            <option key={optIdx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>
                    <div className={showSpecs ? "show_specs" : "d-none"}>
                      <div className="p_specs border p-3 mb-3">
                        <h5 className="border-bottom mb-2">
                          Product specifications
                        </h5>
                        <FieldArray name="specifications">
                          {({ push, remove }) => (
                            <>
                              {values.specifications.map((spec, idx) =>
                                idx <= 2 ? (
                                  <SpecFieldInput
                                    key={idx}
                                    errors={errors}
                                    _id={`${spec.name}`}
                                    name={`${spec.name}`}
                                    touched={touched}
                                    index={idx}
                                    type={idx !== 0 ? "number" : "text"}
                                  />
                                ) : (
                                  <SpecFieldSelect
                                    key={idx}
                                    errors={errors}
                                    _id={`${spec.name}`}
                                    touched={touched}
                                    index={idx}
                                    options={selectOptions[`${spec.name}`]}
                                  ></SpecFieldSelect>
                                )
                              )}
                            </>
                          )}
                        </FieldArray>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Product Name
                      </label>
                      <Field
                        type="text"
                        className={
                          errors.name && touched.name
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="name"
                        name="name"
                        placeholder="Product Name"
                      />
                      {errors.name && touched.name ? (
                        <div className="invalid-feedback">
                          <small>{errors.name}</small>
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">
                        Product Price
                      </label>
                      <Field
                        type="number"
                        min="0"
                        name="price"
                        className={
                          errors.price && touched.price
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="price"
                        placeholder="Product Price"
                      />
                      {errors.price && touched.price ? (
                        <div className="invalid-feedback">
                          <small>{errors.price}</small>
                        </div>
                      ) : null}
                    </div>
                    <label className="d-block mb-2">Product Color</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineCheckbox1"
                        value="white"
                        name="color"
                        defaultChecked="checked"
                      />
                      <label className="form-check-label" htmlFor="white">
                        White
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="black"
                        value="black"
                        name="color"
                      />
                      <label className="form-check-label" htmlFor="black">
                        Black
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="grey"
                        value="grey"
                        name="color"
                      />
                      <label className="form-check-label" htmlFor="grey">
                        Grey
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="other"
                        value="other"
                        name="color"
                      />
                      <label className="form-check-label" htmlFor="other">
                        Other
                      </label>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Product Description
                      </label>
                      <Field
                        className={
                          errors.description && touched.description
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        id="description"
                        name="description"
                        rows="3"
                        as="textarea"
                      />
                      {errors.description && touched.description ? (
                        <div className="invalid-feedback">
                          <small>{errors.description}</small>
                        </div>
                      ) : null}
                    </div>

                    <div className="product-secondaryImages">
                      <FieldArray name="images">
                        {({ push, remove }) => (
                          <>
                            {values.images.map((val, idx) => {
                              imageIdx = idx;
                              return (
                                <div
                                  className="d-flex align-items-center gap-2"
                                  key={idx}
                                >
                                  <FieldImage
                                    _id={val.name}
                                    errors={errors}
                                    touched={touched}
                                    index={idx}
                                    handleChange={handleChange}
                                  />
                                  {idx !== 0 && (
                                    <button
                                      className="btn btn-outline-danger"
                                      onClick={() => remove(`idx`)}
                                      type="button"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </div>
                              );
                            })}
                            {imageIdx <= 2 && (
                              <button
                                className="btn btn-primary my-3"
                                type="button"
                                onClick={() =>
                                  push({ name: `p_img${imageIdx}`, _value: "" })
                                }
                              >
                                add an image
                              </button>
                            )}
                          </>
                        )}
                      </FieldArray>
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        id="addProduct"
                        className="btn btn-outline-success col-12"
                      >
                        Create Product
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="p-md-3 col-md-6 sticky-md-top p_preview">
            <div className="product-overview bg-white p-md-3 p-2 position-relative">
              <h5>Product Preivew</h5>
              <ImagePreview>
                {/* <div className="mainImage">
                  <img src="" alt="" className="w-100 h-100" />
                </div>
                <div className="subImg0">
                  <img src="" alt="" className="w-100 h-100" />
                </div>
                <div className="subImg1">
                  <img src="" alt="" className="w-100 h-100" />
                </div>
                <div className="subImg2">
                  <img src="io\oollo0" alt="" className="w-100 h-100" />
                </div> */}
              </ImagePreview>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default addProduct;

const ImagePreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  grid-template-areas:
    "subImg0 mainImage mainImage mainImage"
    "subImg1 mainImage mainImage mainImage"
    "subImg2 mainImage mainImage mainImage";
  .mainImage {
    height: 250px;

    grid-area: mainImage;
  }
  .subImg0 {
    grid-area: subImg0;
  }
  .subImg2 {
    grid-area: subImg2;
  }
  .subImg1 {
    grid-area: subImg1;
  }
  div {
    border: 1px solid #eaeaea;
  }
`;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
