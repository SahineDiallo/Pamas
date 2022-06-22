import React from "react";
import { selectProducts } from "../../store/slices/ProductSlice";
import WeekDeal from "./WeekDeal";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";

const Products = () => {
  const products = useSelector(selectProducts);
  return (
    <div className="col p-3 d-flex flex-lg-row flex-column align-items-center justify-content-start">
      <WeekDeal />
      <ProductsByCategory>
        {Object.entries(products).map(
          (product) =>
            product && (
              <div
                className="card card-body border my-2 w-100"
                key={product[0]}
              >
                <h3>{product[0]}</h3>
                <div className="d-flex flex-column justify-content-center gap-3">
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <div>
                      <img src={product[1][0]?.images[0]} alt="" />
                      <span>{product[1][0].title}</span>
                    </div>

                    <div>
                      <img src={product[1][1]?.images[0]} alt="" />
                      <span>{product[1][1].title}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <div>
                      <img src={product[1][2]?.images[0]} alt="" />
                      <span>{product[1][2].title}</span>
                    </div>
                    <div>
                      <img src={product[1][3]?.images[0]} alt="" />
                      <span>{product[1][3].title}</span>
                    </div>
                  </div>
                </div>
                <Link
                  className="text-small my-3 "
                  href={{
                    pathname: `/categories/${product[0]}`,
                    // query: { slug: product[0] },
                  }}
                >
                  See More...
                </Link>
              </div>
            )
        )}
      </ProductsByCategory>
    </div>
  );
};

export default Products;

const ProductsByCategory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
