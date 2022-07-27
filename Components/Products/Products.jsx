import React from "react";
import { selectProducts } from "../../store/slices/ProductSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";

const Products = () => {
  const products = useSelector(selectProducts);
  return (
    <>
      <div className="py-5 px-2">
        <h3 className="ff-am position-relative">See Our Last Collection</h3>
        <div className="collections__parent px-lg-0">
          {Object.entries(products)
            .slice(0, 2)
            .map(
              (product, idx) =>
                product && (
                  <div className="last__collections" key={idx}>
                    <div className="main__img">
                      <img src={product[1][0]?.images[0]} alt="" />
                    </div>
                    <div className="secondary1">
                      <img src={product[1][1]?.images[0]} alt="" />
                    </div>
                    <div className="secondary2">
                      <img src={product[1][2]?.images[0]} alt="" />
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
      <div className="pb-5 px-2">
        <h3 className="ff-am position-relative">Shop By Trending & Category</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-4 row-cols-md-3">
          {Object.entries(products).map(
            (product, i) =>
              product && (
                <div className="col mb-3" key={i}>
                  <div className="card card-body products__parent">
                    <h3>{product[0]}</h3>
                    <div className="cat__products">
                      <div className="img1">
                        <img src={product[1][0]?.images[0]} alt="" />
                      </div>
                      <div className="img2">
                        <img src={product[1][1]?.images[0]} alt="" />
                      </div>
                      <div className="img3">
                        <img src={product[1][2]?.images[0]} alt="" />
                      </div>
                      <div className="img4">
                        <img src={product[1][3]?.images[0]} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Products;

const ProductsByCategory = styled.div`
  background: #fafafa;
  .card > div > .d-flex img {
    width: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: block;
  }
  .card > div > .d-flex > div span {
    font-size: 14px;
    padding: 10px;
  }
  .card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 10px;
  }
`;
