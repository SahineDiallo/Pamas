import Head from "next/head";
import CarouselDiv from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Products from "../Components/Products/Products";
import { useDispatch } from "react-redux";
import {
  setCategories,
  setProducts,
  setWeekDeal,
} from "../store/slices/ProductSlice";
import { useEffect, useState } from "react";
import Footer from "../Components/Navbar/Footer/Footer";

export default function Home({ categories, products, weekDeal }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWeekDeal(weekDeal));
    dispatch(setProducts(products));
    dispatch(setCategories(categories));
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="E-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <CarouselDiv />
        <div className="products__container">
          <Products />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  var data = {};
  const cats = await axios.get("https://api.escuelajs.co/api/v1/categories");
  const prods = await axios.get("https://api.escuelajs.co/api/v1/products");

  cats.data.map((cat) => {
    const filtered_products = prods.data.filter(
      (product) => product.category.name === cat.name
    );
    const first_four = filtered_products.slice(0, 4);
    data[cat.name] = first_four;
    return data;
  });
  const weekDeal = data.Electronics[0];
  return {
    props: {
      categories: cats.data,
      products: data,
      weekDeal: weekDeal,
    },
  };
};
