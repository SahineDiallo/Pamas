import Head from "next/head";
import CarouselDiv from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Products from "../Components/Products/Products";
import { useDispatch } from "react-redux";
import Link from "next/link";
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
      <main className="d-flex flex-column justify-content-center">
        <div className="home__banner">
          <div class="px-0 flex-column d-flex">
            <div class="banner__text">
              <h1 className="text-center p-3 fw-light">
                find thing you will love. Support indepedent Sellers. Only on
                Pamas
              </h1>
            </div>
            <div className="position-relative mb-5">
              <div className="position-absolute clearbg w-100"></div>
              <div className="home__categories pt-1 mx-0 row row-cols-3 row-cols-md-4 row-cols-lg-6  justify-content-center">
                {categories.map((cat) => (
                  <div class="cat col d-flex justify-content-center">
                    <div>
                      <Link href={`/categories/${cat?.name.toLowerCase()}`}>
                        <img
                          src={cat?.image}
                          alt=""
                          className="rounded-circle"
                        />
                      </Link>
                      <p className="text-center">{cat?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="products__container container-lg px-0 flex-grow-1">
          <Products />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
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
  const weekDeal = data.Shoes[0];
  return {
    props: {
      categories: cats.data,
      products: data,
      weekDeal: weekDeal,
    },
  };
};
