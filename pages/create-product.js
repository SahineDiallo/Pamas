import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import axios from "axios";

const allInputsAndSelects = (divClass) => {
  const div = document.querySelector(`.${divClass}`);
  const inputs = div.getElementsByTagName("input");
  console.log(inputs);
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
const addProduct = () => {
  const [p_img0, setP_img0] = useState("");
  const [p_img1, setP_img1] = useState("");
  const [p_img2, setP_img2] = useState("");
  const [p_mainImag, setP_mainImag] = useState("");
  const [showSpecs, setShowSpecs] = useState(false);
  const subCat = {
    Option1: ["Men", "Women"],
    Option2: ["Computer/Laptop", "phone", "other"],
  };
  const [subCatOptions, setCatOptions] = useState(subCat.Option1);
  const handleCategoryChange = (e) => {
    if (e.target.value === "Clothes" || e.target.value === "Shoes") {
      document.getElementById("psub_Category").removeAttribute("disabled");
      setCatOptions(subCat.Option1);
      disableAll("p_specs");
      setShowSpecs(false);
    } else {
      setCatOptions(subCat.Option2);
      document.getElementById("psub_Category").removeAttribute("disabled");
      if (e.target.value === "Computer and Laptop") {
        setShowSpecs(true);
        removeDisable("p_specs");
      } else {
        setShowSpecs(false);
        disableAll("p_specs");
      }
    }
    if (e.target.value === "Television" || e.target.value === "Mobile") {
      document.getElementById("psub_Category").setAttribute("disabled", "");
    }
  };

  // handle file input change
  const handleFileInputchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (e.target.name.endsWith("0")) return setP_img0(reader.result);
      if (e.target.name.endsWith("1")) return setP_img1(reader.result);
      if (e.target.name.endsWith("2")) return setP_img2(reader.result);
      return setP_mainImag(reader.result);
    };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    const fileInputs = document.querySelectorAll(".p_img");
    fileInputs.forEach((fileInput) => {
      formdata.append(fileInput["name"], fileInput.files[0]);
    });
    const selectedCat = document.getElementById("pCategory").value;
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
        ? document.getElementById("psub_Category").value
        : "";
    const product_data = {
      name: document.getElementById("pName").value.trim(),
      description: document.getElementById("pDesc").value,
      price: parseInt(document.getElementById("pPrice").value),
      category: document.getElementById("pCategory").value,
      color: document.querySelector('input[name="color"]:checked').value,
      specifications: dataSpecs,
      subCategory: subCat,
    };
    formdata.append("data", JSON.stringify(product_data));
    const config = {
      headers: { "Content-type": "multipart/form-data" },
    };

    const { data } = await axios.post("/api/createProduct", formdata, config);
    console.log("response", data);
  };
  return (
    <>
      <header className="sticky-top">
        <Navbar />
      </header>
      <div className="container-md">
        <div className="d-flex align-items-md-start mt-3 flex-column flex-md-row">
          <div className="p-md-3 col-md-6 mb-3">
            <div className="bg-white p-md-3 p-2 position-relative">
              <h5>Add a product</h5>
              <form
                method="post"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="pCategory" className="form-label">
                    Select a Category
                  </label>
                  <select
                    className="form-select"
                    id="pCategory"
                    onChange={handleCategoryChange}
                  >
                    <option value="Clothes">Clothes</option>
                    <option value="Computer and Laptop">
                      Computer and Laptop
                    </option>
                    <option value="Shoes">Shoes</option>
                    <option value="Television">Television</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
                <div className="subcategories__options">
                  <div className="mb-3">
                    <label htmlFor="psub_Category" className="form-label">
                      Select a Subcategory
                    </label>
                    <select
                      className="form-select"
                      id="psub_Category"
                      aria-label="Default select example"
                    >
                      {subCatOptions.map((opt, optIdx) => (
                        <option key={optIdx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={showSpecs ? "show_specs" : "d-none"}>
                  <div className="p_specs border p-3 mb-3">
                    <h5 className="border-bottom mb-2">
                      Product specifications
                    </h5>
                    <div className="mb-3 d-flex gap-3 align-items-center">
                      <label htmlFor="pName" className="form-label">
                        Processor:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="processor"
                        placeholder="Computer / Laptop processor"
                      />
                    </div>
                    <div className="mb-3 d-flex gap-3 align-items-center">
                      <label htmlFor="pName" className="form-label">
                        RAM:
                      </label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        id="ram"
                        placeholder="enter the ram in GB"
                      />
                    </div>
                    <div className="mb-3 d-flex gap-3 align-items-center">
                      <label htmlFor="pName" className="form-label">
                        Battery life:
                      </label>
                      <input
                        type="number"
                        min="0"
                        className="form-control"
                        id="battery"
                        placeholder="battery life in hours"
                      />
                    </div>
                    <div className="mb-3 d-flex gap-3 align-items-center">
                      <label htmlFor="pName" className="form-label">
                        Product status:
                      </label>
                      <select className="form-select" id="status">
                        <option value="new">new</option>
                        <option value="already used">Already Used</option>
                      </select>
                    </div>
                    <div className="mb-3 d-flex gap-3 align-items-center">
                      <label htmlFor="pName" className="form-label">
                        Operating System:
                      </label>
                      <select className="form-select" id="system">
                        <option value="win 7">Windows 7</option>
                        <option value="win 8">Windows 8</option>
                        <option value="win 10">Windows 10</option>
                        <option value="win 11">Windows 11</option>
                        <option value="lunix">Lunix</option>
                        <option value="mac os">Mac OS</option>
                      </select>
                    </div>
                    <div className="mb-3 d-flex gap-3 align-items-center">
                      <label htmlFor="pName" className="form-label">
                        Brand:
                      </label>
                      <select className="form-select" id="brand">
                        <option value="apple">APPLE product</option>
                        <option value="hp">HP</option>
                        <option value="acer">ACER</option>
                        <option value="toshiba">TOSHIBA</option>
                        <option value="other">other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="pName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pName"
                    placeholder="Product Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pName" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="pPrice"
                    placeholder="Product Price"
                  />
                </div>
                <label className="d-block mb-2">Product Color</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox1"
                    value="white"
                    name="color"
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
                  <label htmlFor="pDesc" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    id="pDesc"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="pMainImage" className="form-label">
                    Select a Main Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="p_mainImag"
                    className="form-control p_img"
                    id="pMainImage"
                    placeholder="Product Main Image"
                    onChange={handleFileInputchange}
                  />
                </div>

                <div className="product-secondaryImages">
                  <div className="mb-3">
                    <label htmlFor="Image" className="form-label">
                      Add other images
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      name="p_img0"
                      className="form-control p_img"
                      placeholder="choose another image"
                      onChange={handleFileInputchange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="file"
                      accept="image/*"
                      name="p_img1"
                      className="form-control p_img"
                      placeholder="choose another image"
                      onChange={handleFileInputchange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="file"
                      accept="image/*"
                      name="p_img2"
                      className="form-control p_img"
                      placeholder="choose another image"
                      onChange={handleFileInputchange}
                    />
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    id="addProduct"
                    className="btn btn-outline-success col-12 btn-sm"
                  >
                    Create Product
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="p-md-3 col-md-6 sticky-md-top p_preview">
            <div className="product-overview bg-white p-md-3 p-2 position-relative">
              <h5>Product Preivew</h5>
              <ImagePreview>
                <div className="mainImage">
                  <img src={p_mainImag} alt="" className="w-100 h-100" />
                </div>
                <div className="subImg0">
                  <img src={p_img0} alt="" className="w-100 h-100" />
                </div>
                <div className="subImg1">
                  <img src={p_img1} alt="" className="w-100 h-100" />
                </div>
                <div className="subImg2">
                  <img src={p_img2} alt="" className="w-100 h-100" />
                </div>
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
