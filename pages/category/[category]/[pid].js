import axios from "axios";
import React from "react";
import Link from "next/link";
import Navbar from "../../../Components/Navbar";
import { Star } from "@styled-icons/feather/Star";
import SingleProduct from "../../../Components/Products/SingleProduct";

const productDetails = ({ product, similar }) => {
  const ratings = Math.floor(Math.random() * 5 + 1);
  return (
    <div>
      <Navbar />
      <div className="product__container container-lg mt-2">
        <div className="d-flex align-items-start gap-3">
          <div className="product__image p-3 bg-white col-sm-5 sticky-top">
            <div className="main__image">
              <img src={product.images[0]} alt="" className="border" />
            </div>
            {similar.slice(0, 4).map((p, i) => (
              <div key={p.id} className={`p__img${i}`}>
                <img src={p.images[0]} alt="" className="" />
              </div>
            ))}
          </div>
          <div className="details p-3 bg-white col-sm-7">
            <div className="paths d-flex mb-2">
              <Link href="/">
                <span className="mr-2 cl-pr">Pamas</span>
              </Link>
              <Link
                href={`/categories/${product.category.name.toLowerCase()}/`}
              >
                <span className="mr-2 cl-pr">{product.category.name}</span>
              </Link>
              <span className="ml-3">{product.title} </span>
            </div>
            <p className="prod fw-bold">{product.description}</p>
            <div className="d-flex align-items-center gap-2">
              {Array(ratings)
                .fill()
                .map((_, i) => (
                  <p key={i} className="ratings mb-1">
                    <Star className="star" />
                  </p>
                ))}
            </div>
            <small className="d-block" style={{ color: "#004f22" }}>
              price
            </small>
            <p>
              <span className="fw-bolder h5">{product.price}</span>
              <span>MRU </span>
            </p>
            <span className="d-block">{product.title}</span>
            <span className="bold h4">Seller: </span>
            <div class="spec__detials"></div>
            <p className="spec_details">something for each category</p>
            <span className="bold h4 my-2 pb-2 border-bottom-1">
              You might also like{" "}
            </span>
            <div className=" mx-0 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 p-2">
              {similar.map((product, i) => (
                <SingleProduct product={product} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;

export const getServerSideProps = async (context) => {
  const pid = context.params.pid;
  let product_;
  const category = context.params.category;
  const products = await axios.get("https://api.escuelajs.co/api/v1/products");
  products.data.map((product) => {
    if (parseInt(product.id) === parseInt(pid)) {
      product_ = product;
    }
  });
  return {
    props: {
      product: product_,
      similar: products.data.slice(0, 6),
    },
  };
};
