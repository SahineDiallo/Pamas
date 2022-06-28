import React, { useEffect, useState } from "react";
import { Star } from "@styled-icons/heroicons-solid";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const sponsored = Math.random() > 0.5;
  const ratings = Math.floor(Math.random() * 5 + 1);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <>
      {!isSSR && (
        <div className="col mb-2">
          <Link
            href={`/category/${product.category.name.toLowerCase()}/${
              product.id
            }`}
          >
            <div className="card card-body border rounded-2  my-2 products h-100 w-100">
              <div className="d-flex align-items-start flex-md-column justify-content-center">
                <img
                  src={product.images[0]}
                  className=" m-md-auto w-md-100"
                  alt="product"
                />
                <div className="product__infos p-2 d-flex flex-column">
                  <div className="flex-grow-1">
                    {sponsored && (
                      <span className="text-uppercase d-block">SPONSORED</span>
                    )}
                    <small className="text-bolder product__title">
                      {product.title}
                    </small>
                    <div className="d-flex align-items-center gap-2">
                      {Array(ratings)
                        .fill()
                        .map((_, i) => (
                          <p key={i} className="ratings mb-1">
                            <Star className="star" />
                          </p>
                        ))}
                    </div>
                    <div className="product__seller">
                      <small className="seller__name">
                        Seller: {sponsored ? "Google" : "Apple"}
                      </small>
                    </div>
                  </div>
                  <div className="product__price">
                    <p>
                      <small className="fw-bolder h3">{product.price}</small>
                      <strong className="h6">MRU</strong>
                    </p>
                  </div>
                  {/* <div className="product__watch float-right">
                  <small className="watch">
                    Watch <Heart />
                  </small>
                </div> */}
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
