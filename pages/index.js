import axios from "axios";
import Products from "../Components/Products/Products";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { setCategories, setProducts } from "../store/slices/ProductSlice";
import { useEffect } from "react";
import { getProviders } from "next-auth/react";

export default function Home({ categories, products, providers }) {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  useEffect(() => {
    dispatch(setProducts(products));
    dispatch(setCategories(categories));
  }, []);
  return (
    <div>
      <div className="home__banner">
        <div className="px-0 flex-column d-flex">
          <div className="banner__text">
            <h1 className="text-center p-3 fw-light">
              find things you will love. Support indepedent Sellers. Only on
              Pamas
            </h1>
          </div>
          <div className="position-relative mb-5">
            <div className="position-absolute clearbg w-100"></div>
            <div className="home__categories pt-1 mx-0 row row-cols-3 row-cols-md-4 row-cols-lg-6  justify-content-center">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="cat col d-flex justify-content-center"
                >
                  <div>
                    <Link href={`/categories/${cat?.name.toLowerCase()}`}>
                      <img src={cat?.image} alt="" className="rounded-circle" />
                    </Link>
                    <p className="text-center">{cat?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="products__container container-lg flex-grow-1">
        <Products />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  var data = {};
  const cats = await axios.get("https://api.escuelajs.co/api/v1/categories");
  const prods = await axios.get("https://api.escuelajs.co/api/v1/products");
  const test = await axios.get("http://localhost:3000/api/getProducts");
  cats.data.map((cat) => {
    const filtered_products = prods.data.filter(
      (product) => product.category.name === cat.name
    );
    const first_four = filtered_products.slice(0, 4);
    data[cat.name] = first_four;
    return data;
  });
  const providers = await getProviders();
  return {
    props: {
      categories: cats.data,
      products: data,
      test: test.data,
      providers,
    },
  };
};
