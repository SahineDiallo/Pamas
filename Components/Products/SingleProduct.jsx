import React, { useEffect, useState } from "react";
import { Star } from "@styled-icons/feather/Star";
import { Heart } from "@styled-icons/feather/Heart";

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
        <div className="col p-0">
          <div className="card card-body my-2 products h-100 w-100">
            <div className="d-flex align-items-start align-items-md-center flex-md-column justify-content-center">
              <img
                src={product.images[0]}
                className="rounded-circle m-md-auto"
                alt="product"
              />
              <div className="product__infos p-2">
                {sponsored && (
                  <small className="text-uppercase">SPONSORED</small>
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
                <div className="product__price">
                  <p>
                    <small className="fw-bolder h3">{product.price}</small>
                    <strong className="h6">MRU</strong>
                  </p>
                </div>
                <div className="product__watch float-right">
                  <small className="watch">
                    Watch <Heart />
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
