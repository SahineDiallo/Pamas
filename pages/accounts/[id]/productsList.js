import React from "react";
import Navbar from "../../../Components/Navbar";
import Link from "next/link";

const productsList = () => {
  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="paths d-flex">
          <Link href="/">
            <span className="mr-2 cl-pr">Pamas</span>
          </Link>
          <span className="ml-3">Name </span>
        </div>
        <h1>name</h1>
        {/* <p>
            Re-Inspired Shirts. Storm Creek Eco-Woven Shirts work with your
            whole lifecycle - office to outdoors and everything in between.
            Amazing comfort, stretch, and detail, our woven shirts are a hit.
          </p> */}
      </div>
      <div>productsList</div>
    </>
  );
};

export default productsList;
