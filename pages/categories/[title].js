import axios from "axios";
import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import { Filter } from "@styled-icons/feather/Filter";
import SingleProduct from "../../Components/Products/SingleProduct";

const title = ({ category, products }) => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <h1>{category.name}</h1>
        <p>
          Re-Inspired Shirts. Storm Creek Eco-Woven Shirts work with your whole
          lifecycle - office to outdoors and everything in between. Amazing
          comfort, stretch, and detail, our woven shirts are a hit.
        </p>
      </div>
      <div className="p-2 d-block d-md-none">
        <button className="filter_btn w-100 p-2 text-center bg-transparent my-2">
          <Filter />
          Filter Options
        </button>
      </div>
      <div className="cat__products mx-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 p-2">
        {products.map((product) => (
          <SingleProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const categories = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  const paths = categories.data.map((category) => ({
    params: { title: category.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const title = context.params.title;
  const products = await axios.get("https://api.escuelajs.co/api/v1/products");
  const category_products = products.data.filter(
    (product) => product.category.name === title.toString()
  );

  const categories = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );

  const category = categories.data.filter(
    (cat) => cat.name === title.toString()
  );

  return {
    props: {
      category: category[0],
      products: category_products,
    },
  };
};

export default title;

const Banner = styled.div`
  background-image: linear-gradient(

`;
